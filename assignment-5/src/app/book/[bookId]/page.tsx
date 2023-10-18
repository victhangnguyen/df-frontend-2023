'use client'

import Link from 'next/link'
import { notFound, useRouter } from 'next/navigation'
import React, { useLayoutEffect, useState } from 'react'
import { bookServices } from '../../../Services'
//! imp Comps
import { Button } from '../../../components/Buttons'
import { DeleteIcon } from '../../../components/Icons'
import { ConfirmationModal } from '../../../components/Modal'
//! imp types
import { BookType } from '../../../typesTS'

import { useAppContext } from '../../../context'

type Param = {
  params: {
    bookId: string
  }
}

export default function Page({ params }: Param) {
  const {
    state,
    contextActions: { modal, book },
  } = useAppContext()
  const router = useRouter()
  const [bookDoc, setBookDoc] = useState<BookType>({
    id: '',
    name: '',
    author: '',
    topic: '',
  })

  //! findOneById
  useLayoutEffect(() => {
    const bookDoc = bookServices.findOneById(params.bookId)

    if (!bookDoc) {
      return notFound()
    }

    setBookDoc(bookDoc!)
    // fetchBook()
    //! effect
  }, [params.bookId])

  const handleClickDelete = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    bookData: BookType,
  ) => {
    e.stopPropagation()
    modal.confirmDeleteBook(bookData)
  }

  const handleConfirmSubmit = () => {
    switch (state.modalType) {
      case 'DELETE':
        book.findIdAndDelete(state.selectedId)
        modal.confirmClose()
        router.back()
        break

      default:
        modal.confirmClose()
        break
    }
  }

  const handleClickBackHome = () => {
    router.back()
  }

  return (
    <div className="container mx-auto p-5 sm:p-0 min-h-[calc(100vh-20rem)]">
      <Button variant="outline-danger" onClick={handleClickBackHome}>
        Ve truoc
      </Button>
      <div className="information">
        <ul>
          <li>
            <span className="font-bold">ID:</span> {bookDoc.id}
          </li>
          <li>
            <span className="font-bold">Name:</span> {bookDoc.name}
          </li>
          <li>
            <span className="font-bold">Author:</span> {bookDoc.author}
          </li>
          <li>
            <span className="font-bold">Topic:</span> {bookDoc.topic}
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <Button
          icon={<DeleteIcon />}
          variant="danger"
          label="Delete"
          onClick={(e) => handleClickDelete(e, bookDoc)}
        />
      </div>
      <ConfirmationModal onSubmit={handleConfirmSubmit} />
    </div>
  )
}
