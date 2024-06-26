import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "../../i18n";
import { QueryParamProvider } from "use-query-params";
import NextAdapterApp from "next-query-params/app";
import { ConfigProvider } from "antd";
import { wrapper } from "@/store/store";

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryParamProvider adapter={NextAdapterApp}>
      <ConfigProvider>
        <Component {...pageProps} />
      </ConfigProvider>
    </QueryParamProvider>
  );
}
export default wrapper.withRedux(App);
