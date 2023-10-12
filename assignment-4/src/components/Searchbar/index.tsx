function Searchbar({ onSearchChange, onClickAdd }) {
  return (
    <div className="grid grid-cols-12 gap-4 my-5">
      <div className="col-start-1 col-span-8 sm:col-span-7 md:col-span-8">
        <label
          htmlFor="ipt-search"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Search
        </label>
        <input
          type="text"
          id="ipt-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search books with name"
          onChange={(event) => onSearchChange(event)}
        />
      </div>
      <div className=" flex items-center col-start-10 col-span-3 sm:col-start-11 sm:col-span-2">
        <button
          type="button"
          className=" w-full text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={onClickAdd}
        >
          Default
        </button>
      </div>
    </div>
  )
}

export default Searchbar
