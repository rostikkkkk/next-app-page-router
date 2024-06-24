import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "../../i18n";
import AntdStyledComponentsRegistry from "@/AntdStyledComponentsRegistry";
import { QueryParamProvider } from "use-query-params";
import NextAdapterApp from "next-query-params/app";
import { StoreProvider } from "@/store/provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <QueryParamProvider adapter={NextAdapterApp}>
        <AntdStyledComponentsRegistry>
          <Component {...pageProps} />
        </AntdStyledComponentsRegistry>
      </QueryParamProvider>
    </StoreProvider>
  );
}
