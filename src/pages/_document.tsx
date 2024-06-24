import { Html, Head, Main, NextScript } from "next/document";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Document() {
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
