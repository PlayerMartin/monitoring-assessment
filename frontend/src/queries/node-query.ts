import { GetNodes } from "@/actions/node-actions";
import { NodeArraySchema } from "@/schemas/schemas";
import { useQuery } from "@tanstack/react-query";

async function GetNodesQueryFn() {
  const nodes = await GetNodes();

  const res = NodeArraySchema.safeParse(nodes);

  if (res.error) {
    console.error("Invalid data schema received" + res.error);
    return [];
  }
  return res.data;
}

export function useNodes() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["nodes"],
    queryFn: () => GetNodesQueryFn(),
    refetchInterval: 1000,
  });

  return { data, isLoading, error };
}
