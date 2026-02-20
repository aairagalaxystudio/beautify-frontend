'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ParallaxSection({ children }: any) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100])

  return (
    <motion.section
      ref={ref}
      style={{ y }}
      className="parallax-section"
    >
      {children}
    </motion.section>
  )
}