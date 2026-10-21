import { cn } from "@/lib/utils";

import { BotaoWhatsapp, CabecalhoSecao, Eyebrow, ListaLosango, Reveal } from "../primitivos";

/* ===================== ÁREAS DE ATUAÇÃO ===================== */
const SUCESSOES = [
  "Planejamento sucessório",
  "Organização e proteção do patrimônio familiar",
  "Inventário judicial e extrajudicial",
  "Partilha",
  "Herança",
  "Testamentos",
  "Conflitos sucessórios",
  "Orientação prévia a decisões patrimoniais",
];

const FAMILIA = [
  "Divórcio",
  "Dissolução de união estável",
  "Partilha de bens",
  "Planejamento familiar e patrimonial",
  "Guarda e convivência familiar",
  "Alimentos",
  "Demais questões relacionadas às relações familiares",
];

// LISTA A VALIDAR COM A DRA. CLAUDIA: confirmar cada matéria antes de publicar.
// Publicidade jurídica deve ser verdadeira — não anunciar área em que não haja atuação.
const CIVIL = [
  "Contratos: elaboração, revisão e rescisão",
  "Responsabilidade civil e indenizações",
  "Direito imobiliário: compra e venda e regularização",
  "Usucapião",
  "Locações",
  "Questões condominiais",
  "Cobranças e execução de dívidas",
];

function Area({
  rotulo,
  titulo,
  intro,
  itens,
  destaque = false,
}: {
  rotulo: string;
  titulo: string;
  intro?: string;
  itens: string[];
  destaque?: boolean;
}) {
  return (
    <article
      className={cn(
        "p-[clamp(1.6rem,3vw,2.5rem)]",
        destaque ? "col-span-full bg-neutro" : "bg-off",
      )}
    >
      <Eyebrow>{rotulo}</Eyebrow>
      <h3
        className={cn(
          "mt-[0.85rem] mb-[1.35rem] font-medium leading-[1.25] text-petroleo",
          destaque ? "text-[1.85rem]" : "text-[1.55rem]",
        )}
      >
        {titulo}
      </h3>
      {intro && (
        <p className="mb-[1.4rem] max-w-[62ch] text-[0.98rem] leading-[1.6] text-texto-2">
          {intro}
        </p>
      )}
      <ListaLosango itens={itens} duasColunas={destaque} />
    </article>
  );
}

export function Atuacao() {
  return (
    <section id="atuacao" className="section-y">
      <div className="wrap">
        <CabecalhoSecao eyebrow="Área de atuação" titulo="Sucessões, patrimônio e família">
          Direito de Família, Sucessões e Civil tratados com estratégia, conhecimento e atuação
          jurídica personalizada. São questões que envolvem patrimônio construído ao longo de anos,
          relações que continuam existindo depois do processo e decisões cujos efeitos permanecem
          por muito tempo.
        </CabecalhoSecao>

        <Reveal className="grade-filetes md:grid-cols-2">
          <Area
            destaque
            rotulo="01 · Atuação principal"
            titulo="Direito das Sucessões e Patrimônio"
            intro="A transmissão do patrimônio pode ser organizada em vida ou conduzida depois do falecimento. Nos dois cenários, a diferença entre um processo tranquilo e um conflito de anos costuma estar na análise feita antes das decisões."
            itens={SUCESSOES}
          />
          <Area rotulo="02" titulo="Direito de Família" itens={FAMILIA} />
          <Area
            rotulo="03"
            titulo="Direito Civil"
            intro="Atuação estratégica em demandas civis, sobretudo naquelas conexas a patrimônio e a relações familiares."
            itens={CIVIL}
          />
        </Reveal>
        <Reveal as="p" className="mt-7 text-[0.88rem] italic text-texto-2">
          Entre as principais demandas relacionadas às áreas estão as situações acima. A análise de
          cada caso é individualizada e considera os fatos, os documentos e as particularidades da
          situação apresentada.
        </Reveal>
      </div>
    </section>
  );
}

/* ===================== SITUAÇÕES DO CLIENTE ===================== */
const FALAS = [
  "Quero organizar meu patrimônio e pensar no futuro dos meus herdeiros.",
  "Preciso resolver um inventário e não sei por onde começar.",
  "Minha família está enfrentando um conflito envolvendo bens.",
  "Recebi uma herança e não sei exatamente quais são meus direitos.",
  "Vou me divorciar e preciso entender como fica a partilha.",
  "Preciso de orientação técnica antes de tomar uma decisão que envolve patrimônio.",
];

export function Situacoes() {
  return (
    <section id="situacoes" className="section-y bg-neutro">
      <div className="wrap">
        <CabecalhoSecao
          eyebrow="Talvez você esteja aqui por um destes motivos"
          titulo="Quando a questão envolve família, patrimônio ou futuro, informação não basta. É preciso estratégia."
        >
          Buscar orientação jurídica costuma acontecer em um momento de dúvida ou de mudança.
          Reconhecer a própria situação é o primeiro passo para entender quais caminhos existem.
        </CabecalhoSecao>
        <Reveal className="grid grid-cols-[repeat(auto-fit,minmax(265px,1fr))] gap-5">
          {FALAS.map((f) => (
            <p
              key={f}
              className="border-l-2 border-ouro bg-off px-[1.6rem] py-6 font-serif text-[1.16rem] italic leading-[1.4] text-petroleo"
            >
              “{f}”
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ===================== DIFERENCIAIS ===================== */
const PILARES = [
  {
    num: "I",
    titulo: "Formação",
    texto:
      "Mestrado e doutorado aliados à atuação profissional, sustentando a leitura técnica de questões jurídicas complexas.",
  },
  {
    num: "II",
    titulo: "Experiência acadêmica",
    texto:
      "Professora e pesquisadora, com contato permanente com o desenvolvimento do conhecimento jurídico e com a evolução da interpretação do Direito.",
  },
  {
    num: "III",
    titulo: "Especialização",
    texto:
      "Atuação concentrada em Sucessões, patrimônio e Direito de Família, com apoio em Direito Civil — profundidade em vez de dispersão entre áreas distantes entre si.",
  },
  {
    num: "IV",
    titulo: "Estratégia",
    texto:
      "Análise individualizada da situação para a construção da condução jurídica mais adequada a cada caso, considerando riscos e alternativas.",
  },
];

export function Diferenciais() {
  return (
    <section id="diferenciais" className="section-y">
      <div className="wrap">
        <CabecalhoSecao eyebrow="Diferenciais" titulo="Por que Claudia Althoff" />
        <Reveal className="grade-filetes grid-cols-[repeat(auto-fit,minmax(240px,1fr))]">
          {PILARES.map((p) => (
            <article key={p.num} className="bg-off p-[clamp(1.5rem,2.6vw,2.1rem)]">
              <span className="mb-4 block font-serif text-[1.1rem] tracking-[0.1em] text-ouro-escuro">
                {p.num}
              </span>
              <h3 className="mb-[0.6rem] font-sans text-[1.15rem] font-semibold uppercase leading-[1.25] tracking-[0.08em] text-petroleo">
                {p.titulo}
              </h3>
              <p className="text-[0.95rem] leading-[1.55] text-texto-2">{p.texto}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ===================== MÉTODO DE ATENDIMENTO ===================== */
const ETAPAS = [
  {
    num: "01",
    titulo: "Escuta",
    texto:
      "Compreensão cuidadosa da situação, do contexto familiar e das necessidades de quem procura orientação.",
  },
  {
    num: "02",
    titulo: "Análise",
    texto:
      "Avaliação jurídica dos fatos, dos documentos, dos riscos envolvidos e das possibilidades existentes.",
  },
  {
    num: "03",
    titulo: "Estratégia",
    texto:
      "Definição da condução jurídica mais adequada ao caso, com esclarecimento dos caminhos possíveis e de seus efeitos.",
  },
  {
    num: "04",
    titulo: "Acompanhamento",
    texto:
      "Orientação e acompanhamento durante a condução da demanda, com comunicação clara sobre cada etapa.",
  },
];

export function Metodo() {
  return (
    <section id="metodo" className="section-y bg-petroleo-2 text-off">
      <div className="wrap">
        <CabecalhoSecao
          escuro
          eyebrow="Como funciona o atendimento"
          titulo="Um caso por vez, analisado individualmente."
        >
          Nenhuma situação familiar ou sucessória é igual à outra. O atendimento segue um percurso
          definido justamente para que as particularidades de cada caso apareçam antes de qualquer
          decisão.
        </CabecalhoSecao>
        <Reveal className="grid grid-cols-[repeat(auto-fit,minmax(232px,1fr))] gap-px border border-linha-escura bg-linha-escura">
          {ETAPAS.map((e) => (
            <article key={e.num} className="bg-petroleo-2 p-[clamp(1.5rem,2.6vw,2.1rem)]">
              <span className="mb-4 block font-serif text-[2.1rem] leading-none text-ouro-claro">
                {e.num}
              </span>
              <h3 className="mb-[0.7rem] font-sans text-[0.86rem] font-semibold uppercase leading-[1.25] tracking-[0.18em] text-off">
                {e.titulo}
              </h3>
              <p className="text-[0.95rem] leading-[1.55] text-texto-sobre-escuro">{e.texto}</p>
            </article>
          ))}
        </Reveal>
        <Reveal
          as="p"
          className="mt-8 max-w-[60ch] border-l-2 border-ouro pl-[1.1rem] text-[0.95rem] text-texto-sobre-escuro"
        >
          A análise é sempre individualizada: o mesmo tipo de demanda pode exigir caminhos
          diferentes conforme os fatos, os documentos e as pessoas envolvidas.
        </Reveal>
      </div>
    </section>
  );
}

/* ===================== BLOCO DE CONFIANÇA ===================== */
export function Confianca() {
  return (
    <section className="section-y bg-petroleo text-center text-off">
      <Reveal className="wrap">
        <p className="mx-auto max-w-[24ch] font-serif text-quote-lg italic">
          Decisões importantes exigem orientação à altura da complexidade do problema.
        </p>
        <p className="mx-auto mt-7 max-w-[56ch] text-texto-sobre-escuro">
          Em questões de família e sucessões, cada decisão pode produzir efeitos jurídicos e
          patrimoniais duradouros. Por isso, o atendimento deve unir conhecimento técnico, análise
          cuidadosa e estratégia.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-[0.85rem]">
          <BotaoWhatsapp variante="claro">Quero falar com a Dra. Claudia</BotaoWhatsapp>
        </div>
      </Reveal>
    </section>
  );
}
