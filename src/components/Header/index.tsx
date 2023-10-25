import { UserButton, useAuth } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";

export function Header() {
  const { isSignedIn } = useAuth();

  return (
    <header className="flex w-full flex-col bg-valor-100 p-4">
      {!isSignedIn ? (
        <a
          href="/sign-in"
          className="text-white w-min rounded-lg bg-mystic-900 p-2 text-right text-2xl hover:cursor-pointer hover:brightness-90"
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
    </header>
  );
}
