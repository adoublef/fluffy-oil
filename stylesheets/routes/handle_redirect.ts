import { Handler } from "~/deps.ts";

export function handleRedirect(): Handler {
	return /* async */ (c) => {
		const { pathname, search, origin } = new URL(c.req.url);
		const location = new URL(pathname + ".css" + search, origin).href;
		return c.redirect(location);
	};
}