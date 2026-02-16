import express, { Request, Response } from "express";
import { Node } from "./utils/classes.js";
import { GenerateNodes, UpdateNodes } from "./utils/utils.js";

const app = express();
const port: number = 3000;

const NODES: Node[] = GenerateNodes(50);

setInterval(() => {
  UpdateNodes(NODES);
}, 1000);

app.get("/", (req: Request, res: Response) => {
  res.send("Access nodes api at /api/nodes");
});

app.get("/api/nodes", (req: Request, res: Response) => {
  res.send(JSON.stringify(NODES));
});

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});
