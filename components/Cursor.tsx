'use client'

import { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    const cursor = document.querySelector('.cursor') as HTMLElement

    const move = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
    }

    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return <div className="cursor"></div>
}