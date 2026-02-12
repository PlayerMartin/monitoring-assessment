import { Status, Node } from "./classes";

export function randomStatus(): Status {
  const values = [Status.ONLINE, Status.OFFLINE, Status.MAINTENANCE];
  return values[Math.floor(Math.random() * values.length)];
}

export function GenerateNodes(count: number) {
  const nodes: Node[] = [];
  for (let i = 0; i < count; i++) {
    var status = randomStatus();
    nodes.push({
      id: `node-${i.toString().padStart(2, "0")}`,
      name: `Worker Node ${i.toString().padStart(2, "0")}`,
      status: status,
      cpuUsage: status == Status.OFFLINE ? 0 : Math.floor(Math.random() * 100),
      memoryUsage: status == Status.OFFLINE ? 0 : Math.floor(Math.random() * 2),
      timestamp: new Date().toISOString(),
    });
  }
  return nodes;
}

export function UpdateNodes(nodes: Node[]) {
  nodes
    .filter((n) => n.status != Status.OFFLINE)
    .forEach((n) => {
      var sign = Math.random() < 0.5 ? -1 : 1;

      n.cpuUsage = n.cpuUsage + sign * Math.floor(Math.random() * 5);
      if (n.cpuUsage < 0) {
        n.cpuUsage = 0;
      }
      if (n.cpuUsage > 100) {
        n.cpuUsage = 100;
      }

      n.memoryUsage = parseFloat(
        (n.memoryUsage + sign * Math.random() * 2).toFixed(2),
      );
      if (n.memoryUsage < 0.01) {
        n.memoryUsage = 0.01;
      }

      n.timestamp = new Date().toISOString();
    });
}
