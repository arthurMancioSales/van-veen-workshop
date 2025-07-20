"use client";

import type React from "react";
import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import NewTicketForm from "./newTicketForm";

export function NewTicketModal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog modal open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[80vh] overflow-y-scroll rounded-xl border border-gray-700 bg-gray-900 p-6 text-gray-50 sm:max-w-[475px]">
        <DialogHeader className="text-center">
          <DialogTitle className="mb-2 text-3xl font-bold text-white">
            Manifeste seu Interesse
          </DialogTitle>
          <DialogDescription className="text-lg text-gray-400">
            Entraremos em contato quando mais vagas estiverem disponíveis.
          </DialogDescription>
        </DialogHeader>
        <NewTicketForm setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
}
