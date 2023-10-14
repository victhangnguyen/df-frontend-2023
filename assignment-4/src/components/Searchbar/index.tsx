//! imp Comps
import { Button } from '../Buttons'

interface SearbarProps {
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
}

function Searchbar({ onSearchChange, onClick }: SearbarProps) {
  return (
    <div className="grid grid-cols-12 gap-4 my-5">
      <div className="col-start-1 col-span-8 sm:col-span-7 md:col-span-8">
        <label
          htmlFor="input-search"
          className="block mb-2 text-sm font-medium text-black dark:text-white "
        >
          Search
        </label>
        <input
          type="text"
          id="input-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search books with name"
          onChange={(event) => onSearchChange(event)}
        />
      </div>
      <div className="flex items-center col-start-10 col-span-3 sm:col-start-11 sm:col-span-2">
        <Button
          className="w-full flex justify-center"
          variant="danger"
          onClick={onClick}
        >
          Add Book
        </Button>
      </div>
    </div>
  )
}

export default Searchbar
