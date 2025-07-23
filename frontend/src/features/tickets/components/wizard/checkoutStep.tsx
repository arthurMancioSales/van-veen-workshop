import { initMercadoPago, Payment } from "@mercadopago/sdk-react";
import {
  IAdditionalCardFormData,
  IPaymentBrickCustomization,
  IPaymentFormData,
} from "@mercadopago/sdk-react/esm/bricks/payment/type";
import { IBrickError } from "@mercadopago/sdk-react/esm/bricks/util/types/common";
import { ChevronLeft } from "lucide-react";
import { useEffect, useMemo } from "react";
import { useWizard } from "react-use-wizard";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

import { newTicketApi } from "../../api/newTicketApi";
import { NewTicket } from "../../types/tickets";

export default function CheckoutStep({
  price,
  setOpen,
  ticketData,
}: {
  price: number;
  setOpen: (open: boolean) => void;
  ticketData: NewTicket;
}) {
  useEffect(() => {
    initMercadoPago(process.env.NEXT_PUBLIC_MERCADO_PAGO_TEST_PUBLIC_KEY || "");
  }, []);

  const wizardController = useWizard();

  const initialization = useMemo(
    () => ({
      amount: price,
      preferenceId: "your_preference_id_here",
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
        mercadoPago: "all",
      },
    }),
    [],
  );

  const onError = async (error: IBrickError) => {
    toast.error("Erro", {
      description: "Ocorreu um erro ao processar o pagamento.",
    });
    console.log(error);
  };

  return (
    <div>
      <Payment
        initialization={initialization}
        customization={customization}
        onSubmit={async (
          param: IPaymentFormData,
          param2?: IAdditionalCardFormData,
        ) => {
          console.log(param, param2);

          const { error } = await newTicketApi({
            ...param,
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
