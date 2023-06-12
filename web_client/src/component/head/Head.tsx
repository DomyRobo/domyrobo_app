import { MetaProvider, Title } from "@solidjs/meta";
import { Show } from "solid-js";

interface HeadProp {
  title?: string;
}

export default function Head(props: HeadProp) {
  return (
    <MetaProvider>
      <Show when={props.title}>
        <Title>{props.title} | Domyrobo Web Client</Title>
      </Show>
    </MetaProvider>
  );
}
