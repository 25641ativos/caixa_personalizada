import { landingData } from '../data.ts';

interface HeroProps {
  offerDate: string;
}

export function Hero({ offerDate }: HeroProps) {
  return (
    <>
      <div className="bg-primary py-2 text-center text-[11px] font-bold uppercase tracking-wide text-primary-foreground sm:text-xs">
        {offerDate ? `Oferta válida até ${offerDate}` : `Oferta por tempo limitado`}
      </div>
      <section className="bg-background px-4 pb-12 pt-10 text-center sm:pt-16">
        <div className="mx-auto max-w-5xl">
          <span className="inline-block rounded-full bg-[#FFF0F3] border border-[#FFD2DC] px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-primary shadow-sm sm:text-xs">
            +1.000 Projetos Prontos
          </span>
          <h1 className="mt-4 mx-auto max-w-5xl text-xl font-black leading-tight tracking-tight xs:text-2xl sm:text-3xl md:text-[36px] lg:text-[44px]">
            <span className="block">
              Dê Vida às Suas Ideias com <span className="text-primary">+1.000 Projetos</span>
            </span>
            <span className="block">
              de Personalizados para Criar Festas Encantadoras
            </span>
            <span className="block">
              ou <span className="text-primary">Começar Seu Próprio Negócio!</span>
            </span>
          </h1>
          <div className="relative mx-auto mt-8 w-full max-w-[420px] sm:max-w-[720px] animate-float">
            <img
              src={landingData.heroImage}
              alt="Modelos de caixinhas cenário montadas: Roblox, Moana, Dragon Ball, Hello Kitty e mais"
              width={720}
              height={493}
              decoding="async"
              fetchPriority="high"
              className="relative z-10 mx-auto w-full transition-transform hover:scale-[1.05]"
            />
          </div>
          <div className="mx-auto mt-8 max-w-2xl space-y-2">
            <p className="text-base font-semibold leading-relaxed text-foreground sm:text-lg">
              +1.000 projetos criativos prontos para festas ou para vender.
            </p>
            <p className="text-sm font-extrabold uppercase tracking-wider text-primary sm:text-base">
              Crie. Imprima. Personalize. Compartilhe. Venda.
            </p>
          </div>
          <div className="mt-10 flex flex-col items-center gap-4">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed h-auto w-full max-w-sm rounded-full bg-primary px-4 py-5 text-sm font-black uppercase tracking-wider text-primary-foreground shadow-[0_12px_28px_-6px_rgba(255,79,129,0.45)] transition-all hover:translate-y-[-2px] hover:bg-[#E6396D] hover:shadow-[0_16px_32px_-6px_rgba(255,79,129,0.55)] active:translate-y-[0px] xs:px-8 xs:text-base sm:text-lg"
              onClick={() => document.getElementById('ofertas')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Quero os +1000 moldes
            </button>
            <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground opacity-80">
              Acesso Imediato • Pagamento Único
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
