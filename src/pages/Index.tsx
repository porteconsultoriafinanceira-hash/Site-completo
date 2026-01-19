import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ChecklistItem } from "@/components/ChecklistItem";
import { ShieldCheck, Users } from "lucide-react";

const testimonials = [
  {
    quote: "Achei que minha parcela era normal, mas o diagnóstico mostrou cobranças que eu nunca tinha percebido. Valeu cada centavo.",
    author: "Carlos M.",
    role: "servidor público",
    location: "Bahia",
  },
  {
    quote: "O relatório foi claro e direto. Finalmente consegui entender meu contrato sem juridiquês.",
    author: "Ana P.",
    role: "aposentada",
    location: "São Paulo",
  },
  {
    quote: "Descobri que estava pagando juros acima do permitido. O método realmente funciona.",
    author: "Roberto S.",
    role: "autônomo",
    location: "Rio de Janeiro",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="container-site py-12 md:py-20">
          <div className="hero-section animate-fade-in">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-azul-profundo mb-6 max-w-4xl mx-auto leading-tight">
              Você pode estar pagando juros abusivos sem sequer perceber
            </h1>
            <p className="text-base md:text-lg text-azul-profundo/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Descubra agora se as parcelas do seu empréstimo estão acima do que a lei permite — de forma segura, confidencial e profissional.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/ofdiagnostico">
                Verificar se estou pagando juros abusivos
              </Link>
            </Button>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 text-sm text-grafite">
              <div className="flex items-center gap-2 justify-center">
                <Users className="w-4 h-4 text-verde-seguranca" />
                <span>Mais de 2.500 diagnósticos financeiros realizados</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <ShieldCheck className="w-4 h-4 text-verde-seguranca" />
                <span>Processo 100% confidencial e protegido</span>
              </div>
            </div>
          </div>
        </section>

        {/* Why Section */}
        <section className="container-site section section-spacing">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-azul-profundo mb-8 text-center">
              Milhares de brasileiros enfrentam juros abusivos sem saber você pode estar entre eles se:
            </h2>
            <div className="space-y-4">
              <ChecklistItem text="Possui empréstimo consignado, pessoal ou financiamento ativo" />
              <ChecklistItem text="Sente que paga parcelas altas demais para o valor que recebeu" />
              <ChecklistItem text="Nunca verificou se as taxas e encargos do contrato estão dentro da lei" />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container-site section section-spacing">
          <div className="text-center mb-10">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-azul-profundo mb-3">
              O que dizem pessoas que realizaram o diagnóstico
            </h2>
            <p className="text-muted-foreground">
              Resultados reais de quem decidiu entender o próprio contrato
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="container-site section section-spacing">
          <div className="hero-section bg-azul-profundo text-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">
              Resolva isso agora — antes que a dívida continue crescendo
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Chega de pagar mais do que deveria. Faça o diagnóstico e descubra quanto dinheiro pode estar sendo desperdiçado todos os meses.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/ofdiagnostico">Quero resolver meu caso agora</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
