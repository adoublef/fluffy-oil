import { Handler, serveStatic } from "~/deps.ts";

export function handleStatic(): Handler {
	return serveStatic({
		root: "stylesheets/content",
		rewriteRequestPath: (path: string) => path.replace("/stylesheets", ""),
	});
}
