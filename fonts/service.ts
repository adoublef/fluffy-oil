import { Hono } from "~/deps.ts";
import { handleStatic } from "./routes/handle_static.ts";

const app = new Hono();

app.use("*", handleStatic());
// app.put("/woff", handleCompress())


export { app };
