"use client";

import {
  CheckCircle2,
  MapPin,
  CalendarDays,
  Users,
  Award,
  Clock,
  Lightbulb,
  GraduationCap,
  Handshake,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { NewLeadModal } from "@/features/leads/components/newLeadModal";
import { NewTicketModal } from "@/features/tickets/components/newTicketModal";

export default function Component() {
  return (
    <div className="flex min-h-dvh flex-col font-sans ">
      <main className="bg-background relative ml-2 flex-1 overflow-clip px-4 md:ml-8 md:px-14 lg:ml-12">
        {/* Seção Herói */}
        <section className="flex w-full items-center justify-start overflow-y-visible pt-8 pb-36 text-center md:w-4/5 md:pt-10 lg:pt-18">
          <div className="pointer-events-none absolute inset-0 top-0 z-0 max-h-screen bg-[url('/images/be-kind-logo.svg')] bg-contain bg-no-repeat opacity-10 md:translate-x-1/2 md:opacity-40 lg:translate-x-2/3 lg:translate-y-1/5" />
          <div className="z-10 max-w-5xl space-y-8">
            <div className="flex flex-col items-center md:items-start">
              <h1 className="font-dm-sans text-2xl leading-tight font-bold tracking-tight sm:text-3xl md:text-left md:text-4xl lg:text-6xl">
                Do Diploma ao Destaque Global:{" "}
                <br className="hidden md:inline" />
              </h1>
              <h2 className="font-dm-sans w-8/12 text-left text-xl leading-tight font-bold tracking-tight sm:text-2xl md:text-3xl lg:text-5xl">
                O Passaporte para a Liderança do Futuro
              </h2>
            </div>
            <div className="relative flex aspect-video max-w-4xl items-center justify-center overflow-hidden rounded-xl border md:w-4/5 ">
              {/* Placeholder para o vídeo. Substitua o src pelo URL real do seu vídeo. */}
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=example" // Substitua por um URL de vídeo real
                title="Vídeo da Palestra"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute top-0 left-0 h-full w-full"
              />
            </div>
            <div className="flex flex-col justify-center gap-2 md:w-4/5 ">
              <Button
                variant="default"
                className="font-dm-sans inline-flex h-14 w-full transform items-center justify-center rounded-full px-10 text-lg font-bold opacity-100 shadow-lg transition-all hover:scale-105 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
              >
                <Link href="#inscricao">GARANTA A VAGA AGORA</Link>
              </Button>
              <p className="font-dm-sans text-accent mt-2 text-sm font-medium uppercase">
                Vagas limitadas
              </p>
            </div>
          </div>
        </section>

        {/* O Paradoxo do Sucesso */}
        <section className="w-full  py-16 md:py-28 lg:py-36">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="mb-12 flex flex-col items-center space-y-8 text-center">
              <h2 className="font-dm-sans text-3xl leading-tight font-bold tracking-tight  sm:text-4xl md:text-5xl">
                O Paradoxo do Sucesso: <br /> Por que Boas Notas Não Bastam?
              </h2>
              <p className="max-w-[800px] leading-relaxed  md:text-lg">
                Olhamos para as notas de nossos filhos e entendemos que isso é
                um atestado de sua inteligência, disciplina e do nosso
                compromisso em prover a melhor educação. As boas notas comprovam
                o conhecimento técnico – o passaporte essencial para abrir as
                primeiras portas.
              </p>
              <p className="max-w-[800px] leading-relaxed  md:text-lg">
                Mas a vida, dentro e fora da universidade, é muito mais do que
                conhecimento técnico.
              </p>
              <p className="max-w-[800px] leading-relaxed  md:text-lg">
                Pesquisas de Google, Harvard e LinkedIn confirmam que, uma vez
                atingido um nível técnico, as habilidades humanas (soft skills)
                são o principal diferencial para o sucesso na carreira e na
                liderança.
              </p>
              <p className="max-w-[800px] leading-relaxed  md:text-lg">
                O Google, por exemplo, com seus projetos Oxygen e Aristotle,
                descobriu que as 7 principais características do sucesso de seus
                melhores líderes são todas soft skills.
              </p>
              <Link
                href="https://rework.withgoogle.com/blog/the-evolution-of-project-oxygen/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:decoration-accent text-lg font-medium underline decoration-transparent transition-all"
              >
                Leia mais no blog oficial do Google
              </Link>
            </div>
            <div className="grid gap-12 py-12 md:grid-cols-2 lg:grid-cols-2">
              <Card className="border-secondary35">
                <CardHeader>
                  <h3 className="font-dm-sans flex items-center gap-3 text-2xl font-bold ">
                    <Lightbulb className="h-7 w-7 " /> Por que isso importa?
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed ">
                    As notas mostram o que seu filho(a) sabe. Mas não o preparam
                    para:
                  </p>
                  <ul className="list-disc space-y-3 pl-6 ">
                    <li>
                      Navegar conflitos em trabalhos com colegas de culturas
                      diferentes
                    </li>
                    <li>
                      Apresentar ideias originais com confiança a bancas
                      exigentes
                    </li>
                    <li>
                      Escolher o caminho certo, mesmo quando está sozinho a
                      milhares de quilômetros de casa
                    </li>
                    <li>Construir amizades e parcerias duradouras</li>
                  </ul>
                  <p className="leading-relaxed font-semibold">
                    As soft skills são a bússola interna que guia seu filho(a)
                    quando os livros não têm resposta. São a base para uma vida
                    de propósito e sucesso.
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="text-accent text-lg leading-relaxed font-bold ">
                    O sistema educacional prepara para a prova. Nós preparamos
                    para os testes da vida.
                  </p>
                </CardFooter>
              </Card>
              <Card className="border-secondary35">
                <CardHeader>
                  <h3 className="font-dm-sans flex items-center gap-3 text-2xl font-bold ">
                    <GraduationCap className="size-7 " />{" "}
                    <span className="w-fit grow-0">
                      E quanto às provas? Como se preparar?
                    </span>
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed ">
                    O Instituto Van Veen traz o que há de melhor:
                  </p>
                  <ul className="list-disc space-y-3 pl-6 ">
                    <li>Disciplinas clássicas (retórica, lógica, gramática)</li>
                    <li>
                      Preparação para os principais exames internacionais:
                      TOEFL, IELTS, Duolingo, SAT e ACT
                    </li>
                    <li>
                      Suporte para o processo de candidatura: seleção de
                      universidades, escrita de essays, entrevistas e busca de
                      bolsas
                    </li>
                    <li>
                      Introdução às universidades internacionais: Ivy League,
                      Europa, Ásia
                    </li>
                    <li>Como funcionam as bolsas de estudo</li>
                    <li>
                      Orientações práticas para essays, entrevistas e
                      application completa
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* A Solução – 12 Seminários Intensivos em 4 Horas */}
        <section className="w-full  py-16 md:py-28 lg:py-36">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="mb-12 flex flex-col items-center space-y-8 text-center">
              <h2 className="font-dm-sans text-3xl leading-tight font-bold tracking-tight  sm:text-4xl md:text-5xl">
                A Solução <br /> 12 Seminários Intensivos em 4 Horas:{" "}
                <br className="hidden md:inline" />
                Preparação Completa para o Sucesso Global
              </h2>
              <p className="max-w-[800px] leading-relaxed  md:text-lg">
                Este seminário único associa o que há de melhor em preparação
                técnica para admissões internacionais e o desenvolvimento
                essencial das soft skills, preparando seu filho(a) para vencer
                tanto os processos seletivos mais competitivos quanto os
                desafios reais do ambiente acadêmico e profissional global.
              </p>
            </div>
            <div className="grid gap-10 md:grid-cols-2">
              <Card className="border-primary35 bg-primary20">
                <CardHeader>
                  <h3 className="font-dm-sans flex items-center gap-3 text-2xl font-bold ">
                    <Users className="h-7 w-7 " /> Parte 1 – 2 horas com Nicolas
                    Van Veen
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed ">
                    Especialista em ensino superior internacional, Nicolas Van
                    Veen conduzirá uma imersão prática para preparar o estudante
                    para conquistar seu lugar nas melhores universidades do
                    mundo, incluindo:
                  </p>
                  <ul className="list-disc space-y-3 pl-6 ">
                    <li>
                      Compreensão detalhada do processo de admissão e seleção
                      nas universidades de excelência
                    </li>
                    <li>
                      Estratégias para conquistar bolsas de estudo
                      internacionais
                    </li>
                    <li>
                      Preparação para exames essenciais como TOEFL, IELTS,
                      Duolingo, SAT e ACT
                    </li>
                    <li>
                      Suporte ao desenvolvimento do application completo:
                      essays, entrevistas e cartas de recomendação
                    </li>
                    <li>
                      Mentoria ao vivo com espaço para dúvidas, garantindo que o
                      aluno compreenda cada etapa do processo
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-primary35 bg-primary20">
                <CardHeader>
                  <h3 className="font-dm-sans flex items-center gap-3 text-2xl font-bold ">
                    <Handshake className="h-7 w-7 " /> Parte 2 – 2 horas com Be
                    Kind
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed ">
                    A Be Kind oferece uma experiência dinâmica e prática para
                    desenvolver as competências comportamentais fundamentais
                    para o sucesso fora da sala de aula:
                  </p>
                  <ul className="list-disc space-y-3 pl-6 ">
                    <li>
                      Dinâmicas e role-playing focados em comunicação
                      intercultural, liderança e resiliência
                    </li>
                    <li>
                      Simulações reais de entrevistas, debates e situações
                      multiculturais para fortalecer a confiança e
                      adaptabilidade
                    </li>
                    <li>
                      Feedback individualizado para identificar pontos fortes e
                      oportunidades de crescimento
                    </li>
                    <li>
                      Plano de ação personalizado para que o estudante continue
                      se desenvolvendo mesmo após o seminário
                    </li>
                    <li>
                      Exercícios de autoconhecimento que ajudam o jovem a
                      construir seu projeto de vida internacional com propósito
                    </li>
                  </ul>
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

        {/* Para Quem é Este Seminário? */}
        <section className="w-full  py-16 md:py-28 lg:py-36">
          <div className="container mx-auto max-w-5xl px-4 text-center md:px-6">
            <h2 className="font-dm-sans mb-12 text-3xl font-bold tracking-tight  sm:text-4xl md:text-5xl">
              Para Quem é Este Seminário?
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <Card className="border-primary35 bg-primary5 aspect-square md:aspect-auto lg:aspect-square">
                <CardContent className="my-auto flex h-full flex-col items-center justify-center space-y-4">
                  <Users className="h-12 w-12 " />
                  <h3 className="font-dm-sans font-semibold lg:text-3xl ">
                    Estudantes
                  </h3>
                  <p className="leading-relaxed ">
                    Entre 13 e 17 anos que sonham em estudar no exterior.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-primary35 bg-primary5 aspect-square md:aspect-auto lg:aspect-square">
                <CardContent className="my-auto flex h-full flex-col items-center justify-center space-y-4">
                  <CheckCircle2 className="h-12 w-12 " />
                  <h3 className="font-dm-sans font-semibold lg:text-3xl ">
                    Pais
                  </h3>
                  <p className="leading-relaxed ">
                    Que buscam o melhor retorno sobre o investimento na educação
                    do filho(a).
                  </p>
                </CardContent>
              </Card>
              <Card className="border-primary35 bg-primary5 aspect-square md:aspect-auto lg:aspect-square">
                <CardContent className="my-auto flex h-full flex-col items-center justify-center space-y-4">
                  <Award className="h-12 w-12 " />
                  <h3 className="font-dm-sans font-semibold lg:text-3xl ">
                    Jovens
                  </h3>
                  <p className="leading-relaxed ">
                    Que querem ser líderes e protagonistas de suas histórias.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Parceria Be Kind & Instituto Van Veen */}
        <section className="w-full  py-16 md:py-28 lg:py-36">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <h2 className="font-dm-sans text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Parceria Be Kind & Instituto Van Veen
              </h2>
              <p className="max-w-[800px] leading-relaxed  md:text-lg">
                O Instituto Van Veen, fundado em 2010 por Nicolas Van Veen, é
                referência nacional na democratização do acesso ao ensino
                superior internacional, com uma abordagem humanizada, inclusiva
                e sustentável.
              </p>
              <p className="max-w-[800px] leading-relaxed  md:text-lg">
                A excelência do Instituto Van Veen é reforçada por sua banca
                acadêmica de renome, formada por pesquisadores e professores
                doutores com ampla experiência internacional. Essa equipe
                contribui regularmente com artigos, dissertações e teses,
                ampliando a relevância do instituto no debate global sobre
                educação.
              </p>
              <p className="max-w-[800px] leading-relaxed  md:text-lg">
                Outro marco significativo é o reconhecimento internacional do
                Instituto Van Veen como Membro da Sociedade Real de História,
                com sede em Londres. Essa afiliação sublinha a profundidade da
                sua atuação acadêmica e a conexão direta com a comunidade global
                de estudos históricos e culturais.
              </p>
              <p className="max-w-[800px] leading-relaxed  md:text-lg">
                O Instituto Van Veen atua como uma ponte não apenas para o
                ensino superior internacional, mas também para o desenvolvimento
                de uma visão ampla e transformadora sobre o papel da educação na
                construção de um futuro mais equitativo, conectado e
                sustentável.
              </p>
              <p className="text-accent mx-auto max-w-[800px] leading-relaxed font-bold md:text-xl">
                Com essa parceria, Be Kind e Instituto Van Veen oferecem uma
                formação única, que alia preparo técnico, soft skills e visão
                global para preparar seu filho(a) para os desafios e
                oportunidades do século XXI.
              </p>
            </div>
          </div>
        </section>

        {/* Última Chamada para Inscrição */}
        <section
          id="inscricao"
          className="flex w-full items-center justify-center  py-16 text-center  md:py-28 lg:py-36"
        >
          <div className="container mx-auto max-w-5xl space-y-10 px-4 md:px-6">
            <h2 className="font-dm-sans text-4xl leading-tight font-extrabold tracking-tight drop-shadow-lg sm:text-5xl md:text-6xl">
              Última Chamada para Inscrição
            </h2>
            <div className="grid grid-cols-1 gap-8 text-lg sm:grid-cols-2 lg:grid-cols-4">
              <Card className="border-primary35 bg-primary5 aspect-square">
                <CardContent className="my-auto flex h-full flex-col items-center justify-center space-y-4">
                  <CalendarDays className="h-10 w-10" />
                  <span className="font-dm-sans text-xl font-semibold">
                    Data:
                  </span>
                  <span className="">[Inserir data]</span>
                </CardContent>
              </Card>
              <Card className="border-secondary35 bg-secondary5 aspect-square">
                <CardContent className="my-auto flex h-full flex-col items-center justify-center space-y-4">
                  <MapPin className="h-10 w-10" />
                  <span className="font-dm-sans text-xl font-semibold">
                    Local:
                  </span>
                  <span className="">[Inserir local]</span>
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
                  <span className="">Jovens entre 13 e 17 anos</span>
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
              {process.env.NEXT_PUBLIC_TICKETS_ENABLED === "1" ? (
                <NewTicketModal>
                  <Button className="font-dm-sans inline-flex h-16 transform animate-pulse items-center justify-center rounded-full px-12 text-2xl font-bold  shadow-2xl transition-all hover:scale-105 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:w-4/5">
                    INSCREVA-SE AGORA
                  </Button>
                </NewTicketModal>
              ) : (
                <NewLeadModal>
                  <Button className="font-dm-sans inline-flex h-16 transform animate-pulse items-center justify-center rounded-full px-12 text-2xl font-bold  shadow-2xl transition-all hover:scale-105 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:w-4/5">
                    GARANTA A VAGA AGORA
                  </Button>
                </NewLeadModal>
              )}
              <p className="text-accent text-xl font-bold drop-shadow-md">
                Restam apenas algumas vagas!
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-background font-dm-sans relative flex w-full shrink-0 flex-col items-center gap-4 px-4 py-8 sm:flex-row md:px-6">
        <p className="text-center text-sm md:text-left">
          &copy; {new Date().getFullYear()} Instituto Van Veen & Be Kind. Todos
          os direitos reservados.
        </p>
        <nav className="flex gap-6 sm:ml-auto sm:gap-8">
          <Link
            href="#"
            className="hover: text-sm underline-offset-4 transition-colors hover:underline"
          >
            Termos de Serviço
          </Link>
          <Link
            href="#"
            className="hover: text-sm underline-offset-4 transition-colors hover:underline"
          >
            Política de Privacidade
          </Link>
        </nav>
        <span className="absolute right-0 bottom-0 h-2 w-full bg-[repeating-linear-gradient(90deg,_#fad262_0,_#fad262_180px,_#ff791c_180px,_#ff791c_360px,_#fe5f48_360px,_#fe5f48_540px,_#7f2ba6_540px,_#7f2ba6_720px,_#4b67fe_720px,_#4b67fe_800px)]" />
      </footer>
    </div>
  );
}
