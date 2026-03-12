"use client";

import { useAuth } from "@/context/AuthContext";
import { useTranslations } from "next-intl";
import { Lock, Sparkles } from "lucide-react";
import React from "react";

/**
 * Dashboard Central - Portal Arcano 2.0
 * Organiza os 12 módulos e verifica o status de pagamento (Mercado Pago).
 * Implementa o modelo de Sistemas Autônomos de Evolução (SAE).
 */
export default function DashboardPage() {
  const { user, userData } = useAuth();
  const t = useTranslations("Dashboard");

  // Lista dos 12 Módulos conforme planejado
  const modules = [
    { id: "m1", icon: "✨" },
    { id: "m2", icon: "☀️" },
    { id: "m3", icon: "🌀" },
    { id: "m4", icon: "📅" },
    { id: "m5", icon: "🔢" },
    { id: "m6", icon: "🐉" },
    { id: "m7", icon: "☯️" },
    { id: "m8", icon: "🧪" },
    { id: "m9", icon: "🃏" },
    { id: "m10", icon: "📜" },
    { id: "m11", icon: "❤️" },
    { id: "m12", icon: "💎" },
  ];

  return (
    <div className="flex-1 bg-slate-950 p-6 md:p-12">
      <header className="max-w-7xl mx-auto mb-12">
        <h1 className="text-3xl font-serif text-amber-200 tracking-widest uppercase">
          {t("title")}
        </h1>
        <p className="text-slate-400 mt-2 italic font-light">
          {t("welcome", { name: userData?.name || "Buscador" })}
        </p>
      </header>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {modules.map((module) => {
          // Lógica SAE: Verifica se o módulo está liberado no perfil do usuário
          const isLocked = !userData?.unlockedModules?.includes(module.id);

          return (
            <div
              key={module.id}
              className={`relative group overflow-hidden rounded-2xl border transition-all duration-500 p-6 flex flex-col items-center text-center 
                ${isLocked 
                  ? "bg-slate-900/20 border-slate-800/50 grayscale shadow-none" 
                  : "bg-slate-900/60 border-amber-500/20 hover:border-amber-500/50 shadow-[0_0_30px_rgba(245,158,11,0.05)]"
                }`}
            >
              <div className="text-4xl mb-4">{module.icon}</div>
              <h3 className="text-lg font-medium text-slate-200 mb-2">
                {t(`modules.${module.id}`)}
              </h3>

              {isLocked ? (
                <div className="mt-4 flex flex-col items-center">
                  <div className="flex items-center gap-2 text-amber-500/40 text-xs uppercase tracking-widest mb-3">
                    <Lock size={12} />
                    {t("locked")}
                  </div>
                  <button className="text-[10px] px-4 py-2 rounded-full border border-amber-500/30 text-amber-200/60 hover:bg-amber-500 hover:text-slate-900 transition-all uppercase font-bold">
                    {t("unlock")}
                  </button>
                </div>
              ) : (
                <div className="mt-4">
                  <Sparkles className="text-amber-400 animate-pulse" size={20} />
                </div>
              )}

              {/* Efeito de brilho místico no hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
