"use client";

import { Node, Status } from "@/schemas/schemas";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import clsx from "clsx";
import { GoCpu } from "react-icons/go";

const COLUMNS: ColumnDef<Node>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex items-center gap-1"
        >
          ID
          {column.getIsSorted() === "asc" && <FaArrowUp />}
          {column.getIsSorted() === "desc" && <FaArrowDown />}
        </button>
      );
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="hidden md:flex items-center gap-1"
        >
          Name
          {column.getIsSorted() === "asc" && <FaArrowUp />}
          {column.getIsSorted() === "desc" && <FaArrowDown />}
        </button>
      );
    },
    cell: ({ row }) => {
      const name = row.getValue("name") as string;
      return <div className="hidden md:block">{name}</div>;
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex items-center text-center gap-1"
        >
          Status
          {column.getIsSorted() === "asc" && <FaArrowUp />}
          {column.getIsSorted() === "desc" && <FaArrowDown />}
        </button>
      );
    },
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <div
          className={clsx(
            "text-center",
            status === Status.MAINTENANCE && "text-orange-400",
            status === Status.OFFLINE && "text-red-600",
            status === Status.ONLINE && "text-green-600",
          )}
        >
          {status}
        </div>
      );
    },
  },
  {
    accessorKey: "cpuUsage",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex items-center gap-1"
        >
          CPU%
          {column.getIsSorted() === "asc" && <FaArrowUp />}
          {column.getIsSorted() === "desc" && <FaArrowDown />}
        </button>
      );
    },
    cell: ({ row }) => {
      const cpuUsage = row.getValue("cpuUsage") as number;
      return (
        <div className="flex flex-center justify-center text-center gap-1">
          {cpuUsage}
          <div className="text-red-500 text-3xl">
            {cpuUsage >= 80 && <GoCpu />}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "memoryUsage",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex items-center justify-center text-center gap-1"
        >
          Memory (GB)
          {column.getIsSorted() === "asc" && <FaArrowUp />}
          {column.getIsSorted() === "desc" && <FaArrowDown />}
        </button>
      );
    },
  },
  {
    accessorKey: "timestamp",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex items-center text-center gap-1"
        >
          Timestamp
          {column.getIsSorted() === "asc" && <FaArrowUp />}
          {column.getIsSorted() === "desc" && <FaArrowDown />}
        </button>
      );
    },
    cell: ({ row }) => {
      const timestamp = row.getValue("timestamp") as string;
      return (
        <div className="inline text-center">
          <span>{new Date(timestamp).toLocaleTimeString("cz-CZ")}</span>
          <span> </span>

          <span className="hidden md:inline">
            {new Date(timestamp).toLocaleDateString("cz-CZ")}
          </span>
          <span className="md:hidden">
            {new Date(timestamp).toLocaleDateString("cz-CZ", {
              day: "2-digit",
              month: "2-digit",
            })}
          </span>
        </div>
      );
    },
  },
];

interface DataTableProps {
  data: Node[];
}

export function NodeTable({ data }: DataTableProps) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const table = useReactTable({
    data,
    columns: COLUMNS,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  return (
    <div className="overflow-hidden rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className={clsx(
                  row.getValue("status") === Status.OFFLINE && "bg-gray-400 ",
                )}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="text-lg">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={COLUMNS.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
