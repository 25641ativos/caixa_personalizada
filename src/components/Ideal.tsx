import { landingData } from '../data.ts';
import { SectionTitle } from './SectionTitle.tsx';
import { Check } from 'lucide-react';

export function Ideal() {
  return (
    <section className="bg-muted/30 px-4 py-12 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <SectionTitle>
          SE VOCÊ SE IDENTIFICA COM ISSO, <span className="text-primary">ESSA BIBLIOTECA É PARA VOCÊ...</span>
        </SectionTitle>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {landingData.idealFor.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col items-center text-center rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="mb-4 flex size-10 items-center justify-center rounded-full bg-secondary transition-transform group-hover:scale-110">
                <Check className="size-6 text-secondary-foreground" aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold leading-snug text-foreground/90">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Botão de CTA posicionado com ótimo respiro */}
        <div className="mt-12 sm:mt-16 flex justify-center text-center">
          <a
            href="#ofertas"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer h-auto w-full sm:w-auto rounded-full bg-primary px-8 sm:px-12 py-5 text-sm sm:text-base font-black uppercase tracking-widest text-primary-foreground shadow-[0_12px_28px_-6px_rgba(255,79,129,0.45)] hover:bg-[#E6396D] hover:shadow-[0_16px_32px_-6px_rgba(255,79,129,0.55)] transition-all hover:scale-[1.02]"
          >
            QUERO ACESSAR A BIBLIOTECA COMPLETA
          </a>
        </div>
      </div>
    </section>
  );
}


