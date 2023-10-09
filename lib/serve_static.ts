import { Handler, serveStatic as ss } from "~/deps.ts";

export function serveStatic(opts: { root: string; replace: string|RegExp; }): Handler {
    return ss({ root: opts.root, rewriteRequestPath: (path) => path.replace(opts.replace, "") });
}