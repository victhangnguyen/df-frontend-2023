import * as actionTypes from './actionTypes';
//! types
import { BookType, TopicType } from '../types';

export interface InitialStateType {
  isNavDashboardActive: boolean;
  books: Array<BookType>;
  bookCounts: number;
  topics: Array<TopicType>;
  topicCounts: number;
  loading: boolean;
  isLight: boolean;
}

export const initialState = {
  //! NavDashboard
  isNavDashboardActive: false,
  //! BookState
  books: [],
  bookCounts: 0,
  //! TopicState
  topics: [],
  topicCounts: 0,
  //! loading
  loading: false,
  //! dark light mode
  isLight: true,
};

export function combineReducer(state, action) {
  switch (action.type) {
    //! navDashboardReducer
    case actionTypes.COLLAPSE_NAV_DASHBOARD:
      return {
        ...state,
        isNavDashboardActive: true,
      };
    case actionTypes.OPEN_NAV_DASHBOARD:
      return {
        ...state,
        isNavDashboardActive: false,
      };

    //! bookReducer
    case actionTypes.FETCH_ALL_BOOK:
      return {
        ...state,
        books: action.payload,
      };
    case actionTypes.CREATE_ONE_BOOK:
      return {
        ...state,
        books: [action.payload, ...state.books],
      };

    case actionTypes.DELETE_ONE_BOOK:
      return {
        ...state,
        books: state.books.filter(
          (book) => String(book.id) !== String(action.payload.id),
        ),
        bookCounts: state.bookCounts - 1,
      };
    case actionTypes.FETCH_BOOKS_BY_FILTERS:
      return {
        ...state,
        books: action.payload.books,
        bookCounts: action.payload.bookCounts,
      };

    //! topicReducer
    case actionTypes.FETCH_ALL_TOPIC:
      return {
        ...state,
        topics: action.payload,
      };
    case actionTypes.CREATE_ONE_TOPIC:
      return {
        ...state,
        topics: [action.payload, ...state.topics],
      };
    case actionTypes.DELETE_ONE_TOPIC:
      return {
        ...state,
        topics: action.payload,
      };
    case actionTypes.FETCH_TOPICS_BY_FILTERS:
      return {
        ...state,
        topics: action.payload,
      };
    //dark light mode
    case actionTypes.TOGGLE_DARK_LIGHT:
      return {
        ...state,
        isLight: !state.isLight,
      };

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
