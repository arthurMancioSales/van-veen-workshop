"use client";

import {
  CalendarDays,
  Check,
  CheckCircle2,
  Clock,
  MapPin,
  Menu,
  Users,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import EducationFailsCarousel from "@/features/landing/components/educationFailsCarousel";
import JourneyCarousel from "@/features/landing/components/journeyCarousel";
import { NewLeadModal } from "@/features/leads/components/newLeadModal";

export default function Component() {
  const plansData = [
    {
      name: "Passaporte",
      benefits: {
        seminarios: true,
        preceptorias: true,
        feedbacks: true,
        analise: false,
        devolutiva: false,
        mentorias: false,
      },
      price: "6x R$ 1.500,00",
      altPrice: "(ou 12x R$ 870,00)",
      highlight: false,
    },
    {
      name: "Imersão",
      benefits: {
        seminarios: true,
        preceptorias: true,
        feedbacks: true,
        analise: true,
        devolutiva: true,
        mentorias: true,
      },
      price: "R$ 9.990,00",
      altPrice: "6x R$ 1.850,00 (ou 12x R$ 1.150,00)",
      highlight: false,
    },
    {
      name: "Pioneiro",
      benefits: {
        seminarios: true,
        preceptorias: true,
        feedbacks: true,
        analise: true,
        devolutiva: true,
        mentorias: true,
      },
      price: "R$ 8.800,00",
      altPrice: "(ou 6x R$ 1.580,00)",
      highlight: true,
      limitedSpots: "APENAS 10 VAGAS",
    },
  ];
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="flex min-h-dvh flex-col font-sans ">
      <header className="bg-background fixed top-0 right-0 left-0 z-50 ml-2 p-4 md:ml-8 lg:ml-12">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-foreground text-lg font-bold md:text-xl">
            Formação de Líderes Globais
          </div>

          <Sheet open={isNavOpen} onOpenChange={setIsNavOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground hover:bg-white/10"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] p-2 md:w-[300px]">
              <SheetHeader>
                <SheetTitle className="font-dm-sans">
                  Menu de Navegação
                </SheetTitle>
              </SheetHeader>
              <nav className="md:max-h-auto max-h-[90vh] space-y-1 overflow-y-scroll md:overflow-auto">
                <a
                  href="#hero"
                  className="block rounded-lg px-4 py-2 text-lg font-medium text-[#1b0404] transition-colors hover:bg-[#7f2ba6]/10"
                  onClick={() => setIsNavOpen(false)}
                >
                  Início
                </a>
                <Link
                  href="#founders"
                  className="block rounded-lg px-4 py-2 text-lg font-medium text-[#1b0404] transition-colors hover:bg-[#7f2ba6]/10"
                  onClick={() => {
                    setIsNavOpen(false);
                  }}
                >
                  Fundadores
                </Link>
                <a
                  href="#blind-spot"
                  className="block rounded-lg px-4 py-2 text-lg font-medium text-[#1b0404] transition-colors hover:bg-[#7f2ba6]/10"
                  onClick={() => setIsNavOpen(false)}
                >
                  Ponto Cego
                </a>
                <a
                  href="#global-leaders"
                  className="block rounded-lg px-4 py-2 text-lg font-medium text-[#1b0404] transition-colors hover:bg-[#7f2ba6]/10"
                  onClick={() => setIsNavOpen(false)}
                >
                  Formação de Líderes Globais
                </a>
                <a
                  href="#philosophy"
                  className="block rounded-lg px-4 py-2 text-lg font-medium text-[#1b0404] transition-colors hover:bg-[#7f2ba6]/10"
                  onClick={() => setIsNavOpen(false)}
                >
                  Nossa Filosofia
                </a>
                <a
                  href="#journey-1"
                  className="block rounded-lg px-4 py-2 text-lg font-medium text-[#1b0404] transition-colors hover:bg-[#7f2ba6]/10"
                  onClick={() => setIsNavOpen(false)}
                >
                  Jornada 1: Fundamentos do Líder Global
                </a>
                <a
                  href="#investment-plans"
                  className="block rounded-lg px-4 py-2 text-lg font-medium text-[#1b0404] transition-colors hover:bg-[#7f2ba6]/10"
                  onClick={() => setIsNavOpen(false)}
                >
                  Planos de Investimento
                </a>
                <a
                  href="#pioneering-opportunity"
                  className="block rounded-lg px-4 py-2 text-lg font-medium text-[#1b0404] transition-colors hover:bg-[#7f2ba6]/10"
                  onClick={() => setIsNavOpen(false)}
                >
                  Torne-se um Pioneiro
                </a>
                <a
                  href="#plans-comparison"
                  className="block rounded-lg px-4 py-2 text-lg font-medium text-[#1b0404] transition-colors hover:bg-[#7f2ba6]/10"
                  onClick={() => setIsNavOpen(false)}
                >
                  Comparação de Planos
                </a>
                <a
                  href="#event-details"
                  className="block rounded-lg px-4 py-2 text-lg font-medium text-[#1b0404] transition-colors hover:bg-[#7f2ba6]/10"
                  onClick={() => setIsNavOpen(false)}
                >
                  Detalhes do Evento
                </a>
              </nav>
              <div className="border-t p-4">
                <a href="#subscribe" onClick={() => setIsNavOpen(false)}>
                  <Button
                    className="w-full bg-[#fad262] font-semibold text-[#1b0404] hover:bg-[#fad262]/90"
                    onClick={() => setIsNavOpen(false)}
                  >
                    Inscreva-se Agora
                  </Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="bg-background relative mt-[72px] ml-2 flex-1 overflow-clip md:mt-0  md:ml-8 lg:ml-12">
        {/* Seção Herói */}
        <section
          id="hero"
          className="flex w-full items-center justify-start overflow-y-visible px-4 pt-8 pb-36 text-center md:w-4/5 md:px-14 md:pt-10 lg:pt-18"
        >
          <div className="pointer-events-none absolute inset-0 top-0 z-0 max-h-screen bg-[url('/images/be-kind-logo.svg')] bg-contain bg-no-repeat opacity-10 md:translate-x-1/2 md:opacity-40 lg:translate-x-2/3 lg:translate-y-1/12" />
          <div className="z-10 max-w-5xl space-y-8">
            <div className="flex flex-col items-center md:items-start">
              <h1 className="font-dm-sans text-2xl leading-tight font-bold tracking-tight sm:text-3xl md:text-left md:text-4xl lg:text-6xl">
                Não Apenas Entre na Melhor Universidade. Prepare-se para Liderar
                Nela.
              </h1>
            </div>
            <div className="mb-12 max-w-3xl text-left">
              <p className="text-lg leading-relaxed opacity-90 md:text-xl">
                Apresentamos a <strong>Formação de Líderes Globais</strong>: uma
                jornada de formação inédita, nascida da união estratégica entre
                o <strong>Instituto Van Veen</strong> e a{" "}
                <strong>Be Kind</strong>. Integramos a mais alta expertise em
                admissões e bolsas de estudo para as universidades mais
                competitivas do mundo com o desenvolvimento profundo das soft
                skills que essas mesmas instituições — e o mercado de trabalho
                global — realmente exigem.
              </p>
            </div>
            {/* <div className="relative flex aspect-video max-w-4xl items-center justify-center overflow-hidden rounded-xl border md:w-4/5 ">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=example" // Substitua por um URL de vídeo real
                title="Vídeo da Palestra"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute top-0 left-0 h-full w-full"
              />
            </div> */}
            <div className="flex flex-col justify-center gap-2 md:w-4/5 ">
              <Link href="#subscribe">
                <Button
                  variant="default"
                  className="font-dm-sans inline-flex h-14 w-full transform items-center justify-center rounded-full px-10 text-lg font-bold opacity-100 shadow-lg transition-all hover:scale-105 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  GARANTA A VAGA AGORA
                </Button>
              </Link>
              <p className="font-dm-sans text-accent mt-2 text-sm font-medium uppercase">
                Vagas limitadas para turmas fechadas. Inscrições abertas.
              </p>
            </div>
          </div>
        </section>

        <section
          id="founders"
          className="bg-secondary10 w-full px-4 py-16 md:px-14 md:py-28 lg:py-36"
        >
          <div className="container mx-auto max-w-5xl space-y-8 px-4 md:px-6">
            <h2 className="font-dm-sans text-center text-3xl leading-tight font-bold tracking-tight sm:text-4xl md:text-5xl">
              Criado e Guiado Pessoalmente Por:
            </h2>
            <div className="mx-auto grid max-w-3xl gap-8 md:grid-cols-3">
              {/* Nicolas Van Veen */}
              <div className="flex flex-col items-center">
                <Avatar className="mb-4 h-24 w-24">
                  <AvatarImage
                    src="/images/nicolas.jpeg"
                    alt="Nicolas Van Veen"
                  />
                  <AvatarFallback className="bg-primary/60 text-xl font-semibold ">
                    NV
                  </AvatarFallback>
                </Avatar>
                <h4 className="text-lg font-semibold">Nicolas Van Veen</h4>
                <h5 className="text-sm opacity-75">
                  Fundador, Instituto Van Veen
                </h5>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-secondary/60 hover:bg-secondary/10 hover:text-secondary text-foreground"
                    >
                      Mais Informações
                    </Button>
                  </SheetTrigger>
                  <SheetContent className="w-[400px] sm:w-[540px]">
                    <SheetHeader>
                      <div className="flex items-center gap-4">
                        <Avatar className="h-16 w-16">
                          <AvatarImage
                            src="/images/nicolas.jpeg"
                            alt="Nicolas Van Veen"
                          />
                          <AvatarFallback className="bg-primary/60 text-xl font-semibold ">
                            NV
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <SheetTitle className="text-xl">
                            Nicolas Van Veen
                          </SheetTitle>
                          <SheetDescription className="text-base">
                            Fundador, Instituto Van Veen
                          </SheetDescription>
                        </div>
                      </div>
                    </SheetHeader>

                    <div className="space-y-6 p-4 pt-0">
                      <h4 className="mb-2 font-semibold">Sobre</h4>
                      <div className="max-h-[75vh] overflow-y-scroll">
                        <small className="text-muted-foreground text-base leading-relaxed">
                          Nicolas Van Veen tem uma formação multifacetada.
                          Membro da Sociedade Real de História, da Biblical
                          Archeology Society (EUA) e da Sociedade Brasileira de
                          Teoria da História e Historiografia, com sede em Ouro
                          Preto, Minas Gerais. Com formação em história, com
                          ênfase em história antiga e medieval, possui cursos em
                          Metodologia da Pesquisa Científica pelo Instituto
                          Federal de Minas Gerais, Metodologia Científica pelo
                          Instituto Federal do Rio Grande do Sul e Filosofia da
                          Ciência e Teoria do Conhecimento pela Universidade
                          Santo Amaro. Nicolas, no entanto, gosta de salientar
                          que sua formação mais importante está em ser o segundo
                          discípulo do Mestre Lee Won Wah, formado pelo
                          Instituto Yau Man de Wu Shu de Artes Marciais e
                          Cultura Chinesa em 1992, com sede em São José dos
                          Campos, São Paulo. Nicolas Van Veen trabalhou como
                          colaborador no British Council e na Macmillan do
                          Brasil e também colaborou com a NUFFIC NESO Brazil
                          (órgão do governo holandês para o ensino superior).
                          Ministrou palestras sobre educação internacional em
                          universidades como UEPB, UNICAMP e UNESP. É fundador
                          do Instituto Van Veen em 2012 e já ajudou mais de 250
                          alunos em aprovações com bolsas de estudos em
                          universidades internacionais.
                        </small>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>

              {/* Lilian Macri */}
              <div className="flex flex-col items-center">
                <Avatar className="mb-4 h-24 w-24">
                  <AvatarImage
                    src="/images/lilian-macri.jpeg"
                    alt="Lilian Macri"
                  />
                  <AvatarFallback className="bg-primary/60 text-xl font-semibold ">
                    LM
                  </AvatarFallback>
                </Avatar>
                <h4 className="text-lg font-semibold">Lilian Macri</h4>
                <h5 className="text-sm opacity-75">Fundadora, Be Kind</h5>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-secondary/60 hover:bg-secondary/10 hover:text-secondary text-foreground"
                    >
                      Mais Informações
                    </Button>
                  </SheetTrigger>
                  <SheetContent className="w-[400px] sm:w-[540px]">
                    <SheetHeader>
                      <div className="flex items-center gap-4">
                        <Avatar className="h-16 w-16">
                          <AvatarImage
                            src="/images/lilian-macri.jpeg"
                            alt="Lilian Macri"
                          />
                          <AvatarFallback className="bg-primary/60 text-xl font-semibold ">
                            LM
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <SheetTitle className="text-xl">
                            Lilian Macri
                          </SheetTitle>
                          <SheetDescription className="text-base">
                            Fundadora, Be Kind
                          </SheetDescription>
                        </div>
                      </div>
                    </SheetHeader>

                    <div className="space-y-6 p-4 pt-0">
                      <h4 className="mb-2 font-semibold">Sobre</h4>
                      <div className="max-h-[75vh] overflow-y-scroll">
                        <small className="text-muted-foreground text-base leading-relaxed">
                          Lilian Rosa Daher Macri é mãe da Yasmin, de 22 anos, e
                          do Giuseppe, de 15. Médica pela UNITAU, mestre em
                          Desenvolvimento Humano, educadora em sexualidade pelo
                          UNISAL e terapeuta sexual pela USP e SBRASH, é também
                          facilitadora apaixonada por ajudar adolescentes a
                          descobrirem e desenvolverem todo o seu potencial.
                          Especialista em Bullyying e com ampla experiência em
                          formação de professores, mediação de conflitos
                          escolares e treinamentos de soft skills, Lilian cria
                          experiências de aprendizado dinâmicas, práticas e
                          conectadas à vida real. Tem se dedicado a preparar
                          adolescentes a conquistar espaço no mercado de
                          trabalho global, com foco em competências como
                          liderança, comunicação, gestão do tempo e inteligência
                          emocional
                        </small>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>

              {/* Lilian Paula Mônaco */}
              <div className="flex flex-col items-center">
                <Avatar className="mb-4 h-24 w-24">
                  <AvatarImage
                    src="/images/lilian-monaco.jpeg"
                    alt="Lilian Paula Mônaco"
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-primary/60 text-xl font-semibold ">
                    LP
                  </AvatarFallback>
                </Avatar>
                <h4 className="text-lg font-semibold">Lilian Paula Mônaco</h4>
                <h5 className="text-sm opacity-75">Fundadora, Be Kind</h5>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button
                      disabled
                      variant="outline"
                      size="sm"
                      className="border-secondary/60 hover:bg-secondary/10 hover:text-secondary text-foreground"
                    >
                      Mais Informações
                    </Button>
                  </SheetTrigger>
                  <SheetContent className="w-[400px] sm:w-[540px]">
                    <SheetHeader>
                      <div className="flex items-center gap-4">
                        <Avatar className="h-16 w-16">
                          <AvatarImage
                            src="/images/lilian-monaco.jpeg"
                            alt="Lilian Paula Mônaco"
                          />
                          <AvatarFallback className="bg-primary/60 text-xl font-semibold ">
                            LP
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <SheetTitle className="text-xl">
                            Lilian Paula Mônaco
                          </SheetTitle>
                          <SheetDescription className="text-base">
                            Fundadora, Be Kind
                          </SheetDescription>
                        </div>
                      </div>
                    </SheetHeader>

                    <div className="space-y-6 p-4 pt-0">
                      <h4 className="mb-2 font-semibold">Sobre</h4>
                      <div className="max-h-[75vh] overflow-y-scroll">
                        <small className="text-muted-foreground text-base leading-relaxed" />
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 2: O Ponto Cego da Educação de Elite */}
        <section
          id="blind-spot"
          className="w-full px-4 py-16 md:px-14 md:py-28 lg:py-36"
        >
          <div className="container mx-auto flex max-w-5xl flex-col items-center px-4 md:px-6">
            <div className="mb-12 flex flex-col items-center space-y-8 text-center">
              <h2 className="font-dm-sans text-3xl leading-tight font-bold tracking-tight  sm:text-4xl md:text-5xl">
                O Ponto Cego da Educação:
                <br />O Que as Notas Mais Altas Não Conseguem Medir
              </h2>
            </div>

            <div className="w-full">
              <EducationFailsCarousel />
            </div>
          </div>
        </section>

        {/* Seção 3: "Apresentando a Formação de Líderes Globais" */}
        <section
          id="global-leaders"
          className="bg-secondary10 w-full px-4 py-16 md:px-14 md:py-28 lg:py-36"
        >
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="mb-12 flex flex-col items-center space-y-8 text-center">
              <h2 className="font-dm-sans text-3xl leading-tight font-bold tracking-tight  sm:text-4xl md:text-5xl">
                Apresentando a Formação de Líderes Globais
              </h2>
              <p className="max-w-[800px] leading-relaxed  md:text-lg">
                A <strong> Jornada 1 </strong>é a imersão fundamental de 6 meses
                que constrói o alicerce para uma candidatura de sucesso e uma
                vida de impacto. Em cada etapa, nós integramos o desenvolvimento
                de uma
                <strong> competência comportamental de elite </strong>
                com a<strong> aplicação estratégica </strong>
                no processo de admissão.
              </p>
              <p className="max-w-[800px] leading-relaxed  md:text-lg">
                Não apenas ensinamos o &quot;o quê&quot;, nós desenvolvemos
                &quot;quem&quot; seu filho(a) precisa se tornar.
              </p>
            </div>
          </div>
        </section>

        {/* Seção 4:  "Nossa Filosofia: Formando o Ser Humano por Trás da Candidatura" */}
        <section
          id="philosophy"
          className="w-full px-4 py-16 md:px-14 md:py-28 lg:py-36"
        >
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="mb-12 flex flex-col items-center space-y-8 text-center">
              <h2 className="font-dm-sans text-3xl leading-tight font-bold tracking-tight  sm:text-4xl md:text-5xl">
                Nossa Filosofia: Formando o Ser Humano por Trás da Candidatura
              </h2>
              <div className="max-w-[800px] space-y-4">
                <p className=" leading-relaxed  md:text-lg">
                  As universidades de elite não perguntam apenas &ldquo;O que
                  você sabe?&rdquo;, mas, fundamentalmente,
                  <strong> &ldquo;Quem é você?&rdquo;. </strong>
                  Elas buscam jovens capazes de pensar com profundidade, agir
                  com responsabilidade e viver com coragem.
                </p>
                <p className="leading-relaxed  md:text-lg">
                  Enquanto a maioria das preparações foca em estratégias
                  superficiais para &ldquo;parecer&rdquo; o candidato ideal, nós
                  acreditamos que uma candidatura extraordinária não é
                  construída, ela é a
                  <strong>
                    {" "}
                    expressão autêntica de um ser humano em formação.
                  </strong>
                </p>
                <p className="leading-relaxed  md:text-lg">
                  É por isso que nossa metodologia é profundamente humanista e
                  inspirada nos clássicos. Não começamos pela redação da
                  <i> essay, </i>
                  começamos pela formação da pessoa.
                </p>
                <p className="leading-relaxed  md:text-lg">
                  <strong>
                    Primeiro, mergulhamos na fundação do pensamento:{" "}
                  </strong>
                  através da
                  <strong> filosofia, lógica e retórica, </strong>
                  ensinamos seu filho(a) não o que pensar, mas como pensar com
                  clareza, coerência e honestidade intelectual.
                </p>
                <p className="leading-relaxed  md:text-lg">
                  <strong>Em seguida, construímos o propósito: </strong>
                  através da
                  <strong>
                    {" "}
                    autoconhecimento, do estudo da história e de práticas
                    formativas,{" "}
                  </strong>
                  o ajudamos a descobrir sua vocação, seus valores e a história
                  única que só ele pode contar.
                </p>
                <p className="leading-relaxed  md:text-lg">
                  Este processo é
                  <strong> profundamente individualizado, </strong>
                  respeitando a singularidade, o contexto familiar e o ritmo de
                  cada jovem.
                </p>
                <p className="leading-relaxed  md:text-lg">
                  O resultado final é uma candidatura que não é um
                  &ldquo;produto&rdquo; montado para impressionar. É o reflexo
                  genuíno de um jovem que tem algo de valor a dizer ao mundo e
                  que está preparado não a penas para ser admitido, mas para ser
                  uma
                  <strong> boa influência no tempo em que vive.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 5: Seção "A Jornada 1 em Detalhes" (O Produto Concreto e Imediato) */}
        <section
          id="journey-1"
          className="bg-secondary10 w-full px-4 py-16 md:px-14 md:py-28 lg:py-36"
        >
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="mb-12 flex flex-col items-center space-y-8 text-center">
              <h2 className="font-dm-sans text-3xl leading-tight font-bold tracking-tight  sm:text-4xl md:text-5xl">
                Tudo Começa Aqui: Jornada 1 <br /> Fundamentos do Líder Global:
                Propósito e Estratégia
              </h2>
            </div>
            <div className="hidden gap-12 py-12 md:grid md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-secondary35">
                <CardHeader>
                  <h3 className="font-dm-sans flex items-center gap-3 text-2xl font-bold ">
                    Mês 1: A Bússola Interna - Filosofia e Organização Pessoal
                  </h3>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc space-y-3 pl-6 ">
                    <li>
                      <strong>Conteúdo Estratégico: </strong>
                      Apresentamos a metodologia Van Veen e a estrutura do
                      sistema de ensino internacional, usando princípios da
                      filosofia clássica para criar uma base sólida.
                    </li>
                    <li>
                      <strong>
                        Soft Skill Desenvolvida: Autoconhecimento e Autogestão.
                      </strong>
                      <ul className="list-disc space-y-2 pl-6 ">
                        <li>
                          <strong>Como? </strong> Através de reflexões guiadas e
                          ferramentas de organização, o aluno aprende a
                          gerenciar seu tempo, definir prioridades e entender
                          seus próprios valores. Esta é a base da
                          <strong> honestidade intelectual </strong>
                          que as universidades buscam.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter />
              </Card>

              <Card className="border-secondary35">
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

              <Card className="border-secondary35">
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
                      holísticos, a peça mais importante e pessoal da
                      candidatura.
                    </li>
                    <li>
                      <strong>
                        Soft Skill Desenvolvida: Inteligência Emocional e
                        Comunicação Escrita.
                      </strong>
                      <ul className="list-disc space-y-2 pl-6 ">
                        <li>
                          <strong>Como? </strong> Ajudamos o aluno a acessar e
                          articular suas emoções e experiências de forma
                          autêntica e vulnerável, demonstrando a
                          <strong> maturidade e a profundidade </strong>
                          que os comitês de admissão (Seção: O Ponto de Partida
                          - Jornada 1) procuram.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter />
              </Card>

              <Card className="border-secondary35">
                <CardHeader>
                  <h3 className="font-dm-sans flex items-center gap-3 text-2xl font-bold ">
                    Mês 4: A Arquitetura do Futuro - College List e Planejamento
                  </h3>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc space-y-3 pl-6 ">
                    <li>
                      <strong>Conteúdo Estratégico: </strong> Construção da
                      lista de universidades ideal e de um cronograma de ação
                      detalhado, usando ferramentas de organização e matrizes de
                      decisão.
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
                          pessoal) e a usar o
                          <strong> pensamento crítico </strong>
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

              <Card className="border-secondary35">
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
                      bancas, que são semelhantes a entrevistas de emprego de
                      alto nível.
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

              <Card className="border-secondary35">
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
                        Soft Skill Desenvolvida: Resiliência e Consciência
                        Social.
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
            </div>

            <div className="w-full md:hidden">
              <JourneyCarousel />
            </div>
          </div>
        </section>

        {/* Seção 6: Os Planos de Investimentos */}
        <section
          id="investment-plans"
          className="w-full px-4 py-16 md:px-14 md:py-28 lg:py-36"
        >
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="mb-12 flex flex-col items-center space-y-8 text-center">
              <h2 className="font-dm-sans text-3xl leading-tight font-bold tracking-tight  sm:text-4xl md:text-5xl">
                Planos de Investimento
              </h2>
            </div>
            <div className="grid gap-10 md:grid-cols-2">
              <Card className="border-primary35 bg-primary20">
                <CardHeader>
                  <h3 className="font-dm-sans flex items-center gap-3 text-2xl font-bold ">
                    PASSAPORTE DA JORNADA
                  </h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="leading-relaxed ">
                    O programa fundamental para o desenvolvimento completo em
                    grupo, com o diagnóstico inicial para guiar o aprendizado.
                  </p>
                  <div>
                    <p className="leading-relaxed font-bold">
                      O que está incluído:
                    </p>
                    <ul className="list-disc space-y-3 pl-6 ">
                      <li>
                        <strong>6 Seminários Presenciais </strong>
                        (24h de imersão)
                      </li>
                      <li>
                        <strong>12 Preceptorias Online em Grupo </strong>
                        (18h de aprofundamento)
                      </li>
                      <li>
                        <strong>6 Sessões de Feedback para os Pais </strong>
                        (6h de alinhamento)
                      </li>
                    </ul>
                  </div>
                  <div className="text-accent text-lg">
                    <p className="leading-relaxed font-bold">
                      Opções de Investimento:{" "}
                    </p>
                    <ul className="list-disc space-y-3 pl-6 ">
                      <li>
                        <strong>Assinatura mensal de R$ 1.500,00. </strong>
                      </li>
                      <li>
                        <strong>Parcelado: </strong> em 12x de R$ 870,00 no
                        cartão. (Total a prazo: R$ 10.440,00)
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary35 bg-primary20">
                <CardHeader>
                  <h3 className="font-dm-sans flex items-center gap-3 text-2xl font-bold ">
                    IMERSÃO DO LÍDER GLOBAL
                  </h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="leading-relaxed ">
                    A experiência de elite, que une a força do grupo com a
                    precisão da mentoria individual para uma transformação
                    acelerada e profunda.
                  </p>
                  <div>
                    <p className="leading-relaxed font-bold">
                      O que está incluído:
                    </p>
                    <ul className="list-disc space-y-3 pl-6 ">
                      <li>
                        <strong>Tudo do plano “Passaporte da Jornada”</strong>
                      </li>
                      <li>
                        <strong>Análise de Perfil Comportamental </strong>+
                        Relatório Personalizado
                      </li>
                      <li>
                        <strong>Devolutiva Individual do Relatório </strong>com
                        especialista
                      </li>
                      <li>
                        Elaboração do{" "}
                        <strong>
                          Plano de Desenvolvimento Individual (PDI)
                        </strong>
                      </li>
                      <li>
                        <strong>
                          2 Sessões de Mentoria Individual (1h cada)
                        </strong>
                      </li>
                    </ul>
                  </div>
                  <div className="text-accent text-lg">
                    <p className="leading-relaxed font-bold">
                      Opções de Investimento:{" "}
                    </p>
                    <ul className="list-disc space-y-3 pl-6 ">
                      <li>
                        <strong>Assinatura mensal de R$ 1.850,00. </strong>
                        (O mais alto nível de preparação com acompanhamento
                        premium)
                      </li>
                      <li>
                        <strong>Parcelado: </strong>
                        em 12x de R$ 1.150,00 no cartão. (Total a prazo: R$
                        13.800,00)
                      </li>
                      <li>
                        <strong>
                          🔥 OFERTA ESPECIAL PARA PAGAMENTO À VISTA 🔥 <br /> R$
                          9.990,00
                        </strong>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="mt-16 space-y-6 text-center">
              <h3 className="font-dm-sans text-4xl font-bold ">
                Por que essa combinação é essencial?
              </h3>
              <p className="mx-auto max-w-[800px] leading-relaxed  md:text-lg">
                Enquanto o Instituto Van Veen prepara o aluno para vencer as
                etapas acadêmicas e burocráticas do ingresso em universidades
                internacionais, a Be Kind potencializa seu desenvolvimento
                pessoal, garantindo que ele não apenas entre, mas se destaque e
                lidere no ambiente multicultural e competitivo do exterior.
              </p>
              <p className="text-accent mx-auto max-w-[800px] leading-relaxed font-bold  md:text-xl">
                Juntas, essas duas abordagens garantem uma preparação completa —
                técnica e humana — para que seu filho(a) se torne um líder
                global preparado para os desafios do século XXI.
              </p>
            </div>
          </div>
        </section>

        {/* Seção 7: Oportunidade única - Tornar-se um Pioneiro */}
        <section
          id="pioneering-opportunity"
          className="bg-secondary10 w-full px-4 py-16 md:px-14 md:py-28 lg:py-36"
        >
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="mb-12 flex flex-col items-center space-y-8 text-center">
              <h2 className="font-dm-sans text-3xl leading-tight font-bold tracking-tight  sm:text-4xl md:text-5xl">
                🔥Oportunidade Única: Seja um Pioneiro!🔥
              </h2>
              <p className="max-w-[800px] leading-relaxed  md:text-lg">
                Para celebrar a nossa turma inaugural, criamos o
                <strong> Acesso Pioneiro, </strong>
                disponível apenas para as
                <strong> 10 primeiras matrículas.</strong>
              </p>
              <p className="max-w-[800px] leading-relaxed  md:text-lg">
                Garanta a experiência
                <strong> “Imersão do Líder Global”, </strong>
                nosso programa mais completo, pelo valor especial de fundação. É
                a nossa forma de agradecer por acreditar e embarcar nesta
                jornada conosco desde o início.
              </p>
              <p className="max-w-[800px] leading-relaxed  md:text-lg">
                É o nosso melhor produto, com o nosso maior desconto.
              </p>

              <p className="text-accent max-w-[800px]  text-3xl leading-relaxed">
                <strong>
                  Investimento Especial: <br /> Pagamento único de R$ 8.800,00.
                </strong>
                <br />
                <small className="text-base">
                  (Pode ser parcelado em 6x R$ 1.580,00 no cartão)
                </small>
              </p>
            </div>
          </div>
        </section>

        {/* Seção 8: Tabela com o comparativo dos Planos */}
        <section
          id="plans-comparison"
          className="w-full px-4 py-16 md:px-14 md:py-28 lg:py-36"
        >
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="mb-12 flex flex-col items-center space-y-8 text-center">
              <h2 className="font-dm-sans text-3xl leading-tight font-bold tracking-tight  sm:text-4xl md:text-5xl">
                Ainda em dúvida? Veja um resumo comparativo:
              </h2>

              <div className="hidden md:block">
                <div className="bg-[#f6f6f6] py-16 lg:py-24">
                  <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-6xl">
                      <div className="mb-12 text-center">
                        <h2 className="text-foreground mb-4 text-3xl font-bold md:text-4xl">
                          Escolha Seu{" "}
                          <span className="text-accent">Plano de Formação</span>
                        </h2>
                        <p className="text-foreground/70 mx-auto max-w-2xl text-lg">
                          Compare os benefícios de cada modalidade e encontre a
                          opção ideal para sua jornada de desenvolvimento.
                        </p>
                      </div>

                      {/* Plans Table */}
                      <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
                        {/* Table Header */}
                        <div className="bg-accent grid grid-cols-4 text-white">
                          <div className="p-6 text-lg font-semibold">
                            Benefícios
                          </div>
                          {plansData.map((plan) => (
                            <div
                              key={plan.name}
                              className={`p-6 text-center text-lg font-semibold ${
                                plan.highlight
                                  ? "text-foreground bg-primary"
                                  : ""
                              }`}
                            >
                              {plan.name}
                              {plan.highlight && (
                                <div className="mt-1 text-xs font-normal text-red-500">
                                  {plan.limitedSpots}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>

                        {/* Table Body */}
                        <div className="divide-y divide-gray-200">
                          {/* 6 Seminários Presenciais */}
                          <div className="grid grid-cols-4 transition-colors hover:bg-gray-50">
                            <div className="text-foreground p-6 font-medium">
                              6 Seminários Presenciais
                            </div>
                            {plansData.map((plan) => (
                              <div
                                key={`${plan.name}-seminarios`}
                                className="p-6 text-center"
                              >
                                {plan.benefits.seminarios ? (
                                  <Check className="mx-auto h-6 w-6 text-green-600" />
                                ) : (
                                  <X className="mx-auto h-6 w-6 text-red-500" />
                                )}
                              </div>
                            ))}
                          </div>

                          {/* 12 Preceptorias em Grupo Online */}
                          <div className="grid grid-cols-4 transition-colors hover:bg-gray-50">
                            <div className="text-foreground p-6 font-medium">
                              12 Preceptorias em Grupo Online
                            </div>
                            {plansData.map((plan) => (
                              <div
                                key={`${plan.name}-preceptorias`}
                                className="p-6 text-center"
                              >
                                {plan.benefits.preceptorias ? (
                                  <Check className="mx-auto h-6 w-6 text-green-600" />
                                ) : (
                                  <X className="mx-auto h-6 w-6 text-red-500" />
                                )}
                              </div>
                            ))}
                          </div>

                          {/* 6 Feedbacks para os Pais */}
                          <div className="grid grid-cols-4 transition-colors hover:bg-gray-100">
                            <div className="text-foreground p-6 font-medium">
                              6 Feedbacks para os Pais
                            </div>
                            {plansData.map((plan) => (
                              <div
                                key={`${plan.name}-feedbacks`}
                                className="p-6 text-center"
                              >
                                {plan.benefits.feedbacks ? (
                                  <Check className="mx-auto h-6 w-6 text-green-600" />
                                ) : (
                                  <X className="mx-auto h-6 w-6 text-red-500" />
                                )}
                              </div>
                            ))}
                          </div>

                          {/* Análise de Perfil Comportamental */}
                          <div className="grid grid-cols-4 transition-colors hover:bg-gray-50">
                            <div className="text-foreground p-6 font-medium">
                              Análise de Perfil Comportamental
                            </div>
                            {plansData.map((plan) => (
                              <div
                                key={`${plan.name}-analise`}
                                className="p-6 text-center"
                              >
                                {plan.benefits.analise ? (
                                  <Check className="mx-auto h-6 w-6 text-green-600" />
                                ) : (
                                  <X className="mx-auto h-6 w-6 text-red-500" />
                                )}
                              </div>
                            ))}
                          </div>

                          {/* Devolutiva Individual + PDI */}
                          <div className="grid grid-cols-4 transition-colors hover:bg-gray-50">
                            <div className="text-foreground p-6 font-medium">
                              Devolutiva Individual + PDI
                            </div>
                            {plansData.map((plan) => (
                              <div
                                key={`${plan.name}-devolutiva`}
                                className="p-6 text-center"
                              >
                                {plan.benefits.devolutiva ? (
                                  <Check className="mx-auto h-6 w-6 text-green-600" />
                                ) : (
                                  <X className="mx-auto h-6 w-6 text-red-500" />
                                )}
                              </div>
                            ))}
                          </div>

                          {/* 2 Mentorias Individuais */}
                          <div className="grid grid-cols-4 transition-colors hover:bg-gray-50">
                            <div className="text-foreground p-6 font-medium">
                              2 Mentorias Individuais
                            </div>
                            {plansData.map((plan) => (
                              <div
                                key={`${plan.name}-mentorias`}
                                className="p-6 text-center"
                              >
                                {plan.benefits.mentorias ? (
                                  <Check className="mx-auto h-6 w-6 text-green-600" />
                                ) : (
                                  <X className="mx-auto h-6 w-6 text-red-500" />
                                )}
                              </div>
                            ))}
                          </div>

                          {/* Investment Row */}
                          <div className="grid grid-cols-4 bg-gray-50">
                            <div className="text-foreground p-6 text-lg font-bold">
                              Investimento
                            </div>
                            {plansData.map((plan) => (
                              <div
                                key={`${plan.name}-price`}
                                className={`p-6 text-center ${plan.highlight ? "bg-primary/20" : ""}`}
                              >
                                <div className="text-foreground text-lg font-bold">
                                  {plan.price}
                                </div>
                                <div className="text-foreground/70 mt-1 text-sm">
                                  {plan.altPrice}
                                </div>
                                {plan.limitedSpots && (
                                  <div className="mt-2 text-xs font-bold text-red-500 uppercase">
                                    {plan.limitedSpots}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:hidden">
                <div className="space-y-6 lg:hidden">
                  {plansData.map((plan) => (
                    <div
                      key={plan.name}
                      className={`overflow-hidden rounded-2xl bg-white shadow-xl ${
                        plan.highlight ? "ring-primary relative ring-2" : ""
                      }`}
                    >
                      {/* Card Header */}
                      <div
                        className={`p-6 text-center ${
                          plan.highlight
                            ? "to-secondary from-primary text-foreground bg-gradient-to-r"
                            : "bg-accent text-white"
                        }`}
                      >
                        <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>
                        {plan.limitedSpots && (
                          <div className="font-dm-sans inline-block rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white uppercase">
                            {plan.limitedSpots}
                          </div>
                        )}
                      </div>

                      {/* Benefits List */}
                      <div className="space-y-4 p-6">
                        <div className="flex items-center justify-between">
                          <span className="text-foreground font-medium">
                            6 Seminários Presenciais
                          </span>
                          {plan.benefits.seminarios ? (
                            <Check className="h-5 w-5 text-green-600" />
                          ) : (
                            <X className="h-5 w-5 text-red-500" />
                          )}
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-foreground font-medium">
                            12 Preceptorias em Grupo Online
                          </span>
                          {plan.benefits.preceptorias ? (
                            <Check className="h-5 w-5 text-green-600" />
                          ) : (
                            <X className="h-5 w-5 text-red-500" />
                          )}
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-foreground font-medium">
                            6 Feedbacks para os Pais
                          </span>
                          {plan.benefits.feedbacks ? (
                            <Check className="h-5 w-5 text-green-600" />
                          ) : (
                            <X className="h-5 w-5 text-red-500" />
                          )}
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-foreground font-medium">
                            Análise de Perfil Comportamental
                          </span>
                          {plan.benefits.analise ? (
                            <Check className="h-5 w-5 text-green-600" />
                          ) : (
                            <X className="h-5 w-5 text-red-500" />
                          )}
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-foreground font-medium">
                            Devolutiva Individual + PDI
                          </span>
                          {plan.benefits.devolutiva ? (
                            <Check className="h-5 w-5 text-green-600" />
                          ) : (
                            <X className="h-5 w-5 text-red-500" />
                          )}
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-foreground font-medium">
                            2 Mentorias Individuais
                          </span>
                          {plan.benefits.mentorias ? (
                            <Check className="h-5 w-5 text-green-600" />
                          ) : (
                            <X className="h-5 w-5 text-red-500" />
                          )}
                        </div>
                      </div>

                      {/* Price Section */}
                      <div
                        className={`border-t border-gray-200 p-6 text-center ${plan.highlight ? "bg-primary/10" : "bg-gray-50"}`}
                      >
                        <div className="text-foreground mb-1 text-2xl font-bold">
                          {plan.price}
                        </div>
                        <div className="text-foreground/70 text-sm">
                          {plan.altPrice}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 9: Detalhes do evento */}
        <section
          id="event-details"
          className="flex w-full items-center justify-center  px-4 py-16 text-center md:px-14  md:py-28 lg:py-36"
        >
          <div className="container mx-auto max-w-5xl space-y-10 px-4 md:px-6">
            <h2 className="font-dm-sans text-4xl leading-tight font-extrabold tracking-tight drop-shadow-lg sm:text-5xl md:text-6xl">
              Atente-se Aos Detalhes
            </h2>
            <div className="grid grid-cols-1 gap-8 text-lg sm:grid-cols-2 lg:grid-cols-4">
              <Card className="border-primary35 bg-primary5 aspect-square">
                <CardContent className="my-auto flex h-full flex-col items-center justify-center space-y-4">
                  <CalendarDays className="h-10 w-10" />
                  <span className="font-dm-sans text-xl font-semibold">
                    Data:
                  </span>
                  <span className="">20/09/2025</span>
                </CardContent>
              </Card>
              <Card className="border-secondary35 bg-secondary5 aspect-square">
                <CardContent className="my-auto flex h-full flex-col items-center justify-center space-y-4">
                  <MapPin className="h-10 w-10" />
                  <span className="font-dm-sans text-xl font-semibold">
                    Local:
                  </span>
                  <span className="">Hotel Ibis Styles Taubaté</span>
                  <small>
                    <i>a confirmar</i>
                  </small>
                </CardContent>
              </Card>
              <Card className="border-accent35 bg-accent5 aspect-square">
                <CardContent className="my-auto flex h-full flex-col items-center justify-center space-y-4">
                  <Clock className="h-10 w-10" />
                  <span className="font-dm-sans text-xl font-semibold">
                    Duração:
                  </span>
                  <span className="">4 horas presenciais</span>
                </CardContent>
              </Card>
              <Card className="border-info35 bg-info5 aspect-square">
                <CardContent className="my-auto flex h-full flex-col items-center justify-center space-y-4">
                  <Users className="h-10 w-10" />
                  <span className="font-dm-sans text-xl font-semibold">
                    Público:
                  </span>
                  <span className="">Jovens entre 14 e 17 anos</span>
                </CardContent>
              </Card>
            </div>
            <div className="flex flex-col items-center space-y-6">
              <div className="text-accent flex items-center space-x-3 text-2xl font-semibold ">
                <CheckCircle2 className="hidden h-8 w-8 md:inline" />
                <span>
                  Certificado: <br className="inline md:hidden" /> Sim, com selo
                  do Instituto Van Veen
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 10: "Última Chamada para a Ação" (A conversão Final) */}
        <section
          className="bg-secondary10 w-full px-4 py-16 md:px-14 md:py-28 lg:py-36"
          id="subscribe"
        >
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="mb-12 flex flex-col items-center space-y-8 text-center">
              <h2 className="font-dm-sans text-3xl leading-tight font-bold tracking-tight  sm:text-4xl md:text-5xl">
                Prepare-o Não Apenas Para Entrar. Prepare-o Para Liderar.
              </h2>
              <p className="max-w-[800px] leading-relaxed  md:text-lg">
                A admissão em uma universidade de elite é apenas o primeiro
                passo. A verdadeira medida do sucesso é o impacto que seu
                filho(a) terá no mundo. Dê a ele(a) as ferramentas para
                construir uma vida de relevância, propósito e liderança.
                Entendemos que esta é uma decisão importante. Estamos aqui para
                responder a todas as suas perguntas e mostrar, em detalhes, como
                nossa jornada pode ser o diferencial para o futuro da sua
                família.
              </p>
              <h3 className="text-accent text-center text-3xl font-bold uppercase">
                A jornada começa hoje.
              </h3>
              <NewLeadModal>
                <Button className="font-dm-sans inline-flex h-16 transform animate-pulse items-center justify-center rounded-full px-12 text-base font-bold shadow-2xl transition-all hover:scale-105 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:w-4/5 md:text-2xl">
                  <span className="block md:hidden">AGENDAR UMA CONVERSA</span>
                  <span className="hidden md:flex">
                    AGENDAR UMA CONVERSA E INICIAR A JORNADA
                  </span>
                </Button>
              </NewLeadModal>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-background font-dm-sans relative flex w-full shrink-0 flex-col items-center gap-4 px-4 py-8 sm:flex-row md:px-6">
        <small className="text-center text-sm md:text-left">
          &copy; {new Date().getFullYear()} Instituto Van Veen & Be Kind. Todos
          os direitos reservados.
        </small>
        <span className="absolute right-0 bottom-0 h-2 w-full bg-[repeating-linear-gradient(90deg,_#fad262_0,_#fad262_180px,_#ff791c_180px,_#ff791c_360px,_#fe5f48_360px,_#fe5f48_540px,_#7f2ba6_540px,_#7f2ba6_720px,_#4b67fe_720px,_#4b67fe_800px)]" />
      </footer>
    </div>
  );
}
