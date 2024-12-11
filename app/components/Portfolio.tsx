'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon, GithubIcon, LinkIcon } from 'lucide-react'
import img from '@/public/web-design.jpg'

interface Project {
  title: string
  description: string
  smallDescription: string
  image: string
  link: string
  category: 'Web Design' | 'Web Development' | 'Others'
}

const projects: Project[] = [
  {
    title: 'E-commerce Website',
    smallDescription: 'A fully responsive e-commerce website with a modern design',
    description: 'A fully responsive e-commerce website with a modern design',
    image: img,
    link: '#',
    category: 'Web Design'
  },
  {
    title: 'Portfolio Website',
    smallDescription: 'A sleek and professional portfolio website for a photographer',
    description: 'A sleek and professional portfolio website for a photographer',
    image: img,
    link: '#',
    category: 'Web Design'
  },
  {
    title: 'Task Management App',
    smallDescription: 'A full-stack task management application with user authentication',
    description: 'A full-stack task management application with user authentication',
    image: img,
    link: '#',
    category: 'Web Development'
  },
  {
    title: 'Weather Dashboard',
    smallDescription: 'A weather dashboard that fetches and displays real-time weather data',
    description: 'A weather dashboard that fetches and displays real-time weather data',
    image: img,
    link: '#',
    category: 'Web Development'
  },
  {
    title: 'Mobile Game',
    smallDescription: 'A casual mobile game developed using React Native',
    description: 'A casual mobile game developed using React Native',
    image: img,
    link: '#',
    category: 'Others'
  },
  {
    title: 'Data Visualization Tool',
    smallDescription: 'An interactive data visualization tool for analyzing sales data',
    description: 'An interactive data visualization tool for analyzing sales data',
    image: img,
    link: '#',
    category: 'Others'
  },
]

export default function Portfolio() {
  const [visibleProjects, setVisibleProjects] = useState(3)

  const loadMore = () => {
    if (visibleProjects + 3 >= projects.length) {
      setVisibleProjects(projects.length)
    } else {
      setVisibleProjects(visibleProjects + 3)
    }
  }

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-500">My Portfolio</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-purple-900 to-blue-900 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-purple-500/50"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover transition-all duration-300 group-hover:blur-sm"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2 text-white">{project.title}</h4>
                <span className="text-sm text-purple-300">{project.category}</span>
              </div>

              {/* Overlay Description */}
              <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 space-y-4 flex flex-col items-center">
                  <p className="text-white text-center text-sm md:text-base mb-4">
                    {project.description}
                  </p>
                  <Link
                    href={project.link}
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black text-white hover:bg-purple-700 transition-colors"
                  >
                    <GithubIcon className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleProjects < projects.length && (
          <div className="text-center mt-8">
            <button
              onClick={loadMore}
              className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors shadow-lg hover:shadow-purple-500/50"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

