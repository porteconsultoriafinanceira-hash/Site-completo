import { useEffect, useState } from "react";
import { Loader2, Shield, Lock, CheckCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const CheckoutManual = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

useEffect(() => {
  const initiateCheckout = async () => {
    try {
      const response = await fetch("/api/create-preference", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      });

      const data = await response.json();

      // 👉 Redireciona para o Mercado Pago REAL
      window.location.href =
        "https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=" +
        data.id;

    } catch (err) {
      console.error(err);
      setError("Erro ao iniciar pagamento");
      setIsLoading(false);
    }
  };

  initiateCheckout();
}, []);

      }

      const finalEmail = sessionStorage.getItem("userEmail");
      
      if (!finalEmail) {
        setError("Sessão expirada. Por favor, preencha o formulário novamente.");
        setIsLoading(false);
        return;
      }

      try {
        // In production, this would call the backend API
        const response = await fetch("/api/checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: finalEmail,
            product: "manual",
          }),
        });

        if (response.ok) {
          const data = await response.json();
          if (data.checkoutUrl) {
            window.location.href = data.checkoutUrl;
            return;
          }
        }

        // If API is not available, simulate redirect for demo
        setTimeout(() => {
          window.location.href = "/manualpg?status=approved";
        }, 2000);

      } catch (err) {
        // For demo purposes, redirect to success page
        setTimeout(() => {
          window.location.href = "/manualpg?status=approved";
        }, 2000);
      }
    };

    initiateCheckout();
  }, []);

  if (error) {
    return (
      <div className="min-h-screen bg-cinza-claro flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl p-8 shadow-form text-center">
          <img src={logo} alt="Logo" className="h-12 mx-auto mb-6" />
          <p className="text-destructive mb-6">{error}</p>
          <a
            href="/diagnosticoform"
            className="inline-block bg-verde-seguranca text-white px-6 py-3 rounded-lg font-semibold hover:bg-verde-hover transition-colors"
          >
            Voltar ao formulário
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cinza-claro flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl p-8 shadow-form text-center animate-fade-in">
        <img src={logo} alt="Logo" className="h-12 mx-auto mb-8" />

        <h1 className="text-xl md:text-2xl font-bold text-azul-profundo mb-4">
          Pagamento seguro processado pelo Mercado Pago
        </h1>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Shield className="w-4 h-4 text-verde-seguranca" />
            <span>Ambiente protegido</span>
          </div>
          <div className="flex items-center gap-1">
            <Lock className="w-4 h-4 text-verde-seguranca" />
            <span>Criptografia ativa</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle className="w-4 h-4 text-verde-seguranca" />
            <span>Total confidencialidade</span>
          </div>
        </div>

        {isLoading && (
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="w-12 h-12 text-verde-seguranca animate-spin" />
            <p className="text-muted-foreground">
              Redirecionando para o pagamento seguro...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutManual;
