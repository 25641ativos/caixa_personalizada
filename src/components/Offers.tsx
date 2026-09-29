import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { landingData } from '../data.ts';
import { SectionTitle } from './SectionTitle.tsx';
import { Check, X } from 'lucide-react';

const padZero = (n: number) => String(n).padStart(2, '0');

export function Offers() {
  const [secondsLeft, setSecondsLeft] = useState(13819);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF4F81', '#FF85A2', '#FFA41C', '#FFD2DC', '#34D399'],
      });
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 60,
          origin: { x: 0 },
          colors: ['#FF4F81', '#FFA41C', '#FF85A2'],
        });
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 60,
          origin: { x: 1 },
          colors: ['#FF4F81', '#FFA41C', '#FF85A2'],
        });
      }, 250);
    } catch {
      // ignore
    }
  };

  const hours = Math.floor(secondsLeft / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  const seconds = secondsLeft % 60;

  return (
    <section id="ofertas" className="bg-background px-4 py-12 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <SectionTitle>
          Escolha o melhor plano <span className="text-primary">para você!</span>
        </SectionTitle>

        <div className="mt-6 text-center">
          <p className="text-[11px] font-bold uppercase text-muted-foreground">
            Oferta limitada – termina em:
          </p>
          <div className="mt-2 flex items-start justify-center gap-3 text-primary">
            {[
              { v: hours, l: 'Horas' },
              { v: minutes, l: 'Min' },
              { v: seconds, l: 'Seg' },
            ].map((item, idx) => (
              <div key={item.l} className="flex items-start gap-3">
                {idx > 0 && <span className="text-2xl font-black sm:text-3xl">:</span>}
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-black sm:text-3xl">{padZero(item.v)}</span>
                  <span className="text-[9px] font-bold uppercase text-muted-foreground">{item.l}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 md:items-start">
          {/* Plano Básico */}
          <article className="rounded-2xl border-2 border-border bg-card p-6 text-center shadow-md transition-all hover:shadow-xl flex flex-col justify-between">
            <div>
              <span className="inline-block rounded-full bg-[#FFF0F3] border border-[#FFD2DC] px-3.5 py-1 text-[10px] font-black uppercase tracking-widest text-primary">
                PARA COMEÇAR
              </span>
              <h3 className="mt-2 text-xl font-black uppercase tracking-tight text-foreground">
                PLANO BÁSICO
              </h3>
              <p className="mt-1 text-xs font-black uppercase tracking-wide text-primary">
                Biblioteca Essencial
              </p>
              <p className="mt-3 text-xs font-medium text-muted-foreground leading-relaxed">
                Para quem quer começar com uma seleção de projetos prontos para criar e personalizar.
              </p>

              <div className="mt-4 rounded-lg bg-[#FFF0F3] border border-[#FFD2DC] px-3 py-2 text-[10px] font-bold text-muted-foreground uppercase tracking-tighter">
                ⚠️ VOCÊ ESTÁ PERDENDO OS BÔNUS EXCLUSIVOS
              </div>

              <ul className="mt-6 space-y-3 text-left">
                {landingData.planoBasicoFeatures.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-xs font-semibold leading-tight text-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <p className="text-xs font-bold text-muted-foreground line-through decoration-primary decoration-2">
                R$ 47,00
              </p>
              <div className="mt-1">
                <span className="text-sm font-black text-foreground">R$</span>
                <span className="text-4xl font-black text-foreground tracking-tighter">19,90</span>
              </div>

              <button
                type="button"
                onClick={handleOpenModal}
                className="mt-6 h-auto w-full rounded-full bg-[#FFF0F3] border border-[#FFD2DC] py-4 px-4 text-xs font-black uppercase tracking-wider text-primary shadow-sm hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer leading-tight"
              >
                QUERO OS 400 PROJETOS
              </button>
              <p className="mt-4 text-[10px] font-black uppercase tracking-tight text-primary animate-pulse">
                92% das pessoas aproveitam a oferta ao lado →
              </p>
            </div>
          </article>

          {/* Plano Completo */}
          <article className="relative overflow-hidden rounded-3xl border-4 border-primary bg-gradient-to-b from-[#FFF5F8] via-white to-[#FFF0F3] p-6 text-center shadow-2xl transition-all hover:shadow-[0_20px_45px_-10px_rgba(255,79,129,0.3)] flex flex-col justify-between">
            <div className="absolute -right-12 top-6 rotate-45 bg-primary px-12 py-1 text-[9px] font-black uppercase text-primary-foreground shadow-sm">
              RECOMENDADO
            </div>
            <div>
              <span className="inline-block rounded-full bg-secondary text-secondary-foreground px-4 py-1.5 text-[10px] font-black uppercase tracking-widest shadow-sm">
                ⭐ MAIS COMPLETO • MELHOR CUSTO-BENEFÍCIO
              </span>
              <h3 className="mt-3 text-2xl font-black uppercase tracking-tight text-primary">
                PLANO COMPLETO
              </h3>
              <p className="mt-1 text-xs font-black uppercase tracking-wide text-foreground">
                Biblioteca Criativa Completa
              </p>
              <p className="mt-2 text-xs font-medium text-muted-foreground leading-relaxed">
                Tenha acesso ao acervo completo + todos os bônus exclusivos.
              </p>

              <img
                src={landingData.planoCompletoCard}
                alt="Plano completo com todos os bônus"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                width={280}
                height={280}
                className="mx-auto mt-4 w-full max-w-[280px] sm:max-w-[320px] rounded-xl object-contain drop-shadow-md transition-transform hover:scale-105"
              />

              <ul className="mt-5 space-y-2.5 text-left">
                {landingData.planoCompletoFeatures.map((feat, idx) => (
                  <li key={feat} className="flex items-start gap-2.5 text-xs font-bold leading-tight text-foreground">
                    <span className="mt-0.5 shrink-0 text-primary" aria-hidden="true">
                      {idx === 0 ? '🔥' : <Check className="size-4" />}
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-xs font-bold text-primary">
                Você recebe +600 projetos em relação ao Básico + todos os 5 bônus.
              </p>
            </div>

            <div className="mt-6">
              <p className="text-xs font-bold text-muted-foreground line-through decoration-primary decoration-2">
                De R$ 197,00
              </p>
              <p className="text-[11px] font-black uppercase text-primary">HOJE POR APENAS</p>
              <div className="mt-1">
                <span className="text-sm font-black text-primary">R$</span>
                <span className="text-5xl font-black text-primary tracking-tighter">37,90</span>
              </div>
              <p className="mt-2 inline-block rounded-full bg-[#FFF3D6] border border-[#FFE082] px-3 py-1 text-[11px] font-black uppercase text-[#B86E00]">
                São apenas R$ 18 a mais que o Plano Básico.
              </p>

              <a
                href={landingData.checkoutPlanoCompleto}
                className="mt-6 inline-block w-full rounded-full bg-primary py-5 px-4 text-sm font-black uppercase tracking-wider text-primary-foreground shadow-[0_12px_30px_-5px_rgba(255,79,129,0.5)] hover:bg-[#E6396D] hover:shadow-[0_16px_36px_-5px_rgba(255,79,129,0.6)] transition-all hover:scale-[1.02] xs:text-base whitespace-normal leading-tight text-center cursor-pointer"
              >
                QUERO +1.000 PROJETOS E TODOS OS BÔNUS
              </a>
              <p className="mt-4 text-[10px] font-black uppercase tracking-tight text-muted-foreground">
                Acesso imediato • Pagamento único • Sem mensalidade
              </p>
            </div>
          </article>
        </div>

        <p className="mt-12 text-center text-[12px] font-black uppercase tracking-widest text-primary">
          Aproveite agora: preço promocional por tempo limitado!
        </p>
      </div>

      {/* Upsell Dialog Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/80 transition-opacity"
            onClick={() => setIsModalOpen(false)}
          />
          <div className="relative z-50 w-full max-w-[95vw] rounded-3xl border border-border bg-background p-6 shadow-2xl duration-200 sm:max-w-lg max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 rounded-full bg-muted/60 p-1.5 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Fechar</span>
            </button>

            <div className="text-center">
              <span className="inline-block rounded-full bg-secondary text-secondary-foreground px-3.5 py-1 text-[10px] font-black uppercase tracking-widest shadow-sm">
                🎉 OFERTA ESPECIAL EXCLUSIVA
              </span>
              <h4 className="mt-2 text-xl font-black uppercase text-primary sm:text-2xl">
                ESPERA! UMA OFERTA ESPECIAL...
              </h4>
              <p className="mt-2 text-xs sm:text-sm font-medium text-foreground leading-relaxed">
                Você selecionou o plano básico. Por apenas mais{' '}
                <span className="font-bold text-primary">R$ 10,00</span>, leve o{' '}
                <span className="font-bold">PLANO COMPLETO</span> com todos os 5 bônus exclusivos e mais de 1.000 projetos!
              </p>
            </div>

            <div className="mt-4 rounded-2xl border border-[#FFD2DC] bg-[#FFF0F3] p-4 text-center">
              <p className="text-xs font-bold uppercase text-muted-foreground line-through">
                De R$ 197,00
              </p>
              <div className="mt-0.5">
                <span className="text-sm font-black text-primary">R$</span>
                <span className="text-4xl font-black text-primary tracking-tighter">29,90</span>
              </div>
              <p className="mt-1 inline-block rounded-full bg-[#FFF3D6] border border-[#FFE082] px-2.5 py-0.5 text-[10px] font-black text-[#B86E00] uppercase tracking-wide">
                DESCONTO EXCLUSIVO NESTA TELA
              </p>
            </div>

            <div className="mt-4 space-y-2 rounded-2xl border border-border bg-card p-4 text-left">
              <p className="text-[11px] font-black uppercase tracking-wider text-primary">
                Tudo o que você leva no Plano Completo por R$ 29,90:
              </p>
              <ul className="space-y-1.5 text-xs font-bold text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">🔥</span>
                  <span>+1.000 Projetos de Personalizados</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 shrink-0 text-primary mt-0.5" />
                  <span>BÔNUS 01: Mapa de Navegação Criativa</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 shrink-0 text-primary mt-0.5" />
                  <span>BÔNUS 02: Guia de Preparação e Montagem</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 shrink-0 text-primary mt-0.5" />
                  <span>BÔNUS 03: Calculadora de Custo e Preço</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 shrink-0 text-primary mt-0.5" />
                  <span>BÔNUS 04: Catálogo de Apresentação</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 shrink-0 text-primary mt-0.5" />
                  <span>BÔNUS 05: Planejador de Projetos</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 shrink-0 text-primary mt-0.5" />
                  <span>Acesso Imediato e Vitalício</span>
                </li>
              </ul>
            </div>

            <div className="mt-5 flex flex-col gap-2.5">
              <a
                href={landingData.checkoutUpsellCompleto}
                className="inline-block w-full rounded-full bg-primary py-4 px-3 text-center text-xs sm:text-sm font-black uppercase text-primary-foreground shadow-lg hover:bg-[#E6396D] transition-all cursor-pointer leading-snug"
              >
                SIM! QUERO O PLANO COMPLETO (R$ 29,90)
              </a>
              <a
                href={landingData.checkoutUpsellBasico}
                className="inline-block w-full rounded-full py-2.5 text-center text-xs font-bold uppercase text-muted-foreground hover:text-foreground transition-all cursor-pointer"
              >
                NÃO, QUERO APENAS O BÁSICO (R$ 19,90)
              </a>
            </div>

            <p className="mt-2 text-center text-[9px] text-muted-foreground uppercase font-bold">
              * Acesso vitalício e imediato • Sem mensalidade *
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
