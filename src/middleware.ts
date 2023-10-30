import { authMiddleware } from "@clerk/nextjs";

/**
 * Essa é uma configuração para permitir acesso público as rotas listadas abaixo.
 */
export default authMiddleware({
  publicRoutes: ["/", "/sign-in", "/sign-out"],
});

/**
 * Essa é uma configuração de Expressão regular que captura as chamadas de rotas
 * para evitar acesso a rotas privadas (que não estão declaradas acima).
 */
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
