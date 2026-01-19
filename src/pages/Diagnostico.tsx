import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SuccessBadge } from "@/components/SuccessBadge";
import { ListCard } from "@/components/ListCard";
import { ChecklistItem } from "@/components/ChecklistItem";
import logo from "@/assets/logo.png";
import { AlertTriangle, Clock } from "lucide-react";

const Diagnostico = () => {
  return (
    <div className="min-h-screen bg-cinza-claro py-8 md:py-12">
      <div className="container-site">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <img src={logo} alt="Logo" className="h-12 mx-auto mb-6" />
            <SuccessBadge text="Pagamento bem sucedido" />
          </div>

          {/* Main Card */}
          <div className="form-card animate-fade-in">
            {/* Analysis Title */}
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-azul-profundo mb-6 text-center">
              Identificamos fortes indícios de irregularidades em seus contratos
            </h1>

            {/* Issues Found */}
            <div className="mb-8">
              <p className="text-grafite mb-4">
                Com base nas informações fornecidas, seu contrato apresenta sinais consistentes de práticas que frequentemente caracterizam juros abusivos, como:
              </p>
              <div className="space-y-3">
                <ListCard text="CET inflacionado e tarifas embutidas" />
                <ListCard text="Cláusulas confusas ou pouco transparentes" />
                <ListCard text="Renegociações que aumentam o saldo devedor" />
                <ListCard text="Capitalização excessiva de juros" />
              </div>
            </div>

            {/* Transition to sale */}
            <div className="border-t border-border pt-8 mb-8">
              <h2 className="text-lg md:text-xl font-bold text-azul-profundo mb-3">
                Existe um método claro para interromper essas cobranças
              </h2>
              <p className="text-grafite leading-relaxed">
                É possível identificar o erro, impedir que a dívida continue crescendo e voltar a pagar apenas o que é justo — sem depender da boa vontade do banco e sem gastar com consultorias caras.
              </p>
            </div>

            {/* Value Block */}
            <div className="bg-cinza-claro rounded-xl p-6 mb-8">
              <h3 className="font-bold text-azul-profundo mb-4">
                Um método com valor de consultoria profissional
              </h3>
              <p className="text-grafite mb-4">Você aprende, passo a passo:</p>
              <div className="space-y-3">
                <ChecklistItem text="Onde o contrato costuma esconder cobranças abusivas" />
                <ChecklistItem text="Como identificar irregularidades com segurança" />
                <ChecklistItem text="Como agir de forma correta para recuperar o controle financeiro" />
              </div>
            </div>

            {/* Urgency */}
            <div className="bg-amarelo-alerta/10 border border-amarelo-alerta/30 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-amarelo-alerta flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-azul-profundo mb-2">
                    Se você não agir agora, a dívida continua aumentando.
                  </p>
                  <p className="text-grafite text-sm">
                    Os bancos lucram com a confusão, com termos técnicos e taxas que você nunca aprovou conscientemente.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-amarelo-alerta flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-azul-profundo mb-2">
                    Quanto mais você demora, mais o banco lucra.
                  </p>
                  <p className="text-grafite text-sm">
                    Cada mês sem ação é dinheiro saindo do seu bolso.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Button variant="hero" size="xl" className="w-full" asChild>
              <Link to="/checkoutmanual">
                Quero o método completo para eliminar juros abusivos agora
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diagnostico;
