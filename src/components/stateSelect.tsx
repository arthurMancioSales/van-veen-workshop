import { useMemo } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/utils/cn";

export function StateSelect({
  className,
  open,
  setOpen,
  value,
  onValueChange,
}: {
  className?: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  value?: string;
  onValueChange?: (newValue: string) => void;
}) {
  const states = useMemo(() => {
    return [
      "AC",
      "AL",
      "AP",
      "AM",
      "BA",
      "CE",
      "DF",
      "ES",
      "GO",
      "MA",
      "MS",
      "MT",
      "MG",
      "PA",
      "PB",
      "PR",
      "PE",
      "PI",
      "RJ",
      "RN",
      "RS",
      "RO",
      "RR",
      "SC",
      "SP",
      "SE",
      "TO",
    ];
  }, []);

  return (
    <Select
      open={open}
      onOpenChange={setOpen}
      value={value && value}
      onValueChange={onValueChange && onValueChange}
    >
      <SelectTrigger className={cn("w-full", className)}>
        <SelectValue placeholder="Selecione um estado" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Estados</SelectLabel>
          {states.map((state) => (
            <SelectItem key={state} value={state}>
              {state}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
