"use client";
import { ColumnDef } from "@tanstack/react-table";

import { idColumn, selectColumn } from "@/components/ui/commonColumns";

import {
  birthdateColumn,
  cityColumn,
  createdAtColumn,
  emailColumn,
  nameColumn,
  phoneColumn,
  stateColumn,
} from "../components/table-columns/leads";

import { Lead } from "./leads";

export const leadsColumnsDef: ColumnDef<Lead>[] = [
  selectColumn<Lead>(),
  idColumn(),
  nameColumn(),
  emailColumn(),
  phoneColumn(),
  birthdateColumn(),
  stateColumn(),
  cityColumn(),
  createdAtColumn(),
];
