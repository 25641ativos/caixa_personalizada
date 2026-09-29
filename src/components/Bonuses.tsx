import { landingData } from '../data.ts';
import { SectionTitle } from './SectionTitle.tsx';

export function Bonuses() {
  const { bonuses } = landingData;
  return (
    <section className="bg-background px-4 py-12 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <span className="inline-block rounded-full bg-[#FFF0F3] border border-[#FFD2DC] px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-primary shadow-sm">
            Potencialize Suas Criações
          </span>
          <SectionTitle className="mt-4">
            E se você escolher a <span className="text-primary">Oferta Completa...</span>
          </SectionTitle>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-relaxed text-muted-foreground sm:text-base">
            Você ainda recebe 5 bônus extras para organizar, apresentar e valorizar seus personalizados — sem pagar nada a mais por isso.
          </p>
          <div className="mt-6 flex justify-center">
            <span className="inline-block rounded-full bg-primary px-6 py-2.5 text-xs font-black uppercase tracking-widest text-primary-foreground shadow-[0_8px_20px_-4px_rgba(255,79,129,0.4)]">
              5 BÔNUS EXCLUSIVOS
            </span>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bonuses.map((item) => (
            <article
              key={item.index}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#FFD2DC] bg-card shadow-sm transition-all hover:border-primary/40 hover:shadow-2xl"
            >
              <div className="aspect-square bg-[#FFF5F7] p-3 sm:p-4 flex items-center justify-center overflow-hidden border-b border-[#FFD2DC]/60">
                <div className="relative w-full h-full flex items-center justify-center rounded-xl bg-white p-2 border border-pink-100 shadow-inner">
                  <img
                    src={item.image}
                    alt={`Bônus ${item.index}: ${item.title}`}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    width={400}
                    height={400}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="p-6 flex flex-1 flex-col justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary">
                    {item.badge || `BÔNUS 0${item.index}`}
                  </span>
                  <h3 className="mt-2 text-sm font-black uppercase tracking-tight">{item.title}</h3>
                  <p className="mt-3 text-xs font-medium leading-relaxed text-muted-foreground whitespace-pre-line">{item.text}</p>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-border/80 pt-4">
                  <span className="text-[10px] font-bold text-muted-foreground line-through uppercase tracking-tighter">
                    Valor: {item.price}
                  </span>
                  <span className="text-[11px] font-black bg-[#FFF3D6] text-[#B86E00] border border-[#FFE082] px-2.5 py-1 rounded-full uppercase tracking-widest shadow-sm">
                    GRÁTIS HOJE
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm font-black uppercase tracking-widest text-primary">
            * TODOS ESTES 5 BÔNUS ESTÃO INCLUSOS NO PLANO COMPLETO *
          </p>
        </div>
      </div>
    </section>
  );
}
