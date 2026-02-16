"use server";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:3000";

export async function GetNodes() {
  const res = await fetch(`${BACKEND_URL}/api/nodes`);

  if (!res.ok) {
    throw new Error(`Failed to fetch nodes: ${res.statusText}`);
  }

  return res.json();
}
