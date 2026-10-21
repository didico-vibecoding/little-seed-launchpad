import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge precisa conhecer os tokens customizados do design system
 * (src/styles.css). Sem isso, ele confunde tamanhos como `text-h2` com cores
 * como `text-petroleo` e descarta uma das classes.
 */
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: ["nome", "h1", "h2", "quote", "quote-lg", "titulos", "artigo", "eyebrow", "btn", "nav"],
      tracking: ["eyebrow", "btn", "menu", "nome-sub"],
      shadow: ["foto", "flutuante"],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
