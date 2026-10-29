import React from 'react';
import { useFootball } from '../context/FootballContext';
import { MatchCard } from '../components/MatchCard';
import { t } from '../utils/translations';
import {
  Crown,
  Sparkles,
  Zap,
  TrendingUp,
  CheckCircle2,
  Lock,
  Unlock,
  ShieldCheck,
  Send,
  MessageCircle,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const PremiumView: React.FC = () => {
  const {
    matches,
    language,
    isVipUnlocked,
    setIsVipUnlocked,
    setIsVipModalOpen
  } = useFootball();

  const vipMatches = matches.filter((m) => m.isPremium);

  const handleInstantDemoUnlock = () => {
    setIsVipUnlocked(true);
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FBBF24', '#00E676', '#10B981']
    });
  };

  return (
    <div className="space-y-6 pb-24 pt-2 max-w-7xl mx-auto px-3 sm:px-6 animate-fade-in">
      
      {/* VIP Status Banner */}
      <div className="relative rounded-3xl bg-gradient-to-br from-amber-950/40 via-yellow-950/20 to-black border-2 border-yellow-500/50 p-5 sm:p-7 overflow-hidden shadow-2xl shadow-yellow-950/30">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
          <div className="space-y-1.5 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="w-8 h-8 rounded-xl bg-yellow-500/20 text-yellow-400 flex items-center justify-center">
                <Crown className="w-5 h-5 text-yellow-400" />
              </span>
              <span className="text-xs font-black text-yellow-400 uppercase tracking-wider">
                {language === 'bn' ? 'ভিআইপি এক্সক্লুসিভ ক্লাব' : 'VIP Exclusive Club'}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-white">
              {language === 'bn' ? 'প্রিমিয়াম ভিআইপি ফুটবল প্রেডিকশন' : 'Premium VIP Football Predictions'}
            </h2>
            <p className="text-xs text-slate-300 max-w-xl">
              {language === 'bn'
                ? 'দৈনিক ৯৩.৪% নির্ভুলতার গ্যারান্টিযুক্ত হাই-অডস ব্যঙ্কার টিপস, কর্নার ও কার্ড নিশ্চিত ভ্যালু অ্যানালাইসিস।'
                : 'Guaranteed 93.4% accuracy high odds accumulator, corner trends & card bookings.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2 shrink-0">
            {isVipUnlocked ? (
              <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-emerald-500/20 text-[#00E676] border border-emerald-500/40 text-xs font-black">
                <Unlock className="w-4 h-4 text-[#00E676]" />
                <span>{language === 'bn' ? 'ভিআইপি পূর্ণ অ্যাক্সেস সক্রিয় ✓' : 'VIP Full Access Active ✓'}</span>
              </div>
            ) : (
              <button
                onClick={handleInstantDemoUnlock}
                className="px-6 py-3 rounded-2xl bg-[#00E676] hover:bg-[#00c864] text-black font-black text-xs shadow-xl shadow-emerald-500/30 flex items-center gap-2 transition active:scale-95"
              >
                <Zap className="w-4 h-4 fill-black" />
                <span>{language === 'bn' ? 'ফ্রি ডেমো ভিআইপি সক্রিয় করুন' : 'Unlock Free Demo VIP'}</span>
              </button>
            )}

            <button
              onClick={() => setIsVipModalOpen(true)}
              className="px-4 py-2.5 rounded-2xl bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-300 border border-yellow-500/40 font-bold text-xs transition"
            >
              {language === 'bn' ? 'ভিআইপি প্ল্যান দেখুন' : 'View VIP Plans'}
            </button>
          </div>
        </div>

      </div>

      {/* VIP Performance Record */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        <div className="p-3.5 rounded-2xl bg-[#0c140f] border border-yellow-500/30 text-center">
          <span className="text-xl sm:text-2xl font-black text-yellow-400 font-mono">৯৩.৪%</span>
          <span className="block text-[11px] font-semibold text-slate-400 mt-0.5">ভিআইপি উইন রেট</span>
        </div>
        <div className="p-3.5 rounded-2xl bg-[#0c140f] border border-yellow-500/30 text-center">
          <span className="text-xl sm:text-2xl font-black text-[#00E676] font-mono">২.৩৫</span>
          <span className="block text-[11px] font-semibold text-slate-400 mt-0.5">গড় ভিআইপি অডস</span>
        </div>
        <div className="p-3.5 rounded-2xl bg-[#0c140f] border border-yellow-500/30 text-center">
          <span className="text-xl sm:text-2xl font-black text-white font-mono">১২৭ / ১৩৬</span>
          <span className="block text-[11px] font-semibold text-slate-400 mt-0.5">চলতি মাসের উইন</span>
        </div>
        <div className="p-3.5 rounded-2xl bg-[#0c140f] border border-yellow-500/30 text-center">
          <span className="text-xl sm:text-2xl font-black text-cyan-400 font-mono">১০০%</span>
          <span className="block text-[11px] font-semibold text-slate-400 mt-0.5">স্বচ্ছ হিসেব</span>
        </div>
      </div>

      {/* VIP Match Cards */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-extrabold text-base sm:text-lg text-white flex items-center gap-2">
            <Crown className="w-5 h-5 text-yellow-400" />
            <span>{language === 'bn' ? 'আজকের নির্বাচিত ভিআইপি ম্যাচসমূহ' : "Today's VIP Selected Matches"}</span>
          </h3>
          <span className="text-xs text-yellow-400/90 font-bold">
            {vipMatches.length}টি স্পেশাল ম্যাচ
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {vipMatches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </div>

      {/* VIP Community Links */}
      <div className="p-5 rounded-2xl bg-[#0a100d] border border-emerald-950 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-bold text-sm text-white flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#00E676]" />
            {language === 'bn' ? 'ভিআইপি টেলিগ্রাম ও প্রাইভেট গ্রুপ' : 'VIP Private Telegram Community'}
          </h4>
          <p className="text-xs text-slate-400 mt-0.5">
            {language === 'bn'
              ? 'ম্যাচ শুরুর ৩০ মিনিট আগে লাইন-আপ ঘোষণার পর তাত্ক্ষণিক ইন-প্লে টিপস টেলিগ্রামে শেয়ার করা হয়।'
              : 'Confirmed line-up tips and in-play value notifications sent 30 mins prior to kickoff.'}
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href="https://t.me/"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-xl bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white text-xs font-bold flex items-center gap-1.5 border border-blue-500/30 transition"
          >
            <Send className="w-3.5 h-3.5" /> Telegram VIP
          </a>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-xl bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white text-xs font-bold flex items-center gap-1.5 border border-emerald-500/30 transition"
          >
            <MessageCircle className="w-3.5 h-3.5" /> WhatsApp VIP
          </a>
        </div>
      </div>

    </div>
  );
};
