import React, { createContext, useContext, useState, useEffect } from 'react';
import { MatchPrediction, Language, SlipItem, OutcomeStatus } from '../types/football';
import { INITIAL_MATCHES } from '../data/initialMatches';

export type NavTab = 'home' | 'matches' | 'free' | 'premium' | 'admin';

interface FootballContextType {
  matches: MatchPrediction[];
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  selectedMatch: MatchPrediction | null;
  setSelectedMatch: (match: MatchPrediction | null) => void;
  betSlip: SlipItem[];
  addToSlip: (item: SlipItem) => void;
  removeFromSlip: (matchId: string, marketName: string) => void;
  isInSlip: (matchId: string, marketName: string) => boolean;
  clearSlip: () => void;
  isSlipOpen: boolean;
  setIsSlipOpen: (open: boolean) => void;
  isVipUnlocked: boolean;
  setIsVipUnlocked: (unlocked: boolean) => void;
  isExportModalOpen: boolean;
  setIsExportModalOpen: (open: boolean) => void;
  isVipModalOpen: boolean;
  setIsVipModalOpen: (open: boolean) => void;
  
  // Admin actions
  addMatch: (newMatch: MatchPrediction) => void;
  updateMatch: (id: string, updatedData: Partial<MatchPrediction>) => void;
  deleteMatch: (id: string) => void;
  updateMatchOutcome: (id: string, status: OutcomeStatus) => void;
  resetMatchesToDefault: () => void;
}

const FootballContext = createContext<FootballContextType | undefined>(undefined);

const STORAGE_KEY_MATCHES = 'goalpredict_matches_v1';
const STORAGE_KEY_LANG = 'goalpredict_lang_v1';
const STORAGE_KEY_VIP = 'goalpredict_vip_v1';

export const FootballProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Bengali is default per prompt requirements
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_LANG);
      if (saved === 'en' || saved === 'bn') return saved;
    } catch {
      // ignore
    }
    return 'bn';
  });

  const [matches, setMatches] = useState<MatchPrediction[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_MATCHES);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.error('Error loading matches from storage:', e);
    }
    return INITIAL_MATCHES;
  });

  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [selectedMatch, setSelectedMatch] = useState<MatchPrediction | null>(null);
  const [betSlip, setBetSlip] = useState<SlipItem[]>([]);
  const [isSlipOpen, setIsSlipOpen] = useState(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [isVipModalOpen, setIsVipModalOpen] = useState(false);

  const [isVipUnlocked, setIsVipUnlockedState] = useState<boolean>(() => {
    try {
      return localStorage.getItem(STORAGE_KEY_VIP) === 'true';
    } catch {
      return false;
    }
  });

  // Save matches to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_MATCHES, JSON.stringify(matches));
    } catch (e) {
      console.error('Failed to save matches:', e);
    }
  }, [matches]);

  // Save language to localStorage
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY_LANG, lang);
    } catch {
      // ignore
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'bn' ? 'en' : 'bn');
  };

  const setIsVipUnlocked = (unlocked: boolean) => {
    setIsVipUnlockedState(unlocked);
    try {
      localStorage.setItem(STORAGE_KEY_VIP, String(unlocked));
    } catch {
      // ignore
    }
  };

  const addToSlip = (item: SlipItem) => {
    setBetSlip((prev) => {
      // Check if already in slip with same market
      const filtered = prev.filter(
        (i) => !(i.matchId === item.matchId && i.marketName === item.marketName)
      );
      return [...filtered, item];
    });
  };

  const removeFromSlip = (matchId: string, marketName: string) => {
    setBetSlip((prev) =>
      prev.filter((i) => !(i.matchId === matchId && i.marketName === marketName))
    );
  };

  const isInSlip = (matchId: string, marketName: string) => {
    return betSlip.some((i) => i.matchId === matchId && i.marketName === marketName);
  };

  const clearSlip = () => {
    setBetSlip([]);
  };

  // Admin operations
  const addMatch = (newMatch: MatchPrediction) => {
    setMatches((prev) => [newMatch, ...prev]);
  };

  const updateMatch = (id: string, updatedData: Partial<MatchPrediction>) => {
    setMatches((prev) =>
      prev.map((m) => (m.id === id ? { ...m, ...updatedData } : m))
    );
    if (selectedMatch?.id === id) {
      setSelectedMatch((prev) => (prev ? { ...prev, ...updatedData } : null));
    }
  };

  const deleteMatch = (id: string) => {
    setMatches((prev) => prev.filter((m) => m.id !== id));
    if (selectedMatch?.id === id) {
      setSelectedMatch(null);
    }
  };

  const updateMatchOutcome = (id: string, status: OutcomeStatus) => {
    setMatches((prev) =>
      prev.map((m) => (m.id === id ? { ...m, outcomeStatus: status } : m))
    );
  };

  const resetMatchesToDefault = () => {
    setMatches(INITIAL_MATCHES);
    try {
      localStorage.removeItem(STORAGE_KEY_MATCHES);
    } catch {
      // ignore
    }
  };

  return (
    <FootballContext.Provider
      value={{
        matches,
        language,
        setLanguage,
        toggleLanguage,
        activeTab,
        setActiveTab,
        selectedMatch,
        setSelectedMatch,
        betSlip,
        addToSlip,
        removeFromSlip,
        isInSlip,
        clearSlip,
        isSlipOpen,
        setIsSlipOpen,
        isVipUnlocked,
        setIsVipUnlocked,
        isExportModalOpen,
        setIsExportModalOpen,
        isVipModalOpen,
        setIsVipModalOpen,
        addMatch,
        updateMatch,
        deleteMatch,
        updateMatchOutcome,
        resetMatchesToDefault,
      }}
    >
      {children}
    </FootballContext.Provider>
  );
};

export const useFootball = () => {
  const context = useContext(FootballContext);
  if (!context) {
    throw new Error('useFootball must be used within a FootballProvider');
  }
  return context;
};
