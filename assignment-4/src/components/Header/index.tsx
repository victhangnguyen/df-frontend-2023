import Image from 'next/image'

function Header() {
  return (
    <header className="flex items-center justify-between bg-neutral-100 text-white border-solid border-4 border-b-rose-800 p-4">
      <h1 className="text-rose-800 text-xl font-semibold ">BookStore</h1>
      {/* <nav className="flex space-x-4">
        <Link href="">Trang chủ</Link>
        <Link href="#">Giới thiệu</Link>
        <Link href="#">Liên hệ</Link>
      </nav> */}
      <div className="flex items-center">
        <span className="text-slate-900">John Doe</span>
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
// <nav className="container mx-auto flex items-center border-b-2 bg-rose-500">
//   <div className="grow">
//     <h1 className="text-white">Book Store</h1>
//     <Image
//       className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring"
//       width={20}
//       height={20}
//       src="/images/avatar.jpg"
//       alt="Avatar"
//     />
//     <span className="username">John Doe</span>
//   </div>
// </nav>
