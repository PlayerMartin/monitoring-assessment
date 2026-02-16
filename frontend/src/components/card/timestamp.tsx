import { Clock } from "lucide-react";

type TimestampProps = {
  timestamp: string;
};

export function Timestamp({ timestamp }: TimestampProps) {
  return (
    <div className="flex items-center gap-2 text-xs text-slate-400 pt-2 border-t border-slate-100">
      <Clock size={14} />
      <span>Last updated:</span>
      <span className="font-medium text-slate-500">
        {new Date(timestamp).toLocaleTimeString("cz-CZ")}
      </span>
      <span className="text-slate-300">|</span>
      <span className="text-slate-400">
        {new Date(timestamp).toLocaleDateString("cz-CZ")}
      </span>
    </div>
  );
}
