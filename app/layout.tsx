import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import { ThemeProvider } from "@/app/contexts/ThemeProvider";
//import { WalletContextProvider } from "@/app/contexts/WalletContextProvider";
//import { NextIntlClientProvider } from "next-intl";
//import { getMessages } from "next-intl/server";
import "./globals.css";

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    //const messages = await getMessages();

    return (
        <html lang="en" suppressHydrationWarning>
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
