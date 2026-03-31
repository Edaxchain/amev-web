import Navbar from "@/app/_components/layout/Navbar";
import Footer from "@/app/_components/layout/Footer";
import { ThemeProvider } from "@/app/_contexts/ThemeProvider";
//import { WalletContextProvider } from "@/app/contexts/WalletContextProvider";
//import { NextIntlClientProvider } from "next-intl";
//import { getMessages } from "next-intl/server";
import "./globals.css";
import { Fraunces } from 'next/font/google'

const fraunces = Fraunces({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fraunces',
});

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    //const messages = await getMessages();

    return (
        <html lang="en" className={fraunces.variable} suppressHydrationWarning>
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {/*
                <NextIntlClientProvider messages={messages}>
                    <WalletContextProvider>
                    */}
                    <Navbar />

                    <main>{children}</main>

                    <Footer />
                    {/*
                    </WalletContextProvider>
                </NextIntlClientProvider>
                */}
                </ThemeProvider>
            </body>
        </html>
    );
}
