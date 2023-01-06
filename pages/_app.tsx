import Layout from "../components/Layout";
import { ApolloProvider } from "@apollo/client";
import contentful from "../services/contentful";
import { Lora, Raleway } from "@next/font/google";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";

const lora = Lora({
  variable: "--font-lora",
  weight: "700",
});
const raleway = Raleway({
  variable: "--font-raleway",
  weight: ["400", "600", "800"],
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ApolloProvider client={contentful}>
        <div className={`${lora.variable} ${raleway.variable} font-sans`}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default MyApp;
