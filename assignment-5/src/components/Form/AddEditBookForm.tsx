import { useMemo, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '../Buttons'
//! @types
import { TopicType } from '../../typesTS'

function AddEditBookForm({ book, topics, onClose, onSubmit }) {
  const bookSchema = useMemo(
    () =>
      z.object({
        name: z
          .string()
          .min(5, { message: 'Minimum of 5 characters, required' }),
        author: z
          .string()
          .min(5, { message: 'Minimum of 5 characters, required' })
          .refine(
            (val) => {
              return /^[A-Za-z ]+$/.test(val)
            },
            {
              message: 'Author name can only contain letters and spaces',
            },
          ),
        topic: z
          .string()
          .min(1, 'Topic is required')
          .refine(
            (val) => {
              return topics.map((topic: TopicType) => topic.name).includes(val)
            },
            {
              message: 'Must select from available options',
            },
          ),
      }),
    [],
  )

  type BookSchema = z.infer<typeof bookSchema>

  const { register, handleSubmit, reset, formState, setValue } =
    useForm<BookSchema>({
      resolver: zodResolver(bookSchema),
    })

  useEffect(() => {
    if (book) {
      for (const [key, value] of Object.entries(book)) {
        setValue(key as 'name' | 'author' | 'topic', value as string)
      }
    }
  }, [book, setValue])

  const renderOptions = topics.map((opt) => {
    return <option key={opt.id}>{opt.name}</option>
  })

  console.log('formState.errors:', formState.errors)

  return (
    <form
      className="p-5"
      onSubmit={handleSubmit((data, event) =>
        onSubmit(data, { reset, formState }, event),
      )}
    >
      <div className="mb-6">
        <label
          htmlFor="input-name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Name
        </label>
        <input
          type="text"
          id="input-name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter book's name..."
          {...register('name')}
        />
        {formState.errors.name && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            {formState.errors.name.message}
          </p>
        )}
      </div>
      <div className="mb-6">
        <label
          htmlFor="iput-author"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Author
        </label>
        <input
          type="text"
          id="iput-author"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter book's author..."
          {...register('author')}
        />
        {formState.errors.author && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            {formState.errors.author.message}
          </p>
        )}
      </div>
      <div className="mb-6">
        <label
          htmlFor="select-topic"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Topic
        </label>
        <select
          id="select-topic"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...register('topic')}
        >
          <option value="">Choose a Topic</option>
          {renderOptions}
        </select>
        {formState.errors.topic && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            {formState.errors.topic.message}
          </p>
        )}
      </div>
      {/* <!-- Modal footer --> */}
      <div className="flex items-center justify-end p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
        <Button
          type="submit"
          variant="danger"
          className="mx-4 uppercase text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {book ? 'Edit' : 'Create'}
        </Button>
        <Button
          type="button"
          variant="outline-danger"
          className="mx-4 uppercase text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          onClick={onClose}
        >
          Cancle
        </Button>
      </div>
    </form>
  )
}

export default AddEditBookForm
