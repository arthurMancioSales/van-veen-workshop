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

import NewLeadForm from "./newLeadForm";

export function NewLeadModal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog modal open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="border-primary35 bg-background max-h-[80vh] overflow-y-scroll rounded-xl border p-6 sm:max-w-[475px] md:max-w-[70vw]">
        <DialogHeader className="text-center">
          <DialogTitle className="font-dm-sans mb-2 text-3xl font-bold">
            Manifeste seu Interesse
          </DialogTitle>
          <DialogDescription className="text-lg">
            Entraremos em contato quando mais vagas estiverem disponíveis.
          </DialogDescription>
        </DialogHeader>
        <NewLeadForm setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
}
