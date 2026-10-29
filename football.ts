export type Language = 'bn' | 'en';

export type MatchStatus = 'upcoming' | 'live' | 'finished';
export type OutcomeStatus = 'pending' | 'won' | 'lost' | 'void';

export interface Team {
  name: string;
  nameEn: string;
  shortName: string;
  logo: string;
  form: ('W' | 'D' | 'L')[];
}

export interface PredictionMarket {
  tip: string;
  tipLabelBn: string;
  tipLabelEn: string;
  odds: number;
  confidence: number; // percentage, e.g., 88
  reasoningBn: string;
  reasoningEn: string;
  subValue?: string; // e.g. "xG 2.45" or "Ref avg 4.2 cards"
}

export interface MatchPrediction {
  id: string;
  league: string;
  leagueCode: string;
  leagueIcon?: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:mm
  status: MatchStatus;
  outcomeStatus: OutcomeStatus;
  isPremium: boolean;
  isHot: boolean;
  venue: string;
  
  homeTeam: Team;
  awayTeam: Team;
  score?: {
    home: number;
    away: number;
  };
  liveMinute?: number;

  // The 4 Core Required Markets
  matchWinner: PredictionMarket;
  totalGoals: PredictionMarket;
  corners: PredictionMarket;
  cards: PredictionMarket;

  // Extra details
  btts?: {
    tip: 'Yes' | 'No';
    odds: number;
    confidence: number;
    reasoningBn: string;
  };
  headToHead?: {
    homeWins: number;
    draws: number;
    awayWins: number;
    recentResults: string[];
  };
  referee?: {
    name: string;
    avgYellow: number;
    avgRed: number;
    strictness: 'high' | 'medium' | 'low';
  };
  viewsCount?: number;
}

export interface SlipItem {
  matchId: string;
  matchTitle: string;
  marketName: string;
  tip: string;
  odds: number;
  confidence: number;
}
