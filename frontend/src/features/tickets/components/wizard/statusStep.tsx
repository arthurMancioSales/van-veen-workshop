import { initMercadoPago, StatusScreen } from "@mercadopago/sdk-react";
import {
  IStatusScreenBrickCustomization,
  IStatusScreenBrickInitialization,
} from "@mercadopago/sdk-react/esm/bricks/statusScreen/types";
import { X } from "lucide-react";
import { useEffect, useMemo } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export default function StatusStep({
  paymentId,
  setOpen,
}: {
  paymentId: number;
  setOpen: (open: boolean) => void;
}) {
  useEffect(() => {
    initMercadoPago(process.env.NEXT_PUBLIC_MERCADO_PAGO_TEST_PUBLIC_KEY || "");
  }, []);

  const initialization: IStatusScreenBrickInitialization = useMemo(
    () => ({
      paymentId: `${paymentId}`, // id do pagamento a ser mostrado
    }),
    [paymentId],
  );

  const customization: IStatusScreenBrickCustomization = useMemo(() => {
    return {
      visual: {
        style: {
          theme: "dark",
        },
      },
    };
  }, []);

  const onError = async () => {
    toast.error("Erro", {
      description: "Ocorreu um erro ao processar o status do pagamento.",
    });
  };

  return (
    <div className="flex w-full flex-col gap-4">
      <StatusScreen
        initialization={initialization}
        customization={customization}
        onError={onError}
      />
      <div className="flex w-full justify-between gap-4 self-end">
        <Button
          variant="ghost"
          onClick={() => setOpen(false)}
          className="mr-auto w-fit"
        >
          <X className="mr-2 h-4 w-4" />
          Fechar
        </Button>
      </div>
    </div>
  );
}
