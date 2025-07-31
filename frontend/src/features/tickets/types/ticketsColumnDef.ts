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
  paymentIdColumn,
} from "../components/table-columns/tickets";

import { Ticket } from "./tickets";

export const ticketsColumnsDef: ColumnDef<Ticket>[] = [
  selectColumn<Ticket>(),
  idColumn(),
  nameColumn(),
  emailColumn(),
  phoneColumn(),
  birthdateColumn(),
  paymentIdColumn(),
  statusColumn(),
  stateColumn(),
  cityColumn(),
  singleUseColumn(),
  usedColumn(),
  createdAtColumn(),
  usedAtColumn(),
];
