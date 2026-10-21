import fotoHero from "@/assets/claudia-hero.webp";
import fotoSobre from "@/assets/claudia-sobre.webp";

import { BotaoWhatsapp, Eyebrow, Filete, Reveal } from "../primitivos";

/* ===================== HERO ===================== */
export function Hero() {
  return (
    <section className="section-y relative overflow-hidden bg-off">
      {/* Painel neutro à direita (desktop) / na metade de baixo (mobile) */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[52%] bg-gradient-to-b from-neutro to-neutro/35 min-[861px]:inset-y-0 min-[861px]:right-0 min-[861px]:left-auto min-[861px]:h-full min-[861px]:w-[46%]"
      />
      <div className="wrap relative grid items-end gap-[clamp(1rem,4vw,3rem)] pt-[clamp(2.25rem,7vw,3rem)] min-[861px]:grid-cols-[1.05fr_0.95fr] min-[861px]:pt-[clamp(3rem,7vw,5rem)]">
        <div className="pb-8 min-[861px]:pb-[clamp(3.5rem,8vw,6rem)]">
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
          <div className="mt-10 flex flex-wrap gap-[0.85rem]">
            <BotaoWhatsapp variante="ouro">Agendar atendimento</BotaoWhatsapp>
          </div>
        </div>
        <div className="relative flex items-end justify-center">
          <img
            src={fotoHero}
            alt="Claudia Althoff, advogada especializada em Direito de Família e Sucessões"
            width={563}
            height={1150}
            fetchPriority="high"
            className="max-h-[400px] w-auto object-contain drop-shadow-[0_24px_48px_oklch(0.315_0.035_230/0.14)] min-[861px]:max-h-[min(76vh,660px)]"
          />
        </div>
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
