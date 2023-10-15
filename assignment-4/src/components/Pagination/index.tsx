'use client'

import React, { useState, useLayoutEffect } from 'react'
import ReactPaginate from 'react-paginate'

interface PaginationProps {
  itemsCount: number
  itemsPerPage: number
  currentPage: number
  onPageChange: (newSelectedItem: number) => void
}

const Pagination = ({
  itemsCount,
  itemsPerPage,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const [currentPagePagination, setCurrentPagePagination] = useState(1)

  const pageCount: number =
    itemsCount && itemsPerPage ? Math.ceil(itemsCount / itemsPerPage) : 1

  // types onPageChange?(selectedItem: { selected: number }): void;
  function handlePageChange(selectedItem: { selected: number }) {
    const newSelectedItem = selectedItem.selected + 1
    //! lifting state up
    onPageChange(newSelectedItem)
  }

  useLayoutEffect(() => {
    setCurrentPagePagination(currentPage)
  }, [currentPage])

  return (
    <ReactPaginate
      forcePage={currentPagePagination - 1}
      pageCount={pageCount}
      onPageChange={(selectedItem) => handlePageChange(selectedItem)}
      containerClassName="pagination-container"
      disabledClassName="pagination-disabled"
      activeClassName="pagination-active"
      previousLinkClassName="pagination-previous-link"
      nextLinkClassName="pagination-next-link"
      previousLabel="Previous"
      nextLabel="Next"
    />
  )
}

export default Pagination
