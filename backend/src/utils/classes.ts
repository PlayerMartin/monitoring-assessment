export enum Status {
  ONLINE,
  OFFLINE,
  MAINTENANCE,
}

export class Node {
  id: string;
  name: string;
  status: Status;
  cpuUsage: number;
  memoryUsage: number;
  timestamp: string;

  constructor(
    id: string,
    name: string,
    status: Status,
    cpuUsage: number,
    memoryUsage: number,
    timestamp: string,
  ) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.cpuUsage = cpuUsage;
    this.memoryUsage = memoryUsage;
    this.timestamp = timestamp;
  }
}
