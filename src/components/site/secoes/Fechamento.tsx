import { BotaoWhatsapp, Eyebrow, Filete, Reveal } from "../primitivos";

/* ===================== FAQ ===================== */
const PERGUNTAS = [
  {
    p: "Como funciona a primeira consulta?",
    r: "A primeira conversa serve para compreender a situação apresentada, esclarecer dúvidas iniciais e verificar quais informações e documentos serão necessários para a análise jurídica. É também o momento de entender as expectativas de quem procura orientação.",
  },
  {
    p: "Quais documentos devo levar?",
    r: "Depende do tipo de demanda. De modo geral, são úteis documentos pessoais, certidões relacionadas ao caso (casamento, nascimento, óbito) e documentos que comprovem a situação patrimonial envolvida. A relação específica é indicada após a compreensão inicial do caso.",
  },
  {
    p: "É possível realizar atendimento online?",
    // PENDENTE: confirmar com a Dra. Claudia as formas de atendimento (online e presencial)
    r: "As formas de atendimento disponíveis podem ser confirmadas no contato inicial.",
  },
  {
    p: "Como funciona um inventário?",
    r: "O inventário é o procedimento pelo qual se apura o patrimônio deixado por uma pessoa falecida e se realiza a partilha entre os herdeiros. Pode seguir por via judicial ou extrajudicial, conforme a existência de testamento, a presença de herdeiros incapazes e o consenso entre as partes. A definição do caminho adequado depende da análise de cada caso.",
  },
  {
    p: "Quando devo procurar orientação sobre sucessão?",
    r: "A orientação é útil tanto depois do falecimento de alguém, para conduzir o inventário e a partilha, quanto antes — no planejamento sucessório, quando se busca organizar o patrimônio em vida e prevenir conflitos futuros entre herdeiros.",
  },
  {
    p: "Como funciona o atendimento em questões de família?",
    r: "A condução considera tanto os aspectos jurídicos quanto o contexto das relações envolvidas. Sempre que possível e adequado ao caso, caminhos consensuais são avaliados, sem prejuízo da adoção da via judicial quando ela se mostrar necessária.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="section-y bg-neutro">
      <div className="wrap">
        <CabecalhoSecao
          eyebrow="Dúvidas frequentes"
          titulo="Perguntas comuns sobre o atendimento"
        />
        <Reveal className="border-t border-linha">
          {PERGUNTAS.map((q) => (
            <details key={q.p} className="group border-b border-linha">
              <summary className="relative cursor-pointer list-none py-[1.4rem] pr-12 font-serif text-[1.22rem] text-petroleo transition-colors duration-200 hover:text-ouro-escuro [&::-webkit-details-marker]:hidden">
                {q.p}
                <span
                  aria-hidden="true"
                  className="absolute top-1/2 right-[0.35rem] -mt-2 size-4 before:absolute before:top-[7px] before:left-0 before:h-[1.5px] before:w-4 before:bg-ouro after:absolute after:top-0 after:left-[7px] after:h-4 after:w-[1.5px] after:bg-ouro after:transition-all after:duration-200 group-open:after:rotate-90 group-open:after:opacity-0"
                />
              </summary>
              <div className="max-w-[70ch] pr-10 pb-[1.6rem] text-[0.97rem] text-texto-2">
                {q.r}
              </div>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/** Perguntas exportadas para o schema FAQPage (SEO) */
export const FAQ_SCHEMA = PERGUNTAS;

/* ===================== CTA FINAL ===================== */
export function CtaFinal() {
  return (
    <section id="contato" className="section-y bg-off text-center">
      <Reveal className="wrap">
        <Eyebrow>Contato</Eyebrow>
        <h2 className="mx-auto mt-4 max-w-[20ch] text-h2">
          Sua questão merece uma análise jurídica cuidadosa.
        </h2>
        <Filete centro />
        <p className="mx-auto mt-6 max-w-[52ch] text-texto-2">
          Converse com a Dra. Claudia Althoff e compreenda quais caminhos jurídicos podem ser
          considerados para o seu caso.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-[0.85rem]">
          <BotaoWhatsapp variante="ouro">Agendar atendimento</BotaoWhatsapp>
        </div>
      </Reveal>
    </section>
  );
}
