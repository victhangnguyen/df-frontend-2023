'use client'

import React from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = ({
  itemsCount,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const pagesCount: number =
    itemsCount && itemsPerPage ? Math.ceil(itemsCount / itemsPerPage) : 1

  // types onPageChange?(selectedItem: { selected: number }): void;
  function handlePageChange(selectedItem: { selected: number }) {
    const newSelectedItem = selectedItem.selected + 1
    //! lifting state up
    onPageChange(newSelectedItem)
  }

  // curentPage - 1

  return (
    <ReactPaginate
      forcePage={pagesCount - 1}
      pageCount={pagesCount}
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
