import { useEffect, useRef, useState } from 'react'

const CustomCursor = () => {
  const cursorRef = useRef(null)
  const cursorDotRef = useRef(null)
  const requestRef = useRef(null)
  const previousTimeRef = useRef(null)
  
  const mouse = useRef({ x: 0, y: 0 })
  const cursor = useRef({ x: 0, y: 0 })
  const cursorDot = useRef({ x: 0, y: 0 })
  
  const [isHovering, setIsHovering] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Smooth lerp function for easing
  const lerp = (start, end, factor) => {
    return start + (end - start) * factor
  }

  // Update mouse position
  const updateMousePosition = (e) => {
    mouse.current = { x: e.clientX, y: e.clientY }
  }

  // Animation loop with requestAnimationFrame
  const animate = (time) => {
    if (previousTimeRef.current !== undefined) {
      // Smooth easing for main cursor (slower follow)
      cursor.current.x = lerp(cursor.current.x, mouse.current.x, 0.15)
      cursor.current.y = lerp(cursor.current.y, mouse.current.y, 0.15)

      // Faster easing for cursor dot (immediate follow)
      cursorDot.current.x = lerp(cursorDot.current.x, mouse.current.x, 0.25)
      cursorDot.current.y = lerp(cursorDot.current.y, mouse.current.y, 0.25)

      // Update cursor position
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cursor.current.x}px, ${cursor.current.y}px)`
      }

      // Update cursor dot position
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate(${cursorDot.current.x}px, ${cursorDot.current.y}px)`
      }
    }

    previousTimeRef.current = time
    requestRef.current = requestAnimationFrame(animate)
  }

  // Handle hover states
  const handleMouseEnter = () => setIsHovering(true)
  const handleMouseLeave = () => setIsHovering(false)

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)

    if (isMobile) {
      return () => window.removeEventListener('resize', checkMobile)
    }

    // Add mouse move listener
    window.addEventListener('mousemove', updateMousePosition)

    // Start animation loop
    requestRef.current = requestAnimationFrame(animate)

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input[type="submit"], input[type="button"], .cursor-pointer'
    )

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('resize', checkMobile)
      
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }

      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [isMobile])

  // Don't render on mobile
  if (isMobile) return null

  return (
    <>
      {/* Main cursor ring */}
      <div
        ref={cursorRef}
        className={`custom-cursor fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference transition-all duration-300 ease-out ${
          isHovering ? 'scale-150 opacity-50' : 'scale-100 opacity-100'
        }`}
        style={{
          width: '40px',
          height: '40px',
          marginLeft: '-20px',
          marginTop: '-20px',
        }}
      >
        <div className="w-full h-full rounded-full border-2 border-[#F5EBDC]" />
      </div>

      {/* Cursor dot */}
      <div
        ref={cursorDotRef}
        className={`custom-cursor-dot fixed top-0 left-0 pointer-events-none z-[9999] transition-all duration-200 ease-out ${
          isHovering ? 'scale-0' : 'scale-100'
        }`}
        style={{
          width: '8px',
          height: '8px',
          marginLeft: '-4px',
          marginTop: '-4px',
        }}
      >
        <div className="w-full h-full rounded-full bg-[#F5EBDC]" />
      </div>
    </>
  )
}

export default CustomCursor
