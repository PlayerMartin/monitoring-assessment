"use server";

export async function GetNodes() {
  const res = await fetch("http://localhost:3000/api/nodes");

  if (!res.ok) {
    throw new Error(`Failed to fetch nodes: ${res.statusText}`);
  }

  return res.json();
}
