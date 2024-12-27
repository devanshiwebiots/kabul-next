import { useEffect } from 'react'

const useDebounceEffect = (fn: VoidFunction, waitTime: number, deps?: any) => {
  useEffect(() => {
    const t = setTimeout(() => {
      fn.apply(undefined, deps)
    }, waitTime)

    return () => {
      clearTimeout(t)
    }
  }, deps)
}

export default useDebounceEffect;

