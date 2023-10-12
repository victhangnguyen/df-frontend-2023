'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import { useAppContext } from '../../Context'
import { TableBook } from '../../components/Table'
//! imp Components
import Pagination from '../../components/Pagination'
import Searchbar from '../../components/Searchbar'
import { ConfirmationModal } from '../../components/Modal'

const DATA_PER_PAGE = 5

// interface BookPageProps {
//   searchParams?: { [key: string]: string | string[] | undefined }
// }

function BookPage() {
  const {
    state,
    contextActions: { book },
  } = useAppContext()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const [search, setSearch] = useState<string>('')
  const [showModal, setShowModal] = useState<boolean>(false)

  const currentPage = Number(searchParams.get('page')) || 1

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
    setSearch(event.target.value)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const handleClickAdd = () => {
    setShowModal(true)
  }

  useEffect(() => {
    book.fetchBooksByFilters(currentPage, DATA_PER_PAGE, { search })
  }, [currentPage, search])

  return (
    <div className="container mx-auto p-1 sm:p-0">
      <Searchbar
        onSearchChange={handleSearchChange}
        onClickAdd={handleClickAdd}
      />
      <TableBook data={state.books} />
      <Pagination
        currentPage={currentPage}
        itemsCount={state.bookCounts}
        itemsPerPage={DATA_PER_PAGE}
        onPageChange={(newSelectedItem: number) =>
          handlePageChange(newSelectedItem)
        }
      />
      <ConfirmationModal isOpen={showModal} onClose={handleClose} />
    </div>
  )
}

export default BookPage
