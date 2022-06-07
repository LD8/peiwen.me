import { useState, useEffect } from 'react'

const useScrollingDown = (threshold = 200) => {
  const [scrollingDown, setScrollingDown] = useState(true)

  useEffect(() => {
    let lastScrollY = window.pageYOffset
    let ticking = false

    const onScroll = () => {
      if (!ticking) {
        // NOTE: make sure to call the func before each window repaint
        window.requestAnimationFrame(() => {
          const scrollY = window.pageYOffset

          if (scrollY <= threshold) {
            setScrollingDown(true)
            return (ticking = false)
          }
          // if (Math.abs(scrollY - lastScrollY) < threshold) {
          //   return (ticking = false)
          // }

          setScrollingDown(scrollY > lastScrollY)
          lastScrollY = scrollY
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollingDown, threshold])

  return scrollingDown
}

export default useScrollingDown
