import logoRodape from "@/assets/logo-rodape.webp";
import { CONTATO, instagramUrl, whatsappUrl, whatsappVisivel } from "@/config/site";

import { Eyebrow } from "./primitivos";

export function Rodape() {
  const ano = new Date().getFullYear();
  const link = "text-texto-sobre-escuro no-underline transition-colors hover:text-ouro-claro";

  return (
    <footer className="bg-petroleo pt-[clamp(3rem,6vw,4.5rem)] pb-8 text-[0.9rem] text-texto-sobre-escuro-2">
      <div className="wrap">
        <div className="grid gap-8 border-b border-linha-escura pb-10 min-[821px]:grid-cols-[1.2fr_1fr_1fr] min-[821px]:gap-10">
          <div>
            <img
              src={logoRodape}
              alt="Claudia Althoff — Advocacia e Consultoria Jurídica"
              width={260}
              height={115}
              className="mb-6 h-auto w-[190px]"
            />
            <h4 className="mb-4 font-serif text-[1.15rem] font-medium text-off">
              Claudia Althoff Advocacia
            </h4>
            <p>
              Direito de Família e Sucessões
              <br />
              {CONTATO.cidade}, {CONTATO.uf}
            </p>
          </div>
          <div>
            <Eyebrow claro className="mb-4">
              Contato
            </Eyebrow>
            <ul className="flex list-none flex-col gap-[0.7rem]">
              <li>
                <a className={link} href={whatsappUrl} target="_blank" rel="noopener">
                  {whatsappVisivel}
                </a>
              </li>
              <li>
                <a className={link} href={`mailto:${CONTATO.email}`}>
                  {CONTATO.email}
                </a>
              </li>
              <li>
                <a className={link} href={instagramUrl} target="_blank" rel="noopener">
                  @{CONTATO.instagram}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <Eyebrow claro className="mb-4">
              Registro profissional
            </Eyebrow>
            <ul className="flex list-none flex-col gap-[0.7rem]">
              <li>{CONTATO.oab}</li>
              <li>{CONTATO.endereco}</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-4 pt-7 text-[0.78rem] leading-[1.6] text-texto-sobre-escuro-3">
          <span>© {ano} Claudia Althoff Advocacia. Todos os direitos reservados.</span>
          <span>
            Conteúdo de caráter meramente informativo, em conformidade com o Código de Ética e
            Disciplina da OAB.
          </span>
        </div>
      </div>
    </footer>
  );
}

export function WhatsappFlutuante() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener"
      aria-label="Entrar em contato pelo WhatsApp"
      className="fixed right-[clamp(0.9rem,3vw,1.6rem)] bottom-[clamp(0.9rem,3vw,1.6rem)] z-70 flex size-14 items-center justify-center rounded-full border border-ouro bg-petroleo shadow-flutuante transition-all duration-200 hover:-translate-y-0.5 hover:bg-petroleo-2"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-[27px] fill-ouro-claro">
        <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.53.07-.8.38-.28.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.38 9.38 0 0 1-1.44-5.01c0-5.18 4.23-9.4 9.42-9.4 2.51 0 4.88.98 6.65 2.76a9.34 9.34 0 0 1 2.76 6.65c0 5.18-4.23 9.41-9.42 9.41zM20.5 3.49A11.28 11.28 0 0 0 12.04.5C5.8.5.72 5.57.72 11.81c0 2 .52 3.95 1.52 5.67L.62 23.5l6.16-1.61a11.3 11.3 0 0 0 5.26 1.34h.01c6.24 0 11.32-5.07 11.32-11.31 0-3.02-1.18-5.86-3.32-8z" />
      </svg>
    </a>
  );
}
