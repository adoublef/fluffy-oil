import { Handler, serveStatic } from "~/deps.ts";

export function handleStatic(): Handler {
	return serveStatic({
		root: "fonts/content",
		rewriteRequestPath: (path: string) => path.replace("/fonts", ""),
	});
}
