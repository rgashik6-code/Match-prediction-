import React from 'react';
import { MatchPrediction } from '../types/football';
import { useFootball } from '../context/FootballContext';
import { t } from '../utils/translations';
import { Flame, Crown, Clock, CheckCircle2, XCircle, AlertCircle, TrendingUp, Shield, BarChart3, Plus, Check } from 'lucide-react';

interface MatchCardProps {
  match: MatchPrediction;
  compact?: boolean;
}

export const MatchCard: React.FC<MatchCardProps> = ({ match, compact = false }) => {
  const {
    language,
    setSelectedMatch,
    addToSlip,
    isInSlip,
    isVipUnlocked,
    setIsVipModalOpen
  } = useFootball();

  const isLockedVip = match.isPremium && !isVipUnlocked;

  const handleAddMarketToSlip = (e: React.MouseEvent, marketKey: 'winner' | 'goals' | 'corners' | 'cards') => {
    e.stopPropagation();
    if (isLockedVip) {
      setIsVipModalOpen(true);
      return;
    }

    let item;
    const matchTitle = `${match.homeTeam.name} বনাম ${match.awayTeam.name}`;

    if (marketKey === 'winner') {
      item = {
        matchId: match.id,
        matchTitle,
        marketName: language === 'bn' ? 'ম্যাচ বিজয়ী' : 'Match Winner',
        tip: language === 'bn' ? match.matchWinner.tipLabelBn : match.matchWinner.tipLabelEn,
        odds: match.matchWinner.odds,
        confidence: match.matchWinner.confidence
      };
    } else if (marketKey === 'goals') {
      item = {
        matchId: match.id,
        matchTitle,
        marketName: language === 'bn' ? 'মোট গোল' : 'Total Goals',
        tip: language === 'bn' ? match.totalGoals.tipLabelBn : match.totalGoals.tipLabelEn,
        odds: match.totalGoals.odds,
        confidence: match.totalGoals.confidence
      };
    } else if (marketKey === 'corners') {
      item = {
        matchId: match.id,
        matchTitle,
        marketName: language === 'bn' ? 'মোট কর্নার' : 'Total Corners',
        tip: language === 'bn' ? match.corners.tipLabelBn : match.corners.tipLabelEn,
        odds: match.corners.odds,
        confidence: match.corners.confidence
      };
    } else {
      item = {
        matchId: match.id,
        matchTitle,
        marketName: language === 'bn' ? 'কার্ড ও ফাউল' : 'Total Cards',
        tip: language === 'bn' ? match.cards.tipLabelBn : match.cards.tipLabelEn,
        odds: match.cards.odds,
        confidence: match.cards.confidence
      };
    }

    addToSlip(item);
  };

  return (
    <div
      onClick={() => setSelectedMatch(match)}
      className={`group relative rounded-2xl bg-[#0c130f] border transition-all duration-200 cursor-pointer overflow-hidden ${
        match.isPremium
          ? 'border-amber-500/30 hover:border-amber-400/60 shadow-lg shadow-amber-950/20'
          : match.isHot
          ? 'border-emerald-500/40 hover:border-[#00E676] shadow-lg shadow-emerald-950/30'
          : 'border-emerald-950/50 hover:border-emerald-700/60'
      }`}
    >
      {/* Top Accent Stripe */}
      <div
        className={`h-1 w-full ${
          match.isPremium
            ? 'bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-600'
            : match.status === 'live'
            ? 'bg-gradient-to-r from-red-500 via-rose-500 to-amber-500 animate-pulse'
            : 'bg-gradient-to-r from-emerald-600 via-[#00E676] to-emerald-800'
        }`}
      />

      {/* Card Header */}
      <div className="p-3.5 pb-2.5 flex items-center justify-between border-b border-emerald-950/40 bg-[#090f0b]">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-950/80 text-emerald-400 border border-emerald-800/40">
            {match.leagueCode}
          </span>
          <span className="text-xs text-slate-300 font-medium truncate max-w-[170px] sm:max-w-xs">
            {match.league}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          {match.isPremium && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-extrabold bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-yellow-400 border border-yellow-500/40">
              <Crown className="w-2.5 h-2.5 text-yellow-400" /> VIP
            </span>
          )}

          {match.isHot && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-extrabold bg-rose-500/20 text-rose-400 border border-rose-500/30">
              <Flame className="w-2.5 h-2.5 text-rose-400" /> HOT
            </span>
          )}

          {match.status === 'live' ? (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-extrabold bg-red-500/20 text-red-400 border border-red-500/40 animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              {language === 'bn' ? `লাইভ ${match.liveMinute}'` : `LIVE ${match.liveMinute}'`}
            </span>
          ) : match.status === 'finished' ? (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-300">
              {match.outcomeStatus === 'won' ? (
                <span className="text-[#00E676] flex items-center gap-0.5 font-black">
                  <CheckCircle2 className="w-3 h-3" /> WON
                </span>
              ) : match.outcomeStatus === 'lost' ? (
                <span className="text-rose-400 flex items-center gap-0.5 font-black">
                  <XCircle className="w-3 h-3" /> LOST
                </span>
              ) : (
                <span>{t('finished', language)}</span>
              )}
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-400 font-semibold">
              <Clock className="w-3 h-3 text-emerald-400" />
              {match.time}
            </span>
          )}
        </div>
      </div>

      {/* Teams & Score Section */}
      <div className="p-4 pt-3">
        <div className="flex items-center justify-between gap-3">
          
          {/* Home Team */}
          <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="w-11 h-11 rounded-xl bg-slate-900/90 border border-emerald-950 p-1 flex items-center justify-center mb-1.5 shadow-inner">
              <img
                src={match.homeTeam.logo}
                alt={match.homeTeam.name}
                className="w-8 h-8 rounded-lg object-cover"
              />
            </div>
            <h4 className="font-extrabold text-sm sm:text-base text-white tracking-tight line-clamp-1">
              {language === 'bn' ? match.homeTeam.name : match.homeTeam.nameEn}
            </h4>
            {/* Form */}
            <div className="flex items-center gap-0.5 mt-1">
              {match.homeTeam.form.map((res, i) => (
                <span
                  key={i}
                  className={`w-4 h-4 rounded text-[9px] font-black flex items-center justify-center ${
                    res === 'W'
                      ? 'bg-emerald-500/25 text-[#00E676] border border-emerald-500/40'
                      : res === 'D'
                      ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                      : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                  }`}
                >
                  {res}
                </span>
              ))}
            </div>
          </div>

          {/* Center VS / Score */}
          <div className="flex flex-col items-center justify-center px-2">
            {match.score ? (
              <div className="flex items-center gap-2 bg-[#060a08] px-3 py-1.5 rounded-xl border border-emerald-800/50 shadow-inner">
                <span className="text-xl sm:text-2xl font-black text-[#00E676] font-mono">
                  {match.score.home}
                </span>
                <span className="text-slate-500 text-sm font-bold">-</span>
                <span className="text-xl sm:text-2xl font-black text-[#00E676] font-mono">
                  {match.score.away}
                </span>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <span className="text-xs font-black text-emerald-400 bg-emerald-950/70 border border-emerald-800/40 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  VS
                </span>
                <span className="text-[11px] text-slate-400 mt-1">
                  {match.date.slice(5)}
                </span>
              </div>
            )}
          </div>

          {/* Away Team */}
          <div className="flex-1 flex flex-col items-center sm:items-end text-center sm:text-right">
            <div className="w-11 h-11 rounded-xl bg-slate-900/90 border border-emerald-950 p-1 flex items-center justify-center mb-1.5 shadow-inner">
              <img
                src={match.awayTeam.logo}
                alt={match.awayTeam.name}
                className="w-8 h-8 rounded-lg object-cover"
              />
            </div>
            <h4 className="font-extrabold text-sm sm:text-base text-white tracking-tight line-clamp-1">
              {language === 'bn' ? match.awayTeam.name : match.awayTeam.nameEn}
            </h4>
            {/* Form */}
            <div className="flex items-center gap-0.5 mt-1 justify-center sm:justify-end">
              {match.awayTeam.form.map((res, i) => (
                <span
                  key={i}
                  className={`w-4 h-4 rounded text-[9px] font-black flex items-center justify-center ${
                    res === 'W'
                      ? 'bg-emerald-500/25 text-[#00E676] border border-emerald-500/40'
                      : res === 'D'
                      ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                      : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                  }`}
                >
                  {res}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Locked VIP Blocker for non-subscribed users */}
        {isLockedVip ? (
          <div className="mt-4 p-4 rounded-xl bg-gradient-to-br from-amber-950/30 to-black border border-yellow-500/40 text-center relative overflow-hidden">
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="w-10 h-10 rounded-full bg-yellow-500/20 border border-yellow-500/40 flex items-center justify-center text-yellow-400">
                <Crown className="w-5 h-5" />
              </div>
              <h5 className="font-bold text-sm text-yellow-300">
                {language === 'bn' ? '🔒 প্রিমিয়াম ভিআইপি অ্যানালাইসিস লক করা' : '🔒 Premium VIP Analysis Locked'}
              </h5>
              <p className="text-xs text-slate-300 max-w-sm">
                {language === 'bn'
                  ? 'এই ম্যাচের হাই-অডস উইনার, কর্নার ও কার্ডের নির্ভুল পূর্বাভাস দেখতে ভিআইপি আনলক করুন।'
                  : 'Unlock VIP to view high-confidence winner, total goals, corners, and card tips.'}
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsVipModalOpen(true);
                }}
                className="mt-1 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-extrabold text-xs shadow-md shadow-amber-500/30 hover:brightness-110 active:scale-95 transition"
              >
                {t('unlockVip', language)}
              </button>
            </div>
          </div>
        ) : (
          /* The 4 Core Match Prediction Markets */
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
            
            {/* Market 1: Match Winner (1X2) */}
            <div
              onClick={(e) => handleAddMarketToSlip(e, 'winner')}
              className={`p-2.5 rounded-xl border transition-all text-left group/m ${
                isInSlip(match.id, language === 'bn' ? 'ম্যাচ বিজয়ী' : 'Match Winner')
                  ? 'bg-emerald-950/70 border-[#00E676] shadow-sm shadow-emerald-500/20'
                  : 'bg-[#09100c] hover:bg-[#0e1712] border-emerald-950/70 hover:border-emerald-600/50'
              }`}
            >
              <div className="flex items-center justify-between text-[11px] mb-1">
                <span className="font-semibold text-slate-400 flex items-center gap-1">
                  <Shield className="w-3 h-3 text-[#00E676]" />
                  {language === 'bn' ? '১X২ ম্যাচ বিজয়ী' : 'Match Winner'}
                </span>
                <span className="text-[10px] font-black px-1.5 py-0.2 rounded bg-emerald-500/15 text-[#00E676] border border-emerald-500/20">
                  {match.matchWinner.confidence}%
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-white group-hover/m:text-[#00E676] transition truncate pr-2">
                  {language === 'bn' ? match.matchWinner.tipLabelBn : match.matchWinner.tipLabelEn}
                </span>
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="font-mono font-black text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-[#00E676] border border-emerald-500/30">
                    {match.matchWinner.odds.toFixed(2)}
                  </span>
                  <div className="w-5 h-5 rounded-md bg-slate-800 text-slate-300 flex items-center justify-center group-hover/m:bg-[#00E676] group-hover/m:text-black transition">
                    {isInSlip(match.id, language === 'bn' ? 'ম্যাচ বিজয়ী' : 'Match Winner') ? (
                      <Check className="w-3.5 h-3.5 text-[#00E676] group-hover/m:text-black" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Market 2: Total Goals (Over/Under) */}
            <div
              onClick={(e) => handleAddMarketToSlip(e, 'goals')}
              className={`p-2.5 rounded-xl border transition-all text-left group/m ${
                isInSlip(match.id, language === 'bn' ? 'মোট গোল' : 'Total Goals')
                  ? 'bg-emerald-950/70 border-[#00E676] shadow-sm shadow-emerald-500/20'
                  : 'bg-[#09100c] hover:bg-[#0e1712] border-emerald-950/70 hover:border-emerald-600/50'
              }`}
            >
              <div className="flex items-center justify-between text-[11px] mb-1">
                <span className="font-semibold text-slate-400 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-cyan-400" />
                  {language === 'bn' ? 'মোট গোল' : 'Total Goals'}
                </span>
                <span className="text-[10px] font-black px-1.5 py-0.2 rounded bg-cyan-500/15 text-cyan-400 border border-cyan-500/20">
                  {match.totalGoals.confidence}%
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-white group-hover/m:text-cyan-300 transition truncate pr-2">
                  {language === 'bn' ? match.totalGoals.tipLabelBn : match.totalGoals.tipLabelEn}
                </span>
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="font-mono font-black text-xs px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    {match.totalGoals.odds.toFixed(2)}
                  </span>
                  <div className="w-5 h-5 rounded-md bg-slate-800 text-slate-300 flex items-center justify-center group-hover/m:bg-cyan-400 group-hover/m:text-black transition">
                    {isInSlip(match.id, language === 'bn' ? 'মোট গোল' : 'Total Goals') ? (
                      <Check className="w-3.5 h-3.5 text-cyan-400 group-hover/m:text-black" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Market 3: Corners */}
            <div
              onClick={(e) => handleAddMarketToSlip(e, 'corners')}
              className={`p-2.5 rounded-xl border transition-all text-left group/m ${
                isInSlip(match.id, language === 'bn' ? 'মোট কর্নার' : 'Total Corners')
                  ? 'bg-emerald-950/70 border-[#00E676] shadow-sm shadow-emerald-500/20'
                  : 'bg-[#09100c] hover:bg-[#0e1712] border-emerald-950/70 hover:border-emerald-600/50'
              }`}
            >
              <div className="flex items-center justify-between text-[11px] mb-1">
                <span className="font-semibold text-slate-400 flex items-center gap-1">
                  <BarChart3 className="w-3 h-3 text-amber-400" />
                  {language === 'bn' ? 'কর্নার বাজার' : 'Corners Market'}
                </span>
                <span className="text-[10px] font-black px-1.5 py-0.2 rounded bg-amber-500/15 text-amber-400 border border-amber-500/20">
                  {match.corners.confidence}%
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-white group-hover/m:text-amber-300 transition truncate pr-2">
                  {language === 'bn' ? match.corners.tipLabelBn : match.corners.tipLabelEn}
                </span>
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="font-mono font-black text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    {match.corners.odds.toFixed(2)}
                  </span>
                  <div className="w-5 h-5 rounded-md bg-slate-800 text-slate-300 flex items-center justify-center group-hover/m:bg-amber-400 group-hover/m:text-black transition">
                    {isInSlip(match.id, language === 'bn' ? 'মোট কর্নার' : 'Total Corners') ? (
                      <Check className="w-3.5 h-3.5 text-amber-400 group-hover/m:text-black" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Market 4: Yellow/Red Cards */}
            <div
              onClick={(e) => handleAddMarketToSlip(e, 'cards')}
              className={`p-2.5 rounded-xl border transition-all text-left group/m ${
                isInSlip(match.id, language === 'bn' ? 'কার্ড ও ফাউল' : 'Total Cards')
                  ? 'bg-emerald-950/70 border-[#00E676] shadow-sm shadow-emerald-500/20'
                  : 'bg-[#09100c] hover:bg-[#0e1712] border-emerald-950/70 hover:border-emerald-600/50'
              }`}
            >
              <div className="flex items-center justify-between text-[11px] mb-1">
                <span className="font-semibold text-slate-400 flex items-center gap-1">
                  <span className="w-2.5 h-3.5 bg-yellow-400 rounded-xs inline-block" />
                  {language === 'bn' ? 'হলুদ ও লাল কার্ড' : 'Yellow/Red Cards'}
                </span>
                <span className="text-[10px] font-black px-1.5 py-0.2 rounded bg-yellow-500/15 text-yellow-400 border border-yellow-500/20">
                  {match.cards.confidence}%
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-white group-hover/m:text-yellow-300 transition truncate pr-2">
                  {language === 'bn' ? match.cards.tipLabelBn : match.cards.tipLabelEn}
                </span>
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="font-mono font-black text-xs px-2 py-0.5 rounded bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">
                    {match.cards.odds.toFixed(2)}
                  </span>
                  <div className="w-5 h-5 rounded-md bg-slate-800 text-slate-300 flex items-center justify-center group-hover/m:bg-yellow-400 group-hover/m:text-black transition">
                    {isInSlip(match.id, language === 'bn' ? 'কার্ড ও ফাউল' : 'Total Cards') ? (
                      <Check className="w-3.5 h-3.5 text-yellow-400 group-hover/m:text-black" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" />
                    )}
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Short Reasoning Footer */}
        {!isLockedVip && (
          <div className="mt-3 pt-2.5 border-t border-emerald-950/40 flex items-center justify-between text-xs text-slate-400">
            <p className="line-clamp-1 italic text-[11px] text-slate-400/90 pr-2">
              💡 {language === 'bn' ? match.matchWinner.reasoningBn : match.matchWinner.reasoningEn}
            </p>
            <span className="shrink-0 text-[11px] font-bold text-[#00E676] group-hover:underline flex items-center gap-0.5">
              {t('viewDetails', language)} →
            </span>
          </div>
        )}

      </div>
    </div>
  );
};
