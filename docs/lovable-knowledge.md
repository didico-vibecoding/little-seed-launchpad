# Lovable Project Knowledge — Claudia Althoff Advocacia

> Cole a versão em inglês em **Project Settings → Knowledge** no Lovable.
> A versão em português abaixo é a mesma coisa, para referência.

> Guia visual completo (tokens, componentes, logos, fotos e manual): https://claude.ai/artifact/79mR4LPcScjxqk3EBgz5Zc

---

## 🇺🇸 English (paste this into Lovable)

### Project
Institutional website + blog for **Claudia Althoff Advocacia**, a law practice in Florianópolis/SC (Brazil) led by attorney Claudia Althoff (Master's, PhD, professor; OAB/SC 9920). Main practice: Inheritance & Estate (Sucessões e Patrimônio), Family Law, and Civil Law in support. All site copy is in **Brazilian Portuguese**.

Audience: people dealing with inheritance, estate planning, divorce or family assets — usually at a moment of doubt or change. Tone: sober, precise, warm but never salesy. Academic authority without jargon.

### Stack (do not change)
- TanStack Start + React 19 + TypeScript, file-based routes in `src/routes/` (see `src/routes/README.md`).
- Tailwind CSS v4. **All design tokens live in `src/styles.css`** (`@theme inline` + `:root`). All colors in oklch.
- shadcn/ui components are available in `src/components/ui/` and already inherit the brand tokens (radius 0, petróleo primary, gold ring).
- Site components: `src/components/site/` (header, footer, primitives) and `src/components/site/secoes/` (home sections).
- Contact data, SEO and nav: `src/config/site.ts` — never hardcode phone, e-mail, WhatsApp URL or address in components.
- Blog articles: `src/content/artigos.ts` (temporary; will move to a database).
- `cn()` in `src/lib/utils.ts` has a custom tailwind-merge config. When adding a new font-size or tracking token to `styles.css`, register it there too, otherwise `cn()` will drop the class.

### Visual identity — rules
- **Keep the existing look.** This is a faithful migration of an approved design. Do not redesign, do not add gradients, glassmorphism, rounded cards, emojis, icons-everywhere or stock illustrations.
- Colors (use the Tailwind tokens, never raw hex):
  - `petroleo` #1E3540 (institutional dark), `petroleo-2` #26424F, `petroleo-3` #33525F
  - `ouro` #DFB646 (accent, CTA, rules), `ouro-claro` #EBC96E (gold on dark backgrounds), `ouro-escuro` #9C7A1C (gold text on light backgrounds — accessible)
  - `off` #F2F4F5 (base background), `neutro` #E5EAEC (alternate section background)
  - `texto` #16242C, `texto-2` #55666E, `linha` #D5DDE0
  - On dark sections: `texto-sobre-escuro`, `texto-sobre-escuro-2`, `texto-sobre-escuro-3`, `linha-escura`
- Typography: **Cormorant Garamond** (`font-serif`) for headings, name, quotes and numbers; **Karla** (`font-sans`) for body and UI. Headings are weight 300–500, never bold. Fluid sizes: `text-nome`, `text-h1`, `text-h2`, `text-quote`, `text-quote-lg`, `text-titulos`, `text-artigo`.
- Small uppercase labels with wide letter-spacing (`eyebrow` utility) above every section title, followed by a 52px gold rule (`filete` utility).
- Shapes: square corners everywhere (radius 0). Cards sit in grids separated by 1px lines (`grade-filetes`). List bullets are small rotated gold squares (`losango`). Quotes use a 2px gold left border.
- Hero photo (`FotoArco` in `Abertura.tsx`): Claudia's cut-out photo rises out of a petróleo arch (rounded top, subtle radial gradient) outlined by a concentric 1px gold rule 12px away; her head breaks above the arch and the bottom is cropped by the block. On mobile the photo comes BEFORE the text, waist-up; on desktop it sits in the right column, knee-up. The arch and the round WhatsApp button are the only rounded shapes on the site: don't reuse the arch elsewhere unless asked.
- Section rhythm: alternate `bg-off` and `bg-neutro`, with dark `bg-petroleo` / `bg-petroleo-2` bands for authority, method and trust blocks. Use the `section-y` utility for vertical padding and `wrap` for the 1200px container.
- Buttons: use `<BotaoLink>` / `<BotaoWhatsapp>` from `primitivos.tsx` with variants `ouro` (primary), `contorno` (outline on light), `claro` (outline on dark), `topo` (header). Uppercase, letter-spaced, no radius.
- Motion: only the subtle fade-up `<Reveal>` on scroll. Respect `prefers-reduced-motion`.
- Light theme only. No dark mode toggle.

### Content and legal rules (Brazilian Bar — OAB)
- Legal advertising must be informative and discreet (Código de Ética e Disciplina da OAB, Provimento 205/2021). **Never** write promises of results, "the best lawyer", prices, success rates, client testimonials, urgency/scarcity tactics or comparisons with other lawyers.
- Do not invent facts: no made-up cases, numbers, addresses, credentials or practice areas. If something is missing, leave a clearly marked `PENDENTE` comment instead of filling it in.
- All CTAs go to WhatsApp via `whatsappUrl` from `src/config/site.ts`.
- Write in Brazilian Portuguese, formal-but-human, short sentences, no legalese walls.

### Roadmap (next steps in Lovable)
1. Blog: move `src/content/artigos.ts` to a Lovable Cloud (Supabase) table `artigos` (slug, tema, titulo, lead, descricao, corpo, publicado_em, publicado) with a simple protected admin page to create/edit posts. Keep the current card and article page design.
2. Fill the pending items listed in `docs/inventario.md`.
3. Connect the custom domain and fill `SITE.url` in `src/config/site.ts` (enables canonical, og:url and og:image).

---

## 🇧🇷 Português (referência)

### Projeto
Site institucional + blog da **Claudia Althoff Advocacia**, escritório em Florianópolis/SC liderado pela advogada Claudia Althoff (mestre, doutora, professora; OAB/SC 9920). Atuação principal: Sucessões e Patrimônio, Direito de Família e, em apoio, Direito Civil. Todo o texto do site é em **português do Brasil**.

Público: pessoas lidando com herança, planejamento sucessório, divórcio ou patrimônio da família — geralmente num momento de dúvida ou mudança. Tom: sóbrio, preciso, acolhedor, nunca vendedor. Autoridade acadêmica sem juridiquês.

### Stack (não mudar)
- TanStack Start + React 19 + TypeScript, rotas por arquivo em `src/routes/`.
- Tailwind CSS v4. **Todos os tokens ficam em `src/styles.css`**. Cores em oklch.
- Componentes shadcn/ui em `src/components/ui/` já herdam os tokens da marca.
- Componentes do site: `src/components/site/` e `src/components/site/secoes/`.
- Contato, SEO e menu: `src/config/site.ts` — nunca escrever telefone, e-mail, link do WhatsApp ou endereço direto nos componentes.
- Artigos do blog: `src/content/artigos.ts` (provisório; vai para banco de dados).
- O `cn()` em `src/lib/utils.ts` tem configuração própria do tailwind-merge. Ao criar um token novo de tamanho de fonte ou tracking, registrar lá também.

### Identidade visual — regras
- **Manter o visual atual.** É uma migração fiel de um design aprovado. Nada de redesenhar, gradientes, vidro fosco, cards arredondados, emojis, ícones por toda parte ou ilustrações de banco.
- Cores: usar sempre os tokens (`petroleo`, `ouro`, `ouro-claro`, `ouro-escuro`, `off`, `neutro`, `texto`, `texto-2`, `linha` e os tons `texto-sobre-escuro*` para seções escuras). Nunca hex solto.
- Tipografia: **Cormorant Garamond** (`font-serif`) para títulos, nome, citações e números; **Karla** (`font-sans`) para texto e interface. Títulos com peso 300–500, nunca negrito.
- Rótulo pequeno em caixa alta (`eyebrow`) acima de cada título de seção, seguido de filete dourado de 52px (`filete`).
- Formas: cantos retos em tudo. Cards em grade separados por linhas de 1px (`grade-filetes`). Marcador de lista em losango dourado (`losango`). Citações com borda esquerda dourada de 2px.
- Foto do hero (`FotoArco` em `Abertura.tsx`): a foto recortada sai de um arco petróleo (topo arredondado, degradê radial sutil) contornado por um filete dourado de 1px a 12px de distância; a cabeça ultrapassa o arco e a base é cortada pelo bloco. No celular a foto vem ANTES do texto, em meio corpo; no desktop fica na coluna da direita, até os joelhos. O arco e o botão redondo do WhatsApp são as únicas formas arredondadas do site.
- Ritmo: alternar `bg-off` e `bg-neutro`, com faixas escuras `bg-petroleo` / `bg-petroleo-2`. `section-y` para o respiro vertical e `wrap` para o container de 1200px.
- Botões: `<BotaoLink>` / `<BotaoWhatsapp>` com variantes `ouro`, `contorno`, `claro`, `topo`.
- Animação: só o `<Reveal>` sutil ao rolar. Respeitar `prefers-reduced-motion`.
- Só tema claro.

### Regras de conteúdo (OAB)
- Publicidade informativa e discreta (Código de Ética e Disciplina da OAB, Provimento 205/2021). **Nunca**: promessa de resultado, "a melhor advogada", preços, taxa de sucesso, depoimentos de clientes, urgência/escassez ou comparação com colegas.
- Não inventar fatos. Se faltar informação, deixar comentário `PENDENTE` em vez de preencher.
- Todos os CTAs levam ao WhatsApp via `whatsappUrl`.

### Próximos passos no Lovable
1. Blog: migrar `src/content/artigos.ts` para uma tabela `artigos` no Lovable Cloud (Supabase) com uma página de administração protegida para criar/editar posts, mantendo o visual atual.
2. Resolver os pendentes de `docs/inventario.md`.
3. Conectar o domínio e preencher `SITE.url` em `src/config/site.ts`.
