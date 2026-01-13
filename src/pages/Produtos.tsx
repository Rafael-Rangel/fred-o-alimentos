import { Link } from "react-router-dom";
import { ArrowRight, Download, Trophy, Award, DollarSign, Shield, Sparkles, Recycle, ShieldCheck, Star, Loader2, Clock } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import leiteCoco from "@/assets/leite-de-coco.png";
import cocoRalado from "@/assets/coco-ralado.png";
import oleoCoco from "@/assets/oleo-de-coco.png";
import manteigaCoco from "@/assets/manteiga-de-coco.png";
import shoyu from "@/assets/shoyu.png";
import palmito from "@/assets/palmito.png";
import redPatternBg from "@/assets/red-pattern-bg.jpg";
import cremeLeiteCoco from "@/assets/Creme de Leite de Coco.png";
import leiteCocoCondensado from "@/assets/Leite de coco condesado.png";
import flocoCoco from "@/assets/Floco de Coco.png";
import azeiteDende from "@/assets/Azeite de Dende.png";
import farinhaTapioca from "@/assets/Farinha de Tapioca.png";
import gomaTapioca from "@/assets/Goma de Tapioca.png";

const Produtos = () => {
  // Função para gerar placeholder SVG leve
  const generatePlaceholder = (productName: string): string => {
    // Paleta de cores do site (vermelho, branco, verde)
    const colors = {
      background: "#ffffff",
      text: "#666666",
      accent: "#228B22",
      primary: "#DC0000"
    };
    
    // Dividir o nome do produto em linhas se for muito longo
    const words = productName.split(' ');
    const lines: string[] = [];
    let currentLine = '';
    
    words.forEach((word, index) => {
      if ((currentLine + word).length > 20 && currentLine !== '') {
        lines.push(currentLine.trim());
        currentLine = word + ' ';
      } else {
        currentLine += word + ' ';
      }
      if (index === words.length - 1) {
        lines.push(currentLine.trim());
      }
    });
    
    // Criar SVG simples e leve como data URI
    const svg = `
      <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="400" fill="${colors.background}"/>
        <circle cx="200" cy="150" r="50" fill="${colors.accent}" opacity="0.15"/>
        <circle cx="200" cy="150" r="35" fill="${colors.accent}" opacity="0.25"/>
        ${lines.map((line, index) => 
          `<text x="200" y="${240 + (index * 28)}" font-family="Arial, sans-serif" font-size="18" font-weight="600" fill="${colors.text}" text-anchor="middle">${line}</text>`
        ).join('')}
        <rect x="150" y="320" width="100" height="4" fill="${colors.primary}" opacity="0.3" rx="2"/>
      </svg>
    `.trim();
    
    // Usar encodeURIComponent para evitar problemas com caracteres especiais
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  };

  // Função para obter ícone baseado na tag
  const getTagIcon = (tag: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      "Mais Vendido": Trophy,
      "Campeão de Vendas": Trophy,
      "Extra Virgem": Award,
      "Melhor Preço": DollarSign,
      "Sem Lactose": Shield,
      "Artesanal": Sparkles,
      "Sustentável": Recycle,
      "Sem Glúten": ShieldCheck,
      "Tradicional": Star,
      "Novo": Sparkles,
    };
    return iconMap[tag] || Star;
  };

  const novidades = [
    {
      name: "Creme de Leite de Coco",
      image: cremeLeiteCoco,
      description: "Produto inédito no mercado, feito especialmente para pessoas com restrições alimentares. Sem lactose, sem glúten e totalmente vegano. Substitui o creme de leite tradicional com a mesma cremosidade.",
      benefits: ["Sem lactose", "Sem glúten", "100% vegano", "Sem gordura trans"],
    },
    {
      name: "Leite de Coco Condensado",
      image: leiteCocoCondensado,
      description: "Revoluciona o mercado com uma opção inédita, saudável e saborosa. 100% vegano, sem lactose, sem glúten e sem gordura trans. Perfeito para receitas doces ou para ser consumido puro.",
      benefits: ["Sem lactose", "Sem glúten", "100% vegano", "Sem gordura trans"],
    },
  ];

  const produtos = [
    {
      name: "Leite de Coco",
      image: leiteCoco,
      description: "O leite de coco mais vendido! Produto obtido da trituração e prensagem das amêndoas do coco maduro. Certificado pela FDA e presente nos Estados Unidos. Rico em ácidos graxos, vitaminas e minerais.",
      benefits: ["Zero lactose", "Sem glúten", "Rico em nutrientes", "Certificado FDA"],
      tag: "Campeão de Vendas",
    },
    {
      name: "Coco Ralado",
      image: cocoRalado,
      description: "Coco ralado úmido e adoçado 100% natural, feito a partir da polpa parcialmente desengordurada e adoçado com açúcar natural da fruta. Rico em fibras e óleo de coco extravirgem.",
      benefits: ["100% natural", "Rico em fibras", "Sem conservantes", "Extravirgem"],
      tag: "Melhor Preço",
    },
    {
      name: "Flocos de Coco",
      image: flocoCoco,
      description: "Flocos maiores e crocantes que preservam toda a essência do coco. Totalmente livres de açúcar, corantes, conservantes, gorduras trans e colesterol. Ideal para dietas veganas, sem glúten ou low carb.",
      benefits: ["Sem açúcar", "Sem conservantes", "Sem gordura trans", "Vegano"],
      tag: "Tradicional",
    },
    {
      name: "Óleo de Coco",
      image: oleoCoco,
      description: "Óleo vegetal natural composto por cerca de 90% de ácidos graxos, obtido por prensagem da polpa do coco maduro. Amplamente utilizado na culinária e indústria cosmética. Ajuda a reduzir colesterol e fortalece o sistema imunológico.",
      benefits: ["Extra virgem", "Prensado a frio", "Multiuso", "Rico em nutrientes"],
      tag: "Extra Virgem",
    },
    {
      name: "Manteiga de Coco",
      image: manteigaCoco,
      description: "Ideal para quem segue dieta vegana ou possui intolerância à lactose. Versátil e saborosa, substitui a manteiga tradicional em diversas receitas, garantindo textura e sabor sem abrir mão das suas escolhas alimentares.",
      benefits: ["Sem lactose", "Vegano", "Versátil", "Saboroso"],
      tag: "Sem Lactose",
    },
    {
      name: "Shoyu",
      image: shoyu,
      description: "Produzido através da fermentação natural de soja, cereais torrados, água e sal marinho. Sabor intenso e marcante que pode substituir o sal comum, realçando aroma, cor e conservação dos alimentos.",
      benefits: ["Fermentação natural", "Rico em proteínas", "Fonte de ferro", "Antioxidante"],
      tag: "Artesanal",
    },
    {
      name: "Azeite de Dendê",
      image: azeiteDende,
      description: "Traz o sabor e a alma da Amazônia para suas receitas. Natural e puro, com cor avermelhada intensa e aroma marcante. Realça pratos tradicionais como moqueca, acarajé, vatapá e bobó. Rico em antioxidantes e vitamina E.",
      benefits: ["100% natural", "Rico em vitamina E", "Antioxidante", "Tradicional"],
      tag: "Tradicional",
    },
    {
      name: "Palmito",
      image: palmito,
      description: "Extraído do açaizeiro, espécie nativa da Amazônia. Versátil, saboroso e com baixo teor calórico. Excelente fonte de vitamina C, fibras e potássio. Produzido de forma sustentável no coração da Amazônia. Disponível inteiro e picado.",
      benefits: ["Baixo teor calórico", "Rico em vitamina C", "Sustentável", "Premium"],
      tag: "Sustentável",
    },
    {
      name: "Farinha de Tapioca",
      image: farinhaTapioca,
      description: "Produzida com ingredientes simples e naturais – apenas fécula de mandioca e água. Naturalmente livre de glúten, rica em carboidratos e de fácil digestão. Textura granulada e selecionada, leve e versátil com sabor autêntico.",
      benefits: ["Sem glúten", "Natural", "Fácil digestão", "Fonte de energia"],
      tag: "Sem Glúten",
    },
    {
      name: "Goma de Tapioca",
      image: gomaTapioca,
      description: "Natural e feita com apenas dois ingredientes – fécula de mandioca e água. Prática e pronta para uso, dispensa hidratação ou peneiragem. Naturalmente livre de glúten e sem conservantes. Baixo teor de gordura e rica em carboidratos.",
      benefits: ["Pronta para uso", "Sem glúten", "Sem conservantes", "Natural"],
      tag: "Tradicional",
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero */}
      <section 
        className="py-20 section-bg-transformed section-bg-flip-y"
        style={{ '--bg-image': `url(${redPatternBg})` } as React.CSSProperties}
      >
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary-foreground/80 font-semibold text-sm uppercase tracking-wider">Nosso Portfólio</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-6">
            Linha de Produtos
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            A riqueza da Amazônia em cada receita do Brasil. Desenvolvemos produtos de qualidade, com sabor inconfundível, superando expectativas e elevando a verdadeira essência da Amazônia para todo o Brasil.
          </p>
        </div>
      </section>

      <hr className="border-t-2 border-red-600 w-4/5 mx-auto" />

      {/* Novidades */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider animate-fade-in" style={{ animationDelay: '0.1s' }}>Lançamentos</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Novidades
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Conheça nossos produtos mais recentes.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {novidades.map((produto, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden bg-muted relative">
                  <div className="absolute top-2 right-2 z-10 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg animate-bounce-in flex items-center gap-1.5">
                    <Sparkles size={12} />
                    Novo
                  </div>
                  <img
                    src={produto.image}
                    alt={produto.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                    {produto.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {produto.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {produto.benefits.map((benefit, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-accent text-accent-foreground px-3 py-1 rounded-full"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Produtos em processo */}
            {[1, 2].map((item, index) => (
              <div
                key={`em-processo-${item}`}
                className="bg-white rounded-2xl overflow-hidden shadow-card border-2 border-dashed border-red-300/50 transition-all duration-300 animate-fade-in-up opacity-70"
                style={{ animationDelay: `${(novidades.length + index) * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-red-50/50 to-red-100/30 relative flex items-center justify-center">
                  <div className="absolute top-2 right-2 z-10 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg flex items-center gap-1.5">
                    <Clock size={12} />
                    Em breve
                  </div>
                  <div className="flex flex-col items-center justify-center gap-4 p-8">
                    <Loader2 className="w-16 h-16 text-red-400/60 animate-spin" />
                    <div className="text-center">
                      <div className="h-4 bg-red-200/40 rounded-full w-32 mb-2 animate-pulse"></div>
                      <div className="h-3 bg-red-200/30 rounded-full w-24 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-xl text-muted-foreground mb-2">
                    Novo produto
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 italic">
                    Estamos trabalhando em mais produtos incríveis para você...
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full border border-red-200">
                      Em desenvolvimento
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-t-2 border-red-600 w-4/5 mx-auto" />

      {/* Produtos Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div className="animate-fade-in-up">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider animate-fade-in" style={{ animationDelay: '0.1s' }}>Catálogo Completo</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Todos os Produtos
              </h2>
            </div>
            <a
              href="/catalogo-fredao-alimentos.pdf"
              download
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-semibold hover:bg-primary/90 transition-all duration-300 shadow-md hover:-translate-y-0.5"
            >
              <Download size={18} />
              Baixar Catálogo
            </a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {produtos.map((produto, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="aspect-square overflow-hidden relative">
                  {produto.tag && (() => {
                    const TagIcon = getTagIcon(produto.tag);
                    return (
                      <div className="absolute top-2 right-2 z-10 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg animate-bounce-in flex items-center gap-1.5">
                        <TagIcon size={12} />
                        {produto.tag}
                      </div>
                    );
                  })()}
                  <img
                    src={produto.image}
                    alt={produto.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 animate-fade-in"
                    style={{ animationDelay: `${index * 0.08 + 0.2}s` }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                    {produto.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {produto.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {produto.benefits.map((benefit, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-accent text-accent-foreground px-3 py-1 rounded-full"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-t-2 border-red-600 w-4/5 mx-auto" />

      {/* CTA */}
      <section 
        className="py-20 section-bg-transformed section-bg-flip-xy" 
        style={{ '--bg-image': `url(${redPatternBg})` } as React.CSSProperties}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Quer nossos produtos na sua região?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Entre em contato conosco ou torne-se um representante Fredão Alimentos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/559130163471?text=Olá! Gostaria de saber mais sobre os produtos Fredão Alimentos."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-foreground px-8 py-4 rounded-lg font-heading font-semibold hover:bg-primary-foreground/90 transition-all duration-300 shadow-lg hover:-translate-y-0.5 animate-bounce-in"
            >
              <WhatsAppIcon size={20} />
              Fale Conosco pelo WhatsApp
            </a>
            <Link
              to="/representantes"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-heading font-semibold hover:bg-primary-foreground/10 transition-all duration-300 animate-bounce-in"
              style={{ animationDelay: '0.1s' }}
            >
              Seja um Representante
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Produtos;
