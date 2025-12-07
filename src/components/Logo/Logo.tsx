'use client'

import clsx from 'clsx'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      alt="Payload Logo"
      width={193}
      height={34}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx(
        'max-w-[9.375rem] w-full h-[34px] transition-all duration-300',
        className
      )}
      src="https://images.squarespace-cdn.com/content/v1/65ab4d7b45211b4f7c319cd8/93ee2a98-2344-4b95-9e65-04b94f595183/AK_%281%29+3.png?format=1500w"
    />
  )
}
