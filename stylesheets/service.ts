import { Hono } from "~/deps.ts";
import { handleFonts } from "./routes/handle_fonts.ts";
import { handleRedirect } from "./routes/handle_redirect.ts";
import { handleStatic } from "./routes/handle_static.ts";

const app = new Hono();
// TODO -- font or font.css should work here
app.get("/fonts", handleRedirect());
app.get("/fonts.css", handleFonts());
app.use("*", handleStatic());

export { app };
