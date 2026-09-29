import { useState, useEffect } from 'react';
import { Hero } from './components/Hero.tsx';
import { GalleryMarquee } from './components/GalleryMarquee.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { Receive } from './components/Receive.tsx';
import { Ideal } from './components/Ideal.tsx';
import { Bonuses } from './components/Bonuses.tsx';
import { Offers } from './components/Offers.tsx';
import { Guarantee } from './components/Guarantee.tsx';
import { Faq } from './components/Faq.tsx';
import { Footer } from './components/Footer.tsx';
import { PurchaseNotification } from './components/PurchaseNotification.tsx';

export default function App() {
  const [offerDate, setOfferDate] = useState('');

  useEffect(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    setOfferDate(
      d.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
    );
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <Hero offerDate={offerDate} />
      <GalleryMarquee />
      <Testimonials />
      <Receive />
      <Ideal />
      <Bonuses />
      <Offers />
      <Guarantee />
      <Faq />
      <Footer />
      <PurchaseNotification />
    </div>
  );
}
