import "./instrumentation";
import { PalicoAPIServer } from "@palico-ai/app";
import app from "./app";
const PORT = 8000;

const run = async () => {
  const server = PalicoAPIServer.create({ app, enableDevMode: true });
  await server.start(PORT);
};

run();
