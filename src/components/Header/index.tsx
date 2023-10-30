import { UserButton, auth } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";

/**
 * Esse é o cabeçalho das páginas da aplicação. Ele contém uma lógica simples para
 * renderizar condicionalmente o botão do usuário ou o botão de entrar baseado no estado
 * da autenticação do usuário
 *
 * @returns {JSX.Element}
 */
export function Header() {
  const { userId } = auth();

  return (
    <header className="grid max-h-20 w-full grid-cols-2 items-center bg-valor-100 px-4 py-6">
      <div className="self-center justify-self-start">
        <span className="text-left text-lg font-bold italic">WebDex</span>
      </div>
      <div className="self-center justify-self-end">
        {!userId ? (
          <a
            href="/sign-in"
            className="w-min rounded-lg bg-mystic-900 p-2 text-right text-2xl text-white hover:cursor-pointer hover:brightness-90"
          >
            Entrar
          </a>
        ) : (
          <UserButton
            appearance={{
              baseTheme: neobrutalism,
            }}
            afterSignOutUrl="/"
          />
        )}
      </div>
    </header>
  );
}
