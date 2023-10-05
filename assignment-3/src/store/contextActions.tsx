import React from 'react';
import BookAPI from '../fakeAPIs/bookAPI';
import TopicAPI from '../fakeAPIs/topicAPI';
import * as actionTypes from './actionTypes';
import { BookType, TopicType } from '../types';

export const createContextActions: (
  dispatch: React.Dispatch<{ type: string; payload?: any }>,
) => any = (dispatch) => {
  return {
    //! navDashboardContextActions
    navDashboard: {
      open: () => {
        dispatch({ type: actionTypes.OPEN_NAV_DASHBOARD });
      },
      collapse: () => {
        dispatch({ type: actionTypes.COLLAPSE_NAV_DASHBOARD });
      },
    },
    //! bookContextActions
    book: {
      fetchAll: () => {
        const response = BookAPI.fetchAll();
        dispatch({
          type: actionTypes.FETCH_ALL_BOOK,
          payload: response,
        });
      },
      create: (bookData: BookType) => {
        const response = BookAPI.create(bookData);
        dispatch({
          type: actionTypes.CREATE_ONE_BOOK,
          payload: response,
        });
      },
      findIdAndDelete: (id: string | number) => {
        const response = BookAPI.findOneAndRemove(id);
        dispatch({ type: actionTypes.DELETE_ONE_BOOK, payload: response });
      },
      fetchBooksByFilters: (
        page: number,
        perPage: number,
        { search = '' }: { search: string },
      ) => {
        const response = BookAPI.fetchBooksByFilters(page, perPage, { search });
        dispatch({
          type: actionTypes.FETCH_BOOKS_BY_FILTERS,
          payload: response,
        });
      },
    },
    //! topicContextActions
    topic: {
      fetchAll: () => {
        const response = TopicAPI.fetchAll();
        dispatch({
          type: actionTypes.FETCH_ALL_TOPIC,
          payload: response,
        });
      },
      create: (topicData: TopicType) => {
        const response = TopicAPI.create(topicData);
        dispatch({
          type: actionTypes.CREATE_ONE_TOPIC,
          payload: response,
        });
      },
      findIdAndDelete: (id: string | number) => {
        const response = TopicAPI.findOneAndRemove(id);
        dispatch({ type: actionTypes.DELETE_ONE_TOPIC, payload: response });
      },
      fetchTopicsByFilter: ({ search = '' }: { search: string }) => {
        const response = TopicAPI.fetchTopicsByFilters({ search });
        dispatch({
          type: actionTypes.FETCH_TOPICS_BY_FILTERS,
          payload: response,
        });
      },
    },
    darkMode: {
      toggle: () => {
        dispatch({
          type: actionTypes.TOGGLE_DARK_LIGHT,
        });
      },
    },
  };
};
