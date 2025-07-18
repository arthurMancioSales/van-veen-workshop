import { initMercadoPago, Payment } from "@mercadopago/sdk-react";
import { IPaymentBrickCustomization } from "@mercadopago/sdk-react/esm/bricks/payment/type";
initMercadoPago(process.env.NEXT_PUBLIC_MERCADO_PAGO_PUBLIC_KEY);

export default function PaymentModal() {
  const initialization = {
    amount: 100,
    preferenceId: "<PREFERENCE_ID>",
  };

  const customization: IPaymentBrickCustomization = {
    paymentMethods: {
      ticket: "all",
      bankTransfer: "all",
      creditCard: "all",
      prepaidCard: "all",
      debitCard: "all",
      mercadoPago: "all",
    },
  };

  const onSubmit = async () => {
    // callback chamado ao clicar no botão de submissão dos dados
  };

  const onError = async () => {
    // callback chamado para todos os casos de erro do Brick
  };

  const onReady = async () => {
    /*
   Callback chamado quando o Brick estiver pronto.
   Aqui você pode ocultar loadings do seu site, por exemplo.
 */
  };

  return (
    <div>
      <Payment
        initialization={initialization}
        customization={customization}
        onSubmit={onSubmit}
        onReady={onReady}
        onError={onError}
      />
    </div>
  );
}
