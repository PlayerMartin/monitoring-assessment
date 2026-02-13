import z from "zod";

export const StatusSchema = z.preprocess(
  (v) => {
    if (v === 0) return "ONLINE";
    if (v === 1) return "OFFLINE";
    if (v === 2) return "MAINTENANCE";
    return v;
  },
  z.enum(["ONLINE", "OFFLINE", "MAINTENANCE"]),
);

export enum Status {
  ONLINE = "ONLINE",
  OFFLINE = "OFFLINE",
  MAINTENANCE = "MAINTENANCE",
}

export const NodeSchema = z.object({
  id: z.string(),
  name: z.string(),
  status: StatusSchema,
  cpuUsage: z.number(),
  memoryUsage: z.number(),
  timestamp: z.iso.datetime(),
});

export const NodeArraySchema = z.array(NodeSchema);

export type Node = z.infer<typeof NodeSchema>;
