import { useState, useRef, useCallback } from 'react';
import { landingData } from '../data.ts';
import { SectionTitle } from './SectionTitle.tsx';
import { X } from 'lucide-react';

export function Testimonials() {
  const images = landingData.testimonialImages;

  // Repetimos o conjunto para permitir loop contínuo e infinito sem salto visual
  const marqueeItems = [...images, ...images];

  // Estado para pausar ao interagir (hover, toque, clique)
  const [isPaused, setIsPaused] = useState(false);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Zoom lightbox modal
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  const pauseInteraction = useCallback(() => {
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    setIsPaused(true);
  }, []);

  const resumeInteraction = useCallback((delay = 3500) => {
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, delay);
  }, []);

  const feedbackAlts = [
    'Depoimento de cliente sobre os moldes de caixinhas',
    'Depoimento de cliente elogiando a qualidade e facilidade',
    'Depoimento de cliente destacando o retorno com o material',
    'Depoimento de cliente compartilhando resultado de pedidos',
    'Depoimento de cliente sobre os personalizados',
    'Depoimento de cliente elogiando o acabamento dos projetos',
    'Depoimento de cliente recomendando a biblioteca',
  ];

  return (
    <section className="bg-[#FFF0F3] px-3 sm:px-6 py-12 sm:py-20 overflow-hidden border-y border-border/50">
      <div className="mx-auto max-w-6xl">
        {/* Cabeçalho da seção */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
          <span className="inline-block rounded-full bg-white border border-[#FFD2DC] px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-primary shadow-sm">
            Resultados Reais
          </span>
          <SectionTitle className="mt-3">
            O que as clientes <span className="text-primary">estão dizendo</span>
          </SectionTitle>
          <p className="mt-3 text-sm sm:text-base font-medium text-muted-foreground max-w-xl">
            Veja a experiência real de quem já está usando os moldes e projetos para encantar clientes e produzir personalizados.
          </p>
        </div>

        {/* ========================================================
            CARROSSEL HORIZONTAL AUTOMÁTICO E CONTÍNUO (DESKTOP & MOBILE)
            - Mesma fonte de dados única para desktop e mobile
            - Movimento contínuo, suave e em loop infinito sem travamento
            - Mobile: cards compactos exibindo entre 1,5 e 2 cards simultaneamente
            - Desktop: mantido intacto conforme aprovado
           ======================================================== */}
        <div
          className="relative overflow-hidden py-2 sm:py-3"
          onMouseEnter={pauseInteraction}
          onMouseLeave={() => resumeInteraction(1200)}
        >
          {/* Gradientes sutis nas laterais para transição suave */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-3 sm:w-16 bg-gradient-to-r from-[#FFF0F3] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-3 sm:w-16 bg-gradient-to-l from-[#FFF0F3] to-transparent" />

          {/* Trilho de rolagem contínua automática */}
          <div
            className={`animate-testimonials-track gap-2.5 sm:gap-6 items-center ${
              isPaused ? 'is-paused' : ''
            }`}
          >
            {marqueeItems.map((src, idx) => {
              const originalIndex = idx % images.length;
              return (
                <div
                  key={`feedback-card-${src}-${idx}`}
                  onClick={() => {
                    pauseInteraction();
                    setZoomImage(src);
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label="Toque para ver depoimento"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      pauseInteraction();
                      setZoomImage(src);
                    }
                  }}
                  className="group relative flex-shrink-0 w-[55vw] max-w-[210px] min-w-[165px] sm:w-[250px] md:w-[280px] lg:w-[315px] rounded-xl sm:rounded-2xl overflow-hidden border sm:border-2 border-[#FFD2DC] bg-white p-1 sm:p-2.5 shadow-xs sm:shadow-md hover:shadow-xl transition-all duration-300 hover:border-primary/50 hover:scale-[1.02] cursor-pointer"
                >
                  {/* Somente a imagem do depoimento, compacto e sem cortes */}
                  <img
                    src={src}
                    alt={feedbackAlts[originalIndex] || `Depoimento de cliente ${originalIndex + 1}`}
                    loading={idx < 4 ? 'eager' : 'lazy'}
                    decoding="async"
                    className="w-full max-h-[290px] sm:max-h-none h-auto block select-none object-contain rounded-lg sm:rounded-xl"
                    draggable={false}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Prova social com contador */}
        <div className="mt-8 sm:mt-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm border border-[#FFD2DC]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
            </span>
            <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-muted-foreground">
              6.195 mulheres já acessaram o material
            </span>
          </div>
        </div>
      </div>

      {/* Modal de visualização ampliada do depoimento */}
      {zoomImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => {
            setZoomImage(null);
            resumeInteraction(1500);
          }}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-[94vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => {
                setZoomImage(null);
                resumeInteraction(1500);
              }}
              className="absolute -top-3 -right-3 rounded-full bg-white text-foreground p-2 shadow-xl hover:bg-primary hover:text-white transition-all cursor-pointer z-10"
              aria-label="Fechar ampliação"
            >
              <X className="size-5" />
            </button>
            <img
              src={zoomImage}
              alt="Depoimento em tamanho completo"
              className="max-h-[85vh] max-w-[94vw] object-contain rounded-2xl shadow-2xl border-2 border-white/20 bg-white"
            />
          </div>
        </div>
      )}
    </section>
  );
}
