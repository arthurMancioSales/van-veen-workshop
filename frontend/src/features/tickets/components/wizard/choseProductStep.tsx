import { useWizard } from "react-use-wizard";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ChoseProductStep({
  setPrice,
}: {
  setPrice: (price: number) => void;
}) {
  const wizardController = useWizard();

  const products = [
    {
      id: "Ingresso Unitário",
      name: "Produto 1",
      description: "Descrição do Produto 1",
      price: Number(process.env.NEXT_PUBLIC_SIMPLE_TICKET_PRICE),
    },
    {
      id: "Ingresso VIP",
      name: "Produto 2",
      description: "Descrição do Produto 2",
      price: Number(process.env.NEXT_PUBLIC_VIP_TICKET_PRICE),
    },
  ];

  return (
    <>
      <div className="grid gap-6 py-4 md:grid-cols-2">
        {products.map((product) => (
          <Card
            key={product.id}
            className="border-secondary35 bg-secondary20 flex flex-col justify-between border transition-all"
          >
            <CardHeader className="pb-4">
              <CardTitle className="font-dm-sans text-2xl font-bold">
                {product.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-base">{product.description}</p>
              <div className="text-3xl font-extrabold ">
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(product.price)}
              </div>
              <Button
                onClick={() => {
                  setPrice(product.price);
                  wizardController.nextStep();
                }}
                className="bg-accent80 hover:bg-accent60 active:bg-accent-60 focus:bg-accent60 w-full cursor-pointer rounded-lg text-white transition-all hover:scale-105"
              >
                Selecionar
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <small className="pt-4 text-center text-sm ">
        Ao selecionar, você será direcionado(a) para o formulário de pagamento.
      </small>
    </>
  );
}
