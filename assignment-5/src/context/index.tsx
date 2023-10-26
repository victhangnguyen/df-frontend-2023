'use client'

import { createContext, useContext, useMemo, useReducer } from 'react'
import { combineReducer, initialState } from './combineReducer'
import { createContextActions } from './contextActions'

import { BookType } from '../typesTS'

export interface InitialStateType {
  books: Array<BookType>
  book: BookType | null
  bookCounts: number
  selectedId: string
  modalType: string
  modalIsOpen: boolean
  modalTitle: string
  modalMessage: string
}

export interface AppContextType {
  state: InitialStateType
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dispatch: React.Dispatch<any>
}

const AppContext = createContext<AppContextType>({
  state: initialState,
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
