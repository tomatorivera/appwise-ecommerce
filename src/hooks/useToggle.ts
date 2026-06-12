import { useCallback, useState } from 'react'

export function useToggle(initialValue: boolean = false) {
  const [value, setValue] = useState(initialValue)

  const activate = useCallback(() => setValue(true), [])
  const deactivate = useCallback(() => setValue(false), [])
  const toggle = useCallback(() => setValue((prev) => !prev), [])

  return {
    value,
    activate,
    deactivate,
    toggle,
  }
}
