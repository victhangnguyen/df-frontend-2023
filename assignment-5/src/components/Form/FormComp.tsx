import React from 'react'
import { z } from 'zod'
import { useForm, useWatch } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

interface FormCompProps {
  initialValues: string
  validationSchema: z.Schema
  onSubmit: (data: {}, methods, event) => void
  children: React.ReactNode
}

const FormComp = ({
  initialValues,
  validationSchema,
  onSubmit,
  children,
  ...rest
}: FormCompProps) => {
  const resolver = zodResolver(validationSchema)

  const methods = useForm({
    resolver,
    mode: 'onTouched',
    criteriaMode: 'all',
  })

  const watchAllFields = useWatch({ control: methods.control })
  console.log('watch Fields: ', watchAllFields)

  const fields = children.map((child) => child?.props?.name)

  //! initialize Values
  React.useEffect(() => {
    if (!initialValues) return

    if (Object.keys(initialValues).length) {
      fields.forEach((field) => {
        if (!field) return
        methods.setValue(field, initialValues[field])
      })
    }
  }, [JSON.stringify(initialValues)])

  // const checkKeyDown = (e) => {
  //   if (e.code === 'Enter') {
  //     if (e.target.nodeName !== 'TEXTAREA') {
  //       e.preventDefault()
  //     }
  //   }
  // }

  return (
    <form
      noValidate
      onSubmit={() =>
        methods.handleSubmit((data, event) => onSubmit(data, methods, event))
      }
      // onKeyDown={(e) => checkKeyDown(e)}
      {...rest}
    >
      {Array.isArray(children)
        ? children.map((child) => {
            return child?.props?.name
              ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    key: child.props.name,
                    methods,
                  },
                })
              : child
          })
        : children}
    </form>
  )
}

export default FormComp
