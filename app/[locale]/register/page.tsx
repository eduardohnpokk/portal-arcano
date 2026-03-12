"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { auth, db } from "@/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const t = useTranslations("Auth");
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    birthDate: "",
    birthTime: "",
    city: "",
  });

  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [loading, setLoading] = useState(false);
  const [gpsMessage, setGpsMessage] = useState("");

  // Captura automática de GPS para precisão astronômica
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoords({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setGpsMessage(t("gpsSuccess"));
        },
        () => {
          setGpsMessage(t("gpsError"));
        }
      );
    }
  }, [t]);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Criação do usuário no Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      // 2. Gravação do Perfil no Firestore (Estrutura base SAE)
      await setDoc(doc(db, "users", userCredential.user.uid), {
        name: formData.name,
        email: formData.email,
        birthDate: formData.birthDate,
        birthTime: formData.birthTime,
        birthCity: formData.city,
        location: coords,
        createdAt: new Date().toISOString(),
        role: "user",
        subscriptionStatus: "inactive" // Preparado para o módulo Mercado Pago
      });

      router.push("/dashboard");
    } catch (error: any) {
      /**
       * LOG ESTRUTURADO PARA O GUARDIÃO
       * Monitora falhas de integração com Firebase para futura autocura.
       */
      console.error("ALERTA SAE - ERRO CADASTRO:", {
        code: error.code,
        message: error.message,
        timestamp: new Date().toISOString()
      });
      alert("Falha no cadastro: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-slate-950 font-sans">
      <div className="w-full max-w-md bg-slate-900/40 p-8 rounded-3xl border border-amber-500/10 backdrop-blur-xl shadow-2xl">
        <h2 className="text-3xl font-serif text-amber-200 mb-8 text-center tracking-widest uppercase">
          {t("register")}
        </h2>

        <form onSubmit={handleRegister} className="space-y-5">
          <input
            type="text"
            placeholder={t("name")}
            required
            className="w-full bg-black/40 border border-slate-800 p-4 rounded-xl focus:border-amber-500 outline-none text-slate-200 transition-all placeholder:text-slate-600"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          
          <input
            type="email"
            placeholder={t("email")}
            required
            className="w-full bg-black/40 border border-slate-800 p-4 rounded-xl focus:border-amber-500 outline-none text-slate-200 transition-all placeholder:text-slate-600"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />

          <input
            type="password"
            placeholder={t("password")}
            required
            className="w-full bg-black/40 border border-slate-800 p-4 rounded-xl focus:border-amber-500 outline-none text-slate-200 transition-all placeholder:text-slate-600"
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-tighter text-amber-500/50 ml-1">{t("birthDate")}</label>
              <input
                type="date"
                required
                className="w-full bg-black/40 border border-slate-800 p-3 rounded-xl text-slate-300 outline-none focus:border-amber-500"
                onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-tighter text-amber-500/50 ml-1">{t("birthTime")}</label>
              <input
                type="time"
                required
                className="w-full bg-black/40 border border-slate-800 p-3 rounded-xl text-slate-300 outline-none focus:border-amber-500"
                onChange={(e) => setFormData({ ...formData, birthTime: e.target.value })}
              />
            </div>
          </div>

          <input
            type="text"
            placeholder={t("city")}
            required
            className="w-full bg-black/40 border border-slate-800 p-4 rounded-xl text-slate-200 outline-none focus:border-amber-500 placeholder:text-slate-600"
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          />

          <div className="py-2">
            <p className={`text-[11px] text-center italic transition-colors ${coords ? 'text-emerald-400' : 'text-amber-400/60'}`}>
              ● {gpsMessage || t("gpsStatus")}
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-900 font-bold rounded-2xl shadow-[0_10px_20px_rgba(217,119,6,0.2)] transition-all uppercase tracking-widest disabled:opacity-50"
          >
            {loading ? t("loading") : t("submit")}
          </button>
        </form>
      </div>
    </div>
  );
}
