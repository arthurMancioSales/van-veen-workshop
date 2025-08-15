"use client";

import { useEffect, useState } from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function EducationFailsCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
        setApi={setApi}
      >
        <CarouselContent>
          <CarouselItem className=" lg:basis-1/2">
            <Card className="border-secondary35 h-full">
              <CardHeader>
                <h3 className="font-dm-sans flex items-center gap-3 text-2xl font-bold ">
                  Seu filho(a) estuda nas melhores escolas. Isso é o suficiente?
                </h3>
              </CardHeader>
              <CardContent>
                <p className="indent-4 leading-relaxed">
                  Você investe em uma educação de ponta, garantindo um futuro
                  brilhante. Mas o mundo mudou, e as regras para o sucesso
                  também.
                </p>
              </CardContent>
              <CardFooter />
            </Card>
          </CarouselItem>
          <CarouselItem className=" lg:basis-1/2">
            <Card className="border-secondary35 h-full">
              <CardHeader>
                <h3 className="font-dm-sans flex items-center gap-3 text-2xl font-bold ">
                  O que Harvard, Google e os Comitês de Admissão procuram?
                </h3>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="indent-4 leading-relaxed">
                  Ao estudar seus melhores líderes, o Google descobriu que as 7
                  qualidades mais importantes eram{" "}
                  <strong>habilidades humanas,</strong> competência técnica
                  ficou em último
                </p>
                <p className="indent-4 leading-relaxed">
                  Pesquisadores afirmam que a{" "}
                  <strong>Inteligência Emocional,</strong> que engloba{" "}
                  <strong>resiliência e autoconhecimento, </strong> é um
                  preditor de sucesso mais forte que o QI e expertise técnica em
                  cargos de liderança.
                </p>
                <p className="indent-4 leading-relaxed">
                  Afirmam consistentemente que, entre candidatos com notas
                  perfeitas, o principal diferenciador são as{" "}
                  <strong>qualidades pessoais: </strong>
                  caráter, propósito e a capacidade de contribuir com a
                  comunidade.
                </p>
              </CardContent>
              <CardFooter>
                <p className="text-accent indent-4 text-lg leading-relaxed font-bold">
                  Eles não buscam apenas os mais inteligentes. Buscam os mais
                  adaptáveis, colaborativos e resilientes.
                </p>
              </CardFooter>
            </Card>
          </CarouselItem>
          <CarouselItem className=" lg:basis-1/2">
            <Card className="border-secondary35 h-full">
              <CardHeader>
                <h3 className="font-dm-sans flex items-center gap-3 text-2xl font-bold ">
                  O Mercado de Trabalho já vive uma crise de habilidades.
                </h3>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="indent-4 leading-relaxed">
                  <strong>6 em cada 10 empresas</strong> já lutam para encontrar
                  talentos com habilidades (soft skills) necessárias.
                </p>
                <p className="indent-4 leading-relaxed">
                  O treinamento em
                  <strong> liderança e influência social </strong>é a
                  <strong> 3ª maior prioridade de investimento </strong>
                  das empresas para seus funcionários atuais. Elas estão pagando
                  para ensinar o que as escolas não ensinaram.
                </p>
                <p className="indent-4 leading-relaxed">
                  A confiança de que os jovens sairão preparados das escolas
                  está em
                  <strong> queda livre. </strong>O Fórum Econômico Mundial
                  projeta que o gap só
                  <strong> irá piorar nos próximos 5 anos.</strong>
                </p>
              </CardContent>
              <CardFooter>
                <p className="text-accent indent-4 text-lg leading-relaxed font-bold">
                  Fonte: Relatório &quot;Future of Jobs&quot;, Fórum Econômico
                  Mundial.
                </p>
              </CardFooter>
            </Card>
          </CarouselItem>
          <CarouselItem className=" lg:basis-1/2">
            <Card className="border-secondary35 h-full">
              <CardHeader>
                <h3 className="font-dm-sans flex items-center gap-3 text-2xl font-bold ">
                  Por que as escolas, mesmo as de elite, não conseguem
                  acompanhar?
                </h3>
              </CardHeader>
              <CardContent className="space-y-2">
                <ul className="list-disc space-y-3 pl-6 ">
                  <li>
                    <strong>Currículo Rígido: </strong> O foco absoluto em
                    vestibulares e exames padronizados consome todo o tempo e
                    energia, deixando pouco espaço para o desenvolvimento
                    humano.
                  </li>
                  <li>
                    <strong>Mudança Lenta: </strong> O mercado evolui em meses;
                    as escolas, em décadas. A mudança é burocrática e demorada.
                  </li>
                  <li>
                    <strong>Foco na Teoria: </strong> Ensinam &quot;o que
                    é&quot; pensamento crítico, mas não criam ambientes para
                    &quot;praticar&quot; a liderança e a resiliência sob
                    pressão.
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <p className="text-accent indent-4 text-lg leading-relaxed font-bold">
                  Esperar pela mudança do sistema educacional não é uma opção
                  para quem quer liderar o futuro.
                </p>
              </CardFooter>
            </Card>
          </CarouselItem>
          <CarouselItem className="lg:basis-1/2">
            <Card className="border-secondary35 h-full">
              <CardHeader>
                <h3 className="font-dm-sans flex items-center gap-3 text-2xl font-bold ">
                  A Preparação que Começa na Adolescência.
                </h3>
              </CardHeader>
              <CardContent>
                <p className="indent-4 leading-relaxed">
                  Enquanto o sistema se adapta, nós agimos. Nossa
                  <strong> Formação de Líderes Globais </strong>é o laboratório
                  prático projetado para
                  <strong> jovens de 14 a 17 anos, </strong>
                  preenchendo essa lacuna de forma imediata e personalizada.
                  <strong> Benefícios:</strong>
                </p>
                <ul className="list-disc space-y-3 pl-6 ">
                  <li>
                    <strong>Metodologia Aplicada: </strong>
                    Dinâmicas e projetos que simulam os desafios do mundo real.
                  </li>
                  <li>
                    <strong>Especialistas em Desenvolvimento Jovem: </strong>{" "}
                    Guiado por mentores com experiência em formar a próxima
                    geração.
                  </li>
                  <li>
                    <strong>Acompanhamento Individualizado: </strong> Para uma
                    transformação personalizada e real.
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <p className="text-accent text-lg leading-relaxed font-bold ">
                  Prepare seu filho(a) para o futuro, hoje. Clique no link da
                  bio e conheça a Jornada 1: Fundamentos da Liderança.
                </p>
              </CardFooter>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="translate-x-4 md:translate-x-0" />
        <CarouselNext className="-translate-x-4 md:translate-x-0" />
      </Carousel>
      <div className="text-muted-foreground py-2 text-center text-sm">
        {Array.from({ length: count }).map((_, index) => {
          const isActive = index + 1 === current;
          return (
            <span
              key={index}
              className={`border-secondary mx-1 inline-block size-3 rounded-full border  transition-colors ${
                isActive ? "bg-secondary" : "bg-transparent"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
