import { SignUp } from "@clerk/nextjs";

/**
 * Página de cadastro, utilizando o componente pronto do Clerk para realizar o processo.
 *
 * @returns {JSX.Element}
 */
export default function Page() {
  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <SignUp />
    </main>
  );
}
