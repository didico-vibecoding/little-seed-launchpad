import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { Eyebrow, Filete } from "@/components/site/primitivos";
import { CONTATO, SITE, whatsappUrl } from "@/config/site";
import { getArtigo } from "@/content/artigos";

export const Route = createFileRoute("/conteudo/$slug")({
  loader: ({ params }) => {
    const artigo = getArtigo(params.slug);
    if (!artigo) throw notFound();
    return { artigo };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.artigo;
    if (!a) return {};
    return {
      meta: [
        { title: `${a.titulo} | ${SITE.nome}` },
        { name: "description", content: a.descricao },
        { property: "og:type", content: "article" },
        { property: "og:title", content: a.titulo },
        { property: "og:description", content: a.descricao },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: a.titulo,
            description: a.descricao,
            articleSection: a.tema,
            inLanguage: "pt-BR",
            ...(a.publicadoEm ? { datePublished: a.publicadoEm } : {}),
            ...(SITE.url ? { url: `${SITE.url}/conteudo/${a.slug}` } : {}),
            author: {
              "@type": "Person",
              name: "Claudia Althoff",
              jobTitle: "Advogada",
              identifier: CONTATO.oab,
            },
            publisher: { "@type": "Organization", name: SITE.nome },
          }),
        },
      ],
    };
  },
  component: PaginaArtigo,
});

function PaginaArtigo() {
  const { artigo } = Route.useLoaderData();

  return (
    <article className="bg-off">
      <header className="border-b border-linha bg-neutro">
        <div className="wrap py-[clamp(3rem,7vw,5rem)]">
          <Link
            to="/conteudo"
            className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-texto-2 no-underline hover:text-ouro-escuro"
          >
            ← Conteúdo
          </Link>
          <Eyebrow className="mt-8">{artigo.tema}</Eyebrow>
          <h1 className="mt-4 max-w-[30ch] text-h2 text-petroleo">{artigo.titulo}</h1>
          <Filete />
          <p className="max-w-[62ch] text-[1.06rem] leading-[1.6] text-texto-2">{artigo.lead}</p>
        </div>
      </header>

      <div className="wrap pt-4 pb-[clamp(3.5rem,8vw,6.5rem)]">
        {artigo.corpo.map((b, i) =>
          b.tipo === "h2" ? (
            <h2
              key={i}
              className="mt-9 max-w-[34ch] font-serif text-[1.28rem] font-medium leading-[1.25] text-petroleo"
            >
              {b.texto}
            </h2>
          ) : (
            <p key={i} className="mt-[1.15rem] max-w-[68ch] text-texto-2">
              {b.texto}
            </p>
          ),
        )}
        <p className="mt-9 max-w-[68ch] border-t border-linha pt-6 text-[0.95rem] text-texto-2">
          Para avaliar como esses pontos se aplicam à sua situação,{" "}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener"
            className="border-b border-ouro font-semibold text-ouro-escuro no-underline hover:text-petroleo"
          >
            converse com a Dra. Claudia Althoff
          </a>
          .
        </p>
      </div>
    </article>
  );
}
