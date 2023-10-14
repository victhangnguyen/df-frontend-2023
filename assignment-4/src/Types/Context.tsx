import { BookType } from './BookType'

export interface InitialStateType {
  books: Array<BookType>
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
