import Document, { Html, Head, Main, NextScript } from "next/document";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { createCache, extractStyle, StyleProvider } from "@ant-design/cssinjs";
import type { DocumentContext } from "next/document";
export default function MyDocument() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 mb-12 flex justify-center">
          <Main />
        </main>
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const cache = createCache();
  const originalRenderPage = ctx.renderPage;
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) =>
        (
          <StyleProvider cache={cache}>
            <App {...props} />
          </StyleProvider>
        ),
    });

  // @ts-ignore
  const initialProps = await Document.getInitialProps(ctx);
  const style = extractStyle(cache, true);
  return {
    ...initialProps,
    styles: (
      <>
        {initialProps.styles}
        <style dangerouslySetInnerHTML={{ __html: style }} />
      </>
    ),
  };
};
