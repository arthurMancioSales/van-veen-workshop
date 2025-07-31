"use client";

import type React from "react";
import { useState } from "react";
import { Wizard } from "react-use-wizard";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { NewTicket } from "../types/tickets";

import NewTicketForm from "./newTicketForm";
import CheckoutStep from "./wizard/checkoutStep";
import ChoseProductStep from "./wizard/choseProductStep";
import StatusStep from "./wizard/statusStep";

export function NewTicketModal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [price, setPrice] = useState<number>(
    Number(process.env.NEXT_PUBLIC_SIMPLE_TICKET_PRICE),
  );
  const [paymentId, setPaymentId] = useState<number | null>(null);

  const [ticketData, setTicketData] = useState<NewTicket | null>(null);

  return (
    <Dialog
      modal
      open={open}
      onOpenChange={() => {
        if (!open) {
          setTicketData(null);
          setPaymentId(null);
          setPrice(Number(process.env.NEXT_PUBLIC_SIMPLE_TICKET_PRICE));
        }
        setOpen(!open);
      }}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="border-primary35 bg-background max-h-[80vh] overflow-y-scroll rounded-xl border p-6 sm:max-w-[475px] md:max-w-[70vw]">
        <DialogHeader className="text-center">
          <DialogTitle className="font-dm-sans mb-2 text-3xl font-bold">
            Reserve já o seu ingresso
          </DialogTitle>
          <DialogDescription className="text-lg">
            Escolha o produto, preencha os dados do ingresso e finalize a
            compra.
          </DialogDescription>
          <DialogClose />
        </DialogHeader>
        <Wizard>
          <ChoseProductStep setPrice={setPrice} />
          <NewTicketForm
            newTicketData={ticketData}
            setTicketData={setTicketData}
          />
          <CheckoutStep
            price={price}
            ticketData={ticketData}
            setPaymentId={setPaymentId}
          />
          <StatusStep paymentId={paymentId} setOpen={setOpen} />
        </Wizard>
      </DialogContent>
    </Dialog>
  );
}
