'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useState, useEffect, useCallback } from 'react'
//! imp Components
import Pagination from '../../components/Pagination'
import Searchbar from '../../components/Searchbar'
import { ConfirmationModal, AddEditBookModal } from '../../components/Modal'
import { TableBook } from '../../components/Table'
//! types
import { BookType } from '../../typesTS'
//! customHooks
import { useAppContext } from '../../context'
//! services
import { bookServices } from '../../Services'

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

  const [bookDetail, setBookDetail] = useState<BookType | null>(null)
  const [search, setSearch] = useState(() => searchParams.get('q') || '')

  const currentPage = Number(searchParams.get('page')) || 1

  const [showAddEditModal, setShowAddEditModal] = useState(false)

  const fetchBookData = useCallback(() => {
    const urlSearchParams = new URLSearchParams(searchParams)
    if (!search.trim()) {
      urlSearchParams.delete('search')
      router.push(`${pathname}?${urlSearchParams.toString()}`)
    } else {
      urlSearchParams.set('q', search)
      urlSearchParams.set('page', String(currentPage))
      router.push(`${pathname}?${urlSearchParams.toString()}`)
    }

    book.fetchBooksByFilters(currentPage, DATA_PER_PAGE, { search })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, search, DATA_PER_PAGE])

  useEffect(() => {
    fetchBookData()
  }, [fetchBookData])

  const createQueryString = (name: string, value: string) => {
    const urlParams = new URLSearchParams(searchParams)
    urlParams.set(name, value)

    return urlParams.toString()
  }

  const handlePageChange = (newSelectedItem: number) => {
    router.push(
      `${pathname}?${createQueryString('page', String(newSelectedItem))}`,
    )
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value.toLowerCase())
  }

  const handleClose = () => {
    setShowAddEditModal(false)
    setBookDetail(null)
  }

  const handleClickAdd = () => {
    setShowAddEditModal(true)
  }

  const handleClickEdit = (
    _e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    bookData: BookType,
  ) => {
    setBookDetail(bookData)
    setShowAddEditModal(true)
  }

  const handleClickDelete = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    bookData: BookType,
  ) => {
    e.stopPropagation()
    modal.confirmDeleteBook(bookData)
  }

  const handleAddEditSubmit = (
    // _e: React.FormEvent<HTMLFormElement>,
    bookData,
    methods,
  ) => {
    if (!bookDetail) {
      //! if bookDetail no-exist
      //! MODE: CREATE NEW BOOK
      book.create(bookData)
      //! resetForm after create successful
      methods.reset()
      //! rerender page
      fetchBookData()
    } else {
      //! if bookDetail exist
      //! MODE: EDIT
      bookServices.findOneAndUpdate(bookDetail!.id!, bookData)
      //! rerender page
      setShowAddEditModal(false)
      fetchBookData()
    }
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
        onClickAdd={handleClickAdd}
      />
      <TableBook
        data={state.books}
        onClickDelete={handleClickDelete}
        onClickEdit={handleClickEdit}
      />
      <Pagination
        itemsCount={state.bookCounts}
        itemsPerPage={DATA_PER_PAGE}
        currentPage={currentPage}
        onPageChange={(newSelectedItem: number) =>
          handlePageChange(newSelectedItem)
        }
      />
      <AddEditBookModal
        book={bookDetail}
        isOpen={showAddEditModal}
        onSubmit={handleAddEditSubmit}
        onClose={handleClose}
      />
      <ConfirmationModal onSubmit={handleConfirmSubmit} />
    </div>
  )
}

export default BookPage
