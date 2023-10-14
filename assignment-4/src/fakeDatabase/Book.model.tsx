'use client'

import collect, { Collection } from 'collect.js'
import { storage } from '../ultilities'
import { BookType } from '../types'

export class Book {
  public id?: string | number
  public name: string
  public author: string
  public topic: string

  constructor({ id, name, author, topic }: BookType) {
    this.id = id
    this.name = name
    this.author = author
    this.topic = topic
  }

  static create(bookDoc: BookType) {
    const id = Date.now()
    const newBookDoc: Book = new Book({
      id,
      name: bookDoc.name,
      author: bookDoc.author,
      topic: bookDoc.topic,
    })

    const bookDocArr: Array<BookType> = this.getAndParseBooks()

    //! can push
    bookDocArr.unshift(newBookDoc)

    //!! update bookDocArr into localStorage
    storage.saveToLocalStorage('bookStorage', bookDocArr)

    console.log(
      '%cĐã thêm Book:',
      'color: green;',
      JSON.stringify(newBookDoc),
      '\n',
    )

    return {
      id: newBookDoc.id,
      name: newBookDoc.name,
      author: newBookDoc.author,
      topic: newBookDoc.topic,
    }
  }

  static fetchBooks() {
    const bookDocArr: Array<BookType> =
      storage.getFromLocalStorage('bookStorage')
    return bookDocArr
  }

  static fetchOrdersByFilters(
    page: number,
    perPage: number,
    filterOpts: { search: string },
  ) {
    const { search } = filterOpts

    const bookDocArr: Collection<BookType> = collect(
      storage.getFromLocalStorage('bookStorage'),
    )

    const bookDocArrFiltered = bookDocArr.filter((book) => {
      return search === ''
        ? true
        : book.name.toLowerCase().indexOf(search) !== -1
    })
    const bookCounts = bookDocArrFiltered.all().length

    const books = bookDocArrFiltered
      .skip((page - 1) * perPage)
      .take(perPage)
      .all()

    return { books, bookCounts }
  }

  static findOneAndRemove(id: string | number): BookType {
    const bookDocArr: Array<BookType> = this.getAndParseBooks()
    const bookIndex = bookDocArr.findIndex((book) => book.id === id)
    //! using Splice method Array to delete Element by index
    // ;
    const bookDoc = bookDocArr.splice(bookIndex, 1)
    console.log('%cĐã xóa Book:', 'color: red;', JSON.stringify(bookDoc), '\n')
    //!! update bookDocArr into localStorage
    storage.saveToLocalStorage('bookStorage', bookDocArr)

    return bookDoc[0]
  }

  static findOneById(id: string | number) {
    const bookDocArr: Array<BookType> = this.getAndParseBooks()
    const book = bookDocArr.find((book) => String(book.id) === String(id))
    return book
  }

  static getAndParseBooks() {
    let bookDocArr: Array<BookType> = []
    if (storage.getFromLocalStorage('bookStorage')) {
      bookDocArr = storage
        .getFromLocalStorage('bookStorage')
        .map((book: Book) => this.parse(book))
    }
    return bookDocArr
  }

  //! parseTask is used to convert Object to Ins
  static parse(bookData: BookType) {
    const bookIns = new Book({
      id: bookData.id,
      name: bookData.name,
      author: bookData.author,
      topic: bookData.topic,
    })
    return bookIns
  }
}
