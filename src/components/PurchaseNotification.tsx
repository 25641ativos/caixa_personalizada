import { useState, useEffect } from 'react';
import { Check, X } from 'lucide-react';

export interface PurchaseItem {
  name: string;
  variant: 'adquiriu' | 'garantiu';
  city: string;
  timeAgo: string;
}

const PURCHASES: PurchaseItem[] = [
  { name: 'Mariana Silva', variant: 'adquiriu', city: 'Goiânia - GO', timeAgo: 'há 2 minutos' },
  { name: 'Camila Ferreira', variant: 'garantiu', city: 'São Paulo - SP', timeAgo: 'há 3 minutos' },
  { name: 'Carla Nogueira', variant: 'adquiriu', city: 'Goiânia - GO', timeAgo: 'agora mesmo' },
  { name: 'Juliana Santos', variant: 'garantiu', city: 'Belo Horizonte - MG', timeAgo: 'há 1 minuto' },
  { name: 'Renata Oliveira', variant: 'adquiriu', city: 'Curitiba - PR', timeAgo: 'há 4 minutos' },
  { name: 'Beatriz Lima', variant: 'garantiu', city: 'Campinas - SP', timeAgo: 'há 2 minutos' },
  { name: 'Patrícia Alves', variant: 'adquiriu', city: 'Brasília - DF', timeAgo: 'há 5 minutos' },
  { name: 'Larissa Mendes', variant: 'garantiu', city: 'Salvador - BA', timeAgo: 'agora mesmo' },
  { name: 'Fernanda Costa', variant: 'adquiriu', city: 'Porto Alegre - RS', timeAgo: 'há 3 minutos' },
  { name: 'Bruna Carvalho', variant: 'garantiu', city: 'Fortaleza - CE', timeAgo: 'há 2 minutos' },
  { name: 'Aline Rocha', variant: 'adquiriu', city: 'Recife - PE', timeAgo: 'há 6 minutos' },
  { name: 'Amanda Ribeiro', variant: 'garantiu', city: 'Manaus - AM', timeAgo: 'há 1 minuto' },
  { name: 'Vanessa Martins', variant: 'adquiriu', city: 'Florianópolis - SC', timeAgo: 'há 4 minutos' },
  { name: 'Débora Souza', variant: 'garantiu', city: 'Vitória - ES', timeAgo: 'há 2 minutos' },
];

export function PurchaseNotification() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  // Ciclo: 5 segundos visível -> 3.5 segundos escondido -> próxima notificação
  useEffect(() => {
    if (isDismissed) return;

    let hideTimeout: NodeJS.Timeout;
    let nextTimeout: NodeJS.Timeout;

    if (isVisible) {
      hideTimeout = setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    } else {
      nextTimeout = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % PURCHASES.length);
        setIsVisible(true);
      }, 3500);
    }

    return () => {
      clearTimeout(hideTimeout);
      clearTimeout(nextTimeout);
    };
  }, [isVisible, isDismissed]);

  if (isDismissed) {
    return null;
  }

  const current = PURCHASES[currentIndex];

  return (
    <aside
      role="status"
      aria-live="polite"
      className={`fixed bottom-4 left-4 z-[999999] w-[calc(100vw-32px)] max-w-[340px] transition-all duration-400 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
          : 'opacity-0 translate-y-3 scale-95 pointer-events-none'
      }`}
    >
      <div className="flex items-center gap-3 rounded-2xl border-2 border-[#FFD2DC] bg-white/95 p-3.5 shadow-[0_12px_32px_rgba(255,79,129,0.28)] backdrop-blur-md transition-all">
        {/* Ícone de confirmação de compra verde com pulso */}
        <div className="relative flex size-9 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm ring-4 ring-emerald-50">
          <Check className="size-4 stroke-[3]" />
          <span className="absolute -top-0.5 -right-0.5 size-2.5 rounded-full bg-emerald-400 animate-ping" />
        </div>

        {/* Texto da Notificação conforme estrutura solicitada */}
        <div className="flex-1 min-w-0 pr-1">
          {current.variant === 'adquiriu' ? (
            <p className="text-xs sm:text-[13px] leading-snug text-[#2A111E]">
              <span className="font-black text-[#FF4F81]">✓</span>{' '}
              <strong className="font-extrabold text-[#2A111E]">{current.name}</strong>{' '}
              acabou de adquirir a{' '}
              <span className="font-bold text-[#FF4F81]">Biblioteca Criativa</span>
            </p>
          ) : (
            <p className="text-xs sm:text-[13px] leading-snug text-[#2A111E]">
              <strong className="font-extrabold text-[#2A111E]">{current.name}</strong>{' '}
              garantiu acesso à{' '}
              <span className="font-bold text-[#FF4F81]">Biblioteca Criativa</span>
            </p>
          )}

          <div className="mt-1 flex items-center gap-1.5 text-[10px] text-muted-foreground font-semibold">
            <span className="flex items-center gap-1 text-emerald-600 font-bold">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              Compra verificada
            </span>
            <span>•</span>
            <span className="text-muted-foreground">{current.city}</span>
            <span>•</span>
            <span className="text-muted-foreground">{current.timeAgo}</span>
          </div>
        </div>

        {/* Botão fechar */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsDismissed(true);
          }}
          className="rounded-full p-1 text-muted-foreground/60 hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
          aria-label="Fechar notificação"
        >
          <X className="size-4" />
        </button>
      </div>
    </aside>
  );
}
