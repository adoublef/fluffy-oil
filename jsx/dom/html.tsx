import { html, HtmlEscapedString } from "~/deps.ts";

export const Html = ({
    head: { title },
    children,
}: {
    head: HeadProps,
    children?: HtmlEscapedString | HtmlEscapedString[] | undefined;
}): HtmlEscapedString => html`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link rel="preload" as="font" href="/fonts/4/space_grotesk.ttf" type="font/ttf" />
    <link rel="preload" as="font" href="/fonts/7/space_grotesk.ttf" type="font/ttf" />
    <link rel="preload" as="font" href="/fonts/4/lexend.ttf" type="font/ttf" />
    <link rel="preload" as="font" href="/fonts/7/lexend.ttf" type="font/ttf" />
    <link rel="preload" as="script" href="/scripts/htmx.min.js" />
    <link rel="preload" as="script" href="/scripts/hyperscript.min.js" />
    <link rel="stylesheet" href="/stylesheets/index.css">
    <script src="/scripts/htmx.min.js" defer></script>
    <script src="/scripts/hyperscript.min.js" defer></script>
</head>

<body hx-boost="true">${children}</body>

</html>
`;

export type HeadProps = {
    /**
     * 
     * The <title> HTML element defines the document's title that is 
     * shown in a browser's title bar or a page's tab. It only contains 
     * text; tags within the element are ignored.
     * 
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title)
     */
    title: string;
};
