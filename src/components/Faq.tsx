import { useState } from 'react';
import { landingData } from '../data.ts';
import { SectionTitle } from './SectionTitle.tsx';
import { ChevronDown } from 'lucide-react';

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="bg-background px-4 py-12 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <span className="inline-block rounded-full bg-[#FFF0F3] border border-[#FFD2DC] px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-primary shadow-sm">
            Dúvidas?
          </span>
          <SectionTitle className="mt-4">Perguntas Frequentes</SectionTitle>
        </div>

        <div className="mt-12 w-full space-y-3">
          {landingData.faq.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.q}
                data-state={isOpen ? 'open' : 'closed'}
                className="rounded-2xl border border-border bg-card px-5 shadow-sm transition-all hover:border-primary/40"
              >
                <button
                  type="button"
                  data-state={isOpen ? 'open' : 'closed'}
                  onClick={() => toggleItem(idx)}
                  className="flex w-full items-center justify-between py-5 text-left text-sm font-black uppercase tracking-tight hover:no-underline sm:text-base cursor-pointer transition-all [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg]:text-primary"
                >
                  <span>{item.q}</span>
                  <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
                </button>
                {isOpen && (
                  <div className="overflow-hidden text-sm pb-5 pt-0 font-medium leading-relaxed text-muted-foreground animate-in fade-in-0 duration-200">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
            Ainda tem dúvidas? Fale conosco!
          </p>
        </div>
      </div>
    </section>
  );
}
