import { Topic } from '../fakeDatabase';

const topicAPI = {
  //! Just suppose to get data from database
  fetchAll() {
    const topicDocs = Topic.fetchTopics();
    return topicDocs;
  },
  create(topicData) {
    const topic = Topic.create(topicData);
    return topic;
  },
  findOneAndRemove(id) {
    const data = Topic.findOneAndRemove(id);
    return data;
  },
  fetchTopicsByFilters({ search = '' }) {
    const topicDocArr = Topic.fetchTopics();
    const topicDocArrFiltered = topicDocArr.filter((topic) => {
      return search === ''
        ? true
        : topic.name.toLowerCase().indexOf(search) !== -1;
    });
    return topicDocArrFiltered;
  },
};

export default topicAPI;
