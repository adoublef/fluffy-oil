import { html, HtmlEscapedString } from "~/deps.ts";
import { Head } from "~/jsx/dom/head.tsx";

export const Html = ({
	head = <Head />,
	children,
}: {
	head?: HtmlEscapedString;
	children?: HtmlEscapedString | HtmlEscapedString[] | undefined;
}): HtmlEscapedString => {
	return html`
        <!DOCTYPE html>
        <html lang="en">${head}<body hx-boost="true">${children}</body></html>
    `;
};
