import React, { useEffect, useRef } from 'react'
import './CursorFollower.css'

export default function CursorFollower() {
  const dotRef = useRef(null)

  useEffect(function setupCursorTrail() {
    const dot = dotRef.current
    let mouseX = 0, mouseY = 0
    let dotX = 0, dotY = 0

    function handleMouseMove(e) {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    function animate() {
      dotX += (mouseX - dotX) * 0.1
      dotY += (mouseY - dotY) * 0.1

      if (dot) {
        dot.style.transform = `translate(${dotX - 15}px, ${dotY - 18}px)`
      }

      requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', handleMouseMove)
    animate()

    return function cleanup() {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return <div className="cursor-dot" ref={dotRef}></div>
}
