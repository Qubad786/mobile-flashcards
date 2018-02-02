import * as actions from '../actions';

const defaultState = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

function decks(state = defaultState, action) {
    switch (action.type) {
        case actions.FETCH_DECKS:
            return state;
        case actions.ADD_DECK:
            return {
              ...state,
              ...action.deck
            };
        case actions.ADD_QUESTION:
            const {title, question, answer} = action.question;
            return {
              ...state,
              [title]: {
                ...state[title],
                questions: [
                  ...state[title].questions,
                  {
                    question,
                    answer
                  }
                ]
              }
            };
        default:
            return state;
    }
}

export default decks;
