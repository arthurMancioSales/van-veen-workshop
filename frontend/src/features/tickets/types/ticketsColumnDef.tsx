"use client";
import { ColumnDef } from "@tanstack/react-table";

import { idColumn, selectColumn } from "@/components/ui/commonColumns";

import {
  nameColumn,
  birthdateColumn,
  cityColumn,
  createdAtColumn,
  emailColumn,
  phoneColumn,
  singleUseColumn,
  stateColumn,
  statusColumn,
  usedAtColumn,
  usedColumn,
} from "../components/table-columns/tickets";

import { Ticket } from "./tickets";

export const ticketsColumnsDef: ColumnDef<Ticket>[] = [
  selectColumn<Ticket>(),
  idColumn(),
  nameColumn(),
  emailColumn(),
  phoneColumn(),
  birthdateColumn(),
  statusColumn(),
  stateColumn(),
  cityColumn(),
  singleUseColumn(),
  usedColumn(),
  createdAtColumn(),
  usedAtColumn(),
];

// export function actionsColumn() {
//   const actionsColumn: ColumnDef<Olympiad> = {
//     id: "actions",
//     meta: "Ações",
//     header: () => {
//       return <h1>ações</h1>;
//     },
//     cell: ({ row }) => {
//       return (
//         <div className="flex w-fit flex-col gap-2 before:absolute before:top-1/4 before:left-4 before:w-2/5 before:text-lg before:font-bold before:capitalize before:content-['ações'] lg:flex-row lg:before:hidden">
//           <UpdateOlympiadModal olympiadId={row.getValue("id")}>
//             <Button
//               className="p-2 lg:size-8"
//               data-id={row.getValue("id")}
//               data-olympiad={JSON.stringify({
//                 edition: row.getValue("edition"),
//                 abbreviation: row.getValue("abbreviation"),
//                 name: row.getValue("name"),
//                 categories: row.getValue("categories"),
//                 description: row.getValue("description"),
//               })}
//               data-row-update-button={row.getValue("id")}
//             >
//               <Wrench className="mr-2 lg:mr-0 lg:h-fit lg:w-12" />
//               <small className="text-sm font-semibold lg:hidden">Editar</small>
//             </Button>
//           </UpdateOlympiadModal>
//           <RemoveOlympiadModal
//             olympiadId={row.getValue("id")}
//             olympiadName={row.getValue("name")}
//           >
//             <Button
//               variant={"destructive"}
//               className="p-2 lg:size-8"
//               data-id={row.getValue("id")}
//               data-row-remove-button={row.getValue("id")}
//             >
//               <Trash className="mr-2 lg:mr-0 lg:h-fit lg:w-12" />
//               <small className="text-sm font-semibold lg:hidden">Excluir</small>
//             </Button>
//           </RemoveOlympiadModal>
//         </div>
//       );
//     },
// //   };

//   return actionsColumn;
// }
