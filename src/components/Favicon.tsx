import { useEffect } from "react";
import logo from "@/assets/logo.png";

const Favicon = () => {
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = logo;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const size = 32; // Tamanho padrão do favicon
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");

      if (ctx) {
        // Criar um círculo
        ctx.beginPath();
        ctx.arc(size / 2, size / 2, size / 2, 0, 2 * Math.PI);
        ctx.clip();

        // Desenhar a imagem dentro do círculo
        ctx.drawImage(img, 0, 0, size, size);

        // Atualizar o favicon
        const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
        if (link) {
          link.href = canvas.toDataURL("image/png");
        } else {
          const newLink = document.createElement("link");
          newLink.rel = "icon";
          newLink.type = "image/png";
          newLink.href = canvas.toDataURL("image/png");
          document.head.appendChild(newLink);
        }
      }
    };
  }, []);

  return null;
};

export default Favicon;

