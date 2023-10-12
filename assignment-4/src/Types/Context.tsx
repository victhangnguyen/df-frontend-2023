import { BookType } from './Book'

export interface InitialStateType {
  books: Array<BookType>
  bookCounts: number
}

export interface AppContextType {
  state: InitialStateType
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dispatch: React.Dispatch<any>
}
