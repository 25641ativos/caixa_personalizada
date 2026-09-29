import { landingData } from '../data.ts';

export function GalleryMarquee() {
  const images = landingData.galleryMarquee;
  const half = Math.ceil(images.length / 2);
  const base1 = images.slice(0, half);
  const base2 = images.slice(half);
  const row1 = [...base1, ...base1];
  const row2 = [...base2, ...base2];

  return (
    <section className="overflow-hidden bg-[#FFF0F3]/60 py-8 border-y border-[#FFD2DC]/50">
      <h2 className="px-4 text-center text-xs font-extrabold uppercase tracking-wide sm:text-sm">
        Veja tudo o que você pode <span className="text-primary">criar, personalizar e vender</span>
      </h2>
      
      {/* Linha 1 - Passando para a direita automaticamente */}
      <div className="mt-6 overflow-hidden">
        <div className="animate-marquee-right gap-3">
          {row1.map((src, idx) => (
            <div
              key={`row1-${src}-${idx}`}
              className="h-32 w-32 sm:h-44 sm:w-44 shrink-0 rounded-2xl border-2 border-[#FFD2DC] bg-white p-2 shadow-sm transition-transform hover:scale-105 flex items-center justify-center overflow-hidden"
            >
              <img
                src={src}
                alt="Modelo de caixinha cenário pronta para vender"
                loading="lazy"
                referrerPolicy="no-referrer"
                width={180}
                height={180}
                className="max-h-full max-w-full rounded-xl object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Linha 2 - Passando para a esquerda automaticamente */}
      <div className="mt-3 overflow-hidden">
        <div className="animate-marquee-left gap-3">
          {row2.map((src, idx) => (
            <div
              key={`row2-${src}-${idx}`}
              className="h-32 w-32 sm:h-44 sm:w-44 shrink-0 rounded-2xl border-2 border-[#FFD2DC] bg-white p-2 shadow-sm transition-transform hover:scale-105 flex items-center justify-center overflow-hidden"
            >
              <img
                src={src}
                alt="Modelo de caixinha cenário pronta para vender"
                loading="lazy"
                referrerPolicy="no-referrer"
                width={180}
                height={180}
                className="max-h-full max-w-full rounded-xl object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
