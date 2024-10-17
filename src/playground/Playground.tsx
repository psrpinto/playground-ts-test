import { useEffect, useRef, useState } from "react";
import {
	PlaygroundClient,
	StartPlaygroundOptions,
	startPlaygroundWeb,
} from "@wp-playground/client";

export function Playground(props: { siteSlug: string }) {
	const { siteSlug } = props;
	const iframeRef = useRef<HTMLIFrameElement>(null);
	const [playgroundClient, setPlaygroundClient] =
		useState<PlaygroundClient>(null);

	useEffect(() => {
		const iframe = iframeRef.current;
		if (!iframe || playgroundClient) {
			return;
		}
		async function boot() {
			const options: StartPlaygroundOptions = {
				iframe: iframe!,
				remoteUrl: "https://playground.wordpress.net/remote.html",
			};
			const client = await startPlaygroundWeb(options);
			setPlaygroundClient(client);
		}
		boot().catch(console.error);
	}, [siteSlug, iframeRef, playgroundClient]);

	return <iframe key={siteSlug} title="Playground" ref={iframeRef} />;
}
