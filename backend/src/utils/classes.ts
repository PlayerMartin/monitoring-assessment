export enum Status {
  ONLINE,
  OFFLINE,
  MAINTENANCE,
}

export type Node = {
  id: string;
  name: string;
  status: Status;
  cpuUsage: number;
  memoryUsage: number;
  timestamp: string;
};
