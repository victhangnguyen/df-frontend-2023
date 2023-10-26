import { bookServices } from '../Services'
import * as actionTypes from './actionTypes'
//! types
import { BookType } from '../typesTS'

export const createContextActions = (dispatch) => {
  return {
    book: {
      fetchAll: () => {
        const response = bookServices.fetchAll()
        dispatch({
          type: actionTypes.FETCH_ALL_BOOK,
          payload: response,
        })
      },
      fetchOne: (id: string | number) => {
        const response = bookServices.findOneById(id)
        dispatch({
          type: actionTypes.FETCH_ALL_BOOK,
          payload: { book: response },
        })
      },
      create: (bookData: BookType) => {
        const response = bookServices.create(bookData)
        dispatch({
          type: actionTypes.CREATE_ONE_BOOK,
          payload: response,
        })
      },
      findIdAndDelete: (id: string | number) => {
        const response = bookServices.findOneAndRemove(id)
        dispatch({ type: actionTypes.DELETE_ONE_BOOK, payload: response })
      },
      fetchBooksByFilters: (
        page: number,
        perPage: number,
        { search = '' }: { search: string },
      ) => {
        const response = bookServices.fetchBooksByFilters(page, perPage, {
          search,
        })
        dispatch({
          type: actionTypes.FETCH_BOOKS_BY_FILTERS,
          payload: response,
        })
      },
    },
    modal: {
      confirmDeleteBook: (bookData: BookType) => {
        dispatch({
          type: actionTypes.CONFIRM_DELETE_BOOK,
          payload: {
            modalType: 'DELETE',
            selectedId: bookData.id,
            modalIsOpen: true,
            modalTitle: 'Delete Book',
            modalMessage: `Do you want to delete ${bookData.name} book?`,
          },
        })
      },
      confirmClose: () => {
        dispatch({
          type: actionTypes.CONFIRM_DELETE_BOOK,
          payload: {
            selectedId: '',
            modalType: '',
            modalIsOpen: false,
            modalTitle: '',
            modalMessage: '',
          },
        })
      },
    },
  }
}
