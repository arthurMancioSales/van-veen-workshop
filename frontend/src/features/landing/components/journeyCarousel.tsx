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

export default function JourneyCarousel() {
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
                  Mês 1: A Bússola Interna - Filosofia e Organização Pessoal
                </h3>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-3 pl-6 ">
                  <li>
                    <strong>Conteúdo Estratégico: </strong>
                    Apresentamos a metodologia Van Veen e a estrutura do sistema
                    de ensino internacional, usando princípios da filosofia
                    clássica para criar uma base sólida.
                  </li>
                  <li>
                    <strong>
                      Soft Skill Desenvolvida: Autoconhecimento e Autogestão.
                    </strong>
                    <ul className="list-disc space-y-2 pl-6 ">
                      <li>
                        <strong>Como? </strong> Através de reflexões guiadas e
                        ferramentas de organização, o aluno aprende a gerenciar
                        seu tempo, definir prioridades e entender seus próprios
                        valores. Esta é a base da
                        <strong> honestidade intelectual </strong>
                        que as universidades buscam.
                      </li>
                    </ul>
                  </li>
                </ul>
              </CardContent>
              <CardFooter />
            </Card>
          </CarouselItem>

          <CarouselItem className=" lg:basis-1/2">
            <Card className="border-secondary35 h-full">
              <CardHeader>
                <h3 className="font-dm-sans flex items-center gap-3 text-2xl font-bold ">
                  Mês 2: A Narrativa Pessoal - Cartas e Propósito de Vida
                </h3>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-3 pl-6 ">
                  <li>
                    <strong>Conteúdo Estratégico: </strong>
                    Mergulhamos na arte de construir Cartas de Motivação e
                    solicitar Cartas de Recomendação que contem uma história
                    coesa e poderosa.
                  </li>
                  <li>
                    <strong>
                      Soft Skill Desenvolvida: Criatividade e Storytelling.
                    </strong>
                    <ul className="list-disc space-y-2 pl-6 ">
                      <li>
                        <strong>Como? </strong> Em vez de apenas listar
                        conquistas, treinamos a<strong> criatividade </strong>
                        para conectar os pontos da vida do aluno em uma
                        narrativa de superação e propósito. É aqui que ele
                        aprende a arte da
                        <strong> influência social </strong>
                        através da escrita.
                      </li>
                    </ul>
                  </li>
                </ul>
              </CardContent>
              <CardFooter />
            </Card>
          </CarouselItem>

          <CarouselItem className=" lg:basis-1/2">
            <Card className="border-secondary35 h-full">
              <CardHeader>
                <h3 className="font-dm-sans flex items-center gap-3 text-2xl font-bold ">
                  Mês 3: A Expressão Autêntica - O Laboratório de Essays
                </h3>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-3 pl-6 ">
                  <li>
                    <strong>Conteúdo Estratégico: </strong>
                    Sessões práticas e intensivas para criar os ensaios
                    holísticos, a peça mais importante e pessoal da candidatura.
                  </li>
                  <li>
                    <strong>
                      Soft Skill Desenvolvida: Inteligência Emocional e
                      Comunicação Escrita.
                    </strong>
                    <ul className="list-disc space-y-2 pl-6 ">
                      <li>
                        <strong>Como? </strong> Ajudamos o aluno a acessar e
                        articular suas emoções e experiências de forma autêntica
                        e vulnerável, demonstrando a
                        <strong> maturidade e a profundidade </strong>
                        que os comitês de admissão (Seção: O Ponto de Partida -
                        Jornada 1) procuram.
                      </li>
                    </ul>
                  </li>
                </ul>
              </CardContent>
              <CardFooter />
            </Card>
          </CarouselItem>

          <CarouselItem className=" lg:basis-1/2">
            <Card className="border-secondary35 h-full">
              <CardHeader>
                <h3 className="font-dm-sans flex items-center gap-3 text-2xl font-bold ">
                  Mês 4: A Arquitetura do Futuro - College List e Planejamento
                </h3>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-3 pl-6 ">
                  <li>
                    <strong>Conteúdo Estratégico: </strong> Construção da lista
                    de universidades ideal e de um cronograma de ação detalhado,
                    usando ferramentas de organização e matrizes de decisão.
                  </li>
                  <li>
                    <strong>
                      Soft Skill Desenvolvida: Pensamento Crítico e Tomada de
                      Decisão.
                    </strong>
                    <ul className="list-disc space-y-2 pl-6 ">
                      <li>
                        <strong>Como? </strong> Ensinamos o aluno a
                        <strong> analisar variáveis </strong>
                        complexas (cultura da universidade, oportunidades, fit
                        pessoal) e a usar o<strong> pensamento crítico </strong>
                        para tomar decisões estratégicas, em vez de apenas
                        seguir rankings. É a aplicação prática de
                        <strong> metodologias ágeis </strong>
                        na vida pessoal.
                      </li>
                    </ul>
                  </li>
                </ul>
              </CardContent>
              <CardFooter />
            </Card>
          </CarouselItem>

          <CarouselItem className="lg:basis-1/2">
            <Card className="border-secondary35 h-full">
              <CardHeader>
                <h3 className="font-dm-sans flex items-center gap-3 text-2xl font-bold ">
                  Mês 5: A Conversa Decisiva - Domínio das Entrevistas
                </h3>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-3 pl-6 ">
                  <li>
                    <strong>Conteúdo Estratégico: </strong>
                    Treinamento teórico e prático para as entrevistas com as
                    bancas, que são semelhantes a entrevistas de emprego de alto
                    nível.
                  </li>
                  <li>
                    <strong>
                      Soft Skill Desenvolvida: Liderança e Comunicação
                      Interpessoal.
                    </strong>
                    <ul className="list-disc space-y-2 pl-6 ">
                      <li>
                        <strong>Como? </strong> Através de simulações e
                        role-playing, o aluno pratica como
                        <strong>
                          {" "}
                          comunicar sua visão pessoal com confiança,{" "}
                        </strong>
                        demonstrar
                        <strong> liderança </strong>
                        em suas respostas e alinhar sua motivação com o
                        propósito de vida, mesmo (Seção: O Ponto de Partida -
                        Jornada 1) sob pressão.
                      </li>
                    </ul>
                  </li>
                </ul>
              </CardContent>
              <CardFooter />
            </Card>
          </CarouselItem>

          <CarouselItem className="lg:basis-1/2">
            <Card className="border-secondary35 h-full">
              <CardHeader>
                <h3 className="font-dm-sans flex items-center gap-3 text-2xl font-bold ">
                  Mês 6: O Impacto Real - Projetos e Portfólio
                </h3>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-3 pl-6 ">
                  <li>
                    <strong>Conteúdo Estratégico: </strong>
                    Orientação para criar e executar trabalhos voluntários e
                    atividades extracurriculares que gerem impacto real e
                    construam um currículo robusto.
                  </li>
                  <li>
                    <strong>
                      Soft Skill Desenvolvida: Resiliência e Consciência Social.
                    </strong>
                    <ul className="list-disc space-y-2 pl-6 ">
                      <li>
                        <strong>Como? </strong> Incentivamos o aluno a sair da
                        zona de conforto,
                        <strong> empreender com um projeto próprio, </strong>
                        lidar com os desafios do mundo real
                        <strong> (resiliência) </strong>e demonstrar uma
                        <strong> consciência cívica e ecológica, </strong>
                        mostrando sua capacidade de contribuir para uma
                        comunidade.
                      </li>
                    </ul>
                  </li>
                </ul>
              </CardContent>
              <CardFooter />
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
