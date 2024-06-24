import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "../../i18n";
import { QueryParamProvider } from "use-query-params";
import NextAdapterApp from "next-query-params/app";
import { StoreProvider } from "@/store/provider";
import { ConfigProvider } from "antd";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <QueryParamProvider adapter={NextAdapterApp}>
        <ConfigProvider>
          <Component {...pageProps} />
        </ConfigProvider>
      </QueryParamProvider>
    </StoreProvider>
  );
}
