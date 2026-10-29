import React, { useState } from 'react';
import { useFootball } from '../context/FootballContext';
import { t } from '../utils/translations';
import { X, Trash2, Ticket, TrendingUp, Check, Copy, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const BetSlipDrawer: React.FC = () => {
  const {
    isSlipOpen,
    setIsSlipOpen,
    betSlip,
    removeFromSlip,
    clearSlip,
    language
  } = useFootball();

  const [stake, setStake] = useState<number>(500);
  const [copied, setCopied] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isSlipOpen) return null;

  // Calculate total combined odds
  const totalOdds = betSlip.reduce((acc, item) => acc * item.odds, 1);
  const potentialReturn = Math.round(stake * totalOdds);
  const avgConfidence = betSlip.length > 0
    ? Math.round(betSlip.reduce((acc, item) => acc + item.confidence, 0) / betSlip.length)
    : 0;

  const handleCopySlip = () => {
    const lines = betSlip.map(
      (item, idx) => `${idx + 1}. ${item.matchTitle} -> [${item.marketName}: ${item.tip}] @ ${item.odds}`
    );
    const slipText = `⚽ GoalPredict Accumulator Slip:\n${lines.join('\n')}\nমোট অডস: ${totalOdds.toFixed(2)}\nঅ্যাকুরেসি কনফিডেন্স: ${avgConfidence}%`;
    
    if (navigator.clipboard) {
      navigator.clipboard.writeText(slipText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSimulateBet = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#00E676', '#10B981', '#34D399', '#FBBF24']
    });
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-md bg-[#090f0c] border-l border-emerald-950/70 h-full flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-4 bg-[#060a08] border-b border-emerald-950/60 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-[#00E676] flex items-center justify-center">
              <Ticket className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm text-white">
                {t('betSlip', language)} ({betSlip.length})
              </h3>
              <p className="text-[11px] text-emerald-400">
                {language === 'bn' ? 'অ্যাকিউমুলেটর ও অডস ক্যালকুলেটর' : 'Accumulator & Odds Calculator'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {betSlip.length > 0 && (
              <button
                onClick={clearSlip}
                className="text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1 p-1 hover:bg-rose-950/40 rounded transition"
                title="মুছে ফেলুন"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{language === 'bn' ? 'ক্লিয়ার' : 'Clear'}</span>
              </button>
            )}
            <button
              onClick={() => setIsSlipOpen(false)}
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slip Items List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {betSlip.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-400">
              <div className="w-14 h-14 rounded-2xl bg-emerald-950/40 border border-emerald-900/30 flex items-center justify-center text-emerald-500 mb-3">
                <Ticket className="w-7 h-7" />
              </div>
              <p className="font-bold text-sm text-slate-300">
                {language === 'bn' ? 'স্লিপ বর্তমানে ফাঁকা' : 'Your slip is empty'}
              </p>
              <p className="text-xs text-slate-400 max-w-xs mt-1">
                {language === 'bn'
                  ? 'যেকোনো ম্যাচের ম্যাচ বিজয়ী, মোট গোল, কর্নার বা কার্ডের অডসে ক্লিক করে স্লিপে যোগ করুন।'
                  : 'Click on any prediction market to add it to your slip and calculate cumulative odds.'}
              </p>
            </div>
          ) : (
            betSlip.map((item, idx) => (
              <div
                key={`${item.matchId}-${item.marketName}`}
                className="p-3 rounded-xl bg-[#0d1611] border border-emerald-900/50 hover:border-emerald-700/60 transition group relative"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">
                      {item.marketName}
                    </span>
                    <p className="text-xs font-semibold text-slate-300 line-clamp-1">
                      {item.matchTitle}
                    </p>
                    <p className="text-xs font-black text-white mt-0.5">
                      {item.tip}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-1.5 shrink-0">
                    <span className="font-mono font-black text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-[#00E676] border border-emerald-500/30">
                      @{item.odds.toFixed(2)}
                    </span>
                    <button
                      onClick={() => removeFromSlip(item.matchId, item.marketName)}
                      className="text-slate-500 hover:text-rose-400 p-0.5 transition"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="mt-2 pt-1.5 border-t border-emerald-950/40 flex items-center justify-between text-[11px] text-slate-400">
                  <span>কনফিডেন্স স্কোর:</span>
                  <span className="font-bold text-emerald-400">{item.confidence}%</span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary & Stake Calculator */}
        {betSlip.length > 0 && (
          <div className="p-4 bg-[#060a08] border-t border-emerald-950/80 space-y-3">
            
            {/* Odds & Calculations */}
            <div className="p-3 rounded-xl bg-[#09120d] border border-emerald-900/60 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300 font-medium">
                  {t('totalOdds', language)}:
                </span>
                <span className="font-mono font-black text-base text-[#00E676]">
                  {totalOdds.toFixed(2)}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300 font-medium">
                  {language === 'bn' ? 'গড় অ্যাকুরেসি রেট:' : 'Avg Confidence:'}
                </span>
                <span className="font-bold text-emerald-300">
                  {avgConfidence}%
                </span>
              </div>

              {/* Stake input */}
              <div className="pt-2 border-t border-emerald-950/50 flex items-center justify-between gap-3">
                <span className="text-xs text-slate-300 font-semibold">
                  {language === 'bn' ? 'সিমুলেটেড স্টেক (৳):' : 'Stake (BDT):'}
                </span>
                <div className="flex items-center gap-1.5">
                  {[200, 500, 1000].map((val) => (
                    <button
                      key={val}
                      onClick={() => setStake(val)}
                      className={`px-2 py-0.5 rounded text-[11px] font-bold transition ${
                        stake === val
                          ? 'bg-emerald-500 text-black'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {val}৳
                    </button>
                  ))}
                  <input
                    type="number"
                    value={stake}
                    onChange={(e) => setStake(Math.max(10, Number(e.target.value)))}
                    className="w-16 px-1.5 py-0.5 rounded bg-black border border-emerald-900 text-right text-xs font-bold text-white font-mono focus:outline-none focus:border-[#00E676]"
                  />
                </div>
              </div>

              <div className="pt-1 flex items-center justify-between text-xs">
                <span className="text-slate-300 font-bold">
                  {t('potentialReturn', language)}:
                </span>
                <span className="font-mono font-black text-base text-yellow-400">
                  ৳ {potentialReturn.toLocaleString()}
                </span>
              </div>
            </div>

            {savedSuccess && (
              <div className="p-2 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-center text-xs text-[#00E676] font-bold">
                ✓ স্লিপ সফলভাবে ক্যালকুলেট ও সিমুলেট করা হয়েছে!
              </div>
            )}

            {/* Actions */}
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={handleCopySlip}
                className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition active:scale-95"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copied ? 'কপি হয়েছে!' : (language === 'bn' ? 'স্লিপ শেয়ার' : 'Share Slip')}</span>
              </button>

              <button
                onClick={handleSimulateBet}
                className="py-2.5 px-3 rounded-xl bg-[#00E676] hover:bg-[#00c864] text-black font-extrabold text-xs flex items-center justify-center gap-1.5 transition active:scale-95 shadow-md shadow-emerald-500/30"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{language === 'bn' ? 'স্লিপ লক করুন' : 'Lock Slip'}</span>
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
