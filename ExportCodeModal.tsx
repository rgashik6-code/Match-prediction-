import React, { useState } from 'react';
import { useFootball } from '../context/FootballContext';
import {
  X,
  Download,
  Smartphone,
  Terminal,
  Code2,
  Copy,
  Check,
  ExternalLink,
  Layers,
  FileCode2,
  FolderGit2
} from 'lucide-react';

export const ExportCodeModal: React.FC = () => {
  const { isExportModalOpen, setIsExportModalOpen, language, matches } = useFootball();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isExportModalOpen) return null;

  const copyToClipboard = (text: string, index: number) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    }
  };

  const downloadProjectJson = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(matches, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', 'goalpredict-matches-data.json');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#090f0c] border border-emerald-800/60 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="p-4 bg-[#060a08] border-b border-emerald-950/60 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-[#00E676] flex items-center justify-center">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm sm:text-base text-white">
                {language === 'bn' ? 'সোর্স কোড এক্সপোর্ট ও অ্যান্ড্রয়েড APK গাইড' : 'Export Source Code & Android APK Guide'}
              </h3>
              <p className="text-[11px] text-emerald-400">
                {language === 'bn' ? 'লোকাল রান এবং অ্যান্ড্রয়েড অ্যাপ হিসেবে বিল্ড করার নিয়ম' : 'How to export, run locally & convert to Android app'}
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsExportModalOpen(false)}
            className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6">
          
          {/* Quick Download Data */}
          <div className="p-4 rounded-2xl bg-[#0e1712] border border-emerald-900/60 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <h4 className="font-bold text-sm text-white flex items-center gap-2">
                <FileCode2 className="w-4 h-4 text-[#00E676]" />
                {language === 'bn' ? 'ম্যাচ ডেটা ও ব্যাকআপ ডাউনলোড' : 'Download Matches & Config JSON'}
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                {language === 'bn'
                  ? 'বর্তমান সকল ম্যাচ প্রেডিকশন এবং সেটিংস একটি JSON ফাইলে সেভ করুন।'
                  : 'Save all current match predictions and configuration in a local JSON file.'}
              </p>
            </div>
            <button
              onClick={downloadProjectJson}
              className="px-4 py-2 rounded-xl bg-emerald-500/20 hover:bg-emerald-500 text-[#00E676] hover:text-black font-extrabold text-xs flex items-center gap-1.5 transition shrink-0 active:scale-95 border border-emerald-500/40"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{language === 'bn' ? 'JSON ডাউনলোড' : 'Download JSON'}</span>
            </button>
          </div>

          {/* Step 1: Exporting from AI Studio */}
          <div className="space-y-2.5">
            <div className="flex items-center gap-2 text-white font-bold text-sm">
              <span className="w-6 h-6 rounded-full bg-emerald-500 text-black flex items-center justify-center text-xs font-black">
                ১
              </span>
              <span>{language === 'bn' ? 'AI Studio থেকে কোড ডাউনলোড করবেন যেভাবে' : 'Step 1: Export from AI Studio'}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#060a08] border border-emerald-950 text-xs text-slate-300 space-y-2 leading-relaxed">
              <p>
                {language === 'bn' ? (
                  <>
                    ১. AI Studio-এর উপরের ডানপাশের <strong>'Share'</strong> অথবা <strong>'Export / Download ZIP'</strong> বাটনে ক্লিক করুন। অথবা <strong>'Export to GitHub'</strong> সিলেক্ট করে আপনার গিটহাব অ্যাকাউন্টে রিপোজিটোরি তৈরি করতে পারেন।
                    <br />
                    ২. ডাউনলোড করা ZIP ফাইলটি আনজিপ করে আপনার কম্পিউটারে একটি ফোল্ডারে রাখুন।
                  </>
                ) : (
                  <>
                    1. Click on the <strong>'Share'</strong> or <strong>'Export to GitHub' / 'Download ZIP'</strong> button in the top right menu of AI Studio.
                    <br />
                    2. Unpack the ZIP archive into a folder on your computer.
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Step 2: Running locally */}
          <div className="space-y-2.5">
            <div className="flex items-center gap-2 text-white font-bold text-sm">
              <span className="w-6 h-6 rounded-full bg-emerald-500 text-black flex items-center justify-center text-xs font-black">
                ২
              </span>
              <span>{language === 'bn' ? 'কম্পিউটারে লোকাল সার্ভার চালানো' : 'Step 2: Run Locally with Node.js'}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#060a08] border border-emerald-950 space-y-2">
              <p className="text-xs text-slate-300">
                {language === 'bn'
                  ? 'আপনার কম্পিউটারের টার্মিনাল (Terminal / CMD / VS Code) ওপেন করে প্রজেক্ট ফোল্ডারে নিচের কমান্ডগুলো চালান:'
                  : 'Open Terminal / CMD in the project folder and run:'}
              </p>
              
              <div className="p-3 rounded-lg bg-black font-mono text-xs text-emerald-400 flex items-center justify-between border border-emerald-950">
                <code>npm install && npm run dev</code>
                <button
                  onClick={() => copyToClipboard('npm install && npm run dev', 1)}
                  className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white"
                >
                  {copiedIndex === 1 ? <Check className="w-3.5 h-3.5 text-[#00E676]" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <p className="text-[11px] text-slate-400">
                {language === 'bn'
                  ? 'ব্রাউজারে http://localhost:3000 এ স্বয়ংক্রিয়ভাবে GoalPredict চালু হবে।'
                  : 'The app will launch at http://localhost:3000.'}
              </p>
            </div>
          </div>

          {/* Step 3: Converting to Android APK */}
          <div className="space-y-2.5">
            <div className="flex items-center gap-2 text-white font-bold text-sm">
              <span className="w-6 h-6 rounded-full bg-[#00E676] text-black flex items-center justify-center text-xs font-black">
                ৩
              </span>
              <span className="flex items-center gap-1.5">
                <Smartphone className="w-4 h-4 text-[#00E676]" />
                {language === 'bn' ? 'অ্যান্ড্রয়েড ফোনের জন্য APK তৈরি করার ৩টি সহজ উপায়' : 'Step 3: Convert to Android Phone APK'}
              </span>
            </div>

            <div className="space-y-3">
              {/* Method A: Capacitor */}
              <div className="p-3.5 rounded-xl bg-[#0d1611] border border-emerald-900/60 space-y-2">
                <div className="flex items-center justify-between">
                  <h5 className="font-bold text-xs text-emerald-300 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#00E676]" />
                    {language === 'bn' ? 'পদ্ধতি ক: Capacitor দিয়ে ফুল নেটিভ APK' : 'Method A: Capacitor Native Android'}
                  </h5>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-[#00E676] font-bold">
                    {language === 'bn' ? 'প্রস্তাবিত' : 'Recommended'}
                  </span>
                </div>
                <p className="text-xs text-slate-300">
                  {language === 'bn'
                    ? 'ক্যাপাসিটর (Capacitor) এই অ্যাপটিকে সরাসরি একটি অফিসিয়াল অ্যান্ড্রয়েড স্টুডিও প্রজেক্ট ও APK-তে রূপান্তর করে:'
                    : 'Capacitor wraps this React/Vite app into a full Android Studio project & APK:'}
                </p>

                <div className="p-3 rounded-lg bg-black font-mono text-[11px] text-emerald-400 space-y-1.5 border border-emerald-950">
                  <div className="flex justify-between items-center">
                    <code>npm run build</code>
                    <button
                      onClick={() => copyToClipboard('npm run build\nnpm install @capacitor/core @capacitor/cli @capacitor/android\nnpx cap init GoalPredict com.goalpredict.app --web-dir=dist\nnpx cap add android\nnpx cap open android', 2)}
                      className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white"
                    >
                      {copiedIndex === 2 ? <Check className="w-3.5 h-3.5 text-[#00E676]" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                  <code>npm install @capacitor/core @capacitor/cli @capacitor/android</code>
                  <br />
                  <code>npx cap init GoalPredict com.goalpredict.app --web-dir=dist</code>
                  <br />
                  <code>npx cap add android</code>
                  <br />
                  <code>npx cap open android</code>
                </div>
                <p className="text-[11px] text-slate-400">
                  {language === 'bn'
                    ? 'অ্যান্ড্রয়েড স্টুডিও ওপেন হলে Build -> Build Bundle(s) / APK(s) -> Build APK নির্বাচন করলেই আপনার ফোনে ইন্সটল করার APK ফাইল তৈরি হয়ে যাবে!'
                    : 'Inside Android Studio, click Build -> Build Bundle / APK -> Build APK to generate your .apk file.'}
                </p>
              </div>

              {/* Method B: PWA */}
              <div className="p-3.5 rounded-xl bg-[#0d1611] border border-emerald-900/60 space-y-2">
                <h5 className="font-bold text-xs text-cyan-300 flex items-center gap-1.5">
                  <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
                  {language === 'bn' ? 'পদ্ধতি খ: সরাসরি ফোনে ইন্সটল (PWA হোমস্ক্রিন)' : 'Method B: Progressive Web App (PWA)'}
                </h5>
                <p className="text-xs text-slate-300">
                  {language === 'bn' ? (
                    <>
                      যে কোনো অ্যান্ড্রয়েড ফোনে Chrome ব্রাউজারে এই অ্যাপটির লিংক ওপেন করুন। ব্রাউজারের থ্রি-ডট (⋮) মেনু থেকে <strong>'Add to Home screen'</strong> বা <strong>'Install App'</strong> চাপলে কোনো প্লেস্টোর ছাড়া ফোনের হোমস্ক্রিনে ফুল-স্ক্রিন অ্যাপ হিসেবে যুক্ত হয়ে যাবে!
                    </>
                  ) : (
                    <>
                      Open the app URL in Chrome on Android. Tap the three dots (⋮) and choose <strong>'Add to Home screen'</strong> or <strong>'Install app'</strong>. It will run in full screen like a native app.
                    </>
                  )}
                </p>
              </div>

              {/* Method C: PWABuilder */}
              <div className="p-3.5 rounded-xl bg-[#0d1611] border border-emerald-900/60 space-y-2">
                <h5 className="font-bold text-xs text-yellow-300 flex items-center gap-1.5">
                  <ExternalLink className="w-3.5 h-3.5 text-yellow-400" />
                  {language === 'bn' ? 'পদ্ধতি গ: PWABuilder দিয়ে অনলাইন APK ও প্লে স্টোর প্যাকেজ' : 'Method C: PWABuilder.com 1-Click APK'}
                </h5>
                <p className="text-xs text-slate-300">
                  {language === 'bn'
                    ? 'PWABuilder.com ওয়েবসাইটে এই অ্যাপের URL পেস্ট করে বিনামূল্যে এক ক্লিকেই সাইন করা Android APK ও AAB প্যাকেজ ডাউনলোড করা যায়।'
                    : 'Paste the live URL into PWABuilder.com to generate ready-to-install Android APK and Google Play Store packages.'}
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-3.5 bg-[#060a08] border-t border-emerald-950/60 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            {language === 'bn' ? 'সম্পূর্ণ ফ্রি ওপেন সোর্স কোড ও অ্যান্ড্রয়েড সামঞ্জস্যপূর্ণ' : '100% Free, No Paid APIs Required'}
          </span>
          <button
            onClick={() => setIsExportModalOpen(false)}
            className="px-4 py-1.5 rounded-xl bg-[#00E676] hover:bg-[#00c864] text-black font-extrabold text-xs transition"
          >
            {language === 'bn' ? 'বুঝেছি' : 'Got it'}
          </button>
        </div>

      </div>
    </div>
  );
};
