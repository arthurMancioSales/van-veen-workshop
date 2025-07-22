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
      price: 100,
    },
    {
      id: "Ingresso VIP",
      name: "Produto 2",
      description: "Descrição do Produto 2",
      price: 200,
    },
  ];

  return (
    <>
      <div className="grid gap-6 py-4 md:grid-cols-2">
        {products.map((product) => (
          <Card
            key={product.id}
            className="flex cursor-pointer flex-col justify-between border border-gray-700 bg-gray-800 transition-all hover:border-purple-500"
            onClick={() => {
              setPrice(product.price);
              wizardController.nextStep();
            }}
          >
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-bold text-white">
                {product.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-base text-gray-300">{product.description}</p>
              <div className="text-3xl font-extrabold text-purple-400">
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(product.price)}
              </div>
              <Button className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-indigo-700 text-lg font-bold text-white shadow-lg transition-all hover:from-purple-700 hover:to-indigo-800">
                Selecionar
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <small className="pt-4 text-center text-sm text-gray-400">
        Ao selecionar, você será direcionado(a) para o formulário de pagamento.
      </small>
    </>
  );
}
