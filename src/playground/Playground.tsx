import { useRef } from "react";

export function Playground(props: { siteSlug: string }) {
	const { siteSlug } = props;
	const iframeRef = useRef<HTMLIFrameElement>(null);
	return <iframe key={siteSlug} title="Playground" ref={iframeRef} />;
}
