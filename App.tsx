import React from 'react';
import { FootballProvider, useFootball } from './context/FootballContext';
import { Navbar } from './components/Navbar';
import { BottomNav } from './components/BottomNav';
import { HomeView } from './views/HomeView';
import { MatchesView } from './views/MatchesView';
import { FreePredictionsView } from './views/FreePredictionsView';
import { PremiumView } from './views/PremiumView';
import { AdminView } from './views/AdminView';
import { MatchDetailModal } from './components/MatchDetailModal';
import { BetSlipDrawer } from './components/BetSlipDrawer';
import { VipPlanModal } from './components/VipPlanModal';
import { ExportCodeModal } from './components/ExportCodeModal';
import { ShieldCheck, Smartphone, Code2, Flame, Heart } from 'lucide-react';

const AppContent: React.FC = () => {
  const { activeTab, language, setIsExportModalOpen } = useFootball();

  return (
    <div className="min-h-screen bg-[#080d0a] text-slate-100 flex flex-col selection:bg-[#00E676] selection:text-black">
      {/* Top Bar */}
      <Navbar />

      {/* Main View Area */}
      <main className="flex-1">
        {activeTab === 'home' && <HomeView />}
        {activeTab === 'matches' && <MatchesView />}
        {activeTab === 'free' && <FreePredictionsView />}
        {activeTab === 'premium' && <PremiumView />}
        {activeTab === 'admin' && <AdminView />}
      </main>

      {/* Footer */}
      <footer className="border-t border-emerald-950/60 bg-[#060a08] py-8 pb-24 md:pb-10 text-center text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 space-y-4">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={() => setIsExportModalOpen(true)}
              className="flex items-center gap-1.5 text-emerald-400 hover:text-[#00E676] transition font-bold"
            >
              <Code2 className="w-4 h-4" />
              <span>{language === 'bn' ? 'সোর্স কোড এক্সপোর্ট ও লোকাল রান গাইড' : 'Export Source Code'}</span>
            </button>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <button
              onClick={() => setIsExportModalOpen(true)}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition"
            >
              <Smartphone className="w-4 h-4 text-[#00E676]" />
              <span>{language === 'bn' ? 'অ্যান্ড্রয়েড ফোনের জন্য APK বিল্ড' : 'Android APK Ready'}</span>
            </button>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <div className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>{language === 'bn' ? 'কোনো পেইড API বা বিলিং প্রয়োজন নেই' : '100% Free - No Paid APIs'}</span>
            </div>
          </div>

          <p className="text-[11px] text-slate-500 max-w-xl mx-auto leading-relaxed">
            {language === 'bn'
              ? 'সতর্কীকরণ: GoalPredict শুধুমাত্র স্পোর্টস অ্যানালাইসিস এবং ফুটবল পরিসংখ্যানভিত্তিক গবেষণার জন্য তৈরি। এটি কোনো জুয়া বা বেটিং প্ল্যাটফর্ম নয়। দায়িত্বশীলভাবে উপভোগ করুন।'
              : 'Disclaimer: GoalPredict provides statistical analysis and information for football enthusiasts. Not a gambling platform. Please play responsibly.'}
          </p>

          <p className="text-[11px] text-slate-600">
            © {new Date().getFullYear()} GoalPredict. Built with modern React, Tailwind CSS & sports data models.
          </p>
        </div>
      </footer>

      {/* Mobile Sticky Bottom Bar for Android Phones */}
      <BottomNav />

      {/* Popups & Drawers */}
      <MatchDetailModal />
      <BetSlipDrawer />
      <VipPlanModal />
      <ExportCodeModal />
    </div>
  );
};

export default function App() {
  return (
    <FootballProvider>
      <AppContent />
    </FootballProvider>
  );
}
