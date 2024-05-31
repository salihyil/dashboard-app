"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Transaction = {
  type: string;
  location: string;
  rental: string;
  ipcount: string;
  purpose: string;
  date: Date;
};

const ActionsCell = ({ transaction }: { transaction: Transaction }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownMenu onOpenChange={handleToggle}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className={`${isOpen ? "text-[#4359CA] font-semibold" : "text-black"} `}>
          Actions
          {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuItem onClick={() => console.log(transaction.ipcount)}>Processing</DropdownMenuItem>
        <DropdownMenuItem onClick={() => console.log(transaction.ipcount)}>In Progress</DropdownMenuItem>
        <DropdownMenuItem onClick={() => console.log(transaction.ipcount)}>Completed</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "rental",
    header: "Rental",
  },
  {
    accessorKey: "ipcount",
    header: "IP Count",
  },
  {
    accessorKey: "purpose",
    header: "Purpose",
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      const date = new Date(row.original.date);
      const formattedDate = date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
      return formattedDate;
    },
  },
  {
    id: "actions",
    header: "Actions",
    enableHiding: false,
    cell: ({ row }) => <ActionsCell transaction={row.original} />,
  },
];
