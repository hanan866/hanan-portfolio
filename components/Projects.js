'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const [showProjects, setShowProjects] = useState(false)

  /* ---------- DATA ---------- */
  const graphicsProjects = [
    { title: 'Logo Design 1', description: 'Professional logo for branding', tech: ['Illustrator'], image: '/projects/logo1.jpg' },
    { title: 'Logo Design 2', description: 'Creative logo concept', tech: ['Illustrator'], image: '/projects/logo2.jpg' },

    { title: 'Social Post 1', description: 'Social media promotional design', tech: ['Photoshop'], image: '/projects/post1.jpg' },
    { title: 'Social Post 2', description: 'Instagram marketing post', tech: ['Photoshop'], image: '/projects/post2.jpg' },
    { title: 'Social Post 3', description: 'Creative content design', tech: ['Photoshop'], image: '/projects/post3.jpg' },

    { title: 'Animation 1', description: 'Motion graphics project', tech: ['After Effects'], image: '/projects/animation1.jpg' },

    { title: 'Business Card 1', description: 'Corporate card design', tech: ['Illustrator'], image: '/projects/business1.jpg' },
    { title: 'Business Card 2', description: 'Modern card layout', tech: ['Illustrator'], image: '/projects/business2.jpg' },
  ]

  const webProjects = [
    { title: 'Portfolio Website', description: 'Personal portfolio', tech: ['HTML', 'CSS', 'JS'], image: '/projects/web1.jpg' },
    { title: 'Landing Page', description: 'Responsive landing page', tech: ['HTML', 'CSS'], image: '/projects/web2.jpg' },
  ]

  const allProjects = [...graphicsProjects, ...webProjects]

  const filteredProjects =
    filter === 'all'
      ? allProjects
      : filter === 'graphics'
      ? graphicsProjects
      : webProjects

  return (
    <section id="projects" className="py-16 px-6 bg-beige/30">
      <div className="max-w-6xl mx-auto text-center">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          <span className="text-gradient">My Creative Work</span>
        </h2>

        {/* PREMIUM BUTTON */}
        <button
          onClick={() => setShowProjects(!showProjects)}
          className="relative px-10 py-3 font-bold text-cream rounded-full bg-gradient-to-r from-mocha to-darkbrown shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 group"
        >
          {/* Shine Effect */}
          <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></span>

          {/* Text */}
          <span className="relative z-10 tracking-wide text-lg">
            {showProjects ? 'Hide Projects' : 'View My Work'}
          </span>
        </button>

        {/* PROJECT SECTION */}
        {showProjects && (
          <>
            {/* FILTER */}
            <div className="flex justify-center gap-3 mt-10 mb-8 flex-wrap">
              {['all', 'graphics', 'web'].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-5 py-2 rounded-full text-sm transition ${
                    filter === type
                      ? 'bg-mocha text-cream'
                      : 'bg-cream text-darkbrown hover:bg-beige'
                  }`}
                >
                  {type === 'all'
                    ? 'All'
                    : type === 'graphics'
                    ? 'Graphics'
                    : 'Web'}
                </button>
              ))}
            </div>

            {/* GRID */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-cream rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
                >
                  {/* IMAGE */}
                  <div className="h-32 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-500"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-3">
                    <h3 className="text-sm font-semibold text-darkbrown group-hover:text-mocha">
                      {project.title}
                    </h3>

                    <p className="text-xs text-darkbrown/70 mt-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mt-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-[10px] px-2 py-1 bg-beige rounded-full text-darkbrown"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

      </div>
    </section>
  )
}