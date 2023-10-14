import Link from 'next/link'
import { useAppContext } from '../../Context'
//! imp Components
import { DeleteIcon, EditIcon } from '../Icons'
import Table from './Table'
import { Button } from '../Buttons'
//! types
import { BookType } from '../../types'

function TableBook({ data }: { data: Array<BookType> }) {
  const {
    contextActions: { modal },
  } = useAppContext()

  const handleClickDelete = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    bookData: BookType,
  ) => {
    e.stopPropagation()
    modal.confirmDeleteBook(bookData)
  }

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
              index % 2
                ? 'bg-slate-100 dark:bg-gray-900'
                : 'bg-slate-200 dark:bg-gray-800'
            } dark:border-gray-700`}
          >
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {index + 1}
            </th>
            <td className="px-6 py-4"> {book.name}</td>
            <td className="px-6 py-4">{book.author}</td>
            <td className="px-6 py-4">{book.topic}</td>
            <td className="px-6 py-4">
              <div className="flex">
                <Button
                  icon={<DeleteIcon />}
                  variant="danger"
                  label="Delete"
                  onClick={(e) => handleClickDelete(e, book)}
                />
                <Link
                  href={`/book/${book.id}`}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <Button icon={<EditIcon />} variant="danger" label="View" />
                </Link>
              </div>
            </td>
          </tr>
        )
      })}
    </Table>
  )
}

export default TableBook
