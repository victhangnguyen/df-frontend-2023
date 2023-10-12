function Searchbar({ onSearchChange, onClick }) {
  return (
    <div className="grid grid-cols-12 gap-4 my-5">
      <div className="col-start-1 col-span-8 sm:col-span-7 md:col-span-8">
        <label
          htmlFor="input-search"
          className="block mb-2 text-sm font-medium text-gray-900"
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
      <div className=" flex items-center col-start-10 col-span-3 sm:col-start-11 sm:col-span-2">
        <button
          type="button"
          className=" w-full text-white bg-rose-500 hover:bg-rose-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800"
          onClick={onClick}
        >
          Add Book
        </button>
      </div>
    </div>
  )
}

export default Searchbar
