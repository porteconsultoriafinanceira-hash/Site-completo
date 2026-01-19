import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TrustBadges } from "@/components/TrustBadge";
import logo from "@/assets/logo.png";
import { Plus, Trash2 } from "lucide-react";

const loanSchema = z.object({
  type: z.string().min(1, "Selecione o tipo de contrato"),
  installmentValue: z.string().min(1, "Informe o valor da parcela"),
  totalInstallments: z.coerce.number().min(0).max(180, "Máximo 180 parcelas"),
  paidInstallments: z.coerce.number().min(0).max(180, "Máximo 180 parcelas"),
  creditValue: z.string().min(1, "Informe o valor do crédito"),
  bank: z.string().min(1, "Informe a instituição bancária"),
});

const formSchema = z.object({
  name: z
    .string()
    .min(1, "Nome é obrigatório")
    .refine(
      (val) => val.trim().split(/\s+/).length >= 2,
      "Informe o nome completo (mínimo 2 palavras)"
    ),
  phone: z
    .string()
    .min(1, "Telefone é obrigatório")
    .regex(/^\(\d{2}\)\s?\d{4,5}-?\d{4}$/, "Formato: (11) 99999-9999"),
  email: z.string().email("E-mail inválido"),
  loans: z.array(loanSchema).min(1),
}).refine(
  (data) => {
    return data.loans.every(
      (loan) => loan.paidInstallments <= loan.totalInstallments
    );
  },
  {
    message: "Parcelas pagas não pode ser maior que quantidade de parcelas",
    path: ["loans"],
  }
);

type FormData = z.infer<typeof formSchema>;

const banks = [
  "Banco do Brasil",
  "Bradesco",
  "Caixa Econômica",
  "Itaú",
  "Santander",
  "Nubank",
  "Inter",
  "C6 Bank",
  "Pan",
  "Safra",
  "BMG",
  "Outro",
];

const DiagnosticoForm = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      loans: [
        {
          type: "",
          installmentValue: "",
          totalInstallments: 0,
          paidInstallments: 0,
          creditValue: "",
          bank: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "loans",
  });

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 2) return `(${numbers}`;
    if (numbers.length <= 7)
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const formatCurrency = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    const amount = parseFloat(numbers) / 100;
    if (isNaN(amount)) return "";
    return amount.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Store form data in sessionStorage for checkout
    sessionStorage.setItem("diagnosticoForm", JSON.stringify(data));
    sessionStorage.setItem("userEmail", data.email);
    // Navigate to checkout
    navigate("/checkoutdiagnostico");
  };

  return (
    <div className="min-h-screen bg-cinza-claro py-8 md:py-12">
      <div className="container-site">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <img src={logo} alt="Logo" className="h-12 mx-auto mb-6" />
          </div>

          {/* Form Card */}
          <div className="form-card animate-fade-in">
            <h1 className="text-xl md:text-2xl font-bold text-azul-profundo mb-6 text-center">
              Informe seus dados para realizarmos a análise técnica do seu contrato
            </h1>

            <TrustBadges className="mb-6" />

            <p className="text-sm text-muted-foreground text-center mb-8">
              As informações solicitadas são utilizadas exclusivamente para análise do seu contrato.
              <br />
              Nenhum dado é compartilhado com terceiros.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Personal Info */}
              <div className="grid gap-4 md:grid-cols-2">
                <div className="md:col-span-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input
                    id="name"
                    placeholder="Nome completo"
                    {...register("name")}
                    className="mt-1"
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone">Número de telefone</Label>
                  <Input
                    id="phone"
                    placeholder="(11) 99999-9999"
                    {...register("phone")}
                    onChange={(e) => {
                      const formatted = formatPhone(e.target.value);
                      setValue("phone", formatted);
                    }}
                    className="mt-1"
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    {...register("email")}
                    className="mt-1"
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Loan Blocks */}
              <div className="space-y-6">
                {fields.map((field, index) => (
                  <div
                    key={field.id}
                    className="p-4 md:p-6 border-2 border-dashed border-border rounded-xl bg-cinza-claro/50"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-azul-profundo">
                        Empréstimo {index + 1}
                      </h3>
                      {fields.length > 1 && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => remove(index)}
                          className="text-destructive"
                        >
                          <Trash2 className="w-4 h-4 mr-1" />
                          Remover
                        </Button>
                      )}
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="md:col-span-2">
                        <Label>Tipo de contrato</Label>
                        <Select
                          onValueChange={(value) =>
                            setValue(`loans.${index}.type`, value)
                          }
                        >
                          <SelectTrigger className="mt-1 bg-background">
                            <SelectValue placeholder="Selecione o tipo" />
                          </SelectTrigger>
                          <SelectContent className="bg-background border border-border shadow-lg z-50">
                            <SelectItem value="Empréstimo Consignado">
                              Empréstimo Consignado
                            </SelectItem>
                            <SelectItem value="Empréstimo Pessoal">
                              Empréstimo Pessoal
                            </SelectItem>
                            <SelectItem value="Financiamento">
                              Financiamento
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label>Valor da parcela</Label>
                        <Input
                          placeholder="R$ 0,00"
                          {...register(`loans.${index}.installmentValue`)}
                          onChange={(e) => {
                            const formatted = formatCurrency(e.target.value);
                            setValue(`loans.${index}.installmentValue`, formatted);
                          }}
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label>Quantidade de parcelas</Label>
                        <Input
                          type="number"
                          min={0}
                          max={180}
                          placeholder="0"
                          {...register(`loans.${index}.totalInstallments`)}
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label>Quantidade de parcelas pagas</Label>
                        <Input
                          type="number"
                          min={0}
                          max={180}
                          placeholder="0"
                          {...register(`loans.${index}.paidInstallments`)}
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label>Valor aproximado do crédito contratado</Label>
                        <Input
                          placeholder="R$ 0,00"
                          {...register(`loans.${index}.creditValue`)}
                          onChange={(e) => {
                            const formatted = formatCurrency(e.target.value);
                            setValue(`loans.${index}.creditValue`, formatted);
                          }}
                          className="mt-1"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <Label>Instituição bancária</Label>
                        <Select
                          onValueChange={(value) =>
                            setValue(`loans.${index}.bank`, value)
                          }
                        >
                          <SelectTrigger className="mt-1 bg-background">
                            <SelectValue placeholder="Selecione o banco" />
                          </SelectTrigger>
                          <SelectContent className="bg-background border border-border shadow-lg z-50">
                            {banks.map((bank) => (
                              <SelectItem key={bank} value={bank}>
                                {bank}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                ))}

                <Button
                  type="button"
                  variant="outline"
                  onClick={() =>
                    append({
                      type: "",
                      installmentValue: "",
                      totalInstallments: 0,
                      paidInstallments: 0,
                      creditValue: "",
                      bank: "",
                    })
                  }
                  className="w-full"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Adicionar outro Empréstimo
                </Button>
              </div>

              {errors.loans && (
                <p className="text-sm text-destructive text-center">
                  {errors.loans.message || "Verifique os dados dos empréstimos"}
                </p>
              )}

              <Button
                type="submit"
                variant="ctaLarge"
                size="xl"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processando..." : "Receber meu diagnóstico completo."}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticoForm;
