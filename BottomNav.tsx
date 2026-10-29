import React from 'react';
import { useFootball, NavTab } from '../context/FootballContext';
import { t } from '../utils/translations';
import { Home, Trophy, CheckCircle2, Crown, ShieldAlert, Download } from 'lucide-react';

export const BottomNav: React.FC = () => {
  const { activeTab, setActiveTab, language, isVipUnlocked, setIsExportModalOpen } = useFootball();

  const navItems: { id: NavTab; labelBn: string; labelEn: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'home', labelBn: 'হোম', labelEn: 'Home', icon: Home },
    { id: 'matches', labelBn: 'ম্যাচেস', labelEn: 'Matches', icon: Trophy },
    { id: 'free', labelBn: 'ফ্রি টিপস', labelEn: 'Free Tips', icon: CheckCircle2 },
    { id: 'premium', labelBn: 'ভিআইপি', labelEn: 'VIP', icon: Crown },
    { id: 'admin', labelBn: 'অ্যাডমিন', labelEn: 'Admin', icon: ShieldAlert },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#080d0a]/95 backdrop-blur-xl border-t border-emerald-950/70 pb-safe">
      <div className="max-w-md mx-auto grid grid-cols-5 px-1 py-1.5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          const isVipTab = item.id === 'premium';

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center py-1 px-1 rounded-xl transition-all relative ${
                isActive
                  ? 'text-[#00E676]'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <div
                className={`p-1.5 rounded-lg transition-transform ${
                  isActive
                    ? 'bg-emerald-500/15 scale-110 shadow-sm shadow-emerald-500/20'
                    : 'hover:bg-slate-900/60'
                }`}
              >
                <Icon
                  className={`w-5 h-5 ${
                    isActive
                      ? isVipTab ? 'text-yellow-400' : 'text-[#00E676]'
                      : isVipTab ? 'text-amber-500/70' : 'text-slate-400'
                  }`}
                />
              </div>

              <span
                className={`text-[10px] font-bold tracking-tight mt-0.5 truncate max-w-full ${
                  isActive
                    ? isVipTab ? 'text-yellow-400 font-extrabold' : 'text-[#00E676] font-extrabold'
                    : 'text-slate-400'
                }`}
              >
                {language === 'bn' ? item.labelBn : item.labelEn}
              </span>

              {/* Active glow dot */}
              {isActive && (
                <div
                  className={`w-1 h-1 rounded-full mt-0.5 ${
                    isVipTab ? 'bg-yellow-400 shadow-[0_0_6px_#facc15]' : 'bg-[#00E676] shadow-[0_0_6px_#00E676]'
                  }`}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
