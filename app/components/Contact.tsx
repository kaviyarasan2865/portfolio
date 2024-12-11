'use client'

import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Contact() {
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    if (!email || !subject || !message) {
      toast.error('Please fill in all fields')
      setIsLoading(false)
      return
    }
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({ email, subject, message })
      })
      
      if (response.ok) {
        toast.success('Message sent successfully')
        // Reset form after successful submission
        setEmail('')
        setSubject('')
        setMessage('')
      } else {
        toast.error('Failed to send message')
      }
    } catch (error) {
      toast.error('An error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <ToastContainer />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-500">Contact Me</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-purple-400">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}

              className="w-full px-3 py-2 bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50 text-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block mb-2 text-purple-400">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}

              className="w-full px-3 py-2 bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50 text-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 text-purple-400">Message</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}

              rows={4}
              className="w-full px-3 py-2 bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50 text-white"
            ></textarea>
          </div>
          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700 transition-colors disabled:bg-purple-400 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              'Submit'
            )}
          </button>
        </form>
      </div>
    </section>
  )
}

