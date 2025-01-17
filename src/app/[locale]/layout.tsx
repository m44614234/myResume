import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/tools/Footer";
import { Layout } from "@/components/Layout";
import { NextIntlClientProvider } from "next-intl";
import { Providers } from "../providers";
import { getMessages } from "next-intl/server";
import { Navbar } from "@/components/tools/Navbar";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  } ;
}
 export default async function LocalLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="font-ShabnamMedium">
        <Layout>
            <Providers>
              <NextIntlClientProvider messages={messages}>
                <Navbar />
                {children}
                <Footer />
              </NextIntlClientProvider>
            </Providers>
        </Layout>
      </body>
    </html>
  );
}
