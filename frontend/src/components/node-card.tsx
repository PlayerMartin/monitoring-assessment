import { Node, Status } from "@/schemas/schemas";
import clsx from "clsx";
import { Timestamp } from "./card/timestamp";
import { MemoryCard } from "./card/memory-card";
import { CpuCard } from "./card/cpu-card";

type NodeCardProps = {
  node: Node;
};

export function NodeCard({ node }: NodeCardProps) {
  const isHighCpu = node.cpuUsage >= 80;

  const statusConfig = {
    [Status.ONLINE]: {
      color: "bg-green-500",
      textColor: "text-green-700",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      label: "Online",
    },
    [Status.OFFLINE]: {
      color: "bg-red-500",
      textColor: "text-red-700",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      label: "Offline",
    },
    [Status.MAINTENANCE]: {
      color: "bg-orange-500",
      textColor: "text-orange-700",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      label: "Maintenance",
    },
  };

  const config = statusConfig[node.status];

  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-xl border bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group",
        node.status === Status.OFFLINE ? "opacity-75" : "",
        isHighCpu && node.status === Status.ONLINE
          ? "ring-2 ring-red-400 ring-offset-2"
          : "",
      )}
    >
      {isHighCpu && node.status !== Status.OFFLINE && (
        <div className="absolute top-0 right-0 p-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
        </div>
      )}

      <div className="p-5 border-b border-slate-100 bg-slate-50/50">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3
              className={clsx(
                "font-bold text-lg  tracking-tight leading-none mb-1",
                node.status === Status.OFFLINE
                  ? "text-gray-500"
                  : "text-slate-800",
              )}
            >
              {node.name}
            </h3>
            <p
              className="text-xs font-mono text-slate-400 truncate max-w-[150px]"
              title={node.id}
            >
              {node.id}
            </p>
          </div>
          <div
            className={clsx(
              "flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border shadow-sm",
              config.bgColor,
              config.textColor,
              config.borderColor,
            )}
          >
            <span className={clsx("w-1.5 h-1.5 rounded-full", config.color)} />
            {config.label}
          </div>
        </div>
      </div>

      <div className="p-5 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <CpuCard isHighCpu={false} cpuUsage={node.cpuUsage} />

          <MemoryCard memoryUsage={node.memoryUsage} />
        </div>

        <Timestamp timestamp={node.timestamp} />
      </div>
    </div>
  );
}
