import React, { useState } from 'react';
import { useFootball } from '../context/FootballContext';
import { MatchCard } from '../components/MatchCard';
import { t } from '../utils/translations';
import { DEMO_ACCURACY_STATS } from '../data/initialMatches';
import {
  Flame,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Crown,
  Sparkles,
  BarChart3,
  Calendar,
  ArrowRight,
  Zap,
  Award,
  ChevronRight
} from 'lucide-react';

export const HomeView: React.FC = () => {
  const { matches, language, setActiveTab, setSelectedMatch, setIsVipModalOpen } = useFootball();
  const [selectedMarketTab, setSelectedMarketTab] = useState<'all' | 'winner' | 'goals' | 'corners' | 'cards'>('all');

  // Find today's banker / hot match
  const bankerMatch = matches.find((m) => m.isHot && m.status !== 'finished') || matches[0];
  const liveMatches = matches.filter((m) => m.status === 'live');
  const upcomingMatches = matches.filter((m) => m.status === 'upcoming');
  const finishedWonMatches = matches.filter((m) => m.status === 'finished' && m.outcomeStatus === 'won');

  return (
    <div className="space-y-6 pb-20 pt-2 animate-fade-in max-w-7xl mx-auto px-3 sm:px-6">
      
      {/* Hero: Daily Hot Pick / Banker of the Day */}
      {bankerMatch && (
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0b1710] via-[#09110d] to-black border-2 border-emerald-500/50 p-4 sm:p-7 overflow-hidden shadow-2xl shadow-emerald-950/40">
          
          {/* Subtle football pitch lines */}
          <div className="absolute inset-0 pitch-pattern opacity-40 pointer-events-none" />
          <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500 text-black text-xs font-black shadow-lg shadow-emerald-500/30">
                  <Flame className="w-3.5 h-3.5 fill-black" />
                  {language === 'bn' ? 'আজকের সেরা ব্যঙ্কার টিপ' : 'Banker Pick of the Day'}
                </span>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-lg border border-emerald-800/40">
                  {bankerMatch.league}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-300 font-semibold flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  {bankerMatch.date} • {bankerMatch.time}
                </span>
              </div>
            </div>

            {/* Teams Matchup */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              
              <div className="md:col-span-7 flex items-center justify-between sm:justify-start gap-4 sm:gap-6 bg-slate-950/60 p-4 rounded-2xl border border-emerald-950">
                {/* Home */}
                <div className="flex flex-col items-center text-center">
                  <img
                    src={bankerMatch.homeTeam.logo}
                    alt={bankerMatch.homeTeam.name}
                    className="w-12 h-12 rounded-xl object-cover p-1 bg-slate-900 border border-emerald-950 shadow"
                  />
                  <h3 className="font-extrabold text-sm sm:text-base text-white mt-1.5 line-clamp-1 max-w-[120px]">
                    {language === 'bn' ? bankerMatch.homeTeam.name : bankerMatch.homeTeam.nameEn}
                  </h3>
                  <span className="text-[10px] text-emerald-400 font-bold">হোম</span>
                </div>

                <div className="flex flex-col items-center px-2">
                  <span className="text-base sm:text-lg font-black text-emerald-400 bg-emerald-950/90 px-3 py-1 rounded-xl border border-emerald-700/40">
                    VS
                  </span>
                  <span className="text-[11px] text-slate-400 mt-1">
                    {bankerMatch.status === 'live' ? `LIVE ${bankerMatch.liveMinute}'` : 'আজকের ম্যাচ'}
                  </span>
                </div>

                {/* Away */}
                <div className="flex flex-col items-center text-center">
                  <img
                    src={bankerMatch.awayTeam.logo}
                    alt={bankerMatch.awayTeam.name}
                    className="w-12 h-12 rounded-xl object-cover p-1 bg-slate-900 border border-emerald-950 shadow"
                  />
                  <h3 className="font-extrabold text-sm sm:text-base text-white mt-1.5 line-clamp-1 max-w-[120px]">
                    {language === 'bn' ? bankerMatch.awayTeam.name : bankerMatch.awayTeam.nameEn}
                  </h3>
                  <span className="text-[10px] text-slate-400 font-bold">অ্যাওয়ে</span>
                </div>
              </div>

              {/* Prediction Recommendation Box */}
              <div className="md:col-span-5 bg-gradient-to-r from-emerald-950/80 to-slate-950 p-4 rounded-2xl border border-emerald-600/40 space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300 font-bold flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-[#00E676]" />
                    {language === 'bn' ? 'প্রধান প্রেডিকশন:' : 'Recommended Pick:'}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-[#00E676] font-black text-xs border border-emerald-500/30">
                    {bankerMatch.matchWinner.confidence}% অ্যাকুরেসি
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-base font-extrabold text-white">
                    {language === 'bn' ? bankerMatch.matchWinner.tipLabelBn : bankerMatch.matchWinner.tipLabelEn}
                  </p>
                  <span className="font-mono font-black text-lg px-3 py-1 rounded-xl bg-emerald-500 text-black">
                    @{bankerMatch.matchWinner.odds.toFixed(2)}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] pt-1 border-t border-emerald-950/70">
                  <div className="text-slate-300">
                    <span className="text-slate-400 block">মোট গোল:</span>
                    <strong className="text-cyan-300">{bankerMatch.totalGoals.tipLabelBn}</strong>
                  </div>
                  <div className="text-slate-300">
                    <span className="text-slate-400 block">কর্নার:</span>
                    <strong className="text-amber-300">{bankerMatch.corners.tipLabelBn}</strong>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedMatch(bankerMatch)}
                  className="w-full py-2 rounded-xl bg-white/10 hover:bg-emerald-500 hover:text-black text-white font-bold text-xs transition flex items-center justify-center gap-1.5"
                >
                  <span>{language === 'bn' ? 'সম্পূর্ণ ৪টি মার্কেট বিশ্লেষণ দেখুন' : 'View All 4 Markets'}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* Accuracy & Statistics Highlights */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        <div className="p-3.5 rounded-2xl bg-[#0c140f] border border-emerald-950/80 text-center">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/15 text-[#00E676] flex items-center justify-center mx-auto mb-1.5">
            <Award className="w-4 h-4" />
          </div>
          <span className="text-xl sm:text-2xl font-black text-[#00E676] font-mono">
            {DEMO_ACCURACY_STATS.monthlyWinRate}%
          </span>
          <span className="block text-[11px] font-semibold text-slate-400 mt-0.5">
            {t('winRate', language)}
          </span>
        </div>

        <div className="p-3.5 rounded-2xl bg-[#0c140f] border border-emerald-950/80 text-center">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/15 text-cyan-400 flex items-center justify-center mx-auto mb-1.5">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <span className="text-xl sm:text-2xl font-black text-white font-mono">
            {DEMO_ACCURACY_STATS.totalTipsWon}টি
          </span>
          <span className="block text-[11px] font-semibold text-slate-400 mt-0.5">
            {t('wonTips', language)}
          </span>
        </div>

        <div className="p-3.5 rounded-2xl bg-[#0c140f] border border-emerald-950/80 text-center">
          <div className="w-8 h-8 rounded-lg bg-amber-500/15 text-amber-400 flex items-center justify-center mx-auto mb-1.5">
            <Flame className="w-4 h-4" />
          </div>
          <span className="text-xl sm:text-2xl font-black text-amber-400 font-mono">
            {DEMO_ACCURACY_STATS.currentStreak} 🔥
          </span>
          <span className="block text-[11px] font-semibold text-slate-400 mt-0.5">
            {t('streak', language)}
          </span>
        </div>

        <div className="p-3.5 rounded-2xl bg-[#0c140f] border border-yellow-500/30 text-center bg-gradient-to-br from-amber-950/20 to-black">
          <div className="w-8 h-8 rounded-lg bg-yellow-500/20 text-yellow-400 flex items-center justify-center mx-auto mb-1.5">
            <Crown className="w-4 h-4" />
          </div>
          <span className="text-xl sm:text-2xl font-black text-yellow-400 font-mono">
            {DEMO_ACCURACY_STATS.vipAccuracy}%
          </span>
          <span className="block text-[11px] font-semibold text-slate-400 mt-0.5">
            ভিআইপি সাকসেস রেট
          </span>
        </div>
      </div>

      {/* Live Matches Strip (if any) */}
      {liveMatches.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
              <h3 className="font-extrabold text-base text-white">
                {language === 'bn' ? 'চলমান লাইভ ম্যাচ ও ইন-প্লে অডস' : 'Live In-Play Matches'}
              </h3>
            </div>
            <button
              onClick={() => setActiveTab('matches')}
              className="text-xs font-bold text-[#00E676] hover:underline flex items-center gap-1"
            >
              <span>{language === 'bn' ? 'সব দেখুন' : 'View all'}</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {liveMatches.map((m) => (
              <MatchCard key={m.id} match={m} />
            ))}
          </div>
        </div>
      )}

      {/* Quick Market Filter Tabs */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-white">
              {language === 'bn' ? 'আজকের হট প্রেডিকশন তালিকা' : 'Today Hot Predictions'}
            </h3>
            <p className="text-xs text-slate-400">
              {language === 'bn'
                ? 'ম্যাচ বিজয়ী, মোট গোল, কর্নার ও কার্ডের সেরা টিপস'
                : 'Picks for Match Winner, Total Goals, Corners, and Cards'}
            </p>
          </div>

          <button
            onClick={() => setActiveTab('matches')}
            className="text-xs font-bold text-emerald-400 hover:text-[#00E676] flex items-center gap-1"
          >
            <span>{language === 'bn' ? 'সব ম্যাচ তালিকা' : 'Full Matches List'}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Matches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {matches.slice(0, 4).map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </div>

      {/* VIP Sneak Peek Banner */}
      <div className="p-5 rounded-3xl bg-gradient-to-r from-amber-950/40 via-yellow-950/20 to-black border border-yellow-500/40 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-black border border-yellow-500/30">
            <Crown className="w-3 h-3 text-yellow-400" />
            <span>{language === 'bn' ? 'ভিআইপি এক্সক্লুসিভ অ্যাকিউমুলেটর' : 'VIP Exclusive Accumulator'}</span>
          </div>
          <h4 className="text-base font-extrabold text-white">
            {language === 'bn'
              ? 'দৈনিক ৯৩.৪% উইন রেট সম্বলিত ব্যঙ্কার টিপস চান?'
              : 'Want high-confidence banker accumulator tips daily?'}
          </h4>
          <p className="text-xs text-slate-300 max-w-lg">
            {language === 'bn'
              ? 'ভিআইপি মেম্বাররা পাচ্ছেন বিশেষ ১০+ অডস কম্বো স্লিপ এবং কর্নার ও কার্ডের গোপন ভ্যালু বেট অ্যানালাইসিস।'
              : 'Join VIP to unlock guaranteed high odds, corner metrics and card fouls intelligence.'}
          </p>
        </div>

        <button
          onClick={() => setIsVipModalOpen(true)}
          className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-black text-xs shadow-lg shadow-amber-500/30 hover:brightness-110 active:scale-95 transition shrink-0"
        >
          {t('unlockVip', language)}
        </button>
      </div>

      {/* Recent Successful Predictions Ticker */}
      {finishedWonMatches.length > 0 && (
        <div className="p-4 rounded-2xl bg-[#09110c] border border-emerald-950 space-y-2.5">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#00E676]" />
            <h4 className="font-extrabold text-xs text-emerald-300 uppercase tracking-wider">
              {language === 'bn' ? 'সম্প্রতি সফল হওয়া উইন প্রেডিকশন' : 'Recent Winning Predictions'}
            </h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {finishedWonMatches.map((m) => (
              <div
                key={m.id}
                onClick={() => setSelectedMatch(m)}
                className="p-2.5 rounded-xl bg-black/60 border border-emerald-900/40 flex items-center justify-between cursor-pointer hover:border-emerald-500/60 transition"
              >
                <div>
                  <span className="text-[10px] text-emerald-400 font-bold block">{m.league}</span>
                  <span className="text-xs font-bold text-white">
                    {m.homeTeam.shortName} {m.score?.home} - {m.score?.away} {m.awayTeam.shortName}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-black text-[#00E676] bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/30">
                    WON ✓
                  </span>
                  <span className="block text-[11px] font-mono text-slate-300 mt-0.5">
                    @{m.matchWinner.odds.toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
