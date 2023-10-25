import { contentType, extname, html } from "~/deps.ts";

export const Script = ({
	src,
}: { src: string }) => {
	return html`
<link rel="preload" as="script" href="${src}" />
<script src="${src}" defer></script>
    `;
};

// TODO -- meta | title

export const Stylesheet = ({
	href,
}: { href: string }) => {
	return html`
    <link rel="preload" href="${href}" as="style" />
    <link rel="stylesheet" href="${href}" />`;
};

export const Font = ({
	href,
}: { href: string }) => {
	const [as, ...ext] = contentType(extname(href))!.split("/");
	return html`<link rel="preload" as="${as}" href="${href}" type="${
		[as, ext].join("/")
	}" crossorigin />`;
};
