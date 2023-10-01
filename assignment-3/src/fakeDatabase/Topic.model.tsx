import { storage } from '../utilities';

export class Topic {
  id: string | number;
  name: string;

  constructor({ id, name }) {
    this.id = id;
    this.name = name;
  }

  static create(topicDoc: Topic): Topic {
    const id = Date.now();

    const newTopicDoc: Topic = new Topic({
      id,
      name: topicDoc.name,
    });

    const topicDocArr: Array<Topic> = this.getAndParseTopics();

    //! push or unshift
    topicDocArr.unshift(newTopicDoc);

    //!! update topicDocArr into localStorage
    storage.saveToLocalStorage('topicStorage', topicDocArr);

    // return newTopicDoc;
    return { id: newTopicDoc.id, name: newTopicDoc.name };
  }

  static fetchTopics(): Array<Topic> {
    const topicDocArr: Array<Topic> =
      storage.getFromLocalStorage('topicStorage');
    return topicDocArr;
  }

  static findOneAndRemove(id) {
    const topicDocArr: Array<Topic> = this.getAndParseTopics();
    const topicIndex = topicDocArr.findIndex((topic) => topic.id === id);
    topicDocArr.splice(topicIndex, 1);

    storage.saveToLocalStorage('topicStorage', topicDocArr);
    return topicDocArr;
  }

  static findOneById(id: string | number) {
    const topicDocArr: Array<Topic> = this.getAndParseTopics();

    //! using Splice method Array to delete Element by index
    return topicDocArr.find((topic) => topic.id === id);
  }

  static getAndParseTopics() {
    let topicDocArr = [];
    if (storage.getFromLocalStorage('topicStorage')) {
      topicDocArr = storage
        .getFromLocalStorage('topicStorage')
        .map((topic) => this.parse(topic));
    }
    return topicDocArr;
  }

  //! parseTask is used to convert Object to Ins
  static parse(topicData: Topic) {
    const topicIns: Topic = new Topic({
      id: topicData.id,
      name: topicData.name,
    });
    return topicIns;
  }
}
