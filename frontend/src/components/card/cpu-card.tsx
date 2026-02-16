import clsx from "clsx";
import { AlertTriangle, Cpu } from "lucide-react";

type CpuCardProps = { isHighCpu: boolean; cpuUsage: number };

export function CpuCard({ isHighCpu, cpuUsage }: CpuCardProps) {
  return (
    <div
      className={clsx(
        "flex flex-col p-3 rounded-lg border transition-colors",
        isHighCpu
          ? "bg-red-50 border-red-100"
          : "bg-slate-50 border-slate-100 group-hover:bg-blue-50/50 group-hover:border-blue-100",
      )}
    >
      <div className="flex items-center gap-2 text-slate-500 mb-1">
        <Cpu size={16} className={isHighCpu ? "text-red-500" : ""} />
        <span className="text-xs font-medium uppercase tracking-wider">
          CPU
        </span>
      </div>
      <div
        className={clsx(
          "text-xl font-bold",
          isHighCpu ? "text-red-600" : "text-slate-700",
        )}
      >
        {cpuUsage}%
      </div>
      {isHighCpu && (
        <div className="text-[10px] font-bold text-red-500 flex items-center gap-1 mt-1">
          <AlertTriangle size={10} /> High Load
        </div>
      )}
    </div>
  );
}
