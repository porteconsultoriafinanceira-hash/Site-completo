import { Button } from "@/components/ui/button";
import { SuccessBadge } from "@/components/SuccessBadge";
import logo from "@/assets/logo.png";
import { MessageCircle, Users, Clock } from "lucide-react";

const ManualPg = () => {
  const whatsappNumber = "5511999999999"; // This should come from backend/env
  const message = encodeURIComponent(
    "Olá, quero contratar a assessoria para o meu caso."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="min-h-screen bg-verde-seguranca/5 py-8 md:py-12">
      <div className="container-site">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <img src={logo} alt="Logo" className="h-12 mx-auto mb-6" />
          </div>

          {/* Success Card */}
          <div className="form-card animate-fade-in mb-8">
            <div className="text-center mb-8">
              <SuccessBadge text="Compra confirmada" className="mb-4" />
              <h1 className="text-2xl md:text-3xl font-bold text-azul-profundo mb-4">
                Parabéns por sua compra!
              </h1>
              <p className="text-grafite">
                O seu Manual Definitivo Contra Juros Abusivos será enviado para o seu e-mail em até 24h
              </p>
            </div>
          </div>

          {/* Upsell Card */}
          <div className="form-card animate-fade-in border-2 border-verde-seguranca/30">
            <div className="text-center mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-azul-profundo mb-3">
                Prefere que especialistas resolvam tudo para você?
              </h2>
              <p className="text-grafite">
                Existe uma opção ainda mais simples e segura: deixar seu caso sob responsabilidade de profissionais que fazem isso todos os dias.
              </p>
            </div>

            {/* Benefits */}
            <div className="bg-cinza-claro rounded-xl p-6 mb-6">
              <p className="text-grafite mb-4">
                Muitos clientes optam por não correr riscos, não perder tempo com cálculos e não lidar diretamente com bancos.
              </p>
              <p className="text-grafite">
                Por isso, abrimos uma oferta exclusiva de assessoria financeira, disponível somente agora, logo após a compra do manual.
              </p>
            </div>

            {/* Scarcity */}
            <div className="flex items-center gap-3 bg-amarelo-alerta/10 border border-amarelo-alerta/30 rounded-xl p-4 mb-8">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-amarelo-alerta/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-amarelo-alerta" />
                </div>
              </div>
              <div>
                <p className="font-bold text-azul-profundo">Vagas limitadas</p>
                <p className="text-sm text-grafite">
                  A assessoria é personalizada e não conseguimos atender todos os casos simultaneamente.
                </p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <Button
              variant="whatsapp"
              size="xl"
              className="w-full gap-3"
              asChild
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Quero que a consultoria cuide de tudo para mim
              </a>
            </Button>

            <p className="text-center text-sm text-muted-foreground mt-4 flex items-center justify-center gap-2">
              <Clock className="w-4 h-4" />
              Atendimento de segunda a sexta, das 9h às 18h
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManualPg;
