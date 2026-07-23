import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@radix-ui/themes/styles.css';
import "./globals.css";
import { Theme } from "@radix-ui/themes";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Morgan E. Koch | Portfolio",
  description: "Software Engineer & App Dev Manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* 
          Adding appearance="inherit" and letting Radix sync with 
          the document's dark class ensures it doesn't block background updates.
        */}
        <Theme accentColor="indigo" grayColor="slate" radius="large" appearance="inherit">
          {children}
        </Theme>
      </body>
    </html>
  );
}