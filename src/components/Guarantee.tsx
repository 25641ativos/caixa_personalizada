import { landingData } from '../data.ts';

export function Guarantee() {
  return (
    <section className="bg-[#FFF0F3] px-4 py-12 sm:py-24 border-y border-border/50">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-block rounded-full bg-[#FFF3D6] border border-[#FFE082] px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-[#B86E00] shadow-sm">
          COMPRA 100% SEGURA
        </span>
        <h2 className="mt-4 text-2xl font-black uppercase tracking-tight sm:text-4xl">
          Você tem <span className="text-primary">30 dias</span> para acessar e conhecer o material.
        </h2>
        <div className="mt-8 flex justify-center">
          <img
            src={landingData.seloGarantia}
            alt="Selo de garantia de 30 dias"
            loading="lazy"
            width={160}
            height={160}
            className="size-32 transition-transform hover:rotate-12 sm:size-40"
          />
        </div>
        <div className="mx-auto mt-8 max-w-2xl space-y-4">
          <p className="text-base font-medium leading-relaxed text-muted-foreground">
            A função dessa seção é remover qualquer risco das suas costas. Você compra hoje, testa os moldes, assiste às aulas e só continua se realmente sentir que está funcionando para você.
          </p>
          <p className="text-base font-black text-foreground">
            Se por qualquer motivo você não gostar, devolvemos 100% do seu dinheiro — sem perguntas e sem burocracia.
          </p>
        </div>
        <button
          type="button"
          className="mt-10 inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer h-auto w-full max-w-sm rounded-full bg-primary px-4 py-5 text-sm font-black uppercase tracking-widest text-primary-foreground shadow-[0_12px_28px_-6px_rgba(255,79,129,0.45)] hover:bg-[#E6396D] hover:shadow-[0_16px_32px_-6px_rgba(255,79,129,0.55)] transition-all hover:scale-[1.02] xs:px-10 xs:text-base"
          onClick={() => document.getElementById('ofertas')?.scrollIntoView({ behavior: 'smooth' })}
        >
          QUERO COMEÇAR AGORA SEM RISCO
        </button>
      </div>
    </section>
  );
}
