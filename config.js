// Configuration (séparé pour faciliter les modifications)
const CONFIG = {
    SERVER_URL: 'https://votre-base-donnees.com',
    CURRENCY: 'Gdes',
    GAMING_RULES: {
        BORLETTE: { lot1: 60, lot2: 20, lot3: 10 },
        LOTTO3: 500,
        LOTTO4: 1000,
        LOTTO5: 5000,
        MARIAGE: 1000,
        AUTO_MARRIAGE: 1000,
        AUTO_LOTTO4: 1000,
        AUTO_LOTTO5: 5000
    },
    DRAWS: [
        { id: 'mia_matin', name: 'Miami Matin', time: '13:30', color: 'var(--miami)' },
        { id: 'mia_soir', name: 'Miami Soir', time: '21:50', color: 'var(--miami)' },
        { id: 'ny_matin', name: 'New York Matin', time: '14:30', color: 'var(--newyork)' },
        { id: 'ny_soir', name: 'New York Soir', time: '20:00', color: 'var(--newyork)' },
        { id: 'ga_matin', name: 'Georgia Matin', time: '12:30', color: 'var(--georgia)' },
        { id: 'ga_soir', name: 'Georgia Soir', time: '19:00', color: 'var(--georgia)' },
        { id: 'tx_matin', name: 'Texas Matin', time: '11:30', color: 'var(--texas)' },
        { id: 'tx_soir', name: 'Texas Soir', time: '18:30', color: 'var(--texas)' },
        { id: 'tn_matin', name: 'Tunisia Matin', time: '10:00', color: 'var(--tunisia)' },
        { id: 'tn_soir', name: 'Tunisia Soir', time: '17:00', color: 'var(--tunisia)' }
    ]
};