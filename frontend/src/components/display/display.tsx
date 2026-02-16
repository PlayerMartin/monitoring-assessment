"use client";

import { useNodes } from "@/queries/node-query";
import { NodeCard } from "../card/node-card";
import { Status } from "@/schemas/schemas";
import { useState } from "react";
import { Activity } from "lucide-react";
import { DisplayHeader } from "./display-header";
import { FilterControls } from "./filter-controls";

export type FilterType = "ALL" | Status;

export default function Display() {
  const { data, isLoading, error } = useNodes();
  const [filter, setFilter] = useState<FilterType>("ALL");

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[50vh] text-red-500">
        Error: {error.message}
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[50vh] text-gray-500">
        No data available
      </div>
    );
  }

  const filteredData = data.filter((node) => {
    if (filter === "ALL") return true;
    return node.status === filter;
  });

  const onlineCount = data.filter((n) => n.status === Status.ONLINE).length;
  const offlineCount = data.filter((n) => n.status === Status.OFFLINE).length;
  const maintenanceCount = data.filter(
    (n) => n.status === Status.MAINTENANCE,
  ).length;

  return (
    <div className="container mx-auto p-6 space-y-8 max-w-7xl">
      <DisplayHeader
        onlineCount={onlineCount}
        offlineCount={offlineCount}
        maintenanceCount={maintenanceCount}
      />

      <FilterControls filter={filter} setFilter={setFilter} />

      <div className="min-h-[400px]">
        {filteredData.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400 bg-slate-50/50 rounded-2xl border-2 border-dashed border-slate-200">
            <Activity className="h-10 w-10 mb-3 opacity-20" />
            <p>No nodes found with status {filter}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredData.map((node) => (
              <div key={node.id} className="h-full">
                <NodeCard node={node} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
