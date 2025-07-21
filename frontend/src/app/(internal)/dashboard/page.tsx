"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table/dataTable";
import { Ticket } from "@/features/tickets/types/tickets";
import { ticketsColumnsDef } from "@/features/tickets/types/ticketsColumnDef";
import useFetch from "@/hooks/useFetch";
import { routes } from "@/routes";

// Dados de exemplo para Leads e Tickets
// const mockLeads = [
//   {
//     id: "lead-001",
//     name: "Ana Silva",
//     email: "ana.silva@example.com",
//     phone: "(11) 98765-4321",
//   },
//   {
//     id: "lead-002",
//     name: "Bruno Costa",
//     email: "bruno.costa@example.com",
//     phone: "(21) 99876-5432",
//   },
//   {
//     id: "lead-003",
//     name: "Carla Dias",
//     email: "carla.dias@example.com",
//     phone: "(31) 97654-3210",
//   },
//   {
//     id: "lead-004",
//     name: "Daniela Souza",
//     email: "daniela.souza@example.com",
//     phone: "(41) 96543-2109",
//   },
//   {
//     id: "lead-005",
//     name: "Eduardo Lima",
//     email: "eduardo.lima@example.com",
//     phone: "(51) 95432-1098",
//   },
// ];

// const mockTickets: Ticket[] = [
//   {
//     id: "ticket-001",
//     birthdate: new Date("1990-01-01").getTime(),
//     status: TicketStatus.paid,
//     created_at: new Date("1990-01-01").getTime(),
//     name: "João Silva",
//     email: "joao.silva@example.com",
//     city: "São Paulo",
//     phone: "(11) 91234-5678",
//     singleUse: true,
//     state: "SP",
//     used: false,
//     used_at: null,
//     qrCodeToken: "abc123",
//   },
//   {
//     id: "ticket-001",
//     birthdate: new Date("1990-01-01").getTime(),
//     status: TicketStatus.paid,
//     created_at: new Date("1990-01-01").getTime(),
//     name: "João Silva",
//     email: "joao.silva@example.com",
//     city: "São Paulo",
//     phone: "(11) 91234-5678",
//     singleUse: true,
//     state: "SP",
//     used: false,
//     used_at: null,
//     qrCodeToken: "abc123",
//   },
//   {
//     id: "ticket-001",
//     birthdate: new Date("1990-01-01").getTime(),
//     status: TicketStatus.paid,
//     created_at: new Date("1990-01-01").getTime(),
//     name: "João Silva",
//     email: "joao.silva@example.com",
//     city: "São Paulo",
//     phone: "(11) 91234-5678",
//     singleUse: true,
//     state: "SP",
//     used: false,
//     used_at: null,
//     qrCodeToken: "abc123",
//   },
//   {
//     id: "ticket-001",
//     birthdate: new Date("1990-01-01").getTime(),
//     status: TicketStatus.paid,
//     created_at: new Date("1990-01-01").getTime(),
//     name: "João Silva",
//     email: "joao.silva@example.com",
//     city: "São Paulo",
//     phone: "(11) 91234-5678",
//     singleUse: true,
//     state: "SP",
//     used: false,
//     used_at: null,
//     qrCodeToken: "abc123",
//   },
//   {
//     id: "ticket-001",
//     birthdate: new Date("1990-01-01").getTime(),
//     status: TicketStatus.paid,
//     created_at: new Date("1990-01-01").getTime(),
//     name: "João Silva",
//     email: "joao.silva@example.com",
//     city: "São Paulo",
//     phone: "(11) 91234-5678",
//     singleUse: true,
//     state: "SP",
//     used: false,
//     used_at: null,
//     qrCodeToken: "abc123",
//   },
//   {
//     id: "ticket-001",
//     birthdate: new Date("1990-01-01").getTime(),
//     status: TicketStatus.paid,
//     created_at: new Date("1990-01-01").getTime(),
//     name: "João Silva",
//     email: "joao.silva@example.com",
//     city: "São Paulo",
//     phone: "(11) 91234-5678",
//     singleUse: true,
//     state: "SP",
//     used: false,
//     used_at: null,
//     qrCodeToken: "abc123",
//   },
//   {
//     id: "ticket-001",
//     birthdate: new Date("1990-01-01").getTime(),
//     status: TicketStatus.paid,
//     created_at: new Date("1990-01-01").getTime(),
//     name: "João Silva",
//     email: "joao.silva@example.com",
//     city: "São Paulo",
//     phone: "(11) 91234-5678",
//     singleUse: true,
//     state: "SP",
//     used: false,
//     used_at: null,
//     qrCodeToken: "abc123",
//   },
//   {
//     id: "ticket-001",
//     birthdate: new Date("1990-01-01").getTime(),
//     status: TicketStatus.paid,
//     created_at: new Date("1990-01-01").getTime(),
//     name: "João Silva",
//     email: "joao.silva@example.com",
//     city: "São Paulo",
//     phone: "(11) 91234-5678",
//     singleUse: true,
//     state: "SP",
//     used: false,
//     used_at: null,
//     qrCodeToken: "abc123",
//   },
//   {
//     id: "ticket-001",
//     birthdate: new Date("1990-01-01").getTime(),
//     status: TicketStatus.paid,
//     created_at: new Date("1990-01-01").getTime(),
//     name: "João Silva",
//     email: "joao.silva@example.com",
//     city: "São Paulo",
//     phone: "(11) 91234-5678",
//     singleUse: true,
//     state: "SP",
//     used: false,
//     used_at: null,
//     qrCodeToken: "abc123",
//   },
//   {
//     id: "ticket-001",
//     birthdate: new Date("1990-01-01").getTime(),
//     status: TicketStatus.paid,
//     created_at: new Date("1990-01-01").getTime(),
//     name: "João Silva",
//     email: "joao.silva@example.com",
//     city: "São Paulo",
//     phone: "(11) 91234-5678",
//     singleUse: true,
//     state: "SP",
//     used: false,
//     used_at: null,
//     qrCodeToken: "abc123",
//   },
//   {
//     id: "ticket-001",
//     birthdate: new Date("1990-01-01").getTime(),
//     status: TicketStatus.paid,
//     created_at: new Date("1990-01-01").getTime(),
//     name: "João Silva",
//     email: "joao.silva@example.com",
//     city: "São Paulo",
//     phone: "(11) 91234-5678",
//     singleUse: true,
//     state: "SP",
//     used: false,
//     used_at: null,
//     qrCodeToken: "abc123",
//   },
//   {
//     id: "ticket-001",
//     birthdate: new Date("1990-01-01").getTime(),
//     status: TicketStatus.paid,
//     created_at: new Date("1990-01-01").getTime(),
//     name: "João Silva",
//     email: "joao.silva@example.com",
//     city: "São Paulo",
//     phone: "(11) 91234-5678",
//     singleUse: true,
//     state: "SP",
//     used: false,
//     used_at: null,
//     qrCodeToken: "abc123",
//   },
//   {
//     id: "ticket-001",
//     birthdate: new Date("1990-01-01").getTime(),
//     status: TicketStatus.paid,
//     created_at: new Date("1990-01-01").getTime(),
//     name: "João Silva",
//     email: "joao.silva@example.com",
//     city: "São Paulo",
//     phone: "(11) 91234-5678",
//     singleUse: true,
//     state: "SP",
//     used: false,
//     used_at: null,
//     qrCodeToken: "abc123",
//   },
//   {
//     id: "ticket-001",
//     birthdate: new Date("1990-01-01").getTime(),
//     status: TicketStatus.paid,
//     created_at: new Date("1990-01-01").getTime(),
//     name: "João Silva",
//     email: "joao.silva@example.com",
//     city: "São Paulo",
//     phone: "(11) 91234-5678",
//     singleUse: true,
//     state: "SP",
//     used: false,
//     used_at: null,
//     qrCodeToken: "abc123",
//   },
//   {
//     id: "ticket-001",
//     birthdate: new Date("1990-01-01").getTime(),
//     status: TicketStatus.paid,
//     created_at: new Date("1990-01-01").getTime(),
//     name: "João Silva",
//     email: "joao.silva@example.com",
//     city: "São Paulo",
//     phone: "(11) 91234-5678",
//     singleUse: true,
//     state: "SP",
//     used: false,
//     used_at: null,
//     qrCodeToken: "abc123",
//   },
//   {
//     id: "ticket-001",
//     birthdate: new Date("1990-01-01").getTime(),
//     status: TicketStatus.paid,
//     created_at: new Date("1990-01-01").getTime(),
//     name: "João Silva",
//     email: "joao.silva@example.com",
//     city: "São Paulo",
//     phone: "(11) 91234-5678",
//     singleUse: true,
//     state: "SP",
//     used: false,
//     used_at: null,
//     qrCodeToken: "abc123",
//   },
//   {
//     id: "ticket-001",
//     birthdate: new Date("1990-01-01").getTime(),
//     status: TicketStatus.paid,
//     created_at: new Date("1990-01-01").getTime(),
//     name: "João Silva",
//     email: "joao.silva@example.com",
//     city: "São Paulo",
//     phone: "(11) 91234-5678",
//     singleUse: true,
//     state: "SP",
//     used: false,
//     used_at: null,
//     qrCodeToken: "abc123",
//   },
//   {
//     id: "ticket-001",
//     birthdate: new Date("1990-01-01").getTime(),
//     status: TicketStatus.paid,
//     created_at: new Date("1990-01-01").getTime(),
//     name: "João Silva",
//     email: "joao.silva@example.com",
//     city: "São Paulo",
//     phone: "(11) 91234-5678",
//     singleUse: true,
//     state: "SP",
//     used: false,
//     used_at: null,
//     qrCodeToken: "abc123",
//   },
//   {
//     id: "ticket-001",
//     birthdate: new Date("1990-01-01").getTime(),
//     status: TicketStatus.paid,
//     created_at: new Date("1990-01-01").getTime(),
//     name: "João Silva",
//     email: "joao.silva@example.com",
//     city: "São Paulo",
//     phone: "(11) 91234-5678",
//     singleUse: true,
//     state: "SP",
//     used: false,
//     used_at: null,
//     qrCodeToken: "abc123",
//   },
//   {
//     id: "ticket-001",
//     birthdate: new Date("1990-01-01").getTime(),
//     status: TicketStatus.paid,
//     created_at: new Date("1990-01-01").getTime(),
//     name: "João Silva",
//     email: "joao.silva@example.com",
//     city: "São Paulo",
//     phone: "(11) 91234-5678",
//     singleUse: true,
//     state: "SP",
//     used: false,
//     used_at: null,
//     qrCodeToken: "abc123",
//   },
//   {
//     id: "ticket-001",
//     birthdate: new Date("1990-01-01").getTime(),
//     status: TicketStatus.paid,
//     created_at: new Date("1990-01-01").getTime(),
//     name: "João Silva",
//     email: "joao.silva@example.com",
//     city: "São Paulo",
//     phone: "(11) 91234-5678",
//     singleUse: true,
//     state: "SP",
//     used: false,
//     used_at: null,
//     qrCodeToken: "abc123",
//   },
//   {
//     id: "ticket-001",
//     birthdate: new Date("1990-01-01").getTime(),
//     status: TicketStatus.paid,
//     created_at: new Date("1990-01-01").getTime(),
//     name: "João Silva",
//     email: "joao.silva@example.com",
//     city: "São Paulo",
//     phone: "(11) 91234-5678",
//     singleUse: true,
//     state: "SP",
//     used: false,
//     used_at: null,
//     qrCodeToken: "abc123",
//   },
//   {
//     id: "ticket-001",
//     birthdate: new Date("1990-01-01").getTime(),
//     status: TicketStatus.paid,
//     created_at: new Date("1990-01-01").getTime(),
//     name: "João Silva",
//     email: "joao.silva@example.com",
//     city: "São Paulo",
//     phone: "(11) 91234-5678",
//     singleUse: true,
//     state: "SP",
//     used: false,
//     used_at: null,
//     qrCodeToken: "abc123",
//   },
//   {
//     id: "ticket-001",
//     birthdate: new Date("1990-01-01").getTime(),
//     status: TicketStatus.paid,
//     created_at: new Date("1990-01-01").getTime(),
//     name: "João Silva",
//     email: "joao.silva@example.com",
//     city: "São Paulo",
//     phone: "(11) 91234-5678",
//     singleUse: true,
//     state: "SP",
//     used: false,
//     used_at: null,
//     qrCodeToken: "abc123",
//   },
//   {
//     id: "ticket-001",
//     birthdate: new Date("1990-01-01").getTime(),
//     status: TicketStatus.paid,
//     created_at: new Date("1990-01-01").getTime(),
//     name: "João Silva",
//     email: "joao.silva@example.com",
//     city: "São Paulo",
//     phone: "(11) 91234-5678",
//     singleUse: true,
//     state: "SP",
//     used: false,
//     used_at: null,
//     qrCodeToken: "abc123",
//   },
//   {
//     id: "ticket-001",
//     birthdate: new Date("1990-01-01").getTime(),
//     status: TicketStatus.paid,
//     created_at: new Date("1990-01-01").getTime(),
//     name: "João Silva",
//     email: "joao.silva@example.com",
//     city: "São Paulo",
//     phone: "(11) 91234-5678",
//     singleUse: true,
//     state: "SP",
//     used: false,
//     used_at: null,
//     qrCodeToken: "abc123",
//   },
//   {
//     id: "ticket-001",
//     birthdate: new Date("1990-01-01").getTime(),
//     status: TicketStatus.paid,
//     created_at: new Date("1990-01-01").getTime(),
//     name: "João Silva",
//     email: "joao.silva@example.com",
//     city: "São Paulo",
//     phone: "(11) 91234-5678",
//     singleUse: true,
//     state: "SP",
//     used: false,
//     used_at: null,
//     qrCodeToken: "abc123",
//   },
//   {
//     id: "ticket-001",
//     birthdate: new Date("1990-01-01").getTime(),
//     status: TicketStatus.paid,
//     created_at: new Date("1990-01-01").getTime(),
//     name: "João Silva",
//     email: "joao.silva@example.com",
//     city: "São Paulo",
//     phone: "(11) 91234-5678",
//     singleUse: true,
//     state: "SP",
//     used: false,
//     used_at: null,
//     qrCodeToken: "abc123",
//   },
//   {
//     id: "ticket-001",
//     birthdate: new Date("1990-01-01").getTime(),
//     status: TicketStatus.paid,
//     created_at: new Date("1990-01-01").getTime(),
//     name: "João Silva",
//     email: "joao.silva@example.com",
//     city: "São Paulo",
//     phone: "(11) 91234-5678",
//     singleUse: true,
//     state: "SP",
//     used: false,
//     used_at: null,
//     qrCodeToken: "abc123",
//   },
//   {
//     id: "ticket-001",
//     birthdate: new Date("1990-01-01").getTime(),
//     status: TicketStatus.paid,
//     created_at: new Date("1990-01-01").getTime(),
//     name: "João Silva",
//     email: "joao.silva@example.com",
//     city: "São Paulo",
//     phone: "(11) 91234-5678",
//     singleUse: true,
//     state: "SP",
//     used: false,
//     used_at: null,
//     qrCodeToken: "abc123",
//   },
//   {
//     id: "ticket-001",
//     birthdate: new Date("1990-01-01").getTime(),
//     status: TicketStatus.paid,
//     created_at: new Date("1990-01-01").getTime(),
//     name: "João Silva",
//     email: "joao.silva@example.com",
//     city: "São Paulo",
//     phone: "(11) 91234-5678",
//     singleUse: true,
//     state: "SP",
//     used: false,
//     used_at: null,
//     qrCodeToken: "abc123",
//   },
//   {
//     id: "ticket-001",
//     birthdate: new Date("1990-01-01").getTime(),
//     status: TicketStatus.paid,
//     created_at: new Date("1990-01-01").getTime(),
//     name: "João Silva",
//     email: "joao.silva@example.com",
//     city: "São Paulo",
//     phone: "(11) 91234-5678",
//     singleUse: true,
//     state: "SP",
//     used: false,
//     used_at: null,
//     qrCodeToken: "abc123",
//   },
//   {
//     id: "ticket-001",
//     birthdate: new Date("1990-01-01").getTime(),
//     status: TicketStatus.paid,
//     created_at: new Date("1990-01-01").getTime(),
//     name: "João Silva",
//     email: "joao.silva@example.com",
//     city: "São Paulo",
//     phone: "(11) 91234-5678",
//     singleUse: true,
//     state: "SP",
//     used: false,
//     used_at: null,
//     qrCodeToken: "abc123",
//   },
//   {
//     id: "ticket-001",
//     birthdate: new Date("1990-01-01").getTime(),
//     status: TicketStatus.paid,
//     created_at: new Date("1990-01-01").getTime(),
//     name: "João Silva",
//     email: "joao.silva@example.com",
//     city: "São Paulo",
//     phone: "(11) 91234-5678",
//     singleUse: true,
//     state: "SP",
//     used: false,
//     used_at: null,
//     qrCodeToken: "abc123",
//   },
//   {
//     id: "ticket-001",
//     birthdate: new Date("1990-01-01").getTime(),
//     status: TicketStatus.paid,
//     created_at: new Date("1990-01-01").getTime(),
//     name: "João Silva",
//     email: "joao.silva@example.com",
//     city: "São Paulo",
//     phone: "(11) 91234-5678",
//     singleUse: true,
//     state: "SP",
//     used: false,
//     used_at: null,
//     qrCodeToken: "abc123",
//   },
//   {
//     id: "ticket-001",
//     birthdate: new Date("1990-01-01").getTime(),
//     status: TicketStatus.paid,
//     created_at: new Date("1990-01-01").getTime(),
//     name: "João Silva",
//     email: "joao.silva@example.com",
//     city: "São Paulo",
//     phone: "(11) 91234-5678",
//     singleUse: true,
//     state: "SP",
//     used: false,
//     used_at: null,
//     qrCodeToken: "abc123",
//   },
//   {
//     id: "ticket-001",
//     birthdate: new Date("1990-01-01").getTime(),
//     status: TicketStatus.paid,
//     created_at: new Date("1990-01-01").getTime(),
//     name: "João Silva",
//     email: "joao.silva@example.com",
//     city: "São Paulo",
//     phone: "(11) 91234-5678",
//     singleUse: true,
//     state: "SP",
//     used: false,
//     used_at: null,
//     qrCodeToken: "abc123",
//   },
//   {
//     id: "ticket-001",
//     birthdate: new Date("1990-01-01").getTime(),
//     status: TicketStatus.paid,
//     created_at: new Date("1990-01-01").getTime(),
//     name: "João Silva",
//     email: "joao.silva@example.com",
//     city: "São Paulo",
//     phone: "(11) 91234-5678",
//     singleUse: true,
//     state: "SP",
//     used: false,
//     used_at: null,
//     qrCodeToken: "abc123",
//   },
//   {
//     id: "ticket-001",
//     birthdate: new Date("1990-01-01").getTime(),
//     status: TicketStatus.paid,
//     created_at: new Date("1990-01-01").getTime(),
//     name: "João Silva",
//     email: "joao.silva@example.com",
//     city: "São Paulo",
//     phone: "(11) 91234-5678",
//     singleUse: true,
//     state: "SP",
//     used: false,
//     used_at: null,
//     qrCodeToken: "abc123",
//   },
//   {
//     id: "ticket-001",
//     birthdate: new Date("1990-01-01").getTime(),
//     status: TicketStatus.paid,
//     created_at: new Date("1990-01-01").getTime(),
//     name: "João Silva",
//     email: "joao.silva@example.com",
//     city: "São Paulo",
//     phone: "(11) 91234-5678",
//     singleUse: true,
//     state: "SP",
//     used: false,
//     used_at: null,
//     qrCodeToken: "abc123",
//   },
//   {
//     id: "ticket-001",
//     birthdate: new Date("1990-01-01").getTime(),
//     status: TicketStatus.paid,
//     created_at: new Date("1990-01-01").getTime(),
//     name: "João Silva",
//     email: "joao.silva@example.com",
//     city: "São Paulo",
//     phone: "(11) 91234-5678",
//     singleUse: true,
//     state: "SP",
//     used: false,
//     used_at: null,
//     qrCodeToken: "abc123",
//   },
//   {
//     id: "ticket-001",
//     birthdate: new Date("1990-01-01").getTime(),
//     status: TicketStatus.paid,
//     created_at: new Date("1990-01-01").getTime(),
//     name: "João Silva",
//     email: "joao.silva@example.com",
//     city: "São Paulo",
//     phone: "(11) 91234-5678",
//     singleUse: true,
//     state: "SP",
//     used: false,
//     used_at: null,
//     qrCodeToken: "abc123",
//   },
//   {
//     id: "ticket-001",
//     birthdate: new Date("1990-01-01").getTime(),
//     status: TicketStatus.paid,
//     created_at: new Date("1990-01-01").getTime(),
//     name: "João Silva",
//     email: "joao.silva@example.com",
//     city: "São Paulo",
//     phone: "(11) 91234-5678",
//     singleUse: true,
//     state: "SP",
//     used: false,
//     used_at: null,
//     qrCodeToken: "abc123",
//   },
//   {
//     id: "ticket-001",
//     birthdate: new Date("1990-01-01").getTime(),
//     status: TicketStatus.paid,
//     created_at: new Date("1990-01-01").getTime(),
//     name: "João Silva",
//     email: "joao.silva@example.com",
//     city: "São Paulo",
//     phone: "(11) 91234-5678",
//     singleUse: true,
//     state: "SP",
//     used: false,
//     used_at: null,
//     qrCodeToken: "abc123",
//   },
// ];

export default function DashboardPage() {
  const {
    data: tickets,
    error: ticketsError,
    loading: ticketsLoading,
  } = useFetch<Ticket[]>({
    url: routes.tickets.urlBuilder(),
  });

  if (ticketsError) {
    return (
      <div className="text-red-500">
        Ocorreu um erro ao carregar os tickets:{" "}
        {ticketsError || "Erro desconhecido"}
      </div>
    );
  }

  if (ticketsLoading) {
    return <div className="text-gray-300">Carregando tickets...</div>;
  }

  return (
    <div className="flex min-h-[100dvh] flex-col bg-gray-950 p-6 font-sans text-gray-50 md:p-10">
      <header className="mb-10 flex items-center justify-between border-b border-gray-800 pb-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white">
          Dashboard Interno
        </h1>
        <Button
          // onClick={() => setIsAuthenticated(false)}
          variant="outline"
          className="border-gray-700 bg-gray-800 text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
        >
          Sair
        </Button>
      </header>

      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-white">
          Leads Cadastrados
        </h2>
        <Card className="border border-gray-700 bg-gray-900 p-0 shadow-lg ">
          <CardContent className="overflow-clip p-0 py-0">
            <DataTable columns={ticketsColumnsDef} data={tickets} />
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="mb-6 text-3xl font-bold text-white">
          Tickets de Suporte
        </h2>
        <Card className="border border-gray-700 bg-gray-900 shadow-lg">
          <CardContent className="p-0">
            {/* <Table>
              <TableHeader>
                <TableRow className="bg-gray-800 hover:bg-gray-800">
                  <TableHead className="w-[100px] text-gray-300">ID</TableHead>
                  <TableHead className="text-gray-300">Assunto</TableHead>
                  <TableHead className="text-gray-300">Status</TableHead>
                  <TableHead className="text-gray-300">Criado Em</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockTickets.map((ticket) => (
                  <TableRow
                    key={ticket.id}
                    className="hover:bg-gray-850 border-gray-800"
                  >
                    <TableCell className="font-medium text-gray-400">
                      {ticket.id}
                    </TableCell>
                    <TableCell className="text-gray-300">
                      {ticket.subject}
                    </TableCell>
                    <TableCell className="text-gray-300">
                      {ticket.status}
                    </TableCell>
                    <TableCell className="text-gray-300">
                      {ticket.createdAt}
                    </TableCell>
                  </TableRow>
                ))}
                {mockTickets.length === 0 && (
                  <TableRow>
                    <TableCell
                      colSpan={4}
                      className="h-24 text-center text-gray-400"
                    >
                      Nenhum ticket cadastrado.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table> */}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
