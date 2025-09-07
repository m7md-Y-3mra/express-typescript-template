import "module-alias/register";
import { PORT } from "./config/env";
import { createServer } from "./server";

const server = createServer();

server
  .listen(PORT, () => console.log(`Server running on port ${PORT}`))
  .on("error", (err: Error) => {
    console.error("Failed to start server:", err.message);
    process.exit(1);
  });
