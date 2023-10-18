import { Hono, serveStatic } from "~/deps.ts";

const serveFonts = serveStatic({
	root: "fonts/content",
	rewriteRequestPath(path: string) {
		return path.replace("/fonts", "");
	},
});

const app = new Hono();
app.use("*", serveFonts);
app.get("/family", (_) => new Response("family"));

export { app };
