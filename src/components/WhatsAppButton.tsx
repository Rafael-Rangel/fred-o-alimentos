import WhatsAppIcon from "./WhatsAppIcon";

const WhatsAppButton = () => {
  const whatsappNumber = "559130163471";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre os produtos Fredão Alimentos.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
      aria-label="Contato via WhatsApp"
    >
      <WhatsAppIcon size={28} className="text-primary-foreground" />
    </a>
  );
};

export default WhatsAppButton;
