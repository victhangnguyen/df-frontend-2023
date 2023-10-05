'use client'

import { createContext, useContext, useMemo, useReducer } from 'react'
import { combineReducer, initialState } from './combineReducer'
import { createContextActions } from './contextActions'
//! types
import { BookType } from '../Types/BookType'

interface InitialStateType {
  isNavDashboardActive: boolean
  books: Array<BookType>
  bookCounts: number
  loading: boolean
  isLight: boolean
}

interface AppContextType {
  state: InitialStateType
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dispatch: React.Dispatch<any>
}

const AppContext = createContext<AppContextType>({
  //! initialState
  state: initialState,
  //! dispatch with null callbackFn
  dispatch: () => null,
})

//! Provider wrap Application
export function AppStoreProvider({ children }) {
  const [state, dispatch] = useReducer(combineReducer, initialState)
  const value = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('AppStoreProvider that needed to use!')
  }

  const { state, dispatch } = context

  const contextActions = createContextActions(dispatch)

  return { state, contextActions }
}
