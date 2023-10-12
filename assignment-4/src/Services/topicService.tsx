import { Topic } from '../fakeDatabase'
import { TopicType } from '../types'

export function fetchAll() {
  const data: Array<TopicType> = Topic.fetchTopics()
  return data
}
