import { initMercadoPago, Payment } from "@mercadopago/sdk-react";
import {
  IAdditionalCardFormData,
  IPaymentBrickCustomization,
  IPaymentFormData,
} from "@mercadopago/sdk-react/esm/bricks/payment/type";
import { ChevronLeft } from "lucide-react";
import { useEffect, useMemo } from "react";
import { useWizard } from "react-use-wizard";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

import { newTicketApi } from "../../api/newTicketApi";
import { NewTicket } from "../../types/tickets";

export default function CheckoutStep({
  price,
  ticketData,
  setPaymentId,
}: {
  price: number;
  ticketData: NewTicket;
  setPaymentId: (id: number) => void;
}) {
  useEffect(() => {
    initMercadoPago(process.env.NEXT_PUBLIC_MERCADO_PAGO_TEST_PUBLIC_KEY || "");
  }, []);

  const wizardController = useWizard();

  const initialization = useMemo(
    () => ({
      amount: price,
      preferenceId:
        price === Number(process.env.NEXT_PUBLIC_SIMPLE_TICKET_PRICE)
          ? process.env.NEXT_PUBLIC_REFERENCE_ID_SIMPLE_TICKET
          : process.env.NEXT_PUBLIC_REFERENCE_ID_VIP_TICKET,
    }),
    [price],
  );

  const customization: IPaymentBrickCustomization = useMemo(
    () => ({
      paymentMethods: {
        ticket: "all",
        bankTransfer: "all",
        creditCard: "all",
        prepaidCard: "all",
        debitCard: "all",
        maxInstallments: 12,
        minInstallments: 1,
      },
      visual: {
        style: {
          theme: "dark",
        },
      },
    }),
    [],
  );

  const onError = async () => {
    toast.error("Erro", {
      description: "Ocorreu um erro ao processar o pagamento.",
    });
  };

  return (
    <div className="flex w-full flex-col gap-4">
      <Payment
        initialization={initialization}
        customization={customization}
        onSubmit={async (
          param: IPaymentFormData,
          param2: IAdditionalCardFormData,
        ) => {
          const { data, error } = await newTicketApi({
            ...param,
            ...param2,
            ...ticketData,
          });

          if (error) {
            return toast.error("Erro", {
              description: error,
            });
          }

          toast.success("Sucesso", {
            description: "Formulário enviado com sucesso",
          });

          setPaymentId(data);
          wizardController.nextStep();

          return;
        }}
        onError={onError}
      />
      <div className="flex w-full justify-between gap-4 self-end">
        <Button
          variant="ghost"
          onClick={() => wizardController.previousStep()}
          className="mr-auto w-fit"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Voltar
        </Button>
      </div>
    </div>
  );
}
