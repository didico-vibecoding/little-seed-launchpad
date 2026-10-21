import { cva, type VariantProps } from "class-variance-authority";
import { useEffect, useRef, useState, type ComponentProps, type ReactNode } from "react";

import { whatsappUrl } from "@/config/site";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------
   Eyebrow — rótulo em caixa alta acima dos títulos
   ------------------------------------------------------------ */
export function Eyebrow({
  children,
  claro = false,
  className,
}: {
  children: ReactNode;
  /** Use em fundos escuros (ouro-claro em vez de ouro-escuro) */
  claro?: boolean;
  className?: string;
}) {
  return <span className={cn("eyebrow", claro && "text-ouro-claro", className)}>{children}</span>;
}

/* ------------------------------------------------------------
   Filete — linha dourada de 52px
   ------------------------------------------------------------ */
export function Filete({ centro = false, className }: { centro?: boolean; className?: string }) {
  return <div aria-hidden="true" className={cn("filete", centro && "mx-auto", className)} />;
}

/* ------------------------------------------------------------
   Cabecalho de seção — eyebrow + h2 + filete + parágrafo
   ------------------------------------------------------------ */
export function CabecalhoSecao({
  eyebrow,
  titulo,
  children,
  escuro = false,
  centro = false,
  className,
}: {
  eyebrow: string;
  titulo: ReactNode;
  children?: ReactNode;
  escuro?: boolean;
  centro?: boolean;
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "mb-[clamp(2rem,4vw,3rem)] max-w-[62ch]",
        centro && "mx-auto text-center",
        className,
      )}
    >
      <Eyebrow claro={escuro}>{eyebrow}</Eyebrow>
      <h2 className={cn("mt-4 text-h2", escuro ? "text-off" : "text-texto")}>{titulo}</h2>
      <Filete centro={centro} />
      {children && (
        <p
          className={cn(
            "mt-5 max-w-[56ch]",
            centro && "mx-auto",
            escuro ? "text-texto-sobre-escuro" : "text-texto-2",
          )}
        >
          {children}
        </p>
      )}
    </Reveal>
  );
}

/* ------------------------------------------------------------
   Botão (link) — variantes da marca
   ------------------------------------------------------------ */
export const botaoVariants = cva(
  "inline-block cursor-pointer border font-sans text-btn font-medium uppercase tracking-btn no-underline transition-all duration-200",
  {
    variants: {
      variante: {
        /** CTA principal: dourado sólido */
        ouro: "border-ouro bg-ouro text-petroleo hover:border-ouro-claro hover:bg-ouro-claro",
        /** Secundário em fundo claro: contorno petróleo */
        contorno: "border-petroleo text-petroleo hover:bg-petroleo hover:text-off",
        /** Secundário em fundo escuro: contorno dourado */
        claro:
          "border-ouro-claro/50 text-ouro-claro hover:border-ouro hover:bg-ouro hover:text-petroleo",
        /** Botão compacto do cabeçalho */
        topo: "border-ouro-claro/45 text-ouro-claro hover:border-ouro hover:bg-ouro hover:text-petroleo",
      },
      tamanho: {
        padrao: "px-[1.9rem] py-[1.05rem]",
        compacto: "px-[1.1rem] py-[0.6rem] text-nav tracking-menu",
      },
    },
    defaultVariants: { variante: "ouro", tamanho: "padrao" },
  },
);

export function BotaoLink({
  variante,
  tamanho,
  className,
  ...props
}: ComponentProps<"a"> & VariantProps<typeof botaoVariants>) {
  return <a className={cn(botaoVariants({ variante, tamanho }), className)} {...props} />;
}

/** Botão que abre o WhatsApp com a mensagem padrão */
export function BotaoWhatsapp(
  props: Omit<ComponentProps<typeof BotaoLink>, "href" | "target" | "rel">,
) {
  return <BotaoLink href={whatsappUrl} target="_blank" rel="noopener" {...props} />;
}

/* ------------------------------------------------------------
   Reveal — entrada suave ao rolar a página
   ------------------------------------------------------------ */
export function Reveal({
  as: Tag = "div",
  className,
  children,
  ...props
}: {
  as?: "div" | "p" | "article" | "section";
  className?: string;
  children?: ReactNode;
} & Omit<ComponentProps<"div">, "className" | "children">) {
  const ref = useRef<HTMLElement | null>(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setVisivel(true);
      return;
    }
    const io = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (e.isIntersecting) {
            setVisivel(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={cn("reveal", visivel && "is-visible", className)}
      {...props}
    >
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------
   Lista com marcador em losango
   ------------------------------------------------------------ */
export function ListaLosango({
  itens,
  duasColunas = false,
}: {
  itens: readonly string[];
  duasColunas?: boolean;
}) {
  return (
    <ul
      className={cn(
        "flex list-none flex-col gap-[0.7rem]",
        duasColunas && "block gap-x-10 md:columns-2 [&>li]:mb-[0.7rem]",
      )}
    >
      {itens.map((item) => (
        <li
          key={item}
          className="flex gap-[0.8rem] break-inside-avoid text-[0.97rem] leading-normal text-texto-2"
        >
          <span aria-hidden="true" className="losango mt-[0.6rem]" />
          {item}
        </li>
      ))}
    </ul>
  );
}
