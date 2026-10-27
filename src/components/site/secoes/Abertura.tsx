import fotoHero from "@/assets/claudia-hero.webp";
import fotoSobre from "@/assets/claudia-sobre.webp";

import { cn } from "@/lib/utils";

import { BotaoWhatsapp, Eyebrow, Filete, Reveal } from "../primitivos";

/* ===================== HERO ===================== */

/**
 * Foto da Dra. Claudia saindo de um arco petróleo, contornado por um filete
 * dourado. A cabeça ultrapassa o topo do arco e a base da foto é cortada
 * pela borda do bloco. Mobile: meio corpo. Desktop: até os joelhos.
 */
function FotoArco({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative mx-auto aspect-[4/5] w-full max-w-[320px] overflow-hidden",
        "min-[861px]:aspect-auto min-[861px]:h-[min(78vh,680px)] min-[861px]:max-w-[440px]",
        className,
      )}
    >
      {/* Filete dourado concêntrico ao arco */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[calc(82%+12px)] rounded-t-full border border-b-0 border-ouro"
      />
      {/* Arco petróleo */}
      <div
        aria-hidden="true"
        className="absolute inset-x-3 bottom-0 h-[82%] rounded-t-full bg-[radial-gradient(110%_70%_at_50%_35%,var(--petroleo-3),var(--petroleo)_70%)]"
      />
      <img
        src={fotoHero}
        alt="Claudia Althoff, advogada especializada em Direito de Família e Sucessões"
        width={550}
        height={1115}
        fetchPriority="high"
        className="absolute top-[4%] left-1/2 h-[155%] w-auto max-w-none -translate-x-1/2 min-[861px]:top-[3%] min-[861px]:h-[122%]"
      />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-off pt-[clamp(2rem,6vw,3rem)] min-[861px]:pt-[clamp(3.5rem,8vw,6.5rem)]">
      {/* Painel neutro à direita (só desktop) */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 hidden w-[46%] bg-gradient-to-b from-neutro to-neutro/35 min-[861px]:block"
      />
      <div className="wrap relative grid items-end gap-[clamp(2rem,4vw,3rem)] min-[861px]:grid-cols-[1.05fr_0.95fr]">
        <div className="order-2 pb-[clamp(3.5rem,8vw,6.5rem)] min-[861px]:order-1 min-[861px]:pb-[clamp(4.5rem,9vw,8rem)]">
          <Eyebrow>Advocacia · Florianópolis, SC</Eyebrow>
          <p className="mt-6 mb-[0.35rem] font-serif text-nome font-light tracking-[0.02em] text-petroleo">
            Claudia Althoff
            <span className="mt-4 block font-sans text-[0.26em] font-normal uppercase tracking-nome-sub text-ouro-escuro">
              Advogada
            </span>
          </p>
          <h1 className="mt-8 mb-[1.1rem] max-w-[22ch] text-h1 text-texto">
            Advocacia especializada em{" "}
            <em className="text-petroleo-2">Direito de Família e Sucessões</em>, com atuação
            estratégica também em Direito Civil.
          </h1>
          <p className="max-w-[46ch] text-base text-texto-2">
            Patrimônio, herança e relações familiares envolvem decisões cujos efeitos permanecem por
            muitos anos. Conduzi-las exige conhecimento técnico, análise individual e estratégia.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-[0.85rem] min-[861px]:justify-start">
            <BotaoWhatsapp variante="ouro">Agendar atendimento</BotaoWhatsapp>
          </div>
        </div>
        <FotoArco className="order-1 min-[861px]:order-2" />
      </div>
    </section>
  );
}

/* ===================== AUTORIDADE ===================== */
const TITULOS = ["Mestre", "Doutora", "Professora", "Advogada"];

export function Autoridade() {
  return (
    <section id="autoridade" className="section-y bg-petroleo text-center text-off">
      <Reveal className="wrap">
        <div className="mb-9 flex flex-wrap items-center justify-center gap-x-5 gap-y-[0.15rem] min-[561px]:gap-x-[clamp(1.5rem,4vw,3.5rem)] min-[561px]:gap-y-2">
          {TITULOS.map((t, i) => (
            <span key={t} className="contents">
              {i > 0 && <i aria-hidden="true" className="losango hidden min-[561px]:block" />}
              <span className="font-serif text-titulos font-normal uppercase tracking-[0.14em] text-ouro-claro">
                {t}
              </span>
            </span>
          ))}
        </div>
        <p className="mx-auto max-w-[26ch] font-serif text-quote italic text-off">
          Uma trajetória construída entre a advocacia e a academia.
        </p>
        <p className="mx-auto mt-6 max-w-[58ch] text-[0.98rem] text-texto-sobre-escuro">
          A formação acadêmica não é um detalhe do currículo: é o que amplia a capacidade de
          análise, de interpretação e de construção de estratégias jurídicas. Pesquisar e ensinar
          Direito significa acompanhar de perto como a norma se transforma — e trazer esse
          repertório para dentro de cada caso.
        </p>
      </Reveal>
    </section>
  );
}

/* ===================== SOBRE ===================== */
export function Sobre() {
  return (
    <section id="sobre" className="section-y bg-neutro">
      <div className="wrap grid items-center gap-[clamp(2rem,5vw,4.5rem)] min-[821px]:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="relative max-w-[380px] p-[14px] min-[821px]:max-w-none">
          <span aria-hidden="true" className="absolute inset-0 border border-ouro opacity-55" />
          <img
            src={fotoSobre}
            alt="Retrato profissional da advogada Claudia Althoff"
            width={575}
            height={720}
            loading="lazy"
            className="relative w-full bg-off object-cover"
          />
        </Reveal>
        <Reveal className="[&_p]:mb-[1.1rem] [&_p]:text-texto-2 [&_strong]:font-semibold [&_strong]:text-texto">
          <Eyebrow>Sobre</Eyebrow>
          <h2 className="mt-0 text-h2">Conhecimento que ultrapassa a teoria.</h2>
          <Filete />
          <p>
            Claudia Althoff é <strong>advogada, mestre, doutora e professora</strong>, com atuação
            especializada em <strong>Direito de Família e Sucessões</strong> e atuação estratégica
            também em <strong>Direito Civil</strong>.
          </p>
          <p>
            O escritório oferece atendimento jurídico personalizado para situações que exigem
            conhecimento técnico, estratégia e segurança na tomada de decisões — especialmente
            aquelas que envolvem patrimônio construído ao longo de uma vida e sua transmissão às
            próximas gerações.
          </p>
          <p>
            A convivência permanente com a pesquisa e com a docência sustenta uma prática atenta ao
            detalhe: cada caso é lido a partir dos fatos, dos documentos e do contexto da família
            envolvida, e não a partir de um modelo pronto. Com atuação pautada pela análise
            individual de cada caso, busca soluções jurídicas eficientes, seguras e alinhadas aos
            interesses de seus clientes.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
