'use client'

import { motion } from 'framer-motion'

interface ExperienceItem {
  year: string
  title: string
  company: string
  description: string
}

const experiences: ExperienceItem[] = [
  {
    year: '2023 - Present',
    title: 'Senior Web Developer',
    company: 'Tech Corp',
    description: 'Leading development team in creating enterprise-level web applications.'
  },
  {
    year: '2021 - 2023',
    title: 'Full Stack Developer',
    company: 'Digital Solutions',
    description: 'Developed and maintained multiple client projects using modern technologies.'
  },
//   {
//     year: '2019 - 2021',
//     title: 'Frontend Developer',
//     company: 'Web Studio',
//     description: 'Created responsive and interactive user interfaces for various web applications.'
//   },
//   {
//     year: '2018 - 2019',
//     title: 'Junior Developer',
//     company: 'StartUp Inc',
//     description: 'Started career with focus on HTML, CSS, and JavaScript development.'
//   }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center text-purple-500"
        >
          My Experience
        </motion.h2>

        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-500/20" />

          <div className="relative">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex mb-16 items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                style={{
                  marginTop: index === 0 ? '0' : '-2rem'
                }}
              >
                <div className={`w-5/12 relative ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
                  <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                    <span className="text-purple-400 font-semibold">{exp.year}</span>
                    <h3 className="text-xl font-bold text-white mt-2">{exp.title}</h3>
                    <p className="text-purple-300 mt-1">{exp.company}</p>
                    <p className="text-gray-400 mt-2">{exp.description}</p>
                  </div>
                </div>

                {/* Timeline Marker */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="w-5 h-5 bg-purple-500 rounded-full z-10"
                  >
                    <div className="absolute w-8 h-8 bg-purple-500/20 rounded-full -left-1.5 -top-1.5 animate-ping" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}