import React, { useState } from 'react';
import { useFootball } from '../context/FootballContext';
import { MatchCard } from '../components/MatchCard';
import { t } from '../utils/translations';
import {
  CheckCircle2,
  Shield,
  TrendingUp,
  BarChart3,
  AlertTriangle,
  Lightbulb,
  Plus,
  Check,
  Flame,
  ArrowRight
} from 'lucide-react';

export const FreePredictionsView: React.FC = () => {
  const { matches, language, addToSlip, isInSlip, setSelectedMatch, setIsSlipOpen } = useFootball();
  const [activeMarketFilter, setActiveMarketFilter] = useState<'all' | 'winner' | 'goals' | 'corners' | 'cards'>('all');

  const freeMatches = matches.filter((m) => !m.isPremium);

  return (
    <div className="space-y-6 pb-24 pt-2 max-w-7xl mx-auto px-3 sm:px-6 animate-fade-in">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-emerald-500/20 text-[#00E676] flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              {t('navFree', language)} (১০০% ফ্রি)
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            {language === 'bn'
              ? 'দৈনিক ফ্রি স্পোর্টস অ্যানালাইসিস, ম্যাচ উইনার, মোট গোল, কর্নার ও কার্ড প্রেডিকশন'
              : 'Daily free betting picks for match winners, totals, corners, and cards'}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsSlipOpen(true)}
            className="px-3.5 py-1.5 rounded-xl bg-emerald-950 hover:bg-emerald-900 text-[#00E676] border border-emerald-800 text-xs font-bold transition flex items-center gap-1.5"
          >
            <span>{language === 'bn' ? 'স্লিপ প্রিভিউ দেখুন' : 'Preview Slip'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Market Selector Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        <button
          onClick={() => setActiveMarketFilter('all')}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap flex items-center gap-1.5 ${
            activeMarketFilter === 'all'
              ? 'bg-[#00E676] text-black shadow-md shadow-emerald-500/20'
              : 'bg-[#0d1611] text-slate-300 hover:bg-[#122018] border border-emerald-950'
          }`}
        >
          <span>{language === 'bn' ? 'সব ফ্রি টিপস' : 'All Free Tips'}</span>
        </button>

        <button
          onClick={() => setActiveMarketFilter('winner')}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap flex items-center gap-1.5 ${
            activeMarketFilter === 'winner'
              ? 'bg-emerald-600 text-white shadow-md'
              : 'bg-[#0d1611] text-emerald-400 hover:bg-[#122018] border border-emerald-950'
          }`}
        >
          <Shield className="w-3.5 h-3.5" />
          <span>{language === 'bn' ? '১X২ ম্যাচ বিজয়ী' : 'Match Winner (1X2)'}</span>
        </button>

        <button
          onClick={() => setActiveMarketFilter('goals')}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap flex items-center gap-1.5 ${
            activeMarketFilter === 'goals'
              ? 'bg-cyan-600 text-white shadow-md'
              : 'bg-[#0d1611] text-cyan-400 hover:bg-[#122018] border border-emerald-950'
          }`}
        >
          <TrendingUp className="w-3.5 h-3.5" />
          <span>{language === 'bn' ? 'মোট গোল (ওভার/আন্ডার)' : 'Total Goals'}</span>
        </button>

        <button
          onClick={() => setActiveMarketFilter('corners')}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap flex items-center gap-1.5 ${
            activeMarketFilter === 'corners'
              ? 'bg-amber-600 text-white shadow-md'
              : 'bg-[#0d1611] text-amber-400 hover:bg-[#122018] border border-emerald-950'
          }`}
        >
          <BarChart3 className="w-3.5 h-3.5" />
          <span>{language === 'bn' ? 'কর্নার স্পেশাল' : 'Corners'}</span>
        </button>

        <button
          onClick={() => setActiveMarketFilter('cards')}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap flex items-center gap-1.5 ${
            activeMarketFilter === 'cards'
              ? 'bg-yellow-500 text-black shadow-md font-extrabold'
              : 'bg-[#0d1611] text-yellow-400 hover:bg-[#122018] border border-emerald-950'
          }`}
        >
          <span className="w-2.5 h-3.5 bg-yellow-400 rounded-xs inline-block" />
          <span>{language === 'bn' ? 'হলুদ ও লাল কার্ড' : 'Cards & Fouls'}</span>
        </button>
      </div>

      {/* Free Market Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {freeMatches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>

      {/* Strategy / Pro Insights Box */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#0b1410] border border-emerald-900/60 space-y-3">
        <div className="flex items-center gap-2 text-emerald-400 font-extrabold text-sm">
          <Lightbulb className="w-4 h-4 text-[#00E676]" />
          <span>{language === 'bn' ? 'প্রো টিপ: কর্নার ও কার্ড অ্যানালাইসিস কেন গুরুত্বপূর্ণ?' : 'Pro Tip: Why Corner & Card Markets are Profitable?'}</span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          {language === 'bn'
            ? 'ম্যাচ উইনার (১X২) প্রেডিকশনে অঘটন বেশি ঘটে। কিন্তু কর্নার এবং কার্ড মার্কেট সাধারণত দলের খেলার স্টাইল (উইং প্লে, ক্রসিং, অ্যাগ্রেসিভ প্রেসিং) এবং রেফারির স্বভাবের ওপর ভিত্তি করে প্রায় নিশ্চিত প্যাটার্ন অনুসরণ করে। আমাদের অ্যানালাইসিসে এই মার্কেটগুলোর গড় সাফল্যের হার ৮৯%+।'
            : 'Match winner markets are prone to upsets. Corner and card markets, however, rely heavily on tactical width, wing overload, and referee card leniency, yielding statistically safer win rates.'}
        </p>
      </div>

    </div>
  );
};
