import { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "@/components/ui/data-table/dataTableHeader";
import { cn } from "@/utils/cn";

import { Lead } from "../../types/leads";

export function nameColumn(title = "nome") {
  const nameColumn: ColumnDef<Lead> = {
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
  const emailColumn: ColumnDef<Lead> = {
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
  const phoneColumn: ColumnDef<Lead> = {
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
  const birthdateColumn: ColumnDef<Lead> = {
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
  const stateColumn: ColumnDef<Lead> = {
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
  const cityColumn: ColumnDef<Lead> = {
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
  const createdAtColumn: ColumnDef<Lead> = {
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
