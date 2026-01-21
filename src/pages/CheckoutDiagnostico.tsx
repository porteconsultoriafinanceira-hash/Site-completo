import { Loader2, Shield, Lock, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function CheckoutDiagnostico() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    try {
      setLoading(true);

      const res = await fetch("http://localhost:3333/checkout/diagnostico", {
        method: "POST",
      });

      const data = await res.json();
      window.location.href = data.url;

    } catch (error) {
      alert("Erro ao iniciar pagamento. Tente novamente.");
      setLoading(false);
    }
  };

  return (
    <div className="form-card">
      <h2 className="text-2xl font-bold mb-4">
        Diagnóstico Financeiro
      </h2>

      <p className="mb-6 text-grafite">
        Análise completa da sua situação financeira.
      </p>

      <div className="mb-6 text-3xl font-bold text-verde-seguranca">
        R$ 27,00
      </div>

      <button
        onClick={handleCheckout}
        disabled={loading}
        className="w-full bg-verde-seguranca hover-bg-verde-hover text-white py-3 rounded-lg transition-smooth flex items-center justify-center gap-2"
      >
        {loading ? <Loader2 className="animate-spin" /> : "Pagar agora"}
      </button>

      <div className="mt-6 space-y-2 text-sm text-grafite">
        <div className="flex items-center gap-2">
          <Shield size={16} /> Pagamento seguro
        </div>
        <div className="flex items-center gap-2">
          <Lock size={16} /> Mercado Pago
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle size={16} /> Acesso imediato
        </div>
      </div>
    </div>
  );
}
