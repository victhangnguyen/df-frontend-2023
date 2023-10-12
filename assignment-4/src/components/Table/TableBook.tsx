import Link from 'next/link'
import Table from './Table'
//! types
import { BookType } from '../../types'

function TableBook({ data }: { data: Array<BookType> }) {
  const tableHeaders: Array<string> = [
    'No',
    'Name',
    'Author',
    'Topic',
    'Action',
  ]
  return (
    <Table tableHeaders={tableHeaders}>
      {data.map((book, index) => {
        return (
          <tr
            key={book.id}
            className={`bg-white border-b ${
              index % 2 ? 'dark:bg-gray-900' : 'dark:bg-gray-800'
            } dark:border-gray-700`}
          >
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {index + 1}
            </th>
            <td className="px-6 py-4"> {book.name}</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">
              <Link
                href="/book/id"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </Link>
            </td>
          </tr>
        )
      })}
    </Table>
  )
}

export default TableBook
