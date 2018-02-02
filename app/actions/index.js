export const FETCH_DECK = 'FETCH_DECK';
export const FETCH_DECKS = 'FETCH_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_QUESTION = 'ADD_QUESTION';

export const getDeck = (title) => ({
    type: FETCH_DECK,
    title,
});

export const getDecks = () => ({
    type: FETCH_DECKS,
});

export const addDeck = deck => ({
    type: ADD_DECK,
    deck,
});

export const addQuestion = question => ({
    type: ADD_QUESTION,
    question,
});
