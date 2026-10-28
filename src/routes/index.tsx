import { createFileRoute } from "@tanstack/react-router";

import { Autoridade, Hero, Sobre } from "@/components/site/secoes/Abertura";
import {
  Atuacao,
  Confianca,
  Diferenciais,
  Metodo,
  Situacoes,
} from "@/components/site/secoes/Atuacao";
import { CtaFinal, Faq, FAQ_SCHEMA } from "@/components/site/secoes/Fechamento";

// Título, descrição e og vêm de __root.tsx (src/config/site.ts).
export const Route = createFileRoute("/")({
  head: () => ({
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ_SCHEMA.map((q) => ({
            "@type": "Question",
            name: q.p,
            acceptedAnswer: { "@type": "Answer", text: q.r },
          })),
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Autoridade />
      <Sobre />
      <Atuacao />
      <Situacoes />
      <Diferenciais />
      <Metodo />
      <Confianca />
      <Faq />
      <CtaFinal />
    </>
  );
}
