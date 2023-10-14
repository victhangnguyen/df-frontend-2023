import { Book } from '../fakeDatabase'
import { BookType } from '../types'

//! Just suppose to get data from database
export function fetchAll() {
  const data = Book.fetchBooks()
  return data
}

export function create(bookData: BookType) {
  const book = Book.create(bookData)
  return book
}

export function findOneById(id: string | number) {
  const book = Book.findOneById(id)
  return book
}

export function findOneAndRemove(id: string | number) {
  const book = Book.findOneAndRemove(id)
  return book
}

export function fetchBooksByFilters(
  page: number,
  perPage: number,
  filterOpts: { search: string },
) {
  const bookDocArr = Book.fetchOrdersByFilters(page, perPage, filterOpts)
  return bookDocArr
}
