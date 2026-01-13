import { Link } from "react-router-dom";
import { ArrowRight, Heart, Users, TrendingUp, Download, Leaf, Trophy, Award, DollarSign, Shield, Sparkles, Recycle, ShieldCheck, Star, ShoppingCart, Loader2, Clock } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import heroHome from "@/assets/hero-home.png";
import leiteCoco from "@/assets/leite-de-coco.png";
import cocoRalado from "@/assets/coco-ralado.png";
import oleoCoco from "@/assets/oleo-de-coco.png";
import manteigaCoco from "@/assets/manteiga-de-coco.png";
import fredao from "@/assets/fredao.jpg";
import redPatternBg from "@/assets/red-pattern-bg.jpg";
import supermecadosBHlider from "@/assets/logosparceiros/supermecadosBHlider.jpg";
import cencorsurd from "@/assets/logosparceiros/cencorsurd.jpg";
import Guanabara from "@/assets/logosparceiros/Guanabara.jpg";
import parceiro4 from "@/assets/logosparceiros/4.jpg";
import assai from "@/assets/logosparceiros/assai.jpg";
import atacadao from "@/assets/logosparceiros/atacadao.jpg";
import grupomatheus from "@/assets/logosparceiros/grupomatheus.jpg";
import cremeLeiteCoco from "@/assets/Creme de Leite de Coco.png";
import leiteCocoCondensado from "@/assets/Leite de coco condesado.png";
const Index = () => {
  const products = [
    { name: "Leite de Coco", image: leiteCoco, description: "Cremoso e natural", tag: "Mais Vendido" },
    { name: "Óleo de Coco", image: oleoCoco, description: "Puro e versátil", tag: "Extra Virgem" },
    { name: "Coco Ralado", image: cocoRalado, description: "Fresco e saboroso", tag: "Melhor Preço" },
    { name: "Manteiga de Coco", image: manteigaCoco, description: "Sem lactose", tag: "Sem Lactose" },
  ];

  const diferenciais = [
    { icon: Leaf, title: "100% Natural", description: "Produtos sem aditivos artificiais" },
    { icon: Heart, title: "Saudável", description: "Sem lactose, sem caseína" },
    { icon: Users, title: "Para Todos", description: "Preço acessível para todas as classes" },
    { icon: TrendingUp, title: "Qualidade", description: "27 anos de experiência no setor" },
  ];

  const produtosNovos = [
    { 
      name: "Creme de Leite de Coco", 
      image: cremeLeiteCoco, 
      description: "Produto inédito no mercado, feito especialmente para pessoas com restrições alimentares. Sem lactose, sem glúten e totalmente vegano." 
    },
    { 
      name: "Leite de Coco Condensado", 
      image: leiteCocoCondensado, 
      description: "Revoluciona o mercado com uma opção inédita, saudável e saborosa. 100% vegano, sem lactose, sem glúten e sem gordura trans." 
    },
  ];

  const empresas = [
    { name: "Supermercados BH Líder", image: supermecadosBHlider },
    { name: "Cencosud", image: cencorsurd },
    { name: "Guanabara", image: Guanabara },
    { name: "Parceiro", image: parceiro4 },
    { name: "Assaí", image: assai },
    { name: "Atacadão", image: atacadao },
    { name: "Grupo Matheus", image: grupomatheus },
  ];

  const estados = [
    "Pará", "Ceará", "Maranhão", "Pernambuco", "Minas Gerais", "Santa Catarina"
  ];

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

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroHome}
            alt="Fredão Alimentos - A linha de alimentos que mais cresce no Brasil"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10" style={{ display: 'none' }}>
          <div className="max-w-2xl animate-fade-up">
            <span className="inline-block bg-primary/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-primary/30">
              🥥 Do Pará para o Brasil
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Alimentos naturais, acessíveis e feitos com
              <span className="text-accent"> orgulho brasileiro</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed">
              Desde 2020, levando saúde e qualidade para sua mesa com produtos à base de coco, produzidos no coração da Amazônia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/produtos"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-heading font-semibold hover:bg-primary/90 transition-all duration-300 shadow-green hover:-translate-y-1 text-lg animate-bounce-in"
              >
                Conheça nossos produtos
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/sobre"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-heading font-semibold hover:bg-primary-foreground/10 transition-all duration-300 text-lg backdrop-blur-sm animate-bounce-in"
                style={{ animationDelay: '0.1s' }}
              >
                Nossa história
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Carrossel de Empresas */}
      <section className="py-12 bg-card overflow-hidden">
        <div className="text-center mb-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
            Empresas que confiam no Fredão
          </h2>
        </div>
        <div className="w-screen overflow-hidden">
          <style>{`
            @keyframes scroll-infinite {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .carousel-container:hover .carousel-track {
              animation-play-state: paused;
            }
            .carousel-track {
              animation: scroll-infinite 30s linear infinite;
            }
          `}</style>
          <div className="relative overflow-hidden carousel-container">
            <div className="flex carousel-track">
              {/* Duplicar empresas para efeito infinito */}
              {[...empresas, ...empresas].map((empresa, index) => (
                <div
                  key={index}
                  className="flex-[0_0_20%] md:flex-[0_0_12.5%] lg:flex-[0_0_10%] min-w-0 shrink-0 mx-2"
                >
                  <div className="bg-muted aspect-video flex items-center justify-center hover:bg-muted/80 transition-colors">
                    <img
                      src={empresa.image}
                      alt={empresa.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Quem somos</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                A história da Fredão Alimentos
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Fundada por Frederico Pereira, um empreendedor paraense com mais de 27 anos de experiência no setor alimentício, a Fredão Alimentos nasceu em 2020 com uma missão clara: oferecer alimentos naturais e saudáveis a preços acessíveis.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Com foco na produção de derivados de coco, nossa empresa cresce rapidamente, levando qualidade e sabor do Pará para todo o Brasil.
              </p>
              <Link
                to="/sobre"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
              >
                Saiba mais sobre nós
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-card">
                <img
                  src={fredao}
                  alt="Frederico Pereira - Fundador da Fredão Alimentos"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                <span className="font-heading text-4xl font-bold">27+</span>
                <p className="text-sm text-primary-foreground/80">Anos de experiência</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-t-2 border-red-600 w-4/5 mx-auto" />

      {/* Diferenciais */}
      <section 
        className="py-20 section-bg-transformed section-bg-flip-x" 
        style={{ '--bg-image': `url(${redPatternBg})` } as React.CSSProperties}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary-foreground/80 font-semibold text-sm uppercase tracking-wider">Por que escolher</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mt-2">
              Nossos Diferenciais
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {diferenciais.map((item, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 text-center group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300">
                  <item.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-t-2 border-red-600 w-4/5 mx-auto" />

      {/* Produtos Novos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Novidades</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Produtos Novos
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Conheça nossos lançamentos mais recentes.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {produtosNovos.map((produto, index) => (
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
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                    {produto.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {produto.description}
                  </p>
                </div>
              </div>
            ))}
            
            {/* Produtos em processo */}
            {[1, 2].map((item, index) => (
              <div
                key={`em-processo-${item}`}
                className="bg-white rounded-2xl overflow-hidden shadow-card border-2 border-dashed border-red-300/50 transition-all duration-300 animate-fade-in-up opacity-70"
                style={{ animationDelay: `${(produtosNovos.length + index) * 0.1}s` }}
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
                  <h3 className="font-heading font-semibold text-lg text-muted-foreground mb-2">
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

      {/* Products Preview */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Portfólio</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Linha de Produtos
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Produtos à base de coco, naturais e de alta qualidade para sua alimentação diária.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden relative">
                  {product.tag && (() => {
                    const TagIcon = getTagIcon(product.tag);
                    return (
                      <div className="absolute top-2 right-2 z-10 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg animate-bounce-in flex items-center gap-1.5">
                        <TagIcon size={12} />
                        {product.tag}
                      </div>
                    );
                  })()}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
              <Link
                to="/produtos"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-heading font-semibold hover:bg-primary/90 transition-all duration-300 shadow-green hover:-translate-y-0.5 animate-bounce-in"
              >
                Ver todos os produtos
                <ShoppingCart size={18} />
              </Link>
          </div>
        </div>
      </section>

      <hr className="border-t-2 border-red-600 w-4/5 mx-auto" />

      {/* Presença Nacional */}
      <section 
        className="py-20 section-bg-transformed section-bg-flip-y" 
        style={{ '--bg-image': `url(${redPatternBg})` } as React.CSSProperties}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Presença em Todo o Brasil
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Líderes de vendas em diversos estados brasileiros, levando qualidade do Norte ao Sul do país.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {estados.map((estado, index) => (
              <span
                key={index}
                className="bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground px-6 py-3 rounded-full font-medium border border-primary-foreground/20"
              >
                {estado}
              </span>
            ))}
            <span className="bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground px-6 py-3 rounded-full font-medium border border-primary-foreground/30">
              + muitos outros
            </span>
          </div>

          <div className="text-center">
            <Link
              to="/representantes"
              className="inline-flex items-center gap-2 bg-primary-foreground text-foreground px-8 py-4 rounded-lg font-heading font-semibold hover:bg-primary-foreground/90 transition-all duration-300 shadow-lg hover:-translate-y-0.5 animate-bounce-in"
            >
              Quer levar a Fredão para sua região?
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <hr className="border-t-2 border-red-600 w-4/5 mx-auto" />

      {/* CTA Final */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-hero rounded-3xl p-8 md:p-16 text-center shadow-lg">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Alimentação saudável começa aqui
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
              Entre em contato e descubra como nossos produtos podem fazer parte da sua rotina.
            </p>
            <a
              href="https://wa.me/559130163471?text=Olá! Gostaria de saber mais sobre os produtos Fredão Alimentos."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-foreground text-foreground px-8 py-4 rounded-lg font-heading font-semibold hover:bg-primary-foreground/90 transition-all duration-300 shadow-md hover:-translate-y-0.5 animate-bounce-in"
            >
              <WhatsAppIcon size={20} />
              Fale Conosco pelo WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
