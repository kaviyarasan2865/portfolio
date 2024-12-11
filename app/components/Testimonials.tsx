'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import image from '@/public/me.jpg'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'John Smith',
      role: 'CEO, Tech Corp',
      content: 'Working with this developer was an absolute pleasure. Their expertise and dedication resulted in an outstanding website that exceeded our expectations.',
      image: image
    },
    {
      name: 'Jane Doe',
      role: 'CTO, Innovate Inc',
      content: 'The web application developed for our company showcases exceptional quality and attention to detail. Highly recommended!',
      image: image
    },
    {
      name: 'Mike Johnson',
      role: 'Founder, StartUp Hub',
      content: 'Impressive technical skills combined with great communication made the development process smooth and efficient.',
      image: image
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-500">Testimonials</h2>
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonials */}
          <div className="relative overflow-hidden" style={{ height: '200px' }}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="absolute top-0 left-0 w-full transition-all duration-500 ease-in-out"
                style={{
                  transform: `translateX(${(index - currentIndex) * 100}%)`,
                  opacity: index === currentIndex ? 1 : 0.5,
                }}
              >
                <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold text-purple-400">{testimonial.name}</h3>
                      <p className="text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="italic text-gray-300">&quot;{testimonial.content}&quot;</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-purple-500' : 'bg-gray-600 hover:bg-purple-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

