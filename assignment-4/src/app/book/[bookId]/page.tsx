//! imp Comps

type Param = {
  params: {
    bookId: string
  }
}

export default function Page({ params }: Param) {
  console.log('params.bookId: ', params.bookId)
  return (
    <div>
      <div>My Post: {params.bookId}</div>
    </div>
  )
}
