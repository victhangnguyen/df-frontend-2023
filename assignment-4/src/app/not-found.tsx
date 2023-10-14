import React from 'react'
import Link from 'next/link'
//! imp Comps
import { Button } from '../components/Buttons'

function PageNotFound() {
  return (
    <div className="container flex flex-col justify-center items-center mx-auto p-5 sm:p-0 min-h-[calc(100vh-20rem)]">
      <div className="content-page-not-found">
        <h3 style={{ fontSize: '4.5rem', display: 'inline-block' }}>Oops!</h3>
        <p style={{ fontSize: '3rem', display: 'inline-block' }}>404</p>
        <p style={{ fontSize: '1.15rem' }}>Page Not Found</p>
      </div>
      <div className="mt-5">
        <Link href="/">
          <Button variant="danger">Go to Home</Button>
        </Link>
      </div>
    </div>
  )
}

export default PageNotFound
