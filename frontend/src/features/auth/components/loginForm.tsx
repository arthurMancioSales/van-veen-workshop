"use client";
import { Form, Formik } from "formik";
import { Send } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  FormField,
  FormFieldError,
  FormFieldLabel,
  FormFieldRoot,
} from "@/components/ui/formField";

import { loginApi } from "../api/loginApi";
import { Login } from "../types/login";
import { loginValidationSchema } from "../validation/loginValidation";

export default function LoginForm() {
  const initialValues: Login = {
    password: "",
  };

  const router = useRouter();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginValidationSchema}
      onSubmit={async (values) => {
        const { error } = await loginApi({
          ...values,
        });

        if (error) {
          return toast.error("Erro", {
            description: error,
          });
        }

        toast.success("Sucesso", {
          description: "Login realizado com sucesso",
        });
        router.push("/dashboard");
        return;
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className="flex w-full flex-col gap-4">
          <div className="flex flex-1 flex-col">
            <FormFieldRoot className="w-full">
              <FormFieldLabel htmlFor="password" className="text-sm" required>
                Senha
              </FormFieldLabel>
              <FormField
                type="password"
                id="password"
                name="password"
                error={errors.password}
                touched={touched.password}
                required
                className="border-gray-700 bg-gray-800 text-gray-50 focus:border-purple-500 focus:ring-purple-500"
              />
              <FormFieldError
                error={errors.password as string}
                touched={!!touched.password}
              />
            </FormFieldRoot>
          </div>

          <div className="flex gap-4 self-end">
            <Button
              loading={isSubmitting}
              className="ml-auto w-fit"
              type="submit"
              variant="success"
              disabled={Object.keys(errors).length > 0}
            >
              <Send className="mr-2 h-4 w-4" />
              Enviar
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
