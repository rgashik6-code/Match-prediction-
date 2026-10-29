import React from 'react';
import { useFootball } from '../context/FootballContext';
import { t } from '../utils/translations';
import { Flame, Ticket, Download, Crown, Sparkles, Globe } from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    language,
    toggleLanguage,
    betSlip,
    setIsSlipOpen,
    isVipUnlocked,
    setIsVipModalOpen,
    setIsExportModalOpen,
    setActiveTab,
    activeTab
  } = useFootball();

  return (
    <header className="sticky top-0 z-40 bg-[#080d0a]/90 backdrop-blur-md border-b border-emerald-950/60 px-3 py-2.5 sm:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand / Logo */}
        <button
          onClick={() => setActiveTab('home')}
          className="flex items-center gap-2 group text-left transition active:scale-95"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-[#00E676] flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
            <span className="text-black font-extrabold text-lg tracking-tighter">GP</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-white via-slate-100 to-emerald-300 bg-clip-text text-transparent">
                Goal<span className="text-[#00E676]">Predict</span>
              </span>
              <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-bold rounded-full bg-emerald-500/15 text-[#00E676] border border-emerald-500/30">
                <Flame className="w-2.5 h-2.5" /> AI PRO
              </span>
            </div>
            <p className="text-[11px] text-emerald-400/80 font-medium hidden sm:block">
              {t('appTagline', language)}
            </p>
          </div>
        </button>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          
          {/* Language Toggle (Default Bengali) */}
          <button
            onClick={toggleLanguage}
            title={language === 'bn' ? 'Switch to English' : 'বাংলায় পরিবর্তন করুন'}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-emerald-900/40 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition active:scale-95 shadow-sm"
          >
            <Globe className="w-3.5 h-3.5 text-emerald-400" />
            <span>{language === 'bn' ? 'বাংলা' : 'EN'}</span>
          </button>

          {/* VIP Status or Unlock Button */}
          <button
            onClick={() => setIsVipModalOpen(true)}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold transition active:scale-95 shadow-sm ${
              isVipUnlocked
                ? 'bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-yellow-400 border border-yellow-500/40'
                : 'bg-emerald-950/60 hover:bg-emerald-900/80 text-emerald-300 border border-emerald-600/40'
            }`}
          >
            <Crown className={`w-3.5 h-3.5 ${isVipUnlocked ? 'text-yellow-400' : 'text-emerald-400'}`} />
            <span className="hidden xs:inline">
              {isVipUnlocked ? (language === 'bn' ? 'ভিআইপি সক্রিয়' : 'VIP Active') : t('unlockVip', language)}
            </span>
          </button>

          {/* Export Code & Android App Guide */}
          <button
            onClick={() => setIsExportModalOpen(true)}
            title="Export source code & compile for Android phone"
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-900/30 hover:bg-emerald-900/60 border border-emerald-500/40 text-xs font-semibold text-emerald-300 transition active:scale-95"
          >
            <Download className="w-3.5 h-3.5 text-[#00E676]" />
            <span>{language === 'bn' ? 'কোড ডাউনলোড ও অ্যান্ড্রয়েড' : 'Export Source Code'}</span>
          </button>

          {/* Bet Slip Trigger */}
          <button
            onClick={() => setIsSlipOpen(true)}
            className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#00E676] hover:bg-[#00c864] text-black text-xs font-extrabold transition active:scale-95 shadow-md shadow-emerald-500/25"
          >
            <Ticket className="w-4 h-4 text-black" />
            <span className="hidden sm:inline">{t('betSlip', language)}</span>
            {betSlip.length > 0 && (
              <span className="bg-black text-[#00E676] text-[10px] font-black rounded-full px-1.5 py-0.2 min-w-[18px] text-center">
                {betSlip.length}
              </span>
            )}
          </button>

        </div>
      </div>
    </header>
  );
};
