import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Cabecalho } from "@/components/site/Cabecalho";
import { botaoVariants } from "@/components/site/primitivos";
import { Rodape, WhatsappFlutuante } from "@/components/site/Rodape";
import { CONTATO, instagramUrl, SITE } from "@/config/site";

/** Dados estruturados (schema.org) do escritório */
const schemaEscritorio = {
  "@context": "https://schema.org",
  "@type": "Attorney",
  name: SITE.nome,
  description:
    "Advocacia especializada em Direito de Família e Sucessões, com atuação estratégica também em Direito Civil. Florianópolis, SC.",
  ...(SITE.url ? { url: SITE.url } : {}),
  telephone: `+${CONTATO.whatsapp}`,
  email: CONTATO.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTATO.enderecoRua,
    addressLocality: CONTATO.cidade,
    addressRegion: CONTATO.uf,
    addressCountry: "BR",
  },
  areaServed: { "@type": "City", name: CONTATO.cidade },
  sameAs: [instagramUrl],
  knowsAbout: [
    "Direito das Sucessões",
    "Inventário",
    "Partilha",
    "Herança",
    "Testamento",
    "Planejamento sucessório",
    "Organização e proteção do patrimônio familiar",
    "Conflitos sucessórios",
    "Direito de Família",
    "Divórcio",
    "Dissolução de união estável",
    "Partilha de bens",
    "Guarda",
    "Convivência familiar",
    "Alimentos",
    "Direito Civil",
    "Contratos",
    "Responsabilidade civil",
    "Direito imobiliário",
    "Usucapião",
    "Locação",
    "Condomínio",
    "Cobrança e execução de dívidas",
  ],
  employee: {
    "@type": "Person",
    name: "Claudia Althoff",
    jobTitle: "Advogada",
    hasCredential: [
      { "@type": "EducationalOccupationalCredential", credentialCategory: "Mestrado" },
      { "@type": "EducationalOccupationalCredential", credentialCategory: "Doutorado" },
    ],
    identifier: CONTATO.oab,
  },
};

function NotFoundComponent() {
  return (
    <section className="section-y flex min-h-[60vh] items-center bg-off">
      <div className="wrap text-center">
        <span className="eyebrow">Erro 404</span>
        <h1 className="mx-auto mt-4 max-w-[20ch] text-h2 text-petroleo">Página não encontrada.</h1>
        <div aria-hidden="true" className="filete mx-auto" />
        <p className="mx-auto max-w-[46ch] text-texto-2">
          O endereço acessado não existe ou foi alterado.
        </p>
        <div className="mt-10">
          <Link to="/" className={botaoVariants({ variante: "contorno" })}>
            Voltar ao início
          </Link>
        </div>
      </div>
    </section>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-off px-4">
      <div className="max-w-md text-center">
        <h1 className="text-h2 text-petroleo">Não foi possível carregar a página</h1>
        <div aria-hidden="true" className="filete mx-auto" />
        <p className="text-texto-2">Tente recarregar ou volte para o início.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className={botaoVariants({ variante: "ouro" })}
          >
            Tentar novamente
          </button>
          <a href="/" className={botaoVariants({ variante: "contorno" })}>
            Início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: SITE.titulo },
      { name: "description", content: SITE.descricao },
      { name: "author", content: SITE.nome },
      { name: "theme-color", content: SITE.themeColor },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: SITE.nome },
      { property: "og:title", content: SITE.titulo },
      { property: "og:description", content: SITE.descricaoCurta },
      // og:image/og:url só entram quando SITE.url estiver preenchido (precisam de URL absoluta).
      // Até lá, a hospedagem do Lovable injeta a prévia de compartilhamento.
      ...(SITE.url
        ? [
            { property: "og:url", content: SITE.url },
            { property: "og:image", content: `${SITE.url}${SITE.ogImage}` },
          ]
        : []),
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Karla:wght@300;400;500;600&display=swap",
      },
      // Ícones em caminho próprio (/icones/): a hospedagem do Lovable substitui o
      // /favicon.ico pelo "site icon" das configurações de publicação.
      { rel: "icon", href: "/icones/ca-32.png?v=2", type: "image/png", sizes: "32x32" },
      { rel: "icon", href: "/icones/ca-48.png?v=2", type: "image/png", sizes: "48x48" },
      { rel: "icon", href: "/icones/ca-192.png?v=2", type: "image/png", sizes: "192x192" },
      { rel: "apple-touch-icon", href: "/icones/ca-180.png?v=2", sizes: "180x180" },
      { rel: "manifest", href: "/icones/site.webmanifest" },
      ...(SITE.url ? [{ rel: "canonical", href: SITE.url }] : []),
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(schemaEscritorio) }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Cabecalho />
      <main id="topo">
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>
      <Rodape />
      <WhatsappFlutuante />
    </QueryClientProvider>
  );
}
