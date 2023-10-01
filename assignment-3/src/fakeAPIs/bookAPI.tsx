import { Book } from '../fakeDatabase';

const bookAPI = {
  //! Just suppose to get data from database
  fetchAll() {
    const data = Book.fetchBooks();
    return data;
  },
  create(bookData) {
    const book = Book.create(bookData);
    return book;
  },
  findOneAndRemove(id) {
    const book = Book.findOneAndRemove(id);
    return book;
  },
  fetchBooksByFilters(page, perPage, filterOpts) {
    const bookDocArr = Book.fetchOrdersByFilters(page, perPage, filterOpts);
    return bookDocArr;
  },
};

export default bookAPI;
