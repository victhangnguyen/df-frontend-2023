'use client'

import { createContext, useContext, useMemo, useReducer } from 'react'
import { combineReducer, initialState } from './combineReducer'
import { createContextActions } from './contextActions'
//! types
import { AppContextType } from '../typesTS'

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
