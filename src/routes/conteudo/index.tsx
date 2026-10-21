import { createFileRoute } from "@tanstack/react-router";

import { CabecalhoSecao } from "@/components/site/primitivos";
import { CardArtigo } from "@/components/site/secoes/Fechamento";
import { SITE } from "@/config/site";
import { ARTIGOS } from "@/content/artigos";

export const Route = createFileRoute("/conteudo/")({
  head: () => ({
    meta: [
      { title: `Conteúdo | ${SITE.nome}` },
      {
        name: "description",
        content:
          "Textos informativos sobre Direito de Família, Sucessões e organização patrimonial, por Claudia Althoff.",
      },
    ],
  }),
  component: ListaArtigos,
});

function ListaArtigos() {
  return (
    <section className="section-y bg-off">
      <div className="wrap">
        <CabecalhoSecao
          eyebrow="Conteúdo"
          titulo="Conhecimento jurídico para decisões mais conscientes."
        >
          Textos de caráter informativo sobre Direito de Família, Sucessões e organização
          patrimonial. A leitura não substitui a análise individual de cada caso.
        </CabecalhoSecao>
        <div className="flex flex-col gap-5">
          {ARTIGOS.map((a) => (
            <CardArtigo key={a.slug} artigo={a} />
          ))}
        </div>
      </div>
    </section>
  );
}
