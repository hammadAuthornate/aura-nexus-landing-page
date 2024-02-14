import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import ThemeProviderComponent from "./ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aural Nexus",
  description: "PRODUCTIVITY REDEFINED. LEARN MORE IN THE VOICES YOU LIKE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProviderComponent>
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </ThemeProviderComponent>
      </body>
    </html>
  );
}
