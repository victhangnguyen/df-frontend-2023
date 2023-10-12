function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800 h-28">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{' '}
          <a href="https://dwarves.foundation/" className="hover:underline">
            Dwarves Foundation
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-col mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>CA: 8 Leavey Court, Toronto</li>
          <li>US: 2035 Sunset Lake, Delaware</li>
          <li>VN: 200 Ba Thang Hai, Ho Chi Minh</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
