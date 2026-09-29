import type { FaqItem, Differential, BonusItem, TestimonialVideo } from "./types.ts";

export const landingData = {
  "heroImage": "/imagens/hero.webp",
  "faq": [
    {
      "q": "1. Preciso ter experiência com artesanato?",
      "a": "Não necessariamente. A experiência exigida depende do projeto e das instruções disponíveis. Consulte as informações de cada coleção para entender os materiais e as etapas necessárias."
    },
    {
      "q": "2. Preciso saber desenhar ou criar moldes?",
      "a": "A biblioteca oferece projetos já preparados conforme o conteúdo anunciado. Você não precisa criar todos os arquivos do zero, mas poderá precisar fazer ajustes e personalizações quando o formato permitir."
    },
    {
      "q": "3. Posso usar os projetos para fazer a festa dos meus filhos?",
      "a": "Sim, para os projetos e usos permitidos pela licença da oferta. Confira quais arquivos estão incluídos e se há restrições de utilização."
    },
    {
      "q": "4. Posso vender os produtos que montar?",
      "a": "Isso depende dos direitos de uso de cada arquivo e da licença comercial fornecida. A oferta deve explicar de forma clara quais utilizações são permitidas e quais são proibidas."
    },
    {
      "q": "5. Preciso ter uma impressora profissional?",
      "a": "Depende do projeto, do tamanho, do papel e da qualidade desejada. Consulte os requisitos de cada arquivo e escolha equipamentos compatíveis com suas necessidades."
    },
    {
      "q": "6. Consigo utilizar os materiais pelo celular?",
      "a": "O acesso digital pode ser feito pelo celular, conforme a plataforma de entrega. A preparação, edição ou impressão de determinados arquivos pode exigir computador ou equipamento compatível."
    },
    {
      "q": "7. Como recebo os arquivos após a compra?",
      "a": "A entrega deverá ser feita pela plataforma informada no checkout, com as instruções de acesso e os materiais efetivamente incluídos."
    },
    {
      "q": "8. Posso ganhar dinheiro vendendo personalizados?",
      "a": "Os projetos podem servir como apoio para desenvolver produtos e um catálogo. No entanto, não existe garantia de vendas ou renda. Os resultados dependem de demanda, preços, custos, divulgação e execução."
    },
    {
      "q": "9. Por quanto tempo terei acesso?",
      "a": "O prazo deve ser informado conforme as condições reais da oferta e da plataforma de entrega."
    },
    {
      "q": "10. Existe garantia?",
      "a": "Consulte a política de garantia apresentada no checkout. O prazo e as condições devem ser informados claramente antes da compra."
    },
    {
      "q": "11. Os projetos são editáveis?",
      "a": "Isso varia conforme o formato de cada arquivo. A página deve especificar quais arquivos podem ser editados e quais são fornecidos em formato pronto."
    },
    {
      "q": "12. Posso compartilhar os arquivos com outras pessoas?",
      "a": "O compartilhamento deve seguir os termos de uso e a licença da oferta. O acesso individual não significa autorização para redistribuir os arquivos."
    }
  ],
  "seloGarantia": "/imagens/selo-garantia.webp",
  "planoCompletoCard": "/imagens/plano-completo-card.webp",
  "oQueVoceRecebe": "/imagens/oque-voce-recebe.webp",
  "differentials": [
    {
      "icon": "🎨",
      "title": "Crie sem começar do zero",
      "text": "Escolha, personalize, imprima e monte."
    },
    {
      "icon": "💰",
      "title": "Crie para você ou para vender",
      "text": "Economize nas suas festas ou transforme suas criações em produtos."
    },
    {
      "icon": "✨",
      "title": "Tenha sempre novas opções",
      "text": "Mais projetos para diferentes temas, ocasiões e clientes."
    }
  ],
  "checkoutPlanoCompleto": "https://pay.wiapy.com/x5fWjldBL726",
  "checkoutPlanoBasico": "https://pay.wiapy.com/94EyJ45s8Id3",
  "checkoutOfertaEspecialModal": "https://pay.wiapy.com/xQTVYlLXW1mM",
  "idealFor": [
    {
      "title": "Quer criar momentos especiais para seus filhos",
      "description": "Faça lembrancinhas, decorações e personalizados para festas do seu jeito e gastando menos."
    },
    {
      "title": "Ama artesanato, papelaria e personalizados",
      "description": "Tenha projetos prontos para criar, imprimir e personalizar sem começar do zero."
    },
    {
      "title": "Quer transformar criatividade em renda",
      "description": "Crie personalizados para vender e tenha diversas opções para oferecer aos seus clientes."
    },
    {
      "title": "Já trabalha com personalizados",
      "description": "Amplie seu catálogo com novos projetos e tenha ainda mais opções para suas encomendas."
    }
  ],
  "toposBolo": [
    "/imagens/topo-minnie.webp",
    "/imagens/topo-stitch.webp",
    "/imagens/topo-rei-leao.webp",
    "/imagens/topo-dino.webp",
    "/imagens/topo-mario.webp",
    "/imagens/topo-patrulha.webp"
  ],
  "toposBoloExtra": [
    "/imagens/topo-bolo-extra-1.webp",
    "/imagens/topo-bolo-extra-2.webp",
    "/imagens/topo-bolo-extra-3.webp",
    "/imagens/topo-bolo-extra-4.webp",
    "/imagens/topo-bolo-extra-5.webp",
    "/imagens/topo-bolo-extra-6.webp",
    "/imagens/topo-bolo-extra-7.webp",
    "/imagens/topo-bolo-extra-8.webp"
  ],
  "bonuses": [
    {
      "index": 1,
      "badge": "BÔNUS 01",
      "title": "MAPA DE NAVEGAÇÃO CRIATIVA",
      "text": "Encontre rapidamente o projeto ideal por categoria, ocasião ou finalidade.",
      "price": "R$27",
      "image": "/imagens/bonus-1.webp"
    },
    {
      "index": 2,
      "badge": "BÔNUS 02",
      "title": "GUIA DE PREPARAÇÃO E MONTAGEM",
      "text": "Orientações sobre materiais, preparação, impressão e montagem, conforme cada projeto e seu formato. Benefício: ajudar a reduzir dúvidas durante o processo.",
      "price": "R$27",
      "image": "/imagens/bonus-2.webp"
    },
    {
      "index": 3,
      "badge": "BÔNUS 03",
      "title": "CALCULADORA DE CUSTO E PREÇO",
      "text": "Uma ferramenta de apoio para registrar gastos com materiais e estimar preços a partir dos custos e da margem desejada.\n\nBenefício: apoiar o planejamento financeiro de quem comercializa produtos. O resultado não garante lucro ou vendas.",
      "price": "R$37",
      "image": "/imagens/bonus-3.webp"
    },
    {
      "index": 4,
      "badge": "BÔNUS 04",
      "title": "CATÁLOGO DE APRESENTAÇÃO",
      "text": "Um modelo editável para organizar fotos, descrições e informações dos produtos que a cliente efetivamente oferece.\n\nBenefício: facilitar a apresentação do catálogo aos clientes.",
      "price": "R$37",
      "image": "/imagens/bonus-4.webp"
    },
    {
      "index": 5,
      "badge": "BÔNUS 05",
      "title": "PLANEJADOR DE PROJETOS",
      "text": "Um material para registrar quais projetos deseja fazer, os materiais necessários e as datas de preparação.",
      "price": "R$37",
      "image": "/imagens/bonus-5.webp"
    }
  ],
  "planoCompletoFeatures": [
    "+1.000 Projetos de Personalizados",
    "Diversos temas, festas e ocasiões",
    "Arquivos prontos para imprimir",
    "BÔNUS 01: Mapa de Navegação Criativa",
    "BÔNUS 02: Guia de Preparação e Montagem",
    "BÔNUS 03: Calculadora de Custo e Preço",
    "BÔNUS 04: Catálogo de Apresentação",
    "BÔNUS 05: Planejador de Projetos",
    "Acesso imediato"
  ],
  "caixinhasCarousel": [
    "/imagens/caixinha-1.webp",
    "/imagens/caixinha-2.webp",
    "/imagens/caixinha-3.webp",
    "/imagens/caixinha-4.webp",
    "/imagens/caixinha-5.webp",
    "/imagens/caixinha-6.webp",
    "/imagens/caixinha-7.webp",
    "/imagens/caixinha-8.webp",
    "/imagens/caixinha-9.webp"
  ],
  "galleryMarquee": [
    "/imagens/caixinha-1.webp",
    "/imagens/galeria-1.webp",
    "/imagens/caixinha-2.webp",
    "/imagens/galeria-2.webp",
    "/imagens/caixinha-3.webp",
    "/imagens/galeria-3.webp",
    "/imagens/caixinha-4.webp",
    "/imagens/galeria-4.webp",
    "/imagens/caixinha-5.webp",
    "/imagens/galeria-5.webp",
    "/imagens/caixinha-6.webp",
    "/imagens/galeria-6.webp",
    "/imagens/caixinha-7.webp",
    "/imagens/galeria-7.webp",
    "/imagens/caixinha-8.webp",
    "/imagens/galeria-8.webp",
    "/imagens/caixinha-9.webp",
    "/imagens/galeria-9.webp",
    "/imagens/galeria-10.webp",
    "/imagens/galeria-11.webp",
    "/imagens/galeria-12.webp",
    "/imagens/galeria-13.webp",
    "/imagens/galeria-14.webp"
  ],
  "planoBasicoFeatures": [
    "400 Projetos de Personalizados",
    "Diversos temas e ocasiões",
    "Arquivos prontos para imprimir",
    "Acesso imediato"
  ],
  "receiveCategories": [
    "Festas Infantis",
    "Lembrancinhas",
    "Papelaria Personalizada",
    "Presentes Criativos",
    "Datas Comemorativas",
    "Diversos Temas",
    "Projetos para Vender",
    "E muito mais..."
  ],
  "testimonialVideos": [
    {
      "src": "/videos/depo-video-1.mp4",
      "poster": "/imagens/depo-video-1-poster.jpg"
    },
    {
      "src": "/videos/depo-video-2.mp4",
      "poster": "/imagens/depo-video-2-poster.jpg"
    },
    {
      "src": "/videos/depo-video-3.mp4",
      "poster": "/imagens/depo-video-3-poster.jpg"
    }
  ],
  "testimonialImages": [
    "/imagens/depoimento-whats-1.webp",
    "/imagens/depoimento-whats-2.webp",
    "/imagens/depoimento-whats-3.webp",
    "https://i.ibb.co/rfdN9ttz/Whats-App-Image-2026-09-28-at-15-44-20.jpg",
    "https://i.ibb.co/6RPrm8mp/Whats-App-Image-2026-09-28-at-15-44-37.jpg",
    "https://i.ibb.co/bMTZm93b/Whats-App-Image-2026-09-28-at-15-44-56.jpg",
    "https://i.ibb.co/2rZ3RCD/Whats-App-Image-2026-09-28-at-15-45-12.jpg"
  ],
  "checkoutUpsellCompleto": "https://pay.wiapy.com/xQTVYlLXW1mM",
  "checkoutUpsellBasico": "https://pay.wiapy.com/94EyJ45s8Id3"
};
