"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { auth } from "@/lib/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import Link from "next/link";

/**
 * Módulo de Recuperação de Senha - Portal Arcano 2.0
 * Implementa a lógica de auto-gestão de acessos conforme o modelo SAE.
 */
export default function ForgotPasswordPage() {
  const t = useTranslations("Auth");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<{ type: "success" | "error" | ""; text: string }>({
    type: "",
    text: "",
  });
  const [loading, setLoading] = useState(false);

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", text: "" });

    try {
      await sendPasswordResetEmail(auth, email);
      setStatus({ type: "success", text: t("emailSentSuccess") });
    } catch (error: any) {
      /**
       * LOG ESTRUTURADO PARA O GUARDIÃO
       * Monitora a saúde do serviço de e-mail do Firebase.
       */
      console.error("ALERTA SAE - ERRO RECUPERAÇÃO:", {
        code: error.code,
        message: error.message,
        timestamp: new Date().toISOString()
      });
      setStatus({ type: "error", text: t("emailSentError") });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-950 via-slate-950 to-black">
      <div className="w-full max-w-md bg-slate-900/40 p-8 rounded-3xl border border-amber-500/10 backdrop-blur-xl shadow-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif text-amber-200 uppercase tracking-widest">
            {t("forgotPasswordTitle")}
          </h2>
          <p className="text-slate-400 text-sm mt-3 font-light italic">
            {t("forgotPasswordDesc")}
          </p>
        </div>

        <form onSubmit={handleReset} className="space-y-6">
          <div className="space-y-1">
            <input
              type="email"
              placeholder={t("email")}
              required
              className="w-full bg-black/40 border border-slate-800 p-4 rounded-xl focus:border-amber-500 outline-none text-slate-200 transition-all placeholder:text-slate-600"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {status.text && (
            <div className={`text-xs text-center p-4 rounded-xl border ${
              status.type === "success" 
                ? "bg-emerald-500/5 border-emerald-500/20 text-emerald-400" 
                : "bg-red-500/5 border-red-500/20 text-red-400"
            }`}>
              {status.text}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-900 font-bold rounded-2xl shadow-lg transition-all uppercase tracking-widest disabled:opacity-50"
          >
            {loading ? t("loading") : t("sendEmail")}
          </button>

          <div className="text-center">
            <Link 
              href="/" 
              className="text-amber-500/60 hover:text-amber-500 text-sm transition-colors font-medium"
            >
              ← {t("backToLogin")}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
