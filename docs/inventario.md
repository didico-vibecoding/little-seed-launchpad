# Inventário — o que está pronto e o que falta

Levantado a partir do HTML original (`claudia-althoff-advocacia.html`) e do manual da marca (`MARCA APROVAÇÃO.pdf`).

## ✅ Pronto (migrado fielmente)

| Seção / página | Situação |
| --- | --- |
| Cabeçalho fixo + menu mobile | Pronto |
| Hero (nome, título, CTA, foto recortada) | Pronto |
| Faixa de autoridade (Mestre · Doutora · Professora · Advogada) | Pronto |
| Sobre | Pronto |
| Áreas de atuação (Sucessões em destaque, Família, Civil) | Pronto — lista de Civil precisa de validação (ver abaixo) |
| "Talvez você esteja aqui por um destes motivos" | Pronto |
| Diferenciais (I–IV) | Pronto |
| Como funciona o atendimento (01–04) | Pronto |
| Bloco de confiança | Pronto |
| Conteúdo (card do artigo na home) | Pronto |
| Página do artigo `/conteudo/uniao-estavel-e-patrimonio` | **Nova** — antes o artigo abria dentro da home |
| Lista de artigos `/conteudo` | **Nova** |
| FAQ (6 perguntas) | Pronto — 1 resposta pendente |
| CTA final + rodapé + botão flutuante de WhatsApp | Pronto |
| SEO: title, description, Open Graph, schema.org (Attorney, FAQPage, Article) | Pronto — faltam URL e data |
| Página 404 com a identidade do site | **Nova** |
| Favicon, apple-touch-icon e imagem de compartilhamento (og-image) | **Novos**, gerados a partir da logo oficial |

## ⚠️ Pendente de informação (depende da Dra. Claudia)

1. **WhatsApp**: o número original tinha 8 dígitos (9982-4398) e foi aplicado como **(47) 99982-4398**. Confirmar. → `src/config/site.ts`
2. **Lista de Direito Civil**: confirmar cada matéria antes de publicar (publicidade jurídica não pode anunciar área sem atuação). → `src/components/site/secoes/Atuacao.tsx`
3. **FAQ "É possível realizar atendimento online?"**: falta dizer se há atendimento online e/ou presencial. → `src/components/site/secoes/Fechamento.tsx`
4. **Data de publicação do artigo** (`publicadoEm`). → `src/content/artigos.ts`
5. **Instagram @claudialthoff** e **e-mail**: conferir se estão ativos.

## 🛠️ Pendente técnico (dá para fazer no Lovable)

1. **Blog editável**: migrar os artigos para uma tabela no Lovable Cloud (Supabase) com área de administração protegida por login. Hoje é um arquivo no código.
2. **Domínio**: conectar o domínio e preencher `SITE.url` → ativa canonical, og:url, og:image e as URLs do schema.
3. **sitemap.xml**: gerar depois que o domínio estiver definido.
4. **Política de Privacidade / LGPD**: necessária se entrar analytics, pixel ou formulário.
5. **Analytics** (GA4 ou similar), se a cliente quiser medir acessos e cliques no WhatsApp.

## 🔧 Correções feitas na migração (inconsistências óbvias)

- **Cinzas "quentes" que sobraram de uma paleta antiga (oliva)** nos textos das seções escuras e no rodapé (#CFCEC1, #B9B8AC, #8E8D82) foram trocados por cinzas frios equivalentes, coerentes com o petróleo. Mesma luminosidade, só sem o tom amarelado.
- Sombras e o degradê do hero que usavam tons oliva agora usam o petróleo.
- **Lista de Sucessões em duas colunas**: o CSS original pedia 2 colunas, mas um conflito com `display:flex` fazia aparecer só uma. Agora aparece em 2 colunas no desktop, como foi planejado.
- **Logos**: as logos embutidas no HTML estavam em baixa resolução, com bordas serrilhadas. O cabeçalho agora usa o ícone oficial (recortado do PNG da marca) e o rodapé usa a assinatura oficial "Claudia Althoff — Advocacia e Consultoria Jurídica" (antes era uma versão "Advogada" que não existe no manual).
- O menu mobile tinha "Como posso ajudar", o desktop não. Mantido assim (o desktop já está cheio), mas agora sai de uma lista única em `src/config/site.ts`.

## ♿ Contraste (opcional)

Dois pares da paleta aprovada ficam abaixo de 4,5:1 em texto pequeno (WCAG AA):

- `ouro-escuro` (#9C7A1C) sobre `off` dá 3,65:1 e sobre `neutro` dá 3,32:1. Usado nos eyebrows e rótulos. Alternativa: **#806316** (5,1:1 e 4,7:1).
- `texto-sobre-escuro-3` (#8A979D) sobre `petroleo` dá 4,27:1. Usado só na linha de copyright do rodapé. Alternativa: **#95A2A8** (4,9:1).

Mantidos como estão porque fazem parte do visual aprovado; trocar é só mudar o token em `src/styles.css`.

## 🎨 Ponto de atenção: site × manual da marca

O manual aprovado (2023) define **Montserrat** como tipografia institucional e um azul-marinho mais escuro (**#062333**) com dourado **#E3B523**. O site usa **Cormorant Garamond + Karla** e um petróleo um pouco mais claro (**#1E3540**) com dourado **#DFB646**.

Como a decisão foi manter o site fiel, a migração seguiu o site. Se a cliente preferir alinhar ao manual, basta trocar os tokens em `src/styles.css` (cores e `--font-*`); nenhum componente precisa mudar.
