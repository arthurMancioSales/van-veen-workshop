import {
  CollectionReference,
  DocumentData,
  getDocs,
  or,
  query,
  where,
} from "@firebase/firestore";

import { HTTPResponse } from "../types";

export async function verifyExistingDoc(
  ref: CollectionReference<DocumentData, DocumentData>,
  phone: string,
  email: string,
) {
  try {
    const q = query(
      ref,
      or(
        where("phone", "==", phone.trim()),
        where("email", "==", email.trim()),
      ),
    );

    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      const response: HTTPResponse<undefined> = {
        status: 409,
        message: "Email ou telefone já utilizado",
        data: undefined,
        error: true,
      };
      return response;
    }

    return {
      status: 200,
      message: "Nenhum documento existente encontrado",
      data: undefined,
      error: false,
    };
  } catch (error) {
    const response: HTTPResponse<undefined> = {
      status: 500,
      message:
        "Error checking for existing document" +
        (error instanceof Error ? `: ${error.message}` : ""),
      error: true,
    };
    return response;
  }
}
