import React from 'react';
import { useFootball } from '../context/FootballContext';
import { t } from '../utils/translations';
import { X, Crown, Check, Sparkles, MessageCircle, Send, ShieldCheck, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

export const VipPlanModal: React.FC = () => {
  const { isVipModalOpen, setIsVipModalOpen, isVipUnlocked, setIsVipUnlocked, language } = useFootball();

  if (!isVipModalOpen) return null;

  const handleInstantDemoUnlock = () => {
    setIsVipUnlocked(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FBBF24', '#00E676', '#F59E0B', '#10B981']
    });
    setTimeout(() => {
      setIsVipModalOpen(false);
    }, 1500);
  };

  const handleLockVip = () => {
    setIsVipUnlocked(false);
    setIsVipModalOpen(false);
  };

  const plans = [
    {
      id: 'monthly',
      nameBn: '১ মাস ভিআইপি মেম্বারশিপ',
      nameEn: '1 Month VIP Pass',
      price: '৳ ৯৯৯',
      period: '/ মাস',
      popular: false,
      features: [
        'দৈনিক ৩-৫টি হাই অডস ভিআইপি টিপস',
        'ম্যাচ বিজয়ী ও ২.৫+ গোল স্পেশাল',
        'কর্নার ও কার্ড অ্যানালাইসিস আনলক',
        'টেলিগ্রাম ভিআইপি গ্রুপ অ্যাক্সেস'
      ]
    },
    {
      id: 'quarterly',
      nameBn: '৩ মাস প্রিমিয়াম গোল্ড প্যাক',
      nameEn: '3 Months Gold Pass',
      price: '৳ ২,৪৯৯',
      period: '/ ৩ মাস',
      popular: true,
      features: [
        'সব সিলভার সুবিধা + বিশেষ উইকেন্ড ব্যঙ্কার',
        '১০+ অডস মেগা অ্যাকিউমুলেটর স্লিপ',
        'লাইভ ইন-প্লে কার্ড ও পেনাল্টি অ্যালার্ট',
        'অ্যাকুরেসি ৯৩.৪% ট্র্যাক রেকর্ড গ্যারান্টি',
        '২৪/৭ ডেডিকেটেড স্পোর্টস সাপোর্ট'
      ]
    },
    {
      id: 'lifetime',
      nameBn: 'লাইফটাইম ডায়মন্ড এক্সেস',
      nameEn: 'Lifetime Diamond Access',
      price: '৳ ৪,৯৯৯',
      period: '/ এককালীন',
      popular: false,
      features: [
        'আজীবন সকল ভিআইপি ও প্রিমিয়াম প্রেডিকশন',
        'সব আন্তর্জাতিক লিগ ও বিশ্বকাপ কোয়ালিফায়ার',
        'ভিআইপি টেলিগ্রাম বট অটোমেটিক নোটিফিকেশন',
        'ব্যক্তিগত প্রেডিকশন রিকোয়েস্ট সুবিধা'
      ]
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#090f0c] border border-amber-500/40 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="p-4 bg-[#060a08] border-b border-amber-950/60 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-yellow-500/20 text-yellow-400 flex items-center justify-center">
              <Crown className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm sm:text-base text-yellow-300">
                {language === 'bn' ? 'GoalPredict ভিআইপি মেম্বারশিপ' : 'GoalPredict VIP Membership'}
              </h3>
              <p className="text-[11px] text-slate-400">
                {language === 'bn' ? 'সর্বোচ্চ অ্যাকুরেসি ও হাই-অডস এক্সক্লুসিভ টিপস' : 'Highest accuracy & exclusive accumulator picks'}
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsVipModalOpen(false)}
            className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-5">
          
          {/* Instant Demo Unlock Banner (1-Click Test for User) */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/50 via-slate-900 to-amber-950/40 border border-[#00E676]/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-1.5 text-[#00E676] font-bold text-xs uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{language === 'bn' ? 'ফ্রি ডেমো টেস্টিং মোড' : 'Instant Demo Testing Mode'}</span>
              </div>
              <h4 className="font-extrabold text-sm text-white mt-0.5">
                {isVipUnlocked
                  ? (language === 'bn' ? '✓ আপনার ভিআইপি অ্যাক্সেস বর্তমানে সক্রিয় আছে' : '✓ VIP Access is currently active')
                  : (language === 'bn' ? 'কোনো ফি ছাড়া এখনই ডেমো ভিআইপি চালু করুন' : 'Unlock VIP tips right now for free (Demo)')}
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                {language === 'bn'
                  ? 'বিলিং ছাড়া অ্যাপের সব প্রিমিয়াম ম্যাচ, কর্নার ও কার্ডের প্রেডিকশন পরীক্ষা করতে নিচের বাটনটি চাপুন।'
                  : 'Click below to test all locked VIP games without paying or setting up billing.'}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {isVipUnlocked ? (
                <button
                  onClick={handleLockVip}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition"
                >
                  {language === 'bn' ? 'লক মোড রিসেট' : 'Relock'}
                </button>
              ) : (
                <button
                  onClick={handleInstantDemoUnlock}
                  className="px-5 py-2.5 rounded-xl bg-[#00E676] hover:bg-[#00c864] text-black font-black text-xs shadow-lg shadow-emerald-500/30 flex items-center gap-1.5 transition active:scale-95"
                >
                  <Zap className="w-4 h-4 fill-black" />
                  <span>{language === 'bn' ? 'তাত্ক্ষণিক ডেমো আনলক' : 'Activate Demo VIP'}</span>
                </button>
              )}
            </div>
          </div>

          {/* Pricing Tier Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`p-4 rounded-2xl flex flex-col justify-between transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-b from-[#161c12] to-[#0d140e] border-2 border-yellow-500/70 shadow-lg shadow-yellow-950/30 relative'
                    : 'bg-[#090f0b] border border-emerald-950 hover:border-emerald-800/60'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-black text-[10px] uppercase tracking-wider shadow">
                    সবচেয়ে জনপ্রিয়
                  </div>
                )}

                <div>
                  <h5 className="font-extrabold text-sm text-white">
                    {language === 'bn' ? plan.nameBn : plan.nameEn}
                  </h5>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-xl font-black text-yellow-400 font-mono">
                      {plan.price}
                    </span>
                    <span className="text-xs text-slate-400">{plan.period}</span>
                  </div>

                  <ul className="mt-3 space-y-1.5 text-left border-t border-emerald-950/70 pt-3">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="text-[11px] text-slate-300 flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#00E676] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={handleInstantDemoUnlock}
                  className={`w-full mt-4 py-2 rounded-xl text-xs font-bold transition active:scale-95 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-black shadow-md shadow-amber-500/20'
                      : 'bg-emerald-950 text-emerald-300 hover:bg-emerald-900 border border-emerald-800/40'
                  }`}
                >
                  {language === 'bn' ? 'প্ল্যান নির্বাচন করুন' : 'Select Plan'}
                </button>
              </div>
            ))}
          </div>

          {/* Telegram / WhatsApp Support Simulation */}
          <div className="p-3.5 rounded-2xl bg-[#060a08] border border-emerald-950 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center shrink-0">
                <Send className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-bold text-xs text-white">
                  {language === 'bn' ? 'টেলিগ্রাম বা হোয়াটসঅ্যাপে ভিআইপি যোগাযোগ' : 'Telegram & WhatsApp VIP Support'}
                </h5>
                <p className="text-[11px] text-slate-400">
                  {language === 'bn' ? 'সরাসরি অ্যাডমিনের সাথে যোগাযোগ করে টিপস রিসিভ করতে পারেন।' : 'Direct VIP channel for instant slips and alerts.'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="https://t.me/"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white text-xs font-bold flex items-center gap-1 border border-blue-500/30 transition"
              >
                <Send className="w-3 h-3" /> Telegram
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white text-xs font-bold flex items-center gap-1 border border-emerald-500/30 transition"
              >
                <MessageCircle className="w-3 h-3" /> WhatsApp
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
