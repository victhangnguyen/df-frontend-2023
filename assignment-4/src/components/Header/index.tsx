'use client'

import Image from 'next/image'
//! Comps
import { ThemeSwitcher } from '../Buttons'
// import { useAppContext } from '../../Context'

function Header() {
  // const { state, contextActions } = useAppContext()

  return (
    <header className="flex items-center justify-between bg-rose-100 dark:bg-rose-700 text-white border-solid border-b-4 border-b-rose-800 p-4">
      <h1 className="text-rose-700 dark:text-white text-xl font -semibold ">
        BookStore
      </h1>

      <div className="flex items-center">
        <ThemeSwitcher />
        <span className="text-slate-900 dark:text-white mx-3">John Doe</span>
        <Image
          className="w-10 h-10 p-1 rounded-full ring-2 ring-rose-800 dark:ring"
          width={20}
          height={20}
          src="/images/avatar.jpg"
          alt="Avatar"
        />
      </div>
    </header>
  )
}

export default Header
