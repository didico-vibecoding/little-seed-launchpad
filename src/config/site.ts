/**
 * ============================================================
 * CONFIGURAÇÃO DO SITE — dados de contato e SEO
 * Alterar aqui atualiza todos os botões, o rodapé e as metatags.
 * ============================================================
 */
export const SITE = {
  nome: "Claudia Althoff Advocacia",
  titulo: "Claudia Althoff Advocacia | Sucessões, Patrimônio e Direito de Família",
  descricao:
    "Advocacia especializada em Direito de Família e Sucessões, com atuação estratégica também em Direito Civil. Inventário, partilha, planejamento sucessório e organização patrimonial em Florianópolis, SC.",
  descricaoCurta:
    "Sucessões, patrimônio e família conduzidos com estratégia e análise individual. Florianópolis, SC.",
  // PENDENTE: preencher com o domínio definitivo após publicar (ex.: https://althoffadvocacia.com)
  url: "",
  ogImage: "/og-image.jpg",
  themeColor: "#1E3540",
} as const;

export const CONTATO = {
  // ATENÇÃO: o número original tinha 8 dígitos (9982-4398). Celulares em SC têm 9.
  // Aplicado como 47 99982-4398. CONFERIR antes de publicar.
  whatsapp: "5547999824398",
  mensagem: "Olá, gostaria de agendar um atendimento.",
  email: "claudia.f@althoffadvocacia.com",
  instagram: "claudialthoff",
  oab: "OAB/SC 9920",
  endereco: "Rua Pedro Vieira Vidal, 280 — Pantanal, Florianópolis/SC",
  enderecoRua: "Rua Pedro Vieira Vidal, 280",
  cidade: "Florianópolis",
  uf: "SC",
} as const;

const digitos = CONTATO.whatsapp.replace(/\D/g, "");

/** Link do WhatsApp com a mensagem inicial padrão */
export const whatsappUrl = `https://wa.me/${digitos}?text=${encodeURIComponent(CONTATO.mensagem)}`;

/** Número formatado para exibição: +55 (47) 99982-4398 */
export const whatsappVisivel =
  digitos.length >= 12
    ? `+${digitos.slice(0, 2)} (${digitos.slice(2, 4)}) ${digitos.slice(4, -4)}-${digitos.slice(-4)}`
    : CONTATO.whatsapp;

export const instagramUrl = `https://instagram.com/${CONTATO.instagram}`;

/** Itens de navegação (âncoras da home) */
export const NAV = [
  { id: "sobre", label: "Sobre", desktop: true },
  { id: "atuacao", label: "Atuação", desktop: true },
  { id: "situacoes", label: "Como posso ajudar", desktop: false },
  { id: "diferenciais", label: "Diferenciais", desktop: true },
  { id: "metodo", label: "Atendimento", desktop: true },
  { id: "faq", label: "Dúvidas", labelMobile: "Dúvidas frequentes", desktop: true },
] as const;
