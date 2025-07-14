import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/tools/Footer";
import { Layout } from "@/components/Layout";
import { NextIntlClientProvider } from "next-intl";
import { Providers } from "../providers";
import { getMessages } from "next-intl/server";
import { Navbar } from "@/components/tools/Navbar";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "Mohammadreza Hajizadeh Sohi",
  description: "Resume to introduce Mohammadreza Hajizadeh Sohi",
  icons: {
    icon: [{ url: "/image/1.jpg" }],
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}


export default async function LocalLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={locale === "id" ? "font-ShabnamMedium" : "font-EchelonRg"}
      >
        <ToastContainer />
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
