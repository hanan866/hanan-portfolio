'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6">
  <div className="text-center max-w-4xl">
    
    <h1 className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight">
      <span className="gradient-text">Hanan Siraj</span>
    </h1>

    <p className="text-xl md:text-2xl mb-6 text-[var(--mocha)] font-light">
      Frontend Developer & Graphics Designer
    </p>

    <p className="max-w-2xl mx-auto text-lg text-[var(--darkbrown)]/70 mb-10">
      Computer Science student crafting elegant digital experiences 
      with modern frontend technologies and creative design thinking.
    </p>

    <div className="flex justify-center gap-6">
      <a
        href="#projects"
        className="px-8 py-4 rounded-full bg-[var(--mocha)] text-white hover:scale-105 transition-all duration-300 shadow-lg"
      >
        View Projects
      </a>

      <a
        href="#contact"
        className="px-8 py-4 rounded-full border-2 border-[var(--mocha)] text-[var(--mocha)] hover:bg-[var(--mocha)] hover:text-white transition-all duration-300"
      >
        Contact Me
      </a>
    </div>

  </div>
</section>
    
  )
}