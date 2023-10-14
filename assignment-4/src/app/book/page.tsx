'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useState, useEffect, useCallback } from 'react'
import { useAppContext } from '../../Context'
import { TableBook } from '../../components/Table'
//! imp Components
import Pagination from '../../components/Pagination'
import Searchbar from '../../components/Searchbar'
import { ConfirmationModal, CreateBookModal } from '../../components/Modal'
//! types
import { BookType } from '../../types'

const DATA_PER_PAGE = 5

// interface BookPageProps {
//   searchParams?: { [key: string]: string | string[] | undefined }
// }

function BookPage() {
  const {
    state,
    contextActions: { book, modal },
  } = useAppContext()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const [search, setSearch] = useState('')
  const [showCreateBookModal, setShowCreateBookModal] = useState(false)

  const currentPage = Number(searchParams.get('page')) || 1

  const fetchBookData = useCallback(() => {
    book.fetchBooksByFilters(currentPage, DATA_PER_PAGE, { search })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, search, DATA_PER_PAGE])
  useEffect(() => {
    fetchBookData()
  }, [fetchBookData])

  const serializeQueryString = (name: string, value: string) => {
    const urlParams = new URLSearchParams(searchParams)
    urlParams.set(name, value)

    return urlParams.toString()
  }

  const handlePageChange = (newSelectedItem: number) => {
    router.push(
      `${pathname}?${serializeQueryString('page', String(newSelectedItem))}`,
    )
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value.toLowerCase())
  }

  const handleClose = () => {
    setShowCreateBookModal(false)
  }

  const handleClickCreateBook = () => {
    setShowCreateBookModal(true)
  }

  const handleCreateBookSubmit = (
    _e: React.FormEvent<HTMLFormElement>,
    bookData: BookType,
    resetForm: () => void,
  ) => {
    book.create(bookData)
    resetForm()
    //! rerender page
    fetchBookData()
  }

  const handleConfirmSubmit = () => {
    switch (state.modalType) {
      case 'DELETE':
        book.findIdAndDelete(state.selectedId)
        modal.confirmClose()
        fetchBookData()
        break

      default:
        modal.confirmClose()
        break
    }
  }

  return (
    <div className="container mx-auto p-5 sm:p-0 min-h-[calc(100vh-20rem)]">
      <Searchbar
        onSearchChange={handleSearchChange}
        onClick={handleClickCreateBook}
      />
      <TableBook data={state.books} />
      <Pagination
        itemsCount={state.bookCounts}
        itemsPerPage={DATA_PER_PAGE}
        onPageChange={(newSelectedItem: number) =>
          handlePageChange(newSelectedItem)
        }
      />
      <CreateBookModal
        isOpen={showCreateBookModal}
        onSubmit={handleCreateBookSubmit}
        onClose={handleClose}
      />
      <ConfirmationModal onSubmit={handleConfirmSubmit} />
    </div>
  )
}

export default BookPage
