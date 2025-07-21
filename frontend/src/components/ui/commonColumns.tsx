import { ColumnDef } from "@tanstack/react-table";
import { Clipboard } from "lucide-react";
import { toast } from "sonner";

import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/utils/cn";

import { Button } from "./button";
import { DataTableColumnHeader } from "./data-table/dataTableHeader";

export function idColumn<T>(title = "id") {
  const idColumn: ColumnDef<T> = {
    accessorKey: "id",
    id: "id",
    meta: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={title} />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center justify-between gap-2">
          <p
            className={cn(
              "before:content-['id'] before:absolute mobileS:before:left-[0.1rem] before:left-4 before:top-1/4 before:w-2/5 before:text-lg before:font-bold before:capitalize  lg:before:hidden",
              `before:content-['${title}'] before:pointer-events-none line-clamp-1`,
            )}
            data-cell-id={row.getValue("id")}
          >
            {row.getValue("id")}
          </p>
          <Button
            className="h-8 w-fit p-2"
            onClick={() => {
              navigator.clipboard.writeText(row.getValue("id"));
              toast.success("Id copiado com sucesso!");
            }}
            title="Copiar"
          >
            <Clipboard className=" size-4" />
          </Button>
        </div>
      );
    },
  };

  return idColumn;
}

export function selectColumn<T>(title = "selecionar") {
  const selectColumn: ColumnDef<T> = {
    id: "select",
    header: ({ table }) => (
      <div className={"flex w-fit items-center space-x-2"}>
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Selecionar tudo"
          className="border-primary-foreground"
          title={title}
        />
      </div>
    ),
    cell: ({ row }) => (
      <div
        className={cn(
          "before:content-['selecionar'] flex items-center space-x-2 w-fit before:absolute before:left-4 before:top-1/4 before:w-2/5 before:text-lg before:font-bold before:capitalize lg:before:hidden",
          `before:content-['${title}'] before:pointer-events-none`,
        )}
      >
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Selecionar linha"
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
    size: 50,
  };

  return selectColumn;
}
