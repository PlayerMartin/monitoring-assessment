import { Activity } from "lucide-react";

type DisplayHeaderProps = {
  onlineCount: number;
  offlineCount: number;
  maintenanceCount: number;
};

export function DisplayHeader({
  onlineCount,
  offlineCount,
  maintenanceCount,
}: DisplayHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
          <Activity className="h-8 w-8 text-blue-500" />
          Node Monitor
        </h1>
        <p className="text-gray-500 mt-1">Real-time infrastructure dashboard</p>
      </div>

      <div className="flex gap-4 text-sm font-medium flex-wrap">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100/50 border border-green-200 text-green-700 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          {onlineCount} Online
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-100/50 border border-red-200 text-red-700 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-red-500" />
          {offlineCount} Offline
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100/50 border border-orange-200 text-orange-700 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-orange-500" />
          {maintenanceCount} Maintenance
        </div>
      </div>
    </div>
  );
}
