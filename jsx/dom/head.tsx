import { HtmlEscapedString, memo } from "~/deps.ts";

export const Head = memo((props: {
	children?: HtmlEscapedString | HtmlEscapedString[] | undefined;
}): HtmlEscapedString => {
	return (
		<head>
			<meta charset="UTF-8" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0"
			/>
			{props.children}
			<link rel="preload" as="script" href="/scripts/htmx.min.js" />
			<script src="/scripts/htmx.min.js" defer></script>
			<link
				rel="preload"
				as="script"
				href="/scripts/hyperscript.min.js"
			/>
			<script src="/scripts/hyperscript.min.js" defer></script>
		</head>
	);
});
