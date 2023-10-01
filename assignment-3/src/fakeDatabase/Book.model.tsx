import collect, { Collection } from 'collect.js';
import { storage } from '../utilities';
//! imp Types

export class Book {
  public id: string | number;
  public name: string;
  public author: string;
  public topic: string;

  constructor({ id, name, author, topic }) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.topic = topic;
  }

  static create(bookDoc) {
    const id = Date.now();
    const newBookDoc: Book = new Book({
      id,
      name: bookDoc.name,
      author: bookDoc.author,
      topic: bookDoc.topic,
    });

    const bookDocArr: Array<Book> = this.getAndParseBooks();

    //! can push
    bookDocArr.unshift(newBookDoc);

    //!! update bookDocArr into localStorage
    storage.saveToLocalStorage('bookStorage', bookDocArr);

    return {
      id: newBookDoc.id,
      name: newBookDoc.name,
      author: newBookDoc.author,
      topic: newBookDoc.topic,
    };
  }

  static fetchBooks() {
    const bookDocArr: Array<Book> = storage.getFromLocalStorage('bookStorage');
    return bookDocArr;
  }

  static fetchOrdersByFilters(
    page: number,
    perPage: number,
    filterOpts: { search: string },
  ) {
    const { search } = filterOpts;

    const bookDocArr: Collection<Book> = collect(
      storage.getFromLocalStorage('bookStorage'),
    );

    const bookDocArrFiltered = bookDocArr.filter((book) => {
      return search === ''
        ? true
        : book.name.toLowerCase().indexOf(search) !== -1;
    });
    const bookCounts = bookDocArrFiltered.all().length;

    const books = bookDocArrFiltered
      .skip((page - 1) * perPage)
      .take(perPage)
      .all();

    return { books, bookCounts };
  }

  static findOneAndRemove(id: string | number): Book {
    const bookDocArr: Array<Book> = this.getAndParseBooks();
    const bookIndex = bookDocArr.findIndex((book) => book.id === id);
    //! using Splice method Array to delete Element by index
    // ;
    const bookDoc = bookDocArr.splice(bookIndex, 1);

    //!! update bookDocArr into localStorage
    storage.saveToLocalStorage('bookStorage', bookDocArr);

    return bookDoc[0];
  }

  static findOneById(id) {
    const bookDocArr: Array<Book> = this.getAndParseBooks();

    //! using Splice method Array to delete Element by index
    return bookDocArr.find((book) => book.id === id);
  }

  static getAndParseBooks() {
    let bookDocArr: Array<Book> = [];
    if (storage.getFromLocalStorage('bookStorage')) {
      bookDocArr = storage
        .getFromLocalStorage('bookStorage')
        .map((book: Book) => this.parse(book));
    }
    return bookDocArr;
  }

  //! parseTask is used to convert Object to Ins
  static parse(bookData) {
    const bookIns = new Book({
      id: bookData.id,
      name: bookData.name,
      author: bookData.author,
      topic: bookData.topic,
    });
    return bookIns;
  }
}
