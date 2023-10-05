import { Poppins } from 'next/font/google'
import { generateData } from '../fakeDatabase'

const poppins = Poppins({ subsets: ['latin'], weight: ['400'] })

generateData()

export default function Home() {
  return (
    <main className={`${poppins.className}`}>
      {/* Home page */}
      <h1 className="text-3xl font-bold underline">Home Page</h1>
    </main>
  )
}
