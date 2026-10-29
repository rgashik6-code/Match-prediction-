import React, { useState } from 'react';
import { useFootball } from '../context/FootballContext';
import { MatchPrediction, MatchStatus, OutcomeStatus } from '../types/football';
import { t } from '../utils/translations';
import {
  ShieldAlert,
  PlusCircle,
  Trash2,
  CheckCircle2,
  XCircle,
  RefreshCw,
  Edit,
  Save,
  Trophy,
  Flame,
  Crown,
  Eye,
  Sliders,
  Check
} from 'lucide-react';

export const AdminView: React.FC = () => {
  const {
    matches,
    addMatch,
    updateMatch,
    deleteMatch,
    updateMatchOutcome,
    resetMatchesToDefault,
    language,
    setSelectedMatch
  } = useFootball();

  const [showAddForm, setShowAddForm] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  // Form State
  const [homeName, setHomeName] = useState('');
  const [awayName, setAwayName] = useState('');
  const [leagueName, setLeagueName] = useState('উয়েফা চ্যাম্পিয়ন্স লিগ');
  const [leagueCode, setLeagueCode] = useState('UCL');
  const [matchDate, setMatchDate] = useState('2026-10-29');
  const [matchTime, setMatchTime] = useState('০১:৪৫');
  const [venue, setVenue] = useState('অ্যানফিল্ড / বার্নাব্যু');
  const [isVip, setIsVip] = useState(false);
  const [isHot, setIsHot] = useState(false);

  // Markets Form State
  const [winnerTip, setWinnerTip] = useState('Home Win (হোম জয়)');
  const [winnerOdds, setWinnerOdds] = useState('1.85');
  const [winnerConf, setWinnerConf] = useState('88');

  const [goalsTip, setGoalsTip] = useState('Over 2.5 Goals (২.৫-এর বেশি গোল)');
  const [goalsOdds, setGoalsOdds] = useState('1.75');
  const [goalsConf, setGoalsConf] = useState('86');

  const [cornersTip, setCornersTip] = useState('Over 9.5 Corners (৯.৫-এর বেশি)');
  const [cornersOdds, setCornersOdds] = useState('1.80');
  const [cornersConf, setCornersConf] = useState('82');

  const [cardsTip, setCardsTip] = useState('Over 4.5 Cards (৪.৫-এর বেশি কার্ড)');
  const [cardsOdds, setCardsOdds] = useState('1.90');
  const [cardsConf, setCardsConf] = useState('85');

  const [reasoning, setReasoning] = useState('উভয় দলের আক্রমণাত্মক স্টাইল ও পরিসংখ্যান অনুযায়ী এটি সেরা বাজি।');

  const handleCreateMatch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!homeName.trim() || !awayName.trim()) return;

    const newMatch: MatchPrediction = {
      id: `gp-${Date.now()}`,
      league: leagueName,
      leagueCode: leagueCode.toUpperCase(),
      date: matchDate,
      time: matchTime,
      venue,
      status: 'upcoming',
      outcomeStatus: 'pending',
      isPremium: isVip,
      isHot,
      homeTeam: {
        name: homeName,
        nameEn: homeName,
        shortName: homeName.slice(0, 3).toUpperCase(),
        logo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=80&auto=format&fit=crop&q=80',
        form: ['W', 'W', 'D', 'W', 'L']
      },
      awayTeam: {
        name: awayName,
        nameEn: awayName,
        shortName: awayName.slice(0, 3).toUpperCase(),
        logo: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=80&auto=format&fit=crop&q=80',
        form: ['W', 'D', 'W', 'W', 'W']
      },
      matchWinner: {
        tip: winnerTip,
        tipLabelBn: winnerTip,
        tipLabelEn: winnerTip,
        odds: parseFloat(winnerOdds) || 1.85,
        confidence: parseInt(winnerConf) || 85,
        reasoningBn: reasoning,
        reasoningEn: reasoning,
        subValue: '1X2 মার্কেট'
      },
      totalGoals: {
        tip: goalsTip,
        tipLabelBn: goalsTip,
        tipLabelEn: goalsTip,
        odds: parseFloat(goalsOdds) || 1.75,
        confidence: parseInt(goalsConf) || 85,
        reasoningBn: 'দুই দলের শেষ ৫ ম্যাচে গড়ে ৩+ গোল হয়েছে।',
        reasoningEn: 'High expected goals in recent matches.',
        subValue: 'প্রত্যাশিত গোল: ৩.১'
      },
      corners: {
        tip: cornersTip,
        tipLabelBn: cornersTip,
        tipLabelEn: cornersTip,
        odds: parseFloat(cornersOdds) || 1.80,
        confidence: parseInt(cornersConf) || 80,
        reasoningBn: 'উইং আক্রমণ বেশি থাকায় প্রচুর কর্নার হতে পারে।',
        reasoningEn: 'Wing-heavy attacks generate frequent corners.',
        subValue: 'গড় কর্নার: ১০.২'
      },
      cards: {
        tip: cardsTip,
        tipLabelBn: cardsTip,
        tipLabelEn: cardsTip,
        odds: parseFloat(cardsOdds) || 1.90,
        confidence: parseInt(cardsConf) || 85,
        reasoningBn: 'তীব্র প্রতিদ্বন্দ্বিতার কারণে ফাউল বেশি হওয়ার সম্ভাবনা।',
        reasoningEn: 'High tension fixture will result in multiple bookings.',
        subValue: 'রেফারি এভারেজ: ৪.৫ কার্ড'
      },
      viewsCount: 120
    };

    addMatch(newMatch);
    setShowAddForm(false);
    setHomeName('');
    setAwayName('');
    setSuccessMsg('✓ নতুন ম্যাচ প্রেডিকশন সফলভাবে যুক্ত করা হয়েছে!');
    setTimeout(() => setSuccessMsg(''), 4000);
  };

  return (
    <div className="space-y-6 pb-24 pt-2 max-w-7xl mx-auto px-3 sm:px-6 animate-fade-in">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-emerald-500/20 text-[#00E676] flex items-center justify-center">
              <ShieldAlert className="w-5 h-5" />
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              {language === 'bn' ? 'অ্যাডমিন ড্যাশবোর্ড ও ম্যাচ কন্ট্রোল' : 'Admin Dashboard & Match Management'}
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            {language === 'bn'
              ? 'নতুন ফুটবল ম্যাচ প্রেডিকশন যুক্ত করুন, স্ট্যাটাস পরিবর্তন করুন ও অডস নিয়ন্ত্রণ করুন'
              : 'Add predictions, change status (Live/Won/Lost), update odds'}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="px-4 py-2 rounded-xl bg-[#00E676] hover:bg-[#00c864] text-black font-extrabold text-xs flex items-center gap-1.5 transition active:scale-95 shadow-md shadow-emerald-500/20"
          >
            <PlusCircle className="w-4 h-4" />
            <span>{showAddForm ? (language === 'bn' ? 'ফর্ম লুকান' : 'Hide Form') : (language === 'bn' ? 'নতুন ম্যাচ যোগ করুন' : 'Add New Match')}</span>
          </button>

          <button
            onClick={() => {
              if (window.confirm(language === 'bn' ? 'আপনি কি সব ম্যাচ ডিফল্ট ডেমো ডেটায় রিসেট করতে চান?' : 'Reset all matches to demo defaults?')) {
                resetMatchesToDefault();
              }
            }}
            className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition"
            title="Reset to default demo data"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{language === 'bn' ? 'রিসেট ডেমো' : 'Reset Demo'}</span>
          </button>
        </div>
      </div>

      {successMsg && (
        <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-xs font-bold text-[#00E676] flex items-center gap-2">
          <Check className="w-4 h-4" />
          <span>{successMsg}</span>
        </div>
      )}

      {/* Add New Match Form */}
      {showAddForm && (
        <form onSubmit={handleCreateMatch} className="p-4 sm:p-6 rounded-3xl bg-[#0a120e] border border-emerald-700/60 shadow-2xl space-y-4">
          <h3 className="font-extrabold text-base text-white flex items-center gap-2 border-b border-emerald-950 pb-2">
            <PlusCircle className="w-4 h-4 text-[#00E676]" />
            <span>{language === 'bn' ? 'নতুন ম্যাচ প্রেডিকশন এন্ট্রি' : 'New Match Prediction Entry'}</span>
          </h3>

          {/* Basic Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">
                {language === 'bn' ? 'হোম টিম (Home Team) *' : 'Home Team *'}
              </label>
              <input
                type="text"
                required
                value={homeName}
                onChange={(e) => setHomeName(e.target.value)}
                placeholder="যেমন: রিয়াল মাদ্রিদ"
                className="w-full px-3 py-2 rounded-xl bg-black border border-emerald-900 text-xs font-semibold text-white focus:outline-none focus:border-[#00E676]"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">
                {language === 'bn' ? 'অ্যাওয়ে টিম (Away Team) *' : 'Away Team *'}
              </label>
              <input
                type="text"
                required
                value={awayName}
                onChange={(e) => setAwayName(e.target.value)}
                placeholder="যেমন: বার্সেলোনা"
                className="w-full px-3 py-2 rounded-xl bg-black border border-emerald-900 text-xs font-semibold text-white focus:outline-none focus:border-[#00E676]"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">
                {language === 'bn' ? 'টুর্নামেন্ট / লিগ' : 'League'}
              </label>
              <input
                type="text"
                value={leagueName}
                onChange={(e) => setLeagueName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-black border border-emerald-900 text-xs font-semibold text-white focus:outline-none focus:border-[#00E676]"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">
                {language === 'bn' ? 'লিগ কোড (UCL/EPL/LL)' : 'League Code'}
              </label>
              <input
                type="text"
                value={leagueCode}
                onChange={(e) => setLeagueCode(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-black border border-emerald-900 text-xs font-semibold text-white focus:outline-none focus:border-[#00E676]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">তারিখ</label>
              <input
                type="date"
                value={matchDate}
                onChange={(e) => setMatchDate(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-black border border-emerald-900 text-xs font-semibold text-white focus:outline-none focus:border-[#00E676]"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">সময় (বাংলাদেশ সময়)</label>
              <input
                type="text"
                value={matchTime}
                onChange={(e) => setMatchTime(e.target.value)}
                placeholder="০১:৪৫"
                className="w-full px-3 py-2 rounded-xl bg-black border border-emerald-900 text-xs font-semibold text-white focus:outline-none focus:border-[#00E676]"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">ভেন্যু</label>
              <input
                type="text"
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-black border border-emerald-900 text-xs font-semibold text-white focus:outline-none focus:border-[#00E676]"
              />
            </div>
          </div>

          {/* Core Markets inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2 border-t border-emerald-950">
            {/* Winner */}
            <div className="p-3 rounded-xl bg-black/60 border border-emerald-900/60 space-y-2">
              <span className="text-xs font-extrabold text-[#00E676] block">১. ম্যাচ বিজয়ী (Winner)</span>
              <input
                type="text"
                value={winnerTip}
                onChange={(e) => setWinnerTip(e.target.value)}
                className="w-full px-2 py-1.5 rounded-lg bg-[#0b140f] border border-emerald-950 text-xs text-white"
                placeholder="টিপ: Home Win"
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  value={winnerOdds}
                  onChange={(e) => setWinnerOdds(e.target.value)}
                  className="w-1/2 px-2 py-1.5 rounded-lg bg-[#0b140f] border border-emerald-950 text-xs text-white"
                  placeholder="অডস"
                />
                <input
                  type="text"
                  value={winnerConf}
                  onChange={(e) => setWinnerConf(e.target.value)}
                  className="w-1/2 px-2 py-1.5 rounded-lg bg-[#0b140f] border border-emerald-950 text-xs text-white"
                  placeholder="কনফিডেন্স %"
                />
              </div>
            </div>

            {/* Goals */}
            <div className="p-3 rounded-xl bg-black/60 border border-emerald-900/60 space-y-2">
              <span className="text-xs font-extrabold text-cyan-400 block">২. মোট গোল (Goals)</span>
              <input
                type="text"
                value={goalsTip}
                onChange={(e) => setGoalsTip(e.target.value)}
                className="w-full px-2 py-1.5 rounded-lg bg-[#0b140f] border border-emerald-950 text-xs text-white"
                placeholder="টিপ: Over 2.5"
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  value={goalsOdds}
                  onChange={(e) => setGoalsOdds(e.target.value)}
                  className="w-1/2 px-2 py-1.5 rounded-lg bg-[#0b140f] border border-emerald-950 text-xs text-white"
                  placeholder="অডস"
                />
                <input
                  type="text"
                  value={goalsConf}
                  onChange={(e) => setGoalsConf(e.target.value)}
                  className="w-1/2 px-2 py-1.5 rounded-lg bg-[#0b140f] border border-emerald-950 text-xs text-white"
                  placeholder="কনফিডেন্স %"
                />
              </div>
            </div>

            {/* Corners */}
            <div className="p-3 rounded-xl bg-black/60 border border-emerald-900/60 space-y-2">
              <span className="text-xs font-extrabold text-amber-400 block">৩. কর্নার (Corners)</span>
              <input
                type="text"
                value={cornersTip}
                onChange={(e) => setCornersTip(e.target.value)}
                className="w-full px-2 py-1.5 rounded-lg bg-[#0b140f] border border-emerald-950 text-xs text-white"
                placeholder="টিপ: Over 9.5"
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  value={cornersOdds}
                  onChange={(e) => setCornersOdds(e.target.value)}
                  className="w-1/2 px-2 py-1.5 rounded-lg bg-[#0b140f] border border-emerald-950 text-xs text-white"
                  placeholder="অডস"
                />
                <input
                  type="text"
                  value={cornersConf}
                  onChange={(e) => setCornersConf(e.target.value)}
                  className="w-1/2 px-2 py-1.5 rounded-lg bg-[#0b140f] border border-emerald-950 text-xs text-white"
                  placeholder="কনফিডেন্স %"
                />
              </div>
            </div>

            {/* Cards */}
            <div className="p-3 rounded-xl bg-black/60 border border-emerald-900/60 space-y-2">
              <span className="text-xs font-extrabold text-yellow-400 block">৪. কার্ড (Cards)</span>
              <input
                type="text"
                value={cardsTip}
                onChange={(e) => setCardsTip(e.target.value)}
                className="w-full px-2 py-1.5 rounded-lg bg-[#0b140f] border border-emerald-950 text-xs text-white"
                placeholder="টিপ: Over 4.5 Cards"
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  value={cardsOdds}
                  onChange={(e) => setCardsOdds(e.target.value)}
                  className="w-1/2 px-2 py-1.5 rounded-lg bg-[#0b140f] border border-emerald-950 text-xs text-white"
                  placeholder="অডস"
                />
                <input
                  type="text"
                  value={cardsConf}
                  onChange={(e) => setCardsConf(e.target.value)}
                  className="w-1/2 px-2 py-1.5 rounded-lg bg-[#0b140f] border border-emerald-950 text-xs text-white"
                  placeholder="কনফিডেন্স %"
                />
              </div>
            </div>
          </div>

          {/* Reasoning */}
          <div>
            <label className="text-xs font-bold text-slate-300 block mb-1">
              প্রেডিকশনের কারণ ও বিস্তারিত বিশ্লেষণ
            </label>
            <input
              type="text"
              value={reasoning}
              onChange={(e) => setReasoning(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-black border border-emerald-900 text-xs text-white"
            />
          </div>

          {/* Toggles */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-yellow-400">
              <input
                type="checkbox"
                checked={isVip}
                onChange={(e) => setIsVip(e.target.checked)}
                className="w-4 h-4 rounded text-yellow-500 bg-black border-yellow-500/50"
              />
              <span>🔒 ভিআইপি প্রিমিয়াম ম্যাচ হিসেবে পোস্ট করুন</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-rose-400">
              <input
                type="checkbox"
                checked={isHot}
                onChange={(e) => setIsHot(e.target.checked)}
                className="w-4 h-4 rounded text-rose-500 bg-black border-rose-500/50"
              />
              <span>🔥 আজকের হট ব্যঙ্কার টিপ হিসেবে চিহ্নিত করুন</span>
            </label>
          </div>

          {/* Submit */}
          <div className="flex justify-end gap-2 pt-3 border-t border-emerald-950">
            <button
              type="button"
              onClick={() => setShowAddForm(false)}
              className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold"
            >
              বাতিল
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-xl bg-[#00E676] hover:bg-[#00c864] text-black font-extrabold text-xs shadow-md shadow-emerald-500/25"
            >
              ম্যাচ প্রকাশ করুন
            </button>
          </div>
        </form>
      )}

      {/* Match Management Table */}
      <div className="rounded-3xl bg-[#090f0c] border border-emerald-950 overflow-hidden shadow-xl">
        <div className="p-4 bg-[#060a08] border-b border-emerald-950/70 flex items-center justify-between">
          <h3 className="font-extrabold text-sm text-white">
            {language === 'bn' ? `প্রকাশিত ম্যাচ তালিকা (${matches.length})` : `Published Matches (${matches.length})`}
          </h3>
          <span className="text-xs text-slate-400">
            ক্লিক করে ফলাফল আপডেট করুন
          </span>
        </div>

        <div className="divide-y divide-emerald-950/60">
          {matches.map((m) => (
            <div
              key={m.id}
              className="p-4 hover:bg-[#0d1611] transition flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              {/* Match info */}
              <div className="flex-1">
                <div className="flex items-center gap-2 text-xs mb-1">
                  <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 font-bold border border-emerald-800/40">
                    {m.leagueCode}
                  </span>
                  <span className="text-slate-400">{m.league}</span>
                  {m.isPremium && (
                    <span className="px-1.5 py-0.2 rounded bg-yellow-500/20 text-yellow-400 text-[10px] font-black">
                      VIP
                    </span>
                  )}
                  {m.isHot && (
                    <span className="px-1.5 py-0.2 rounded bg-rose-500/20 text-rose-400 text-[10px] font-black">
                      HOT
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <h4 className="font-extrabold text-sm text-white">
                    {m.homeTeam.name} vs {m.awayTeam.name}
                  </h4>
                  {m.score && (
                    <span className="font-mono font-bold text-xs text-[#00E676] bg-black px-2 py-0.5 rounded border border-emerald-950">
                      ({m.score.home} - {m.score.away})
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-400 mt-1">
                  <span>উইনার: <strong className="text-[#00E676]">{m.matchWinner.tipLabelBn} (@{m.matchWinner.odds})</strong></span>
                  <span>গোল: <strong className="text-cyan-300">{m.totalGoals.tipLabelBn}</strong></span>
                  <span>কর্নার: <strong className="text-amber-300">{m.corners.tipLabelBn}</strong></span>
                  <span>কার্ড: <strong className="text-yellow-300">{m.cards.tipLabelBn}</strong></span>
                </div>
              </div>

              {/* Status Controls */}
              <div className="flex flex-wrap items-center gap-2 shrink-0">
                
                {/* Result Won / Lost / Pending buttons */}
                <div className="flex items-center rounded-xl bg-black p-1 border border-emerald-950">
                  <button
                    onClick={() => updateMatchOutcome(m.id, 'won')}
                    className={`px-2 py-1 rounded-lg text-xs font-bold transition ${
                      m.outcomeStatus === 'won'
                        ? 'bg-emerald-500 text-black shadow'
                        : 'text-slate-400 hover:text-emerald-400'
                    }`}
                    title="Mark Won"
                  >
                    Won ✓
                  </button>

                  <button
                    onClick={() => updateMatchOutcome(m.id, 'lost')}
                    className={`px-2 py-1 rounded-lg text-xs font-bold transition ${
                      m.outcomeStatus === 'lost'
                        ? 'bg-rose-500 text-white shadow'
                        : 'text-slate-400 hover:text-rose-400'
                    }`}
                    title="Mark Lost"
                  >
                    Lost ✗
                  </button>

                  <button
                    onClick={() => updateMatchOutcome(m.id, 'pending')}
                    className={`px-2 py-1 rounded-lg text-xs font-bold transition ${
                      m.outcomeStatus === 'pending'
                        ? 'bg-slate-700 text-white'
                        : 'text-slate-500 hover:text-white'
                    }`}
                    title="Mark Pending"
                  >
                    Pending
                  </button>
                </div>

                {/* Status Toggle (Upcoming / Live / Finished) */}
                <select
                  value={m.status}
                  onChange={(e) => updateMatch(m.id, { status: e.target.value as MatchStatus })}
                  className="px-2 py-1.5 rounded-xl bg-black border border-emerald-900 text-xs font-semibold text-slate-200 focus:outline-none"
                >
                  <option value="upcoming">আসন্ন (Upcoming)</option>
                  <option value="live">চলমান (Live)</option>
                  <option value="finished">সমাপ্ত (Finished)</option>
                </select>

                {/* View Details */}
                <button
                  onClick={() => setSelectedMatch(m)}
                  className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 transition"
                  title="ভিউ মোডাল"
                >
                  <Eye className="w-4 h-4" />
                </button>

                {/* Delete */}
                <button
                  onClick={() => {
                    if (window.confirm('এই ম্যাচটি ডিলিট করতে চান?')) {
                      deleteMatch(m.id);
                    }
                  }}
                  className="p-2 rounded-xl bg-rose-950/30 hover:bg-rose-900 text-rose-400 hover:text-white transition"
                  title="মুছে ফেলুন"
                >
                  <Trash2 className="w-4 h-4" />
                </button>

              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
