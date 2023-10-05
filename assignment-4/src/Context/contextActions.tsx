import BookAPI from '../fakeAPIs/bookAPI'
import * as actionTypes from './actionTypes'

export const createContextActions = (dispatch) => {
  return {
    //! navDashboardContextActions
    navDashboard: {
      open: () => {
        dispatch({ type: actionTypes.OPEN_NAV_DASHBOARD })
      },
      collapse: () => {
        dispatch({ type: actionTypes.COLLAPSE_NAV_DASHBOARD })
      },
    },
    //! bookContextActions
    book: {
      fetchAll: () => {
        const response = BookAPI.fetchAll()
        dispatch({
          type: actionTypes.FETCH_ALL_BOOK,
          payload: response,
        })
      },
      create: (bookData) => {
        const response = BookAPI.create(bookData)
        dispatch({
          type: actionTypes.CREATE_ONE_BOOK,
          payload: response,
        })
      },
      findIdAndDelete: (id) => {
        const response = BookAPI.findOneAndRemove(id)
        dispatch({ type: actionTypes.DELETE_ONE_BOOK, payload: response })
      },
      fetchBooksByFilters: (page, perPage, { search = '' }) => {
        const response = BookAPI.fetchBooksByFilters(page, perPage, { search })
        dispatch({
          type: actionTypes.FETCH_BOOKS_BY_FILTERS,
          payload: response,
        })
      },
    },
    darkMode: {
      toggle: () => {
        dispatch({
          type: actionTypes.TOGGLE_DARK_LIGHT,
        })
      },
    },
  }
}
