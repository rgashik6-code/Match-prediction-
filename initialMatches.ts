import { MatchPrediction } from '../types/football';

export const INITIAL_MATCHES: MatchPrediction[] = [
  {
    id: 'gp-101',
    league: 'উয়েফা চ্যাম্পিয়ন্স লিগ',
    leagueCode: 'UCL',
    date: '2026-10-28',
    time: '০১:৪৫',
    status: 'upcoming',
    outcomeStatus: 'pending',
    isPremium: false,
    isHot: true,
    venue: 'সান্টিয়াগো বার্নাব্যু, মাদ্রিদ',
    homeTeam: {
      name: 'রিয়াল মাদ্রিদ',
      nameEn: 'Real Madrid',
      shortName: 'RMA',
      logo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=80&auto=format&fit=crop&q=80',
      form: ['W', 'W', 'W', 'D', 'W']
    },
    awayTeam: {
      name: 'বায়ার্ন মিউনিখ',
      nameEn: 'Bayern Munich',
      shortName: 'BAY',
      logo: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=80&auto=format&fit=crop&q=80',
      form: ['W', 'D', 'W', 'W', 'L']
    },
    matchWinner: {
      tip: 'Home Win (রিয়াল মাদ্রিদ জয়)',
      tipLabelBn: 'রিয়াল মাদ্রিদ জয়ী',
      tipLabelEn: 'Real Madrid Win (1)',
      odds: 2.15,
      confidence: 86,
      reasoningBn: 'বার্নাব্যুতে রিয়ালের চ্যাম্পিয়ন্স লিগ রেকর্ড অবিশ্বাস্য। ভিনিসিয়াস ও এমবাপ্পের ফর্ম তাদের এগিয়ে রাখছে।',
      reasoningEn: 'Real Madrid are dominant at Bernabeu with high offensive conversion rate.',
      subValue: '1X2 মার্কেট'
    },
    totalGoals: {
      tip: 'Over 2.5 Goals (২.৫-এর বেশি গোল)',
      tipLabelBn: 'ওভার ২.৫ গোল',
      tipLabelEn: 'Over 2.5 Goals',
      odds: 1.68,
      confidence: 90,
      reasoningBn: 'উভয় দলই আক্রমণাত্মক খেলোয়াড়ে ভরপুর। শেষ ৫টি মুখোমুখি লড়াইয়ের ৪টিতেই ৩ বা ততোধিক গোল হয়েছে।',
      reasoningEn: 'Both attacking powerhouses average 2.8+ goals in their UCL meetings.',
      subValue: 'প্রত্যাশিত গোল: ৩.৪'
    },
    corners: {
      tip: 'Over 9.5 Corners (৯.৫-এর বেশি কর্নার)',
      tipLabelBn: 'ওভার ৯.৫ কর্নার',
      tipLabelEn: 'Over 9.5 Corners',
      odds: 1.85,
      confidence: 82,
      reasoningBn: 'উইং প্লে এবং দূরপাল্লার শট বেশি হওয়ায় উভয় দলের ম্যাচে গড়ে ১১.২টি কর্নার হয়ে থাকে।',
      reasoningEn: 'Heavy wing plays by Vinicius and Sane generate high block deflected corners.',
      subValue: 'গড় কর্নার: ১০.৮'
    },
    cards: {
      tip: 'Over 4.5 Yellow Cards (৪.৫-এর বেশি কার্ড)',
      tipLabelBn: 'ওভার ৪.৫ কার্ড',
      tipLabelEn: 'Over 4.5 Cards',
      odds: 1.95,
      confidence: 84,
      reasoningBn: 'হাই-ভোল্টেজ নকআউট ম্যাচে তীব্র প্রতিদ্বন্দ্বিতা এবং ফাউলের কারণে কার্ড বেশি হওয়ার জোর সম্ভাবনা।',
      reasoningEn: 'High tension fixture with strict ref Clement Turpin (avg 4.8 cards/match).',
      subValue: 'রেফারি গড়: ৪.৮ কার্ড'
    },
    btts: {
      tip: 'Yes',
      odds: 1.55,
      confidence: 89,
      reasoningBn: 'দুই দলের ডিফেন্স কিছুটা ওপেন, উভয় পক্ষই স্কোর করবে।'
    },
    headToHead: {
      homeWins: 4,
      draws: 2,
      awayWins: 2,
      recentResults: ['2-1', '2-2', '2-1', '1-3', '4-2']
    },
    referee: {
      name: 'ক্লেমন্ট তুরপিন',
      avgYellow: 4.6,
      avgRed: 0.25,
      strictness: 'high'
    },
    viewsCount: 3420
  },
  {
    id: 'gp-102',
    league: 'ইংলিশ প্রিমিয়ার লিগ',
    leagueCode: 'EPL',
    date: '2026-10-28',
    time: '২৩:৩০',
    status: 'upcoming',
    outcomeStatus: 'pending',
    isPremium: true,
    isHot: true,
    venue: 'ইতিহাদ স্টেডিয়াম, ম্যানচেস্টার',
    homeTeam: {
      name: 'ম্যানচেস্টার সিটি',
      nameEn: 'Manchester City',
      shortName: 'MCI',
      logo: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=80&auto=format&fit=crop&q=80',
      form: ['W', 'W', 'W', 'W', 'D']
    },
    awayTeam: {
      name: 'আর্সেনাল',
      nameEn: 'Arsenal',
      shortName: 'ARS',
      logo: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?w=80&auto=format&fit=crop&q=80',
      form: ['W', 'W', 'D', 'W', 'W']
    },
    matchWinner: {
      tip: 'Draw or Arsenal (X2 ডাবল চান্স)',
      tipLabelBn: 'ড্র অথবা আর্সেনাল (X2)',
      tipLabelEn: 'Draw or Arsenal (X2)',
      odds: 1.82,
      confidence: 88,
      reasoningBn: 'আর্সেনালের ডিফেন্সিভ শেপ বর্তমানে লিগের সেরা। ম্যান সিটির মিডফিল্ড চাপের মুখে রয়েছে।',
      reasoningEn: 'Arsenal boast the tightest backline in the league and match City tactically.',
      subValue: 'ভিআইপি ব্যঙ্কার টিপ'
    },
    totalGoals: {
      tip: 'Under 2.5 Goals (২.৫-এর কম গোল)',
      tipLabelBn: 'আন্ডার ২.৫ গোল',
      tipLabelEn: 'Under 2.5 Goals',
      odds: 2.05,
      confidence: 85,
      reasoningBn: 'দুই দলের সাম্প্রতিক মুখোমুখি লড়াইগুলোতে প্রচণ্ড ট্যাকটিক্যাল সতর্কতা দেখা গেছে (০-০, ১-০)।',
      reasoningEn: 'Past 3 encounters saw extremely disciplined low-scoring defensive setups.',
      subValue: 'প্রত্যাশিত গোল: ১.৮'
    },
    corners: {
      tip: 'Under 10.5 Corners (১০.৫-এর কম কর্নার)',
      tipLabelBn: 'আন্ডার ১০.৫ কর্নার',
      tipLabelEn: 'Under 10.5 Corners',
      odds: 1.75,
      confidence: 80,
      reasoningBn: 'মাঝমাঠে বল নিয়ন্ত্রণের প্রতিযোগিতা বেশি হবে, ফলে কর্নার বক্সে যাওয়ার সংখ্যা কমবে।',
      reasoningEn: 'Positional midfield battles will limit direct flank crosses.',
      subValue: 'গড় কর্নার: ৮.৫'
    },
    cards: {
      tip: 'Over 5.5 Cards (৫.৫-এর বেশি কার্ড)',
      tipLabelBn: 'ওভার ৫.৫ কার্ড',
      tipLabelEn: 'Over 5.5 Cards',
      odds: 2.20,
      confidence: 91,
      reasoningBn: 'শিরোপা নির্ধারণী ম্যাচ, দুই দলের টেকটিক্যাল ফাউল ও সময় নষ্ট করার জন্য কার্ডের বন্যা হবে।',
      reasoningEn: 'Title decider will spark fierce tactical fouls on counter attacks.',
      subValue: 'উচ্চ রিস্ক / হাই রিটার্ন'
    },
    btts: {
      tip: 'No',
      odds: 1.95,
      confidence: 78,
      reasoningBn: 'যেকোনো এক দল ক্লিন শিট ধরে রাখতে পারে।'
    },
    headToHead: {
      homeWins: 3,
      draws: 2,
      awayWins: 2,
      recentResults: ['0-0', '1-0', '1-1', '4-1', '1-0']
    },
    viewsCount: 5120
  },
  {
    id: 'gp-103',
    league: 'স্প্যানিশ লা লিগা',
    leagueCode: 'LL',
    date: '2026-10-29',
    time: '০১:০০',
    status: 'upcoming',
    outcomeStatus: 'pending',
    isPremium: false,
    isHot: true,
    venue: 'অলিম্পিক স্টেডিয়াম, বার্সেলোনা',
    homeTeam: {
      name: 'বার্সেলোনা',
      nameEn: 'FC Barcelona',
      shortName: 'BAR',
      logo: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=80&auto=format&fit=crop&q=80',
      form: ['W', 'W', 'W', 'L', 'W']
    },
    awayTeam: {
      name: 'অ্যাটলেটিকো মাদ্রিদ',
      nameEn: 'Atletico Madrid',
      shortName: 'ATM',
      logo: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=80&auto=format&fit=crop&q=80',
      form: ['W', 'D', 'W', 'W', 'W']
    },
    matchWinner: {
      tip: 'Home Win (বার্সেলোনা জয়)',
      tipLabelBn: 'বার্সেলোনা জয়ী (১)',
      tipLabelEn: 'Barcelona Win (1)',
      odds: 1.90,
      confidence: 85,
      reasoningBn: 'লেভানদোভস্কি ও লামিন ইয়ামালের ক্ষিপ্র আক্রমণ অ্যাটলেটিকোর বিপক্ষে ফলপ্রসূ হবে।',
      reasoningEn: 'Yamal and Lewandowski form in home games has been ruthless.',
      subValue: '1X2 মার্কেট'
    },
    totalGoals: {
      tip: 'Over 2.5 Goals (২.৫-এর বেশি গোল)',
      tipLabelBn: 'ওভার ২.৫ গোল',
      tipLabelEn: 'Over 2.5 Goals',
      odds: 1.72,
      confidence: 84,
      reasoningBn: 'বার্সেলোনার হাই-লাইন ডিফেন্স কাউন্টারে গোল হজম করে কিন্তু ঘরে গড়ে ৩ গোল করে।',
      reasoningEn: 'Flick high defensive line guarantees goals at both ends.',
      subValue: 'প্রত্যাশিত গোল: ৩.১'
    },
    corners: {
      tip: 'Over 10.5 Corners (১০.৫-এর বেশি কর্নার)',
      tipLabelBn: 'ওভার ১০.৫ কর্নার',
      tipLabelEn: 'Over 10.5 Corners',
      odds: 2.00,
      confidence: 81,
      reasoningBn: 'বার্সেলোনার উইং ওভারল্যাপ এবং অ্যাটলেটিকোর ক্লিয়ারেন্স থেকে প্রচুর কর্নার জন্মায়।',
      reasoningEn: 'Heavy wing siege forced into defensive corner concessions.',
      subValue: 'গড় কর্নার: ১১.০'
    },
    cards: {
      tip: 'Over 5.5 Cards (৫.৫-এর বেশি কার্ড)',
      tipLabelBn: 'ওভার ৫.৫ কার্ড',
      tipLabelEn: 'Over 5.5 Cards',
      odds: 1.88,
      confidence: 93,
      reasoningBn: 'সিমিওনের দলের ফিজিক্যাল ফুটবল এবং বার্সেলোনার সাথে উত্তেজনা বরাবরই ৫+ কার্ডের নিশ্চয়তা দেয়।',
      reasoningEn: 'Historically ferocious battle with average 6.4 cards per game.',
      subValue: 'রেফারি এভারেজ: ৫.২ কার্ড'
    },
    btts: {
      tip: 'Yes',
      odds: 1.62,
      confidence: 87,
      reasoningBn: 'গ্রিজম্যান ও আলভারেজ বার্সেলোনার ডিফেন্স ভেদ করতে সক্ষম।'
    },
    headToHead: {
      homeWins: 4,
      draws: 1,
      awayWins: 1,
      recentResults: ['3-0', '1-0', '1-0', '4-2', '0-2']
    },
    viewsCount: 4210
  },
  {
    id: 'gp-104',
    league: 'ইংলিশ প্রিমিয়ার লিগ',
    leagueCode: 'EPL',
    date: '2026-10-28',
    time: '২১:০০',
    status: 'live',
    liveMinute: 64,
    outcomeStatus: 'pending',
    isPremium: false,
    isHot: true,
    venue: 'অ্যানফিল্ড, লিভারপুল',
    score: {
      home: 2,
      away: 1
    },
    homeTeam: {
      name: 'লিভারপুল',
      nameEn: 'Liverpool',
      shortName: 'LIV',
      logo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=80&auto=format&fit=crop&q=80',
      form: ['W', 'W', 'W', 'W', 'L']
    },
    awayTeam: {
      name: 'চেলসি',
      nameEn: 'Chelsea',
      shortName: 'CHE',
      logo: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=80&auto=format&fit=crop&q=80',
      form: ['W', 'W', 'D', 'W', 'D']
    },
    matchWinner: {
      tip: 'Liverpool Win (লিভারপুল জয়)',
      tipLabelBn: 'লিভারপুল জয়ী',
      tipLabelEn: 'Liverpool Win',
      odds: 1.50,
      confidence: 92,
      reasoningBn: 'বর্তমানে ২-১ ব্যবধানে এগিয়ে আছে এবং অ্যানফিল্ডে লিড ধরে রাখার শতকরা হার ৯৪%।',
      reasoningEn: 'Leading 2-1 and controlling the tempo inside Anfield.',
      subValue: 'লাইভ টিপ'
    },
    totalGoals: {
      tip: 'Over 3.5 Goals (৩.৫-এর বেশি গোল)',
      tipLabelBn: 'ওভার ৩.৫ গোল',
      tipLabelEn: 'Over 3.5 Goals',
      odds: 1.70,
      confidence: 89,
      reasoningBn: 'ইতিমধ্যে ৩টি গোল হয়েছে। চেলসি অল-আউট অ্যাটাকে যাবে, কাউন্টারে আরও ১টি গোল প্রত্যাশিত।',
      reasoningEn: 'Chelsea pushing forward open spaces for Salah counter breaks.',
      subValue: 'বর্তমান স্কোর: ২-১'
    },
    corners: {
      tip: 'Over 11.5 Corners (১১.৫-এর বেশি কর্নার)',
      tipLabelBn: 'ওভার ১১.৫ কর্নার',
      tipLabelEn: 'Over 11.5 Corners',
      odds: 1.90,
      confidence: 86,
      reasoningBn: '৬৪ মিনিটে ইতোমধ্যে ৯টি কর্নার হয়েছে। বাকি সময়ে অন্তত ৩টি কর্নার নিশ্চিত।',
      reasoningEn: 'Already 9 corners in 64 mins, high pace guaranteed.',
      subValue: 'বর্তমান কর্নার: ৯টি'
    },
    cards: {
      tip: 'Over 4.5 Cards (৪.৫-এর বেশি কার্ড)',
      tipLabelBn: 'ওভার ৪.৫ কার্ড',
      tipLabelEn: 'Over 4.5 Cards',
      odds: 1.65,
      confidence: 94,
      reasoningBn: 'শেষ মুহূর্তে প্রেসার এবং ফাউলে রেফারির বাঁশি বারবার বাজবে।',
      reasoningEn: 'Crunch tackles as Chelsea chases late equalizer.',
      subValue: 'বর্তমান কার্ড: ৩টি'
    },
    headToHead: {
      homeWins: 2,
      draws: 3,
      awayWins: 1,
      recentResults: ['4-1', '1-1', '0-0', '0-0', '2-2']
    },
    viewsCount: 6890
  },
  {
    id: 'gp-105',
    league: 'ইতালিয়ান সিরি এ',
    leagueCode: 'SA',
    date: '2026-10-29',
    time: '০০:৪৫',
    status: 'upcoming',
    outcomeStatus: 'pending',
    isPremium: true,
    isHot: true,
    venue: 'সান সিরো, মিলান',
    homeTeam: {
      name: 'ইন্টার মিলান',
      nameEn: 'Inter Milan',
      shortName: 'INT',
      logo: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=80&auto=format&fit=crop&q=80',
      form: ['W', 'W', 'W', 'W', 'W']
    },
    awayTeam: {
      name: 'জুভেন্টাস',
      nameEn: 'Juventus',
      shortName: 'JUV',
      logo: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?w=80&auto=format&fit=crop&q=80',
      form: ['W', 'D', 'W', 'D', 'W']
    },
    matchWinner: {
      tip: 'Inter Milan Win (ইন্টার জয়)',
      tipLabelBn: 'ইন্টার মিলান জয়ী (১)',
      tipLabelEn: 'Inter Milan Win',
      odds: 1.85,
      confidence: 87,
      reasoningBn: 'ডের্বি দি ইতালিয়াতে ইন্টারের স্কোয়াড ভারসাম্য ও হোম রেকর্ড জুভেন্টাসের চেয়ে অনেক এগিয়ে।',
      reasoningEn: 'Inter tactical midfield superiority under Inzaghi at San Siro.',
      subValue: 'ভিআইপি ডাবল টিপ'
    },
    totalGoals: {
      tip: 'Under 2.5 Goals (২.৫-এর কম গোল)',
      tipLabelBn: 'আন্ডার ২.৫ গোল',
      tipLabelEn: 'Under 2.5 Goals',
      odds: 1.80,
      confidence: 86,
      reasoningBn: 'সিরি এ ডার্বি মানেই কড়া রক্ষণাত্মক খেলা। ১-০ বা ১-১ স্কোরলাইনের বেশি সম্ভাবনা।',
      reasoningEn: 'Classic Italian chess match with extremely rigid defensive structures.',
      subValue: 'প্রত্যাশিত গোল: ১.৭'
    },
    corners: {
      tip: 'Under 9.5 Corners (৯.৫-এর কম কর্নার)',
      tipLabelBn: 'আন্ডার ৯.৫ কর্নার',
      tipLabelEn: 'Under 9.5 Corners',
      odds: 1.88,
      confidence: 83,
      reasoningBn: 'দুপক্ষই বক্সের বাইরে শট ব্লক করায় সরাসরি কর্নার কম হয়।',
      reasoningEn: 'Deep compact blocks prevent clear corner deflections.',
      subValue: 'গড় কর্নার: ৮.২'
    },
    cards: {
      tip: 'Over 5.5 Cards + Red Card Risk',
      tipLabelBn: 'ওভার ৫.৫ কার্ড (রেড কার্ড ঝুঁকি)',
      tipLabelEn: 'Over 5.5 Cards + Red Card Risk',
      odds: 2.10,
      confidence: 90,
      reasoningBn: 'ইতালির সবচেয়ে উষ্ণ দ্বৈরথ! শেষ ১০টি মুখোমুখি ম্যাচে গড়ে ৬.১ হলুদ ও ৩টিতে লাল কার্ড ছিল।',
      reasoningEn: 'Derby d Italia averages 6+ cards with high altercation history.',
      subValue: 'রেফারি গড়: ৫.৬ কার্ড'
    },
    headToHead: {
      homeWins: 3,
      draws: 2,
      awayWins: 1,
      recentResults: ['1-0', '1-1', '1-0', '1-0', '0-1']
    },
    viewsCount: 3890
  },
  {
    id: 'gp-106',
    league: 'জার্মান বুন্দেসলিগা',
    leagueCode: 'BL',
    date: '2026-10-30',
    time: '০১:৩০',
    status: 'upcoming',
    outcomeStatus: 'pending',
    isPremium: false,
    isHot: false,
    venue: 'বায়এরিনা, লেভারকুসেন',
    homeTeam: {
      name: 'বায়ার লেভারকুসেন',
      nameEn: 'Bayer Leverkusen',
      shortName: 'B04',
      logo: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=80&auto=format&fit=crop&q=80',
      form: ['W', 'D', 'W', 'W', 'W']
    },
    awayTeam: {
      name: 'বরুশিয়া ডর্টমুন্ড',
      nameEn: 'Borussia Dortmund',
      shortName: 'BVB',
      logo: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=80&auto=format&fit=crop&q=80',
      form: ['L', 'W', 'L', 'W', 'W']
    },
    matchWinner: {
      tip: 'Leverkusen Win (লেভারকুসেন জয়)',
      tipLabelBn: 'লেভারকুসেন জয়ী',
      tipLabelEn: 'Leverkusen Win',
      odds: 1.75,
      confidence: 84,
      reasoningBn: 'জাবি আলোনসোর দলের বল দখল ও শেষ মুহূর্তের গোল করার ক্ষমতা অনন্য।',
      reasoningEn: 'Leverkusen control and late clutch factor makes them strong home favorites.',
      subValue: '1X2 মার্কেট'
    },
    totalGoals: {
      tip: 'Over 3.5 Goals (৩.৫-এর বেশি গোল)',
      tipLabelBn: 'ওভার ৩.৫ গোল',
      tipLabelEn: 'Over 3.5 Goals',
      odds: 2.25,
      confidence: 88,
      reasoningBn: 'বুন্দেসলিগার সবচেয়ে হাই-স্কোরিং ম্যাচগুলোর একটি। ডর্টমুন্ড কাউন্টারে ভয়ঙ্কর কিন্তু ডিফেন্সে দুর্বল।',
      reasoningEn: 'High pressing and transitions yield frequent goal festivals in Bundesliga.',
      subValue: 'প্রত্যাশিত গোল: ৩.৭'
    },
    corners: {
      tip: 'Over 10.5 Corners (১০.৫-এর বেশি কর্নার)',
      tipLabelBn: 'ওভার ১০.৫ কর্নার',
      tipLabelEn: 'Over 10.5 Corners',
      odds: 1.82,
      confidence: 85,
      reasoningBn: 'উভয় দলই উইং-ব্যাকদের অনেক উঁচুতে খেলায়, ফলে প্রচুর বাই-লাইন কর্নার পাওয়া যায়।',
      reasoningEn: 'Heavy wingback overlapping produces high volume of corners.',
      subValue: 'গড় কর্নার: ১১.৩'
    },
    cards: {
      tip: 'Under 4.5 Cards (৪.৫-এর কম কার্ড)',
      tipLabelBn: 'আন্ডার ৪.৫ কার্ড',
      tipLabelEn: 'Under 4.5 Cards',
      odds: 1.70,
      confidence: 82,
      reasoningBn: 'বুন্দেসলিগায় ফ্লো বজায় রাখা হয় এবং অপ্রয়োজনীয় ফাউল কম হয়।',
      reasoningEn: 'Clean high tempo game with lenient German officiating.',
      subValue: 'রেফারি গড়: ৩.৬ কার্ড'
    },
    headToHead: {
      homeWins: 2,
      draws: 2,
      awayWins: 2,
      recentResults: ['1-1', '1-1', '2-0', '3-4', '5-2']
    },
    viewsCount: 2980
  },
  {
    id: 'gp-107',
    league: 'ফরাসি লিগ ১',
    leagueCode: 'L1',
    date: '2026-10-27',
    time: '২২:০০',
    status: 'finished',
    outcomeStatus: 'won',
    isPremium: false,
    isHot: false,
    venue: 'পার্ক দেস প্রিন্সেস, প্যারিস',
    score: {
      home: 3,
      away: 0
    },
    homeTeam: {
      name: 'পিএসজি',
      nameEn: 'PSG',
      shortName: 'PSG',
      logo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=80&auto=format&fit=crop&q=80',
      form: ['W', 'W', 'W', 'W', 'W']
    },
    awayTeam: {
      name: 'মার্সেই',
      nameEn: 'Marseille',
      shortName: 'OM',
      logo: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=80&auto=format&fit=crop&q=80',
      form: ['L', 'W', 'D', 'W', 'L']
    },
    matchWinner: {
      tip: 'PSG Win (পিএসজি জয়)',
      tipLabelBn: 'পিএসজি জয়ী (সফল)',
      tipLabelEn: 'PSG Win (WON)',
      odds: 1.55,
      confidence: 94,
      reasoningBn: 'লে ক্লাসিক ম্যাচে পিএসজি ৩-০ গোলে নিরঙ্কুশ জয় তুলে নেয়।',
      reasoningEn: 'PSG totally dominated the match 3-0 from start to finish.',
      subValue: 'প্রেডিকশন জয়ী ✓'
    },
    totalGoals: {
      tip: 'Over 2.5 Goals (২.৫-এর বেশি গোল)',
      tipLabelBn: 'ওভার ২.৫ গোল (সফল)',
      tipLabelEn: 'Over 2.5 Goals (WON)',
      odds: 1.65,
      confidence: 91,
      reasoningBn: 'ম্যাচে মোট ৩টি গোল হয়ে প্রেডিকশন সফল হয়েছে।',
      reasoningEn: '3 goals scored, winning the Over 2.5 market easily.',
      subValue: 'প্রেডিকশন জয়ী ✓'
    },
    corners: {
      tip: 'Over 9.5 Corners',
      tipLabelBn: 'ওভার ৯.৫ কর্নার (সফল)',
      tipLabelEn: 'Over 9.5 Corners (WON)',
      odds: 1.80,
      confidence: 87,
      reasoningBn: 'ম্যাচে ১১টি কর্নার অর্জিত হয়েছে।',
      reasoningEn: '11 corners hit during the intense 90 minutes.',
      subValue: 'প্রেডিকশন জয়ী ✓'
    },
    cards: {
      tip: 'Over 4.5 Cards',
      tipLabelBn: 'ওভার ৪.৫ কার্ড (সফল)',
      tipLabelEn: 'Over 4.5 Cards (WON)',
      odds: 1.90,
      confidence: 88,
      reasoningBn: 'মার্সেইয়ের ১টি লাল কার্ড ও ৫টি হলুদ কার্ড এসেছে।',
      reasoningEn: '1 red card and 5 yellow cards delivered the win.',
      subValue: 'প্রেডিকশন জয়ী ✓'
    },
    headToHead: {
      homeWins: 5,
      draws: 0,
      awayWins: 1,
      recentResults: ['3-0', '2-0', '4-0', '3-0', '1-2']
    },
    viewsCount: 7100
  },
  {
    id: 'gp-108',
    league: 'উয়েফা চ্যাম্পিয়ন্স লিগ',
    leagueCode: 'UCL',
    date: '2026-10-27',
    time: '০১:৪৫',
    status: 'finished',
    outcomeStatus: 'won',
    isPremium: true,
    isHot: true,
    venue: 'সান সিরো, মিলান',
    score: {
      home: 3,
      away: 1
    },
    homeTeam: {
      name: 'এসি মিলান',
      nameEn: 'AC Milan',
      shortName: 'ACM',
      logo: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=80&auto=format&fit=crop&q=80',
      form: ['W', 'L', 'W', 'W', 'D']
    },
    awayTeam: {
      name: 'ক্লাব ব্রুজ',
      nameEn: 'Club Brugge',
      shortName: 'BRU',
      logo: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?w=80&auto=format&fit=crop&q=80',
      form: ['L', 'W', 'D', 'W', 'L']
    },
    matchWinner: {
      tip: 'AC Milan -1 Handicap (মিলান হ্যান্ডিক্যাপ জয়)',
      tipLabelBn: 'মিলান জয়ী (সফল)',
      tipLabelEn: 'AC Milan Win (WON)',
      odds: 1.90,
      confidence: 93,
      reasoningBn: 'মিলান সহজেই ৩-১ গোলে বড় জয় ছিনিয়ে নিয়েছে।',
      reasoningEn: 'Milan covered the handicap effortlessly with a 3-1 win.',
      subValue: 'ভিআইপি উইন ✓'
    },
    totalGoals: {
      tip: 'Over 2.5 Goals (২.৫-এর বেশি গোল)',
      tipLabelBn: 'ওভার ২.৫ গোল (সফল)',
      tipLabelEn: 'Over 2.5 Goals (WON)',
      odds: 1.70,
      confidence: 92,
      reasoningBn: '৪ গোল হয়ে সহজেই উইন নিশ্চিত হয়েছে।',
      reasoningEn: '4 goals scored in total.',
      subValue: 'প্রেডিকশন জয়ী ✓'
    },
    corners: {
      tip: 'Over 8.5 Corners',
      tipLabelBn: 'ওভার ৮.৫ কর্নার (সফল)',
      tipLabelEn: 'Over 8.5 Corners (WON)',
      odds: 1.75,
      confidence: 85,
      reasoningBn: '১০টি কর্নার এসেছে।',
      reasoningEn: '10 corners registered.',
      subValue: 'প্রেডিকশন জয়ী ✓'
    },
    cards: {
      tip: 'Over 3.5 Cards',
      tipLabelBn: 'ওভার ৩.৫ কার্ড (সফল)',
      tipLabelEn: 'Over 3.5 Cards (WON)',
      odds: 1.80,
      confidence: 89,
      reasoningBn: '১টি লাল কার্ড ও ৪টি হলুদ কার্ড হয়েছিল।',
      reasoningEn: 'Red card + 4 yellows hit.',
      subValue: 'প্রেডিকশন জয়ী ✓'
    },
    headToHead: {
      homeWins: 3,
      draws: 0,
      awayWins: 0,
      recentResults: ['3-1', '1-0', '2-0']
    },
    viewsCount: 4500
  }
];

export const DEMO_ACCURACY_STATS = {
  monthlyWinRate: 88.6,
  totalTipsWon: 248,
  totalTipsLost: 32,
  currentStreak: 12,
  averageOdds: 1.92,
  vipAccuracy: 93.4
};
