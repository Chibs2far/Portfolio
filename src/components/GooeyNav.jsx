import { useRef, useEffect, useState } from 'react'
import './GooeyNav.css'

const defaultItems = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const GooeyNav = ({ items = defaultItems, initialActiveIndex = 0 }) => {
  const containerRef = useRef(null)
  const navRef = useRef(null)
  const filterRef = useRef(null)
  const textRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex)

  const updateEffectPosition = (element) => {
    if (!containerRef.current || !filterRef.current || !textRef.current) return
    const containerRect = containerRef.current.getBoundingClientRect()
    const pos = element.getBoundingClientRect()

    const styles = {
      left: `${pos.x - containerRect.x}px`,
      top: `${pos.y - containerRect.y}px`,
      width: `${pos.width}px`,
      height: `${pos.height}px`,
    }
    Object.assign(filterRef.current.style, styles)
    Object.assign(textRef.current.style, styles)
    textRef.current.innerText = element.innerText
  }

  const handleSelection = (liEl, index) => {
    if (!liEl || activeIndex === index) return
    setActiveIndex(index)
    updateEffectPosition(liEl)

    if (filterRef.current) {
      filterRef.current.classList.remove('active')
      void filterRef.current.offsetWidth
      filterRef.current.classList.add('active')
    }

    if (textRef.current) {
      textRef.current.classList.remove('active')
      void textRef.current.offsetWidth
      textRef.current.classList.add('active')
    }
  }

  const navigateToItem = (index) => {
    const href = items[index]?.href
    if (!href) return
    if (href.startsWith('#')) {
      const target = document.querySelector(href)
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      window.location.href = href
    }
  }

  const handleClick = (e, index) => {
    e.preventDefault()
    const liEl = e.currentTarget.parentElement
    handleSelection(liEl, index)
    navigateToItem(index)
  }

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      const liEl = e.currentTarget.parentElement
      handleSelection(liEl, index)
      navigateToItem(index)
    }
  }

  useEffect(() => {
    if (!navRef.current || !containerRef.current) return
    const activeLi = navRef.current.querySelectorAll('li')[activeIndex]
    if (activeLi) {
      updateEffectPosition(activeLi)
      textRef.current?.classList.add('active')
    }

    const resizeObserver = new ResizeObserver(() => {
      const currentActiveLi = navRef.current?.querySelectorAll('li')[activeIndex]
      if (currentActiveLi) {
        updateEffectPosition(currentActiveLi)
      }
    })

    resizeObserver.observe(containerRef.current)
    return () => resizeObserver.disconnect()
  }, [activeIndex])

  return (
    <div className="gooey-nav-container" ref={containerRef}>
      <nav>
        <ul ref={navRef}>
          {items.map((item, index) => (
            <li key={item.href ?? index} className={activeIndex === index ? 'active' : ''}>
              <a
                href={item.href}
                onClick={(e) => handleClick(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <span className="effect filter" ref={filterRef} />
      <span className="effect text" ref={textRef} />
    </div>
  )
}

export default GooeyNav
