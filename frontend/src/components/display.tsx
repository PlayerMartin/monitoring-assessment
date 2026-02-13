"use client";

import { useNodes } from "@/queries/node-query";
import { NodeCard } from "./node-card";
import { Table } from "./ui/table";
import { NodeTable } from "./node-table";

export default function Display() {
  const { data, isLoading, error } = useNodes();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (data === undefined) return <div>Error: Invalid Data</div>;

  return (
    <NodeTable data={data} />
    // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
    //   {data.map((card) => (
    //     <NodeCard key={card.id} node={card} />
    //   ))}
    // </div>
  );
}
