'use client'

import { useEffect, useRef } from 'react'
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaJava,
} from "react-icons/fa"

export default function Skills() {
  const skillsRef = useRef(null)

  /* ---------- SCROLL ANIMATION ---------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-10')
            entry.target.classList.add('opacity-100', 'translate-y-0')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  /* ---------- FRONTEND SKILLS ---------- */
  const frontendSkills = [
    { name: 'HTML', icon: FaHtml5, color: 'text-orange-600' },
    { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-600' },
    { name: 'JavaScript', icon: FaJs, color: 'text-yellow-500' },
    { name: 'PHP', icon: FaPhp, color: 'text-indigo-500' },
    { name: 'Java', icon: FaJava, color: 'text-red-500' },
  ]

  /* ---------- DESIGN SKILLS (USING YOUR IMAGES) ---------- */
  const designSkills = [
    { name: 'Photoshop', icon: '/icons/photoshop.webp' },
    { name: 'Illustrator', icon: '/icons/OIP.webp' },
    { name: 'Figma', icon: '/icons/Figmaa.webp' },
    { name: 'InDesign', icon: '/icons/download.webp' },
    { name: 'Canva', icon: '/icons/canva.webp' },
  ]

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-gradient">My Skills</span>
        </h2>

        {/* CONTENT */}
        <div
          ref={skillsRef}
          className="space-y-16 opacity-0 translate-y-10 transition-all duration-1000"
        >

          {/* FRONTEND */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-mocha mb-8 text-center">
              Frontend Development
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {frontendSkills.map((skill) => {
                const Icon = skill.icon
                return (
                  <div
                    key={skill.name}
                    className="group bg-cream rounded-2xl p-6 shadow-md hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 text-center"
                  >
                    <div className="flex justify-center mb-3">
                      <Icon
                        size={50}
                        className={`${skill.color} group-hover:scale-110 transition`}
                      />
                    </div>

                    <h4 className="font-semibold text-darkbrown group-hover:text-mocha">
                      {skill.name}
                    </h4>
                  </div>
                )
              })}
            </div>

            <p className="text-center text-darkbrown/70 mt-4">
              + Basic backend knowledge
            </p>
          </div>

          {/* DESIGN */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-mocha mb-8 text-center">
              Graphics Design
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {designSkills.map((skill) => {
                return (
                  <div
                    key={skill.name}
                    className="group bg-cream rounded-2xl p-6 shadow-md hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 text-center"
                  >
                    <div className="flex justify-center mb-3">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-14 h-14 object-contain group-hover:scale-110 transition"
                      />
                    </div>

                    <h4 className="font-semibold text-darkbrown group-hover:text-mocha">
                      {skill.name}
                    </h4>
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}