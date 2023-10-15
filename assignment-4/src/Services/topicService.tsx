import { Topic } from '../fakeDatabase'
import { TopicType } from '../typesTS'

export function fetchAll() {
  const data: Array<TopicType> = Topic.fetchTopics()
  return data
}
