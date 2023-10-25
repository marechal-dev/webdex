import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";

import { ptBR } from "@clerk/localizations";
import "./globals.css";

const roboto = Roboto({
  preload: true,
  fallback: ["sans-serif"],
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "WebDex",
  description: "The #1 Pokémon information app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: neobrutalism,
      }}
      localization={ptBR}
    >
      <html lang="en">
        <body className={roboto.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
