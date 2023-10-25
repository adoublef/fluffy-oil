export async function serve(
	handler: { fetch: Deno.ServeHandler },
	opts?: Deno.ServeOptions,
): Promise<void> {
	if (opts?.port) {
		await bootServer(handler.fetch, opts);
	} else {
		let firstError;
		for (let port = 8000; port < 8020; port++) {
			try {
				await bootServer(handler.fetch, { ...opts, port });
				firstError = undefined;
				break;
			} catch (err) {
				if (err instanceof Deno.errors.AddrInUse) {
					// Throw first EADDRINUSE error
					// if no port is free
					if (!firstError) {
						firstError = err;
					}
					continue;
				}

				throw err;
			}
		}

		if (firstError) {
			throw firstError;
		}
	}
}

async function bootServer(
	handler: Deno.ServeHandler,
	opts: Deno.ServeOptions,
): Promise<void> {
	return await Deno.serve(opts, handler).finished;
}
