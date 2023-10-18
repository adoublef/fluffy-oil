import { Hono } from "~/deps.ts";
import { handleBlog } from "./routes/handle_blog.tsx";

const app = new Hono();
app.get("/:slug?", handleBlog());

export { app };
