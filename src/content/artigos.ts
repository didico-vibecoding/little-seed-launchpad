/**
 * ============================================================
 * ARTIGOS (blog "Conteúdo")
 * Fonte provisória em arquivo. Próximo passo: migrar para uma
 * tabela no Lovable Cloud (Supabase) para edição sem código.
 * Para publicar um novo artigo agora, adicione um objeto ao array.
 * ============================================================
 */

export type BlocoArtigo = { tipo: "p"; texto: string } | { tipo: "h2"; texto: string };

export type Artigo = {
  slug: string;
  tema: string;
  titulo: string;
  /** Parágrafo de abertura exibido no card e no topo do artigo */
  lead: string;
  /** Resumo para SEO (meta description) */
  descricao: string;
  /** Data ISO (AAAA-MM-DD). PENDENTE: definir na publicação */
  publicadoEm?: string;
  corpo: BlocoArtigo[];
};

const p = (texto: string): BlocoArtigo => ({ tipo: "p", texto });
const h = (texto: string): BlocoArtigo => ({ tipo: "h2", texto });

export const ARTIGOS: Artigo[] = [
  {
    slug: "uniao-estavel-e-patrimonio",
    tema: "Planejamento patrimonial",
    titulo: "União estável e patrimônio: o que precisa ser pensado antes do problema aparecer",
    lead: "Um imóvel registrado no nome de apenas um dos companheiros. Uma empresa que já existia antes da relação começar. Filhos de um casamento anterior. Um bem recebido por herança no meio da convivência.",
    descricao:
      "Efeitos patrimoniais da união estável, origem dos bens, participação societária, sucessão com filhos de relações anteriores e instrumentos de planejamento patrimonial.",
    corpo: [
      p(
        "São situações comuns e, quando aparecem juntas, podem tornar a análise patrimonial bem mais complexa. Muitas vezes, chegam ao escritório apenas na separação ou depois do falecimento de um dos companheiros, justamente quando decisões que poderiam ter sido tomadas com tranquilidade passam a ser discutidas em um cenário de conflito.",
      ),
      h("Mesmo sem contrato, existe um regime patrimonial"),
      p(
        "A união estável produz efeitos patrimoniais ainda que o casal nunca tenha feito contrato de convivência. Na ausência de disposição escrita em sentido diverso, aplica-se, em regra, o regime da comunhão parcial de bens, conforme o artigo 1.725 do Código Civil. Em termos gerais, nesse cenário, os bens adquiridos onerosamente durante a convivência integram o patrimônio comum, ainda que estejam registrados em nome de apenas um dos companheiros. Bens anteriores à união, heranças, doações e outras hipóteses previstas em lei seguem disciplina diferente.",
      ),
      p(
        "A dificuldade aparece quando a história patrimonial não cabe perfeitamente nessas categorias. Imagine um imóvel adquirido antes da união, mas com parcelas pagas durante anos de convivência. Ou um bem comprado durante a relação com recursos provenientes da venda de outro que era de propriedade de um dos companheiros antes do início da união estável. Em situações assim, saber apenas a data da escritura ou o nome que consta no registro pode não ser suficiente.",
      ),
      p(
        "É preciso reconstruir de onde vieram os recursos, quando foram empregados e de que forma o patrimônio se modificou ao longo da relação.",
      ),
      p(
        "O mesmo cuidado vale para empresas. Se as quotas societárias já pertenciam a um dos companheiros antes da união estável, a simples valorização dessas quotas ao longo do tempo não significa, automaticamente, que esse aumento de valor será partilhado. O Superior Tribunal de Justiça já enfrentou essa situação e afastou a comunicação da mera valorização econômica das quotas anteriores à convivência.",
      ),
      p(
        "Esse tipo de distinção mostra por que uma análise patrimonial séria começa pelos fatos e pelos documentos, não apenas pelo nome em que o bem está registrado.",
      ),
      h("Filhos de relações anteriores tornam a sucessão mais complexa"),
      p(
        "A organização patrimonial de uma união estável também precisa considerar o que acontece no falecimento de um dos companheiros.",
      ),
      p(
        "O Supremo Tribunal Federal afastou a diferença de tratamento sucessório que existia entre casamento e união estável. Atualmente, aplica-se também aos companheiros o regime sucessório previsto no artigo 1.829 do Código Civil.",
      ),
      p(
        "Quando existem filhos de uma relação anterior, a composição familiar exige atenção especial. É necessário distinguir patrimônio comum e patrimônio particular, identificar quem são os herdeiros e compreender como o regime de bens interfere na sucessão.",
      ),
      p(
        "Um imóvel, uma participação societária ou um conjunto de investimentos pode produzir efeitos diferentes conforme sua origem e a forma como foi adquirido. A mesma família pode reunir, ao mesmo tempo, direitos decorrentes da meação e direitos decorrentes da herança, que não devem ser confundidos.",
      ),
      p(
        "É nesse ponto que decisões tomadas durante a vida passam a ter reflexos sucessórios concretos.",
      ),
      h("O planejamento começa antes da escolha do instrumento"),
      p(
        "Contrato de convivência, testamento, doação e reorganização societária são alguns dos instrumentos que podem aparecer em um planejamento patrimonial. Em estruturas empresariais ou familiares mais complexas, também pode fazer sentido avaliar a constituição de uma holding patrimonial ou familiar.",
      ),
      p(
        "A existência dessas ferramentas não significa que todas sejam necessárias, nem que uma delas resolva isoladamente a organização de qualquer família.",
      ),
      p(
        "Uma holding, por exemplo, pode ser adequada em determinada estrutura patrimonial e completamente desnecessária em outra. Um testamento pode cumprir uma função importante, mas precisa respeitar os limites impostos pela existência de herdeiros necessários. Um contrato de convivência permite disciplinar o regime patrimonial da relação, mas sua utilidade depende do que efetivamente se pretende organizar.",
      ),
      p(
        "A escolha do instrumento vem depois da análise da família, dos bens existentes e dos objetivos das pessoas envolvidas.",
      ),
      h("O momento da análise faz diferença"),
      p(
        "Enquanto a relação está estável, documentos podem ser organizados, a origem dos recursos pode ser identificada e decisões patrimoniais podem ser discutidas sem a pressão de um litígio.",
      ),
      p(
        "Na separação, fatos antigos passam a precisar de prova. Depois do falecimento, determinadas informações podem depender de documentos que nunca foram organizados ou de reconstruções feitas por pessoas que participaram apenas de parte daquela história.",
      ),
      p(
        "Aquilo que poderia ter sido uma decisão patrimonial passa a ser uma questão de interpretação, prova e, em alguns casos, disputa.",
      ),
      h("Cada família exige uma resposta própria"),
      p(
        "A análise de uma união estável com patrimônio não se resume à aplicação automática de um regime de bens. É necessário considerar como os bens foram formados, quem compõe aquela família, quais relações anteriores existem, se há empresas envolvidas e quais são os objetivos patrimoniais e sucessórios do casal.",
      ),
      p(
        "É a combinação desses elementos que permite identificar o que precisa ser organizado e quais instrumentos jurídicos fazem sentido naquele caso.",
      ),
      p(
        "Planejar antes do conflito permite tomar essas decisões com informação, documentação e clareza.",
      ),
    ],
  },
];

export const getArtigo = (slug: string) => ARTIGOS.find((a) => a.slug === slug);
