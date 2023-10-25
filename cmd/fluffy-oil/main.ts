import { cors, etag, Hono, serve } from "~/deps.ts";
import { handleIndex } from "./handle_index.tsx";
import { fonts } from "~/fonts.ts";
import { scr } from "~/scripts.ts";
import { css } from "~/stylesheets.ts";
import { blog } from "~/blog.ts";

if (import.meta.main) {
	const app = new Hono();
	app.use("*", etag({ weak: true }));
	app.use("*", cors());
	app.get("/", handleIndex());
	{
		app.route("/blog", blog);
		app.route("/scripts", scr);
		app.route("/stylesheets", css);
		app.route("/fonts", fonts);
	}
	await serve(app, { port: 4507 });
}
