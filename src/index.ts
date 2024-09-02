import {PlaygroundClient, startPlaygroundWeb} from "@wp-playground/client";

const iframe = 'foo' as unknown as HTMLIFrameElement;
const client: PlaygroundClient = startPlaygroundWeb({iframe, remoteUrl: ""});
