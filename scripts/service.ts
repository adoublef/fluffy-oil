import { Hono, serveStatic } from "~/deps.ts";

const serveScripts = serveStatic({
	root: "scripts/content",
	rewriteRequestPath(path: string) {
		return path.replace("/scripts", "");
	},
});

const app = new Hono();
app.use("*", serveScripts);

export { app };
