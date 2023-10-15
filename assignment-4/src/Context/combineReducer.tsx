'use client'

import * as actionTypes from './actionTypes'
import { BookType } from '../types'

export const initialState = {
  //! bookReducer
  books: [],
  bookCounts: 0,
  //! modalReducer
  selectedId: '',
  modalType: '',
  modalIsOpen: false,
  modalTitle: '',
  modalMessage: '',
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
          (book: BookType) => String(book.id) !== String(action.payload.id),
        ),
        bookCounts: state.bookCounts - 1,
      }
    case actionTypes.FETCH_BOOKS_BY_FILTERS:
      return {
        ...state,
        books: action.payload.books,
        bookCounts: action.payload.bookCounts,
      }
    case actionTypes.CONFIRM_DELETE_BOOK:
      return {
        ...state,
        selectedId: action.payload.selectedId,
        modalType: action.payload.modalType,
        modalIsOpen: action.payload.modalIsOpen,
        modalTitle: action.payload.modalTitle,
        modalMessage: action.payload.modalMessage,
      }
    case actionTypes.CONFIRM_CLOSE:
      return {
        ...state,
        modalType: action.payload.modalType,
        modalIsOpen: action.payload.modalIsOpen,
        modalTitle: action.payload.modalTitle,
        modalMessage: action.payload.modalMessage,
      }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}
