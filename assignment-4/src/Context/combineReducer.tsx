import * as actionTypes from './actionTypes'

export const initialState = {
  books: [],
  bookCounts: 0,
}

export function combineReducer(state, action) {
  switch (action.type) {
    //! bookReducer
    case actionTypes.FETCH_ALL_BOOK:
      return {
        ...state,
        books: action.payload,
      }
    case actionTypes.CREATE_ONE_BOOK:
      return {
        ...state,
        books: [action.payload, ...state.books],
      }

    case actionTypes.DELETE_ONE_BOOK:
      return {
        ...state,
        books: state.books.filter(
          (book) => String(book.id) !== String(action.payload.id),
        ),
        bookCounts: state.bookCounts - 1,
      }
    case actionTypes.FETCH_BOOKS_BY_FILTERS:
      return {
        ...state,
        books: action.payload.books,
        bookCounts: action.payload.bookCounts,
      }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}
