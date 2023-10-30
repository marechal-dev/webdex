import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";

import { ptBR } from "@clerk/localizations";
import type React from "react";
import "./globals.css";

/**
 * Essa constante é responsável por realizar o carregamento da fonte Roboto,
 * proveniente do Google Fonts.
 */
const roboto = Roboto({
  preload: true,
  fallback: ["sans-serif"],
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

/**
 * Essa constante é utilizada para definir metadados da página, como seu título
 * e descrição para Motores de Busca.
 */
export const metadata: Metadata = {
  title: "WebDex",
  description: "The #1 Pokémon information app",
};

/**
 * Essa função atua como o principal layout da aplicação, ela envolve a aplicação
 * com configurações comuns, como a configuração do Clerk, a linguagem do HTML e
 * a marcação do corpo da página.
 *
 * @param {{ children: React.ReactNode }} - Component children items
 * @returns {JSX.Element}
 */
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
      <html lang="ptBR">
        <body className={roboto.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
