import { Trophy, Award, DollarSign, Shield, Sparkles, Recycle, ShieldCheck, Star, LucideIcon } from "lucide-react";

export const getTagIcon = (tag: string): LucideIcon => {
  const iconMap: { [key: string]: LucideIcon } = {
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

