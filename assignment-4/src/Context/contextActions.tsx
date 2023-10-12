import { bookServices } from '../Services'
import * as actionTypes from './actionTypes'

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
      create: (bookData) => {
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
  }
}
