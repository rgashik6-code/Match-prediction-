const translations: Record<string, Record<string, string>> = {
  en: {
    betSlip: 'Bet Slip',
  },
  bn: {
    betSlip: 'বেট স্লিপ',
  },
};

export const t = (key: string, language: string): string => {
  return translations[language]?.[key] ?? translations.en[key] ?? key;
};
