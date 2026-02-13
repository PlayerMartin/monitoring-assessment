import { Node, Status } from "@/schemas/schemas";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import clsx from "clsx";
import { GoCpu } from "react-icons/go";

type NodeCardProps = {
  node: Node;
};

export function NodeCard({ node }: NodeCardProps) {
  return (
    <Card
      className={clsx(
        "border-2",
        node.status === Status.MAINTENANCE && "border-orange-400",
        node.status === Status.OFFLINE && "border-gray-600",

        node.status === Status.MAINTENANCE && "bg-orange-100",
        node.status === Status.OFFLINE && "bg-gray-300",
      )}
    >
      <CardHeader>
        <CardTitle>{node.name}</CardTitle>
        <CardDescription>
          <p>{node.id}</p>
          <p
            className={clsx(
              node.status === Status.MAINTENANCE && "text-orange-400",
              node.status === Status.OFFLINE && "text-red-600",
              node.status === Status.ONLINE && "text-green-600",
            )}
          >
            <strong>{node.status}</strong>
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row justify-between items-center">
          <div>
            <p>
              <span className="hidden md:inline">CPU: </span>
              {node.cpuUsage}%
            </p>
            <p>
              <span className="hidden md:inline">MEM: </span>
              {node.memoryUsage}
              GB
            </p>
            <p>
              {new Date(node.timestamp).toLocaleTimeString("cz-CZ") +
                " " +
                new Date(node.timestamp).toLocaleDateString("cz-CZ")}
            </p>
          </div>
          <div className="text-7xl text-red-500">
            {node.cpuUsage >= 80 && <GoCpu />}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
