'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
    // Reset form after submission
    setFormData({ email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-500">Contact Me</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-purple-400">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50 text-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block mb-2 text-purple-400">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50 text-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 text-purple-400">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 py-2 bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50 text-white"
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700 transition-colors">
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

