import { useEffect, useState, type MouseEvent } from "react";

import logoIcone from "@/assets/logo-icone.webp";
import { NAV, whatsappUrl } from "@/config/site";
import { cn } from "@/lib/utils";

import { BotaoLink } from "./primitivos";

/**
 * Rolagem por JavaScript para as âncoras da home: funciona também dentro do
 * iframe de pré-visualização do Lovable, onde âncoras nativas podem falhar.
 * Fora da home, o link segue para /#secao normalmente.
 */
export function rolarParaSecao(e: MouseEvent<HTMLAnchorElement>, id: string) {
  if (typeof window === "undefined" || window.location.pathname !== "/") return;
  const alvo = id === "topo" ? null : document.getElementById(id);
  e.preventDefault();
  const reduz = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const topo = document.querySelector("header");
  const off = topo ? topo.getBoundingClientRect().height + 14 : 0;
  const y = alvo ? Math.max(0, alvo.getBoundingClientRect().top + window.scrollY - off) : 0;
  window.scrollTo({ top: y, behavior: reduz ? "auto" : "smooth" });
  history.replaceState(null, "", id === "topo" ? "/" : `/#${id}`);
}

export function Cabecalho() {
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    const aoRedimensionar = () => window.innerWidth > 760 && setAberto(false);
    const aoTeclar = (e: KeyboardEvent) => e.key === "Escape" && setAberto(false);
    window.addEventListener("resize", aoRedimensionar);
    document.addEventListener("keydown", aoTeclar);
    return () => {
      window.removeEventListener("resize", aoRedimensionar);
      document.removeEventListener("keydown", aoTeclar);
    };
  }, []);

  const linkMenu =
    "text-nav font-medium uppercase tracking-menu text-menu no-underline transition-colors hover:text-ouro-claro";

  return (
    <header className="sticky top-0 z-60 border-b border-linha-escura bg-petroleo/96 backdrop-blur-[10px]">
      <div className="wrap flex h-[72px] items-center justify-between gap-4">
        <a
          href="/"
          onClick={(e) => rolarParaSecao(e, "topo")}
          className="flex items-center gap-[0.7rem] no-underline"
          aria-label="Claudia Althoff Advocacia — início"
        >
          <img src={logoIcone} alt="" className="h-[34px] w-auto" width={58} height={34} />
          <span className="flex flex-col leading-[1.1]">
            <b className="font-sans text-[0.86rem] font-medium uppercase tracking-[0.18em] text-white">
              Claudia Althoff
            </b>
            <span className="mt-[0.35rem] text-[0.55rem] uppercase tracking-[0.3em] text-ouro">
              Advogada
            </span>
          </span>
        </a>

        {/* Menu desktop */}
        <nav className="hidden items-center gap-7 min-[761px]:flex" aria-label="Principal">
          {NAV.filter((i) => i.desktop).map((item) => (
            <a
              key={item.id}
              href={`/#${item.id}`}
              onClick={(e) => rolarParaSecao(e, item.id)}
              className={cn(linkMenu, "hidden min-[981px]:inline")}
            >
              {item.label}
            </a>
          ))}
          <BotaoLink
            variante="topo"
            tamanho="compacto"
            href={whatsappUrl}
            target="_blank"
            rel="noopener"
          >
            Agendar atendimento
          </BotaoLink>
        </nav>

        {/* Botão hambúrguer */}
        <button
          type="button"
          className="flex h-10 w-11 cursor-pointer flex-col items-center justify-center gap-[5px] border border-ouro-claro/40 bg-transparent p-0 min-[761px]:hidden"
          aria-expanded={aberto}
          aria-controls="menu-mobile"
          aria-label={aberto ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          onClick={() => setAberto((v) => !v)}
        >
          <span
            className={cn(
              "block h-[1.5px] w-[18px] bg-ouro-claro transition-transform duration-200",
              aberto && "translate-y-[6.5px] rotate-45",
            )}
          />
          <span
            className={cn(
              "block h-[1.5px] w-[18px] bg-ouro-claro transition-opacity duration-200",
              aberto && "opacity-0",
            )}
          />
          <span
            className={cn(
              "block h-[1.5px] w-[18px] bg-ouro-claro transition-transform duration-200",
              aberto && "-translate-y-[6.5px] -rotate-45",
            )}
          />
        </button>
      </div>

      {/* Menu mobile */}
      <nav
        id="menu-mobile"
        hidden={!aberto}
        aria-label="Principal (mobile)"
        className="fixed inset-x-0 top-[72px] z-59 max-h-[calc(100vh-72px)] flex-col overflow-y-auto border-b border-linha-escura bg-petroleo px-[clamp(1.25rem,5vw,4.5rem)] pt-2 pb-5 [&:not([hidden])]:flex min-[761px]:hidden!"
      >
        {NAV.map((item) => (
          <a
            key={item.id}
            href={`/#${item.id}`}
            onClick={(e) => {
              setAberto(false);
              rolarParaSecao(e, item.id);
            }}
            className="border-b border-linha-escura py-[0.95rem] text-[0.78rem] font-medium uppercase tracking-menu text-menu-mobile no-underline"
          >
            {"labelMobile" in item ? item.labelMobile : item.label}
          </a>
        ))}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener"
          onClick={() => setAberto(false)}
          className="mt-[0.85rem] border border-ouro py-[0.95rem] text-center text-[0.78rem] font-medium uppercase tracking-menu text-ouro-claro no-underline"
        >
          Agendar atendimento
        </a>
      </nav>
    </header>
  );
}
