"use client";

import type React from "react";
import { useState } from "react";
import { Wizard } from "react-use-wizard";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import NewTicketForm from "./newTicketForm";
import ChoseProductStep from "./wizard/choseProductStep";

export function NewTicketModal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [price, setPrice] = useState(100); // Default price, can be updated based on product selection

  return (
    <Dialog modal open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[80vh] overflow-y-scroll rounded-xl border border-gray-700 bg-gray-900 p-6 text-gray-50 sm:max-w-[475px] md:max-w-[70vw]">
        <DialogHeader className="text-center">
          <DialogTitle className="mb-2 text-3xl font-bold text-white">
            Manifeste seu Interesse
          </DialogTitle>
          <DialogDescription className="text-lg text-gray-400">
            Entraremos em contato quando mais vagas estiverem disponíveis.
          </DialogDescription>
        </DialogHeader>
        <Wizard>
          <ChoseProductStep setPrice={setPrice} />
          <NewTicketForm setOpen={setOpen} price={price} />
        </Wizard>
      </DialogContent>
    </Dialog>
  );
}
