import { type AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from '@clerk/themes';

import { api } from "@/utils/api";

import "@/styles/globals.css";
import Head from "next/head";
import { Inter } from 'next/font/google';
import { cn } from "@/utils/cn";
 
const inter = Inter({ subsets: ['greek'] });

const clerkTheme = {
  variables: {
    fontFamily: "Inter",
    colorBackground: "#0E1316",
    colorPrimary: "#0E1316",
    colorText: "#D9D9D9",
    colorAlphaShade: "#FFFFFF",
    colorTextSecondary: "#D9D9D9"
  },
  baseTheme: dark,
  elements: {
    footerActionLink: "text-white hover:text-[#D9D9D9]"
  }
}


const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider
      appearance={clerkTheme}
    >
      <Head>
        <link rel="shortcut icon" href="favicon.svg" type="image/svg" />
      </Head>
      <main className={cn("bg-darkA", inter.className)}>
        <Component {...pageProps} />
      </main>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
