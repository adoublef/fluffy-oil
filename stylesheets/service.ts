import { Hono, serveStatic } from "~/deps.ts";

const serveStylesheets = serveStatic({
	root: "stylesheets/content",
	rewriteRequestPath(path: string) {
		return path.replace("/stylesheets", "");
	},
});

const app = new Hono();
app.use("*", serveStylesheets);
// TODO -- font or font.css should work here
app.get("/fonts", (_) => new Response("font-family"));

export { app };
