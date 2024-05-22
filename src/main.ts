import "./instrumentation";
import { PalicoAPIServer } from "@palico-ai/app";
const PORT = 8000;

const run = async () => {
  const server = PalicoAPIServer.create({ enableDevMode: true });
  await server.start(PORT);
};

run();