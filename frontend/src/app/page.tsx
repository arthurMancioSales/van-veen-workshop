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

import PaymentModal from "@/components/tickets/paymentModal";
import { Button } from "@/components/ui/button";
import { NewLeadModal } from "@/features/leads/components/newLeadModal";
import { NewTicketModal } from "@/features/tickets/components/newTicketModal";

export default function Component() {
  return (
    <div className="flex min-h-dvh flex-col bg-gray-950 font-sans text-gray-50">
      <main className="flex-1">
        {/* Seção Herói */}
        <section className="relative flex w-full items-center justify-center overflow-hidden bg-linear-to-br from-gray-900 to-black py-20 text-center text-white md:py-32 lg:py-48">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
            }}
          />
          <div className="z-10 container max-w-5xl space-y-8 px-4 md:px-6">
            <h1 className="text-4xl leading-tight font-extrabold tracking-tight drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
              Do Diploma ao Destaque Global: <br className="hidden md:inline" />
              O Passaporte para a Liderança do Futuro
            </h1>
            <p className="mx-auto max-w-[800px] text-lg text-gray-300 drop-shadow-md md:text-xl">
              Do Diploma ao Destaque Global: O Passaporte para a Liderança do
              Futuro
            </p>
            <div className="relative mx-auto flex aspect-video w-full max-w-4xl items-center justify-center overflow-hidden rounded-xl border border-gray-700 bg-gray-800 shadow-2xl">
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
            <div className="flex flex-col justify-center gap-4 pt-8 sm:flex-row">
              <Button className="inline-flex h-14 transform items-center justify-center rounded-full bg-linear-to-r from-purple-600 to-indigo-700 px-10 text-lg font-bold text-white shadow-lg transition-all hover:scale-105 hover:from-purple-700 hover:to-indigo-800 focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
                <Link href="#inscricao">GARANTA A VAGA AGORA</Link>
              </Button>
              <p className="mt-2 text-sm text-gray-400">Vagas limitadas</p>
            </div>
          </div>
        </section>

        <section>
          <PaymentModal />
        </section>

        {/* O Paradoxo do Sucesso */}
        <section className="w-full bg-gray-900 py-16 md:py-28 lg:py-36">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="mb-12 flex flex-col items-center space-y-8 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                O Paradoxo do Sucesso: Por que Boas Notas Não Bastam?
              </h2>
              <p className="max-w-[900px] leading-relaxed text-gray-300 md:text-lg">
                Olhamos para as notas de nossos filhos e entendemos que isso é
                um atestado de sua inteligência, disciplina e do nosso
                compromisso em prover a melhor educação. As boas notas comprovam
                o conhecimento técnico – o passaporte essencial para abrir as
                primeiras portas.
              </p>
              <p className="max-w-[900px] leading-relaxed text-gray-300 md:text-lg">
                Mas a vida, dentro e fora da universidade, é muito mais do que
                conhecimento técnico.
              </p>
              <p className="max-w-[900px] leading-relaxed text-gray-300 md:text-lg">
                Pesquisas de Google, Harvard e LinkedIn confirmam que, uma vez
                atingido um nível técnico, as habilidades humanas (soft skills)
                são o principal diferencial para o sucesso na carreira e na
                liderança.
              </p>
              <p className="max-w-[900px] leading-relaxed text-gray-300 md:text-lg">
                O Google, por exemplo, com seus projetos Oxygen e Aristotle,
                descobriu que as 7 principais características do sucesso de seus
                melhores líderes são todas soft skills.
              </p>
              <Link
                href="https://rework.withgoogle.com/blog/the-evolution-of-project-oxygen/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-purple-400 transition-colors hover:text-purple-300 hover:underline"
              >
                Leia mais no blog oficial do Google
              </Link>
            </div>
            <div className="grid gap-12 py-12 md:grid-cols-2 lg:grid-cols-2">
              <div className="space-y-6 rounded-xl border border-gray-700 bg-gray-800 p-6 shadow-lg">
                <h3 className="flex items-center gap-3 text-2xl font-bold text-white">
                  <Lightbulb className="h-7 w-7 text-purple-400" /> Por que isso
                  importa?
                </h3>
                <p className="leading-relaxed text-gray-300">
                  As notas mostram o que seu filho(a) sabe. Mas não o preparam
                  para:
                </p>
                <ul className="list-disc space-y-3 pl-6 text-gray-300">
                  <li>
                    Navegar conflitos em trabalhos com colegas de culturas
                    diferentes
                  </li>
                  <li>
                    Apresentar ideias originais com confiança a bancas exigentes
                  </li>
                  <li>
                    Escolher o caminho certo, mesmo quando está sozinho a
                    milhares de quilômetros de casa
                  </li>
                  <li>Construir amizades e parcerias duradouras</li>
                </ul>
                <p className="leading-relaxed font-semibold text-gray-200">
                  As soft skills são a bússola interna que guia seu filho(a)
                  quando os livros não têm resposta. São a base para uma vida de
                  propósito e sucesso.
                </p>
                <p className="text-lg leading-relaxed font-bold text-purple-300">
                  O sistema educacional prepara para a prova. Nós preparamos
                  para os testes da vida.
                </p>
              </div>
              <div className="space-y-6 rounded-xl border border-gray-700 bg-gray-800 p-6 shadow-lg">
                <h3 className="flex items-center gap-3 text-2xl font-bold text-white">
                  <GraduationCap className="h-7 w-7 text-indigo-400" /> E quanto
                  às provas? Como se preparar?
                </h3>
                <p className="leading-relaxed text-gray-300">
                  O Instituto Van Veen traz o que há de melhor:
                </p>
                <ul className="list-disc space-y-3 pl-6 text-gray-300">
                  <li>Disciplinas clássicas (retórica, lógica, gramática)</li>
                  <li>
                    Preparação para os principais exames internacionais: TOEFL,
                    IELTS, Duolingo, SAT e ACT
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
                    Orientações práticas para essays, entrevistas e application
                    completa
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* A Solução – 12 Seminários Intensivos em 4 Horas */}
        <section className="w-full bg-gray-950 py-16 md:py-28 lg:py-36">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="mb-12 flex flex-col items-center space-y-8 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                A Solução – 12 Seminários Intensivos em 4 Horas:{" "}
                <br className="hidden md:inline" />
                Preparação Completa para o Sucesso Global
              </h2>
              <p className="max-w-[900px] leading-relaxed text-gray-300 md:text-lg">
                Este seminário único associa o que há de melhor em preparação
                técnica para admissões internacionais e o desenvolvimento
                essencial das soft skills, preparando seu filho(a) para vencer
                tanto os processos seletivos mais competitivos quanto os
                desafios reais do ambiente acadêmico e profissional global.
              </p>
            </div>
            <div className="grid gap-10 md:grid-cols-2">
              <div className="space-y-6 rounded-xl border border-gray-700 bg-gray-800 p-8 shadow-xl">
                <h3 className="flex items-center gap-3 text-2xl font-bold text-purple-400">
                  <Users className="h-7 w-7 text-purple-400" /> Parte 1 – 2
                  horas com Nicolas Van Veen
                </h3>
                <p className="leading-relaxed text-gray-300">
                  Especialista em ensino superior internacional, Nicolas Van
                  Veen conduzirá uma imersão prática para preparar o estudante
                  para conquistar seu lugar nas melhores universidades do mundo,
                  incluindo:
                </p>
                <ul className="list-disc space-y-3 pl-6 text-gray-300">
                  <li>
                    Compreensão detalhada do processo de admissão e seleção nas
                    universidades de excelência
                  </li>
                  <li>
                    Estratégias para conquistar bolsas de estudo internacionais
                  </li>
                  <li>
                    Preparação para exames essenciais como TOEFL, IELTS,
                    Duolingo, SAT e ACT
                  </li>
                  <li>
                    Suporte ao desenvolvimento do application completo: essays,
                    entrevistas e cartas de recomendação
                  </li>
                  <li>
                    Mentoria ao vivo com espaço para dúvidas, garantindo que o
                    aluno compreenda cada etapa do processo
                  </li>
                </ul>
              </div>
              <div className="space-y-6 rounded-xl border border-gray-700 bg-gray-800 p-8 shadow-xl">
                <h3 className="flex items-center gap-3 text-2xl font-bold text-indigo-400">
                  <Handshake className="h-7 w-7 text-indigo-400" /> Parte 2 – 2
                  horas com Be Kind
                </h3>
                <p className="leading-relaxed text-gray-300">
                  A Be Kind oferece uma experiência dinâmica e prática para
                  desenvolver as competências comportamentais fundamentais para
                  o sucesso fora da sala de aula:
                </p>
                <ul className="list-disc space-y-3 pl-6 text-gray-300">
                  <li>
                    Dinâmicas e role-playing focados em comunicação
                    intercultural, liderança e resiliência
                  </li>
                  <li>
                    Simulações reais de entrevistas, debates e situações
                    multiculturais para fortalecer a confiança e adaptabilidade
                  </li>
                  <li>
                    Feedback individualizado para identificar pontos fortes e
                    oportunidades de crescimento
                  </li>
                  <li>
                    Plano de ação personalizado para que o estudante continue se
                    desenvolvendo mesmo após o seminário
                  </li>
                  <li>
                    Exercícios de autoconhecimento que ajudam o jovem a
                    construir seu projeto de vida internacional com propósito
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-16 space-y-6 text-center">
              <h3 className="text-3xl font-bold text-white">
                Por que essa combinação é essencial?
              </h3>
              <p className="mx-auto max-w-[900px] leading-relaxed text-gray-300 md:text-lg">
                Enquanto o Instituto Van Veen prepara o aluno para vencer as
                etapas acadêmicas e burocráticas do ingresso em universidades
                internacionais, a Be Kind potencializa seu desenvolvimento
                pessoal, garantindo que ele não apenas entre, mas se destaque e
                lidere no ambiente multicultural e competitivo do exterior.
              </p>
              <p className="mx-auto max-w-[900px] leading-relaxed font-bold text-purple-300 md:text-xl">
                Juntas, essas duas abordagens garantem uma preparação completa —
                técnica e humana — para que seu filho(a) se torne um líder
                global preparado para os desafios do século XXI.
              </p>
            </div>
          </div>
        </section>

        {/* Para Quem é Este Seminário? */}
        <section className="w-full bg-gray-900 py-16 md:py-28 lg:py-36">
          <div className="container mx-auto max-w-5xl px-4 text-center md:px-6">
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Para Quem é Este Seminário?
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-xl border border-gray-700 bg-gray-800 p-8 shadow-lg">
                <Users className="h-12 w-12 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">Estudantes</h3>
                <p className="leading-relaxed text-gray-300">
                  Entre 13 e 17 anos que sonham em estudar no exterior.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-xl border border-gray-700 bg-gray-800 p-8 shadow-lg">
                <CheckCircle2 className="h-12 w-12 text-indigo-400" />
                <h3 className="text-xl font-semibold text-white">Pais</h3>
                <p className="leading-relaxed text-gray-300">
                  Que buscam o melhor retorno sobre o investimento na educação
                  do filho(a).
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-xl border border-gray-700 bg-gray-800 p-8 shadow-lg">
                <Award className="h-12 w-12 text-yellow-400" />
                <h3 className="text-xl font-semibold text-white">Jovens</h3>
                <p className="leading-relaxed text-gray-300">
                  Que querem ser líderes e protagonistas de suas histórias.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Parceria Be Kind & Instituto Van Veen */}
        <section className="w-full bg-gray-950 py-16 md:py-28 lg:py-36">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Parceria Be Kind & Instituto Van Veen
              </h2>
              <p className="max-w-[900px] leading-relaxed text-gray-300 md:text-lg">
                O Instituto Van Veen, fundado em 2010 por Nicolas Van Veen, é
                referência nacional na democratização do acesso ao ensino
                superior internacional, com uma abordagem humanizada, inclusiva
                e sustentável.
              </p>
              <p className="max-w-[900px] leading-relaxed text-gray-300 md:text-lg">
                A excelência do Instituto Van Veen é reforçada por sua banca
                acadêmica de renome, formada por pesquisadores e professores
                doutores com ampla experiência internacional. Essa equipe
                contribui regularmente com artigos, dissertações e teses,
                ampliando a relevância do instituto no debate global sobre
                educação.
              </p>
              <p className="max-w-[900px] leading-relaxed text-gray-300 md:text-lg">
                Outro marco significativo é o reconhecimento internacional do
                Instituto Van Veen como Membro da Sociedade Real de História,
                com sede em Londres. Essa afiliação sublinha a profundidade da
                sua atuação acadêmica e a conexão direta com a comunidade global
                de estudos históricos e culturais.
              </p>
              <p className="max-w-[900px] leading-relaxed text-gray-300 md:text-lg">
                O Instituto Van Veen atua como uma ponte não apenas para o
                ensino superior internacional, mas também para o desenvolvimento
                de uma visão ampla e transformadora sobre o papel da educação na
                construção de um futuro mais equitativo, conectado e
                sustentável.
              </p>
              <p className="mx-auto max-w-[900px] leading-relaxed font-bold text-purple-300 md:text-xl">
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
          className="flex w-full items-center justify-center bg-linear-to-br from-purple-700 to-indigo-900 py-16 text-center text-white md:py-28 lg:py-36"
        >
          <div className="container mx-auto max-w-5xl space-y-10 px-4 md:px-6">
            <h2 className="text-4xl leading-tight font-extrabold tracking-tight drop-shadow-lg sm:text-5xl md:text-6xl">
              Última Chamada para Inscrição
            </h2>
            <div className="grid grid-cols-1 gap-8 text-lg sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-3 rounded-xl border border-white/20 bg-white/10 p-6 shadow-inner backdrop-blur-sm">
                <CalendarDays className="h-10 w-10 text-yellow-300" />
                <span className="text-xl font-semibold">Data:</span>
                <span className="text-gray-200">[Inserir data]</span>
              </div>
              <div className="flex flex-col items-center space-y-3 rounded-xl border border-white/20 bg-white/10 p-6 shadow-inner backdrop-blur-sm">
                <MapPin className="h-10 w-10 text-yellow-300" />
                <span className="text-xl font-semibold">Local:</span>
                <span className="text-gray-200">[Inserir local]</span>
              </div>
              <div className="flex flex-col items-center space-y-3 rounded-xl border border-white/20 bg-white/10 p-6 shadow-inner backdrop-blur-sm">
                <Clock className="h-10 w-10 text-yellow-300" />
                <span className="text-xl font-semibold">Duração:</span>
                <span className="text-gray-200">4 horas presenciais</span>
              </div>
              <div className="flex flex-col items-center space-y-3 rounded-xl border border-white/20 bg-white/10 p-6 shadow-inner backdrop-blur-sm">
                <Users className="h-10 w-10 text-yellow-300" />
                <span className="text-xl font-semibold">Público:</span>
                <span className="text-gray-200">Jovens entre 13 e 17 anos</span>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-6">
              <div className="flex items-center space-x-3 text-2xl font-semibold text-green-300">
                <CheckCircle2 className="h-8 w-8 text-green-300" />
                <span>Certificado: Sim, com selo do Instituto Van Veen</span>
              </div>
              {process.env.NEXT_PUBLIC_TICKETS_ENABLED === "1" ? (
                <NewTicketModal>
                  <Button className="inline-flex h-16 transform animate-pulse items-center justify-center rounded-full bg-yellow-400 px-12 text-2xl font-bold text-gray-950 shadow-2xl transition-all hover:scale-105 hover:bg-yellow-500 focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:ring-offset-2 focus-visible:ring-offset-purple-900 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
                    INSCREVA-SE AGORA
                  </Button>
                </NewTicketModal>
              ) : (
                <NewLeadModal>
                  <Button className="inline-flex h-16 transform animate-pulse items-center justify-center rounded-full bg-yellow-400 px-12 text-2xl font-bold text-gray-950 shadow-2xl transition-all hover:scale-105 hover:bg-yellow-500 focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:ring-offset-2 focus-visible:ring-offset-purple-900 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
                    GARANTA A VAGA AGORA
                  </Button>
                </NewLeadModal>
              )}
              <p className="text-xl font-bold text-yellow-300 drop-shadow-md">
                Restam apenas algumas vagas!
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex w-full shrink-0 flex-col items-center gap-4 border-t border-gray-800 bg-gray-950 px-4 py-8 text-gray-400 sm:flex-row md:px-6">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Instituto Van Veen & Be Kind. Todos
          os direitos reservados.
        </p>
        <nav className="flex gap-6 sm:ml-auto sm:gap-8">
          <Link
            href="#"
            className="text-sm underline-offset-4 transition-colors hover:text-gray-300 hover:underline"
          >
            Termos de Serviço
          </Link>
          <Link
            href="#"
            className="text-sm underline-offset-4 transition-colors hover:text-gray-300 hover:underline"
          >
            Política de Privacidade
          </Link>
        </nav>
      </footer>
    </div>
  );
}
