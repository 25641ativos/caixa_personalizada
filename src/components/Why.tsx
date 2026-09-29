import { landingData } from '../data.ts';
import { SectionTitle } from './SectionTitle.tsx';

export function Why() {
  return (
    <section className="bg-background px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <span className="inline-block rounded-full bg-[#FFF0F3] border border-[#FFD2DC] px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-primary shadow-sm">
            Diferenciais
          </span>
          <SectionTitle className="mt-4">
            Por que ter <span className="text-primary">essa biblioteca?</span>
          </SectionTitle>
        </div>

        {/* Cards na vertical (um embaixo do outro), grandes, espaçosos e no mesmo estilo da seção de cima */}
        <div className="mt-12 sm:mt-16 flex flex-col gap-6 max-w-2xl mx-auto">
          {landingData.differentials.map((item) => (
            <article
              key={item.title}
              className="group flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-8 sm:p-10 text-center shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-xl"
            >
              {/* Ícone grande e destacado */}
              <div
                className="mb-5 flex size-16 items-center justify-center rounded-2xl border border-[#FFD2DC] bg-[#FFF0F3] text-3xl shadow-xs transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
              >
                {item.icon}
              </div>

              {/* Título com destaque visual */}
              <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-foreground/90 leading-snug">
                {item.title}
              </h3>

              {/* Descrição com ótimo respiro e leitura rápida */}
              <p className="mt-3 text-sm sm:text-base font-medium leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </article>
          ))}
        </div>

        {/* Botão de CTA com respiro amplo */}
        <div className="mt-16 sm:mt-20 flex justify-center text-center">
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
