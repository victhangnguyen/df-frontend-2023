import React, { useState, useEffect } from 'react'
//! types
import { BookType, TopicType } from '../../typesTS'
//! components
import Modal from './Modal'
import { Button } from '../Buttons'
//! services
import { topicService } from '../../Services'

type InputOrSelectTarget = HTMLInputElement | HTMLSelectElement

interface ChangeEvent<T extends InputOrSelectTarget> {
  target: T
  type: string
}

type HandleChange = (event: ChangeEvent<InputOrSelectTarget>) => void

interface AddEditBookModalProps {
  book?: BookType | null
  isOpen: boolean
  onClose: (e: KeyboardEvent | React.MouseEvent<HTMLButtonElement>) => void
  onSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    bookData: BookType,
    resetForm: () => void,
  ) => void
}

function AddEditBookModal({
  book,
  isOpen,
  onClose,
  onSubmit,
}: AddEditBookModalProps) {
  const [values, setValues] = useState({
    name: '',
    author: '',
    topic: '',
  })

  useEffect(() => {
    setValues({
      name: book?.name || '',
      author: book?.author || '',
      topic: book?.topic || '',
    })
  }, [book])

  const [topics, setTopics] = useState<Array<TopicType>>([])

  function resetForm() {
    setValues({
      name: '',
      author: '',
      topic: '',
    })
  }

  // Type '(e: React.ChangeEvent<HTMLInputElement>) => void' is not assignable to type 'ChangeEventHandler<HTMLSelectElement>'.
  const handleChange: HandleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  useEffect(() => {
    const data = topicService.fetchAll()
    setTopics(data)
  }, [])

  const renderOptions = topics.map((opt) => {
    return <option key={opt.id}>{opt.name}</option>
  })

  return (
    <Modal
      title={book ? 'Edit Book' : 'Create New Book'}
      isOpen={isOpen}
      onClose={onClose}
    >
      {/* <!-- Modal body --> */}
      <form
        className="p-5"
        onSubmit={(e) => {
          e.preventDefault()
          const bookData = {
            name: values.name,
            author: values.author,
            topic: values.topic,
          }

          onSubmit(e, bookData, resetForm)
        }}
      >
        <div className="mb-6">
          <label
            htmlFor="input-name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="input-name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="name"
            placeholder="Enter book's name..."
            value={values.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="iput-author"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Author
          </label>
          <input
            type="text"
            id="iput-author"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="author"
            placeholder="Enter book's author..."
            value={values.author}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="select-topic"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Topic
          </label>
          <select
            id="select-topic"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="topic"
            value={values.topic}
            onChange={handleChange}
          >
            <option value="">Choose a Topic</option>
            {renderOptions}
          </select>
        </div>
        {/* <!-- Modal footer --> */}
        <div className="flex items-center justify-end p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
          <Button
            type="submit"
            variant="danger"
            className="mx-4 uppercase text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {book ? 'Edit' : 'Create'}
          </Button>
          <Button
            type="button"
            variant="outline-danger"
            className="mx-4 uppercase text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            onClick={onClose}
          >
            Cancle
          </Button>
        </div>
      </form>
    </Modal>
  )
}

export default AddEditBookModal
