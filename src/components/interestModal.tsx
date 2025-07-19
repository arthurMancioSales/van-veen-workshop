"use client";

import { Loader2 } from "lucide-react";
import type React from "react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface InterestModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

export function InterestModal({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="rounded-xl border border-gray-700 bg-gray-900 p-6 text-gray-50 sm:max-w-[475px]">
        <DialogHeader className="text-center">
          <DialogTitle className="mb-2 text-3xl font-bold text-white">
            Manifeste seu Interesse
          </DialogTitle>
          <DialogDescription className="text-lg text-gray-400">
            Entraremos em contato quando mais vagas estiverem disponíveis.
          </DialogDescription>
        </DialogHeader>
        
      </DialogContent>
    </Dialog>
  );
}
