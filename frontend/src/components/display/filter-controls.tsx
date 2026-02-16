import { Status } from "@/schemas/schemas";
import clsx from "clsx";
import { FilterType } from "./display";

type FilterControlsProps = {
  setFilter: (status: FilterType) => void;
  filter: FilterType;
};

export function FilterControls({ setFilter, filter }: FilterControlsProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
      <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
        Filter by Status:
      </div>

      <div className="flex flex-wrap gap-2">
        {(["ALL", ...Object.values(Status)] as const).map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={clsx(
              "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-sm",
              filter === status
                ? "bg-slate-900 text-white shadow-md scale-105"
                : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300",
            )}
          >
            {status === "ALL"
              ? "All Nodes"
              : status.charAt(0) + status.slice(1).toLowerCase()}
          </button>
        ))}
      </div>
    </div>
  );
}
