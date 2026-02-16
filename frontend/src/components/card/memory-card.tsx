import { HardDrive } from "lucide-react";

type MemoryCardProps = {
  memoryUsage: number;
};

export function MemoryCard({ memoryUsage }: MemoryCardProps) {
  return (
    <div className="flex flex-col p-3 rounded-lg bg-slate-50 border border-slate-100 group-hover:bg-indigo-50/50 group-hover:border-indigo-100 transition-colors">
      <div className="flex items-center gap-2 text-slate-500 mb-1">
        <HardDrive size={16} />
        <span className="text-xs font-medium uppercase tracking-wider">
          Mem
        </span>
      </div>
      <div className="text-xl font-bold text-slate-700">
        {memoryUsage}
        <span className="text-xs font-normal text-slate-400">GB</span>
      </div>
    </div>
  );
}
