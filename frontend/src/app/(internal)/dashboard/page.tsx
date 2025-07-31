"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table/dataTable";
import { Lead } from "@/features/leads/types/leads";
import { leadsColumnsDef } from "@/features/leads/types/leadsColumnDef";
import { Ticket } from "@/features/tickets/types/tickets";
import { ticketsColumnsDef } from "@/features/tickets/types/ticketsColumnDef";
import useFetch from "@/hooks/useFetch";
import { routes } from "@/routes";

export default function DashboardPage() {
  const {
    data: tickets,
    error: ticketsError,
    loading: ticketsLoading,
  } = useFetch<Ticket[]>({
    url: routes.tickets.urlBuilder(),
  });

  const router = useRouter();

  const {
    data: leads,
    error: leadsError,
    loading: leadsLoading,
  } = useFetch<Lead[]>({
    url: routes.getLeads.urlBuilder(),
  });

  useEffect(() => {
    if (!document.cookie.includes("adminToken")) {
      router.push("/");
      toast.error(
        "Você precisa estar logado como administrador para acessar esta página.",
      );
    }
  }, [router]);

  useEffect(() => {
    if (leadsError) {
      toast.error("Erro", {
        description: `Erro ao carregar os leads: ${leadsError}`,
      });
    }
  }, [leadsError]);

  useEffect(() => {
    if (ticketsError) {
      toast.error("Erro", {
        description: `Erro ao carregar os tickets: ${ticketsError}`,
      });
    }
  }, [ticketsError]);

  if (ticketsError) {
    return (
      <div className="text-red-500">
        Ocorreu um erro ao carregar os tickets:{" "}
        {ticketsError || "Erro desconhecido"}
      </div>
    );
  }
  if (leadsError) {
    return (
      <div className="text-red-500">
        Ocorreu um erro ao carregar os leads:{" "}
        {leadsError || "Erro desconhecido"}
      </div>
    );
  }

  if (leadsLoading) {
    return (
      <div className="bg-background relative ml-2  flex h-screen min-h-[100dvh] flex-1 flex-col items-center justify-center overflow-clip p-6 px-4 font-sans md:ml-8 md:p-10 md:px-14 lg:ml-12">
        Carregando leads...
      </div>
    );
  }

  if (ticketsLoading) {
    return (
      <div className="bg-background relative ml-2  flex h-screen min-h-[100dvh] flex-1 flex-col items-center justify-center overflow-clip p-6 px-4 font-sans md:ml-8 md:p-10 md:px-14 lg:ml-12">
        Carregando tickets...
      </div>
    );
  }

  return (
    <div className="bg-background relative ml-2  flex min-h-[100dvh] flex-1 flex-col overflow-clip p-6 px-4 font-sans md:ml-8 md:p-10 md:px-14 lg:ml-12">
      <header className="mb-10 flex items-center justify-between  pb-8">
        <h1 className="font-dm-sans text-4xl font-extrabold tracking-tight">
          Dashboard Interno
        </h1>
        <Button
          onClick={() => {
            document.cookie.replace(/(^|;\s*)adminToken=([^;]*)/, () => {
              document.cookie = `adminToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
              return "";
            });
            router.push("/");
          }}
          variant="default"
          className="w-fit"
        >
          Sair
        </Button>
      </header>

      <section className="mb-12">
        <h2 className="font-dm-sans mb-6 text-3xl font-bold">
          Leads Cadastrados
        </h2>
        <Card className="bg-primary20 border-primary35 border p-0 shadow-lg ">
          <CardContent className="overflow-clip p-0 py-0">
            <DataTable columns={leadsColumnsDef} data={leads} />
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="font-dm-sans mb-6 text-3xl font-bold">
          Ingressos Vendidos
        </h2>
        <Card className="bg-primary20 border-primary35 border p-0 shadow-lg">
          <CardContent className="rounded-md p-0">
            <DataTable columns={ticketsColumnsDef} data={tickets} />
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
