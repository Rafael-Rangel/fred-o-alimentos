import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";
import Favicon from "./components/Favicon";
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import Produtos from "./pages/Produtos";
import Compromisso from "./pages/Compromisso";
import Representantes from "./pages/Representantes";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";

const App = () => (
  <TooltipProvider>
    <Favicon />
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/compromisso" element={<Compromisso />} />
        <Route path="/representantes" element={<Representantes />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
