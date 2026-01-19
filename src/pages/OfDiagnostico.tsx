import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AlertCircle, Search, Shield } from "lucide-react";

const OfDiagnostico = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container-site py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-azul-profundo mb-6">
            Cansado de juros abusivos? Verifique agora.
          </h1>

          <div className="space-y-4 text-grafite mb-10">
            <p className="text-base md:text-lg leading-relaxed">
              Muitos contratos escondem tarifas, encargos e formas de cálculo que elevam os juros sem transparência.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Nosso diagnóstico identifica indícios de irregularidades com base nas informações do seu empréstimo — de forma simples, rápida e segura.
            </p>
          </div>

          {/* Features */}
          <div className="grid gap-6 md:grid-cols-3 mb-12">
            <div className="p-6 bg-cinza-claro rounded-xl">
              <Search className="w-10 h-10 text-verde-seguranca mx-auto mb-4" />
              <h3 className="font-semibold text-azul-profundo mb-2">Análise Detalhada</h3>
              <p className="text-sm text-muted-foreground">Identificamos indícios de irregularidades no seu contrato</p>
            </div>
            <div className="p-6 bg-cinza-claro rounded-xl">
              <Shield className="w-10 h-10 text-verde-seguranca mx-auto mb-4" />
              <h3 className="font-semibold text-azul-profundo mb-2">100% Seguro</h3>
              <p className="text-sm text-muted-foreground">Seus dados são protegidos e confidenciais</p>
            </div>
            <div className="p-6 bg-cinza-claro rounded-xl">
              <AlertCircle className="w-10 h-10 text-verde-seguranca mx-auto mb-4" />
              <h3 className="font-semibold text-azul-profundo mb-2">Resultado Claro</h3>
              <p className="text-sm text-muted-foreground">Relatório objetivo sem juridiquês</p>
            </div>
          </div>

          <Button variant="hero" size="xl" asChild>
            <Link to="/diagnosticoform">Quero verificar meu caso agora</Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OfDiagnostico;
