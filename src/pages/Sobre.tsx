import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, Award, Users, Leaf, Globe, Trophy, Cake } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import coconutProduct from "@/assets/fredao.jpg";
import redPatternBg from "@/assets/red-pattern-bg.jpg";

const Sobre = () => {
  const valores = [
    { icon: Award, title: "Qualidade", description: "Excelência em cada produto que produzimos" },
    { icon: Heart, title: "Transparência", description: "Honestidade em todas as nossas relações" },
    { icon: Users, title: "Acessibilidade", description: "Produtos de qualidade para todas as classes" },
    { icon: Leaf, title: "Naturalidade", description: "Ingredientes naturais e saudáveis" },
  ];

  return (
    <main className="pt-20">
      {/* Hero */}
      <section 
        className="py-20 section-bg-transformed section-bg-flip-y" 
        style={{ '--bg-image': `url(${redPatternBg})` } as React.CSSProperties}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Nossa História
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Conheça a trajetória da Fredão Alimentos e nossa paixão por alimentação saudável
          </p>
        </div>
      </section>

      {/* História */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Desde 2020</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Do Pará para o Brasil
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  A Fredão Alimentos nasceu no final de 2020 no estado do Pará, fundada por <strong className="text-foreground">Frederico Pereira</strong>, um empreendedor paraense com uma trajetória inspiradora no setor alimentício.
                </p>
                <p>
                  Com mais de <strong className="text-foreground">27 anos de experiência</strong>, Frederico começou sua jornada como empacotador e, através de muito trabalho e dedicação, construiu seu próprio negócio focado na industrialização do coco.
                </p>
                <p>
                  Hoje, a Fredão Alimentos é referência em produtos derivados de coco, presente em diversos estados brasileiros como Ceará, Maranhão, Pernambuco, Minas Gerais, Santa Catarina e, claro, no Pará.
                </p>
                <p>
                  Nossa estratégia de marca inclui o uso do nome e do rosto do fundador no logo, criando uma <strong className="text-foreground">identificação direta e humanizada</strong> com os consumidores.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={coconutProduct}
                  alt="Fredão Alimentos"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-8 rounded-xl shadow-lg hidden md:block">
                <span className="font-heading text-5xl font-bold">2020</span>
                <p className="text-sm text-primary-foreground/80 mt-1">Ano de fundação</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Missão */}
            <div className="bg-card p-10 rounded-2xl shadow-card">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Nossa Missão
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Oferecer alimentos naturais, saudáveis e de alta qualidade a preços acessíveis, ajudando as pessoas a se alimentar melhor em todas as classes sociais.
              </p>
            </div>

            {/* Visão */}
            <div className="bg-card p-10 rounded-2xl shadow-card">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Nossa Visão
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Ser a maior empresa do Brasil no segmento de alimentos que proporcionam uma alimentação saudável, levando qualidade e sabor para todas as mesas brasileiras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider animate-fade-in" style={{ animationDelay: '0.1s' }}>O que nos guia</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Nossos Valores
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor, index) => (
              <div
                key={index}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300">
                  <valor.icon className="w-10 h-10 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                  {valor.title}
                </h3>
                <p className="text-muted-foreground">
                  {valor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curiosidades */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider animate-fade-in" style={{ animationDelay: '0.1s' }}>Sabia que?</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Curiosidades Fredão
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl shadow-card animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                Exportação para os EUA
              </h3>
              <p className="text-muted-foreground">
                Você sabia que a Fredão Alimentos já apareceu em outros países além do Brasil? Pois bem, a empresa em março de 2022 realizou sua primeira exportação para fora do país, chegando nos EUA com a marca "Big Fred" e pode ser encontrada no Estado da Califórnia!
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl shadow-card animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                <Trophy className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                Primeira Beneficiadora do Pará
              </h3>
              <p className="text-muted-foreground">
                Você sabia que a Fredão Alimentos é a primeira empresa beneficiadora de leite de coco no Estado do Pará? Apesar de ter empresas do ramo atuando no Estado (como a Sococo por exemplo), a Fredão Alimentos é a única empresa genuinamente Paraense e que beneficia seus produtos por completo dentro do Estado.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl shadow-card animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                <Cake className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                Parceria com Casa de Bolos
              </h3>
              <p className="text-muted-foreground">
                Você sabia que a empresa Casa de bolos utiliza os produtos Fredão? Sim, desde 2025 a empresa Casa de bolos, franquia internacional top 50 do país utiliza o leite de coco Fredão em sua produção, levando sabor e qualidade para todo brasil!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section 
        className="py-20 section-bg-transformed section-bg-rotate" 
        style={{ '--bg-image': `url(${redPatternBg})` } as React.CSSProperties}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Faça parte da nossa história
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Conheça nossos produtos e descubra o sabor natural do coco brasileiro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/produtos"
              className="inline-flex items-center gap-2 bg-primary-foreground text-foreground px-8 py-4 rounded-lg font-heading font-semibold hover:bg-primary-foreground/90 transition-all duration-300 shadow-lg hover:-translate-y-0.5"
            >
              Ver nossos produtos
              <ArrowRight size={18} />
            </Link>
            <a
              href="https://wa.me/559130163471?text=Olá! Gostaria de saber mais sobre os produtos Fredão Alimentos."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-heading font-semibold hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <WhatsAppIcon size={20} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Sobre;
