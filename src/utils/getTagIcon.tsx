import * as React from "react";
import { Trophy, Award, DollarSign, Shield, Sparkles, Recycle, ShieldCheck, Star } from "lucide-react";

export const getTagIcon = (tag: string): React.ComponentType<{ size?: number }> => {
  const iconMap: { [key: string]: React.ComponentType<{ size?: number }> } = {
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

