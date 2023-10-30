import { SignIn } from "@clerk/nextjs";

/**
 * Página de Login, utilizando o componente pronto do Clerk para realizar o processo.
 *
 * @returns {JSX.Element}
 */
export default function Page() {
  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <SignIn />
    </main>
  );
}
