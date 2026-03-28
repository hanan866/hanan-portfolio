'use client'

import { useEffect, useRef } from 'react'

export default function About() {
  const aboutRef = useRef(null)

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 px-6 bg-beige/30">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-gradient">About Me</span>
        </h2>

        {/* CONTENT */}
        <div 
          ref={aboutRef}
          className="grid md:grid-cols-2 gap-12 items-center opacity-0 translate-y-10 transition-all duration-1000"
        >

          {/* LEFT SIDE */}
          <div className="space-y-6">
            <p className="text-lg text-darkbrown/90 leading-relaxed">
              I am a Computer Science student with a strong interest in building modern, 
              user-focused digital experiences. My work combines technical development 
              with a deep understanding of visual design to create solutions that are 
              both functional and aesthetically refined.
            </p>
            
            <p className="text-lg text-darkbrown/90 leading-relaxed">
              With a background in graphics design, I bring a creative perspective into 
              development, allowing me to design and build interfaces that are clear, 
              engaging, and effective. I am continuously learning and improving my skills 
              to stay aligned with current technologies and design trends.
            </p>

            {/* QUICK FACTS */}
            <div className="pt-6">
              <h3 className="text-2xl font-semibold text-mocha mb-4">
                Quick Facts
              </h3>

              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-mocha rounded-full"></span>
                  <span className="text-darkbrown">
                    Computer Science Student
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-mocha rounded-full"></span>
                  <span className="text-darkbrown">
                    Graphics Design Graduate
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-mocha rounded-full"></span>
                  <span className="text-darkbrown">
                    Experience in frontend development
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-mocha rounded-full"></span>
                  <span className="text-darkbrown">
                    Completed 20+ design projects
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE (YOUR IMAGE HERE) */}
          {/* RIGHT SIDE (YOUR IMAGE HERE) */}
<div className="w-full h-full flex items-center justify-center">
  <img
    src="/icons/photo.png"   // use PNG with transparent background
    alt="Profile"
    className="w-full h-full object-contain"
  />
</div>

        </div>
      </div>
    </section>
  )
}