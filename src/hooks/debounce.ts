import { useState } from 'react'
import { useEffect } from 'react'

export function useDebounce(value: string, delay = 1000): string {

  const [debounce, setDebounce] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => setDebounce(value), delay)
    return () => clearTimeout(handler)
  }, [value, delay])
  return (
    debounce
  )
}