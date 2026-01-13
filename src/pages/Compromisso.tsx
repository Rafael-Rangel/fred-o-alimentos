import { Link } from "react-router-dom";
import { ArrowRight, Heart, Shield, Recycle, Users, Check, Award, Sparkles } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import redPatternBg from "@/assets/red-pattern-bg.jpg";

const Compromisso = () => {
  const compromissos = [
    {
      icon: Heart,
      title: "Alimentação Saudável",
      description: "Nosso foco é proporcionar uma alimentação mais saudável para você e sua família, com produtos nutritivos e saborosos.",
    },
    {
      icon: Shield,
      title: "Qualidade Garantida",
      description: "Rigoroso controle de qualidade em todas as etapas de produção, desde a matéria-prima até o produto final.",
    },
    {
      icon: Users,
      title: "Acessibilidade para Todos",
      description: "Acreditamos que alimentação de qualidade deve ser acessível para todas as classes sociais, do A ao E.",
    },
    {
      icon: Recycle,
      title: "Sustentabilidade",
      description: "Comprometidos com práticas sustentáveis na produção e industrialização do coco no Pará.",
    },
    {
      icon: Award,
      title: "Tradição e Experiência",
      description: "Mais de 27 anos de experiência no setor alimentício, combinando tradição familiar com inovação para entregar o melhor.",
    },
    {
      icon: Sparkles,
      title: "Inovação de Produtos",
      description: "Constantemente desenvolvemos novos produtos e melhorias em nossa linha, sempre pensando nas necessidades e preferências dos nossos clientes.",
    },
  ];

  const dietasEspeciais = [
    "Sem lactose",
    "Sem caseína",
    "Opções veganas",
    "Sem glúten (maioria dos produtos)",
    "Sem conservantes artificiais",
    "Sem corantes artificiais",
  ];

  return (
    <main className="pt-20">
      {/* Hero */}
      <section 
        className="py-20 section-bg-transformed section-bg-rotate" 
        style={{ '--bg-image': `url(${redPatternBg})` } as React.CSSProperties}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Nosso Compromisso
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Mais do que uma empresa de alimentos, somos uma marca comprometida com a saúde e o bem-estar de todos os brasileiros.
          </p>
        </div>
      </section>

      {/* Compromissos */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider animate-fade-in" style={{ animationDelay: '0.1s' }}>Nossos Pilares</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              O que nos move
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {compromissos.map((item, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dietas Especiais */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Inclusão Alimentar</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Respeito às Dietas Restritivas
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Entendemos que muitas pessoas possuem necessidades alimentares específicas. Por isso, desenvolvemos produtos que atendem diversos públicos, garantindo que todos possam desfrutar de uma alimentação saudável e saborosa.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Nossa manteiga de coco, por exemplo, é uma alternativa perfeita para quem tem intolerância à lactose ou segue uma dieta vegana.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl shadow-card">
              <h3 className="font-heading font-semibold text-xl text-foreground mb-6">
                Nossos produtos são:
              </h3>
              <ul className="space-y-4">
                {dietasEspeciais.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Propósito */}
      <section 
        className="py-20 section-bg-transformed section-bg-flip-xy" 
        style={{ '--bg-image': `url(${redPatternBg})` } as React.CSSProperties}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Nosso Propósito
          </h2>
          <p className="text-primary-foreground/80 text-xl max-w-3xl mx-auto leading-relaxed">
            "Ajudar as pessoas a se alimentar de forma saudável, com produtos naturais e de qualidade, a um preço acessível para todas as classes sociais."
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Conheça nossos produtos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Descubra toda a nossa linha de produtos naturais e saudáveis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/produtos"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-heading font-semibold hover:bg-primary/90 transition-all duration-300 shadow-green hover:-translate-y-0.5"
            >
              Ver Produtos
              <ArrowRight size={18} />
            </Link>
            <a
              href="https://wa.me/559130163471?text=Olá! Gostaria de saber mais sobre os produtos Fredão Alimentos."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-lg font-heading font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
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

export default Compromisso;
