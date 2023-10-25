import { contentType, Handler } from "~/deps.ts";

// ?family:wght400,700

// family=IBM+Plex+Mono:wght@400;700&display=optional&family=Lexend
export function handleFonts(): Handler {
	const stylesheet = `/* AUTO GENERATED */
@font-face {
    font-family: 'IBM Plex Mono';
    src: url('/fonts/4/ibm_plex_mono.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: optional;
}

@font-face {
    font-family: 'IBM Plex Mono';
    src: url('/fonts/7/ibm_plex_mono.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: optional;
}
    `;
	const headers = { "content-type": contentType(".css") };

	return async (c) => {
		// family Name:wght@400;700
        const search = c.req.queries();
		console.log( search);

		return c.text(stylesheet, 200, headers);
	};
}1
