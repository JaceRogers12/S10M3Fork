// ✨ create your `quotesSlice` in this module
import {createSlice} from "@reduxjs/toolkit";

let id = 1
const getNextId = () => id++

const initialState = {
  displayAllQuotes: true,
  highlightedQuote: null,
  quotes: [
    {
      id: getNextId(),
      quoteText: "Don't cry because it's over, smile because it happened.",
      authorName: "Dr. Seuss",
      apocryphal: false,
    },
    {
      id: getNextId(),
      quoteText: "So many books, so little time.",
      authorName: "Frank Zappa",
      apocryphal: false,
    },
    {
      id: getNextId(),
      quoteText: "Be yourself; everyone else is already taken.",
      authorName: "Oscar Wilde",
      apocryphal: false,
    },
  ],
}

const slice = createSlice({
  name: "quotesSlice",
  initialState: initialState,
  reducers: {
    toggleVisibility(state) {
      state.displayAllQuotes = !state.displayAllQuotes
    },
    deleteQuote(state, action) {
      state.quotes = state.quotes.filter(quote => quote.id != action.payload)
    },
    editQuoteAuthenticity(state, action) {
      state.quotes = state.quotes.map(quote => {
        return quote.id != action.payload?
          quote : {...quote, apocryphal: !quote.apocryphal}
      })
    },
    setHighlightedQuote(state, action) {
      state.highlightedQuote == action.payload?
      state.highlightedQuote= null
      : state.highlightedQuote= action.payload
    },
    createQuote: {
      prepare(authorName, quoteText) {
        const newQuote = {
          id: getNextId(),
          authorName: authorName,
          quoteText: quoteText,
          apocryphal: false
        }
        return {payload: newQuote}
      },
      reducer(state, action) {
        state.quotes.push(action.payload)
      }
    }
  }
})

export default slice.reducer;
export const {toggleVisibility, deleteQuote, editQuoteAuthenticity, setHighlightedQuote, createQuote} = slice.actions;