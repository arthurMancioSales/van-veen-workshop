import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { DataTableColumnHeader } from "@/components/ui/data-table/dataTableHeader";
import { cn } from "@/utils/cn";

import { Ticket, TicketStatus } from "../../types/tickets";

export function nameColumn(title = "nome") {
  const nameColumn: ColumnDef<Ticket> = {
    accessorKey: "name",
    id: "name",
    meta: "nome",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={title} />
    ),
    cell: ({ row }) => {
      return (
        <p
          className={cn(
            "before:absolute before:left-4 mobileS:before:left-[0.1rem] before:top-1/4 before:w-2/5 before:text-lg before:font-bold before:capitalize  lg:before:hidden",
            `before:content-['${title}']`,
          )}
          data-cell-name={row.getValue("name")}
        >
          {row.getValue("name")}
        </p>
      );
    },
  };

  return nameColumn;
}

export function emailColumn(title = "email") {
  const emailColumn: ColumnDef<Ticket> = {
    accessorKey: "email",
    id: "email",
    meta: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={title} />
    ),
    cell: ({ row }) => {
      return (
        <p
          className={cn(
            "before:absolute before:left-4 mobileS:before:left-[0.1rem] before:top-1/4 before:w-2/5 before:text-lg before:font-bold before:capitalize  lg:before:hidden",
            `before:content-['${title}']`,
          )}
          data-cell-email={row.getValue("email")}
        >
          {row.getValue("email")}
        </p>
      );
    },
  };

  return emailColumn;
}

export function phoneColumn(title = "telefone") {
  const phoneColumn: ColumnDef<Ticket> = {
    accessorKey: "phone",
    id: "phone",
    meta: "telefone",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={title} />
    ),
    cell: ({ row }) => {
      return (
        <p
          className={cn(
            "before:absolute before:left-4 mobileS:before:left-[0.1rem] before:top-1/4 before:w-2/5 before:text-lg before:font-bold before:capitalize  lg:before:hidden",
            `before:content-['${title}']`,
          )}
          data-cell-phone={row.getValue("phone")}
        >
          {row.getValue("phone")}
        </p>
      );
    },
  };

  return phoneColumn;
}

export function birthdateColumn(title = "data de nascimento") {
  const birthdateColumn: ColumnDef<Ticket> = {
    accessorKey: "birthdate",
    id: "birthdate",
    meta: "data de nascimento",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={title} />
    ),
    cell: ({ row }) => {
      return (
        <p
          className={cn(
            "before:absolute before:left-4 mobileS:before:left-[0.1rem] before:top-1/4 before:w-2/5 before:text-lg before:font-bold before:capitalize  lg:before:hidden",
            `before:content-['${title}']`,
          )}
          data-cell-birthdate={row.getValue("birthdate")}
        >
          {new Date(row.getValue("birthdate")).toLocaleDateString("pt-BR")}
        </p>
      );
    },
  };

  return birthdateColumn;
}

export function stateColumn(title = "estado") {
  const stateColumn: ColumnDef<Ticket> = {
    accessorKey: "state",
    id: "state",
    meta: "estado",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={title} />
    ),
    cell: ({ row }) => {
      return (
        <p
          className={cn(
            "before:absolute before:left-4 mobileS:before:left-[0.1rem] before:top-1/4 before:w-2/5 before:text-lg before:font-bold before:capitalize  lg:before:hidden",
            `before:content-['${title}']`,
          )}
          data-cell-state={row.getValue("state")}
        >
          {row.getValue("state")}
        </p>
      );
    },
  };

  return stateColumn;
}

export function cityColumn(title = "cidade") {
  const cityColumn: ColumnDef<Ticket> = {
    accessorKey: "city",
    id: "city",
    meta: "cidade",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={title} />
    ),
    cell: ({ row }) => {
      return (
        <p
          className={cn(
            "before:absolute before:left-4 mobileS:before:left-[0.1rem] before:top-1/4 before:w-2/5 before:text-lg before:font-bold before:capitalize  lg:before:hidden",
            `before:content-['${title}']`,
          )}
          data-cell-city={row.getValue("city")}
        >
          {row.getValue("city")}
        </p>
      );
    },
  };

  return cityColumn;
}

export function createdAtColumn(title = "data de criação") {
  const createdAtColumn: ColumnDef<Ticket> = {
    accessorKey: "created_at",
    id: "created_at",
    meta: "data de criação",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={title} />
    ),
    cell: ({ row }) => {
      return (
        <p
          className={cn(
            "before:absolute before:left-4 mobileS:before:left-[0.1rem] before:top-1/4 before:w-2/5 before:text-lg before:font-bold before:capitalize  lg:before:hidden",
            `before:content-['${title}']`,
          )}
          data-cell-created-at={row.getValue("created_at")}
        >
          {new Date(row.getValue("created_at")).toLocaleDateString("pt-BR")}
        </p>
      );
    },
  };

  return createdAtColumn;
}

export function statusColumn(title = "status") {
  const statusColumn: ColumnDef<Ticket> = {
    accessorKey: "status",
    id: "status",
    meta: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={title} />
    ),
    cell: ({ row }) => {
      const getBadgeVariant = (status: TicketStatus) => {
        switch (status) {
          case TicketStatus.approved:
            return "success";
          case TicketStatus.cancelled:
            return "destructive";
          case TicketStatus.pending:
            return "warning";
          default:
            return "default";
        }
      };
      return (
        <Badge
          className={cn(
            "before:absolute before:left-4 mobileS:before:left-[0.1rem] before:top-1/4 before:w-2/5 before:text-lg before:font-bold before:capitalize  lg:before:hidden",
            `before:content-['${title}']`,
          )}
          variant={getBadgeVariant(row.getValue("status"))}
          data-cell-status={row.getValue("status")}
        >
          {row.getValue("status")}
        </Badge>
      );
    },
  };

  return statusColumn;
}

export function usedAtColumn(title = "data de uso") {
  const usedAtColumn: ColumnDef<Ticket> = {
    accessorKey: "used_at",
    id: "used_at",
    meta: "data de uso",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={title} />
    ),
    cell: ({ row }) => {
      return (
        <p
          className={cn(
            "before:absolute before:left-4 mobileS:before:left-[0.1rem] before:top-1/4 before:w-2/5 before:text-lg before:font-bold before:capitalize  lg:before:hidden",
            `before:content-['${title}']`,
          )}
          data-cell-used-at={row.getValue("used_at")}
        >
          {new Date(row.getValue("used_at")).toLocaleDateString("pt-BR")}
        </p>
      );
    },
  };

  return usedAtColumn;
}

export function singleUseColumn(title = "uso único") {
  const singleUseColumn: ColumnDef<Ticket> = {
    accessorKey: "single_use",
    id: "single_use",
    meta: "uso único",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={title} />
    ),
    cell: ({ row }) => {
      return (
        <Badge
          variant={row.getValue("single_use") ? "destructive" : "success"}
          className={cn(
            "before:absolute before:left-4 mobileS:before:left-[0.1rem] before:top-1/4 before:w-2/5 before:text-lg before:font-bold before:capitalize  lg:before:hidden",
            `before:content-['${title}']`,
          )}
          data-cell-single-use={row.getValue("single_use")}
        >
          {row.getValue("single_use") ? "Sim" : "Não"}
        </Badge>
      );
    },
  };

  return singleUseColumn;
}

export function usedColumn(title = "usado") {
  const usedColumn: ColumnDef<Ticket> = {
    accessorKey: "used",
    id: "used",
    meta: "usado",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={title} />
    ),
    cell: ({ row }) => {
      return (
        <Badge
          variant={row.getValue("used") ? "destructive" : "success"}
          className={cn(
            "before:absolute before:left-4 mobileS:before:left-[0.1rem] before:top-1/4 before:w-2/5 before:text-lg before:font-bold before:capitalize  lg:before:hidden",
            `before:content-['${title}']`,
          )}
          data-cell-used={row.getValue("used")}
        >
          {row.getValue("used") ? "Sim" : "Não"}
        </Badge>
      );
    },
  };

  return usedColumn;
}
