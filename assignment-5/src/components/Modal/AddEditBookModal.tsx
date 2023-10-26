import React, { useState, useEffect } from 'react'
//! types
import { BookType, TopicType } from '../../typesTS'
//! components
import Modal from './Modal'
import AddEditBookForm from '../Form/AddEditBookForm'
//! services
import { topicService } from '../../Services'

interface AddEditBookModalProps {
  book?: BookType | null
  isOpen: boolean
  onClose: (e: KeyboardEvent | React.MouseEvent<HTMLButtonElement>) => void
  onSubmit: (
    bookData: BookType,
    methods: object,
    e: React.FormEvent<HTMLFormElement>,
  ) => void
}

function AddEditBookModal({
  book,
  isOpen,
  onClose,
  onSubmit,
}: AddEditBookModalProps) {
  const [topics, setTopics] = useState<Array<TopicType>>([])

  useEffect(() => {
    const data = topicService.fetchAll()
    setTopics(data)
  }, [])

  return (
    <Modal
      title={book ? 'Edit Book' : 'Create New Book'}
      isOpen={isOpen}
      onClose={onClose}
    >
      <AddEditBookForm
        book={book}
        topics={topics}
        onSubmit={onSubmit}
        onClose={onClose}
      />
    </Modal>
  )
}

export default AddEditBookModal
