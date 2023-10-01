import { BookType } from './Book';
import { TopicType } from './Topic';

export interface InitialStateType {
  isNavDashboardActive: boolean;
  books: Array<BookType>;
  bookCounts: number;
  topics: Array<TopicType>;
  topicCounts: number;
  loading: boolean;
  isLight: boolean;
}

export interface AppContextType {
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}
