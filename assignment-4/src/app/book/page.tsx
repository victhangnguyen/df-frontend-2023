'use client'

import React from 'react'
import { useAppContext } from '../../Context'
import TableBook from '../../components/TableBook'
import { generateData } from '../../fakeDatabase'
import defaultExport from '../../components/Pagination'

const DATA_PER_PAGE = 5
const TOTAL_DATA = 37

interface BookPageProps {
  searchParams?: { [key: string]: string | string[] | undefined }
}

function BookPage({ searchParams }: BookPageProps) {
  const {
    state,
    contextActions: { book },
  } = useAppContext()

  console.log('searchParams: ', searchParams)

  // const currentPage: number = Number(searchParams?.page) || 1
  const currentPage: number = 4
  
  // const totalPages = Math.ceil(TOTAL_DATA / DATA_PER_PAGE)
  const totalPages = 10

  let offset: number = (currentPage - 1) * DATA_PER_PAGE

  console.log('totalPages: ', totalPages)

  const pageNumbers: Array<number> = []

  for (let i: number = currentPage - 3; i <= currentPage + 3; i++) {
    if (i < 1) continue
    if (i > currentPage) break
    pageNumbers.push(i)
  }
  console.log('pageNumbers: ', pageNumbers)

  React.useEffect(() => {
    generateData()

    book.fetchBooksByFilters(currentPage, DATA_PER_PAGE, {
      search: '',
    })
  }, [])

  console.log('state.books: ', state.books)

  React.useEffect(() => {
    book.fetchBooksByFilters(currentPage, DATA_PER_PAGE, { search: 'the' })
  }, [currentPage])

  return (
    <h1>
      <div className="container mx-auto">
        <TableBook data />
      </div>
    </h1>
  )
}

export default BookPage
// export default function Page({
//   params,
//   searchParams,
// }: {
//   params: { slug: string };
//   searchParams?: { [key: string]: string | string[] | undefined };
// }) {
//   return <h1>{searchParams?.greeting || "Hello!"}</h1>;
// }
