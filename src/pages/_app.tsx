import { type AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";

import { api } from "@/utils/api";

import "@/styles/globals.css";
import Head from "next/head";
import { Inter } from 'next/font/google';
import { cn } from "@/utils/cn";
 
const inter = Inter({ subsets: ['latin'] });

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider>
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
