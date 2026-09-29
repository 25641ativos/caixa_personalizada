import { landingData } from '../data.ts';
import { SectionTitle } from './SectionTitle.tsx';
import { Check } from 'lucide-react';

export function Receive() {
  const { oQueVoceRecebe, receiveCategories } = landingData;
  return (
    <section className="bg-background px-4 py-12 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center">
          <span className="rounded-full bg-[#FFF0F3] border border-[#FFD2DC] px-4 py-1 text-[10px] font-bold uppercase tracking-wide text-primary shadow-sm">
            Seu Acervo Completo
          </span>
          <SectionTitle className="mt-4">TUDO O QUE VOCÊ VAI RECEBER</SectionTitle>
        </div>
        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <img
              src={oQueVoceRecebe}
              alt="Mockup dos moldes de caixinhas cenário"
              loading="lazy"
              referrerPolicy="no-referrer"
              width={520}
              height={520}
              className="relative z-10 mx-auto w-full max-w-[320px] rounded-2xl shadow-xl transition-transform hover:scale-105 sm:max-w-[420px] object-contain"
            />
            <div className="absolute inset-0 -z-10 bg-primary/15 blur-3xl rounded-full scale-90" />
          </div>
          <div className="order-1 space-y-6 lg:order-2">
            <article className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-xl">
              <div className="flex items-center gap-3">
                <span className="flex size-7 items-center justify-center rounded-full bg-primary text-[11px] font-black text-primary-foreground shadow-sm">
                  01
                </span>
                <h3 className="text-base font-black uppercase tracking-tight sm:text-lg">
                  +1.000 PROJETOS PARA VOCÊ CRIAR SEM COMEÇAR DO ZERO
                </h3>
              </div>
              <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground">
                Tenha opções para diferentes festas, presentes, clientes e ocasiões. Escolha o projeto, personalize, imprima e monte.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2">
                {receiveCategories.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs font-bold text-foreground/90">
                    <Check className="size-3.5 shrink-0 text-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>
            <article className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-xl">
              <div className="flex items-center gap-3">
                <span className="flex size-7 items-center justify-center rounded-full bg-primary text-[11px] font-black text-primary-foreground shadow-sm">
                  02
                </span>
                <h3 className="text-base font-black uppercase tracking-tight sm:text-lg">
                  TUDO PRONTO PARA FACILITAR SUA CRIAÇÃO
                </h3>
              </div>
              <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground">
                Além dos projetos, você recebe recursos de apoio para encontrar, preparar, organizar e montar seus personalizados com muito mais praticidade.
              </p>
            </article>
            <div className="pt-4 text-center lg:text-left">
              <p className="text-sm font-black uppercase text-primary">
                TUDO EM UM SÓ LUGAR • ACESSO IMEDIATO • PAGAMENTO ÚNICO
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
