import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function LoginPage() {
  const t = useTranslations('Auth');

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-950 via-slate-950 to-black">
      <div className="w-full max-w-md space-y-8 text-center">
        {/* Logo Arquetípico */}
        <div className="mx-auto w-24 h-24 bg-gradient-to-tr from-amber-500 to-yellow-200 rounded-full shadow-[0_0_50px_rgba(245,158,11,0.3)] flex items-center justify-center">
          <span className="text-4xl text-slate-900 font-serif">A</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl font-serif tracking-widest uppercase text-amber-200">
            {t('welcome')}
          </h1>
          <p className="text-slate-400 font-light italic">
            {t('description')}
          </p>
        </div>

        <div className="grid gap-4 pt-8">
          <Link 
            href="/login" 
            className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
          >
            {t('login')}
          </Link>
          <Link 
            href="/register" 
            className="w-full py-3 border border-amber-500/30 hover:border-amber-500/60 text-amber-200 font-medium rounded-lg transition-all"
          >
            {t('register')}
          </Link>
        </div>
      </div>
    </div>
  );
}
