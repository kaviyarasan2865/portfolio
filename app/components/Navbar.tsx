'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-purple-500">John Doe</Link>
        
        {/* Hamburger Menu Button */}
        <button 
          className="md:hidden text-white hover:text-purple-500"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="#about" className="hover:text-purple-500 transition-colors relative group flex items-center">
            About
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-purple-500 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
          </Link>
          <Link href="#skills" className="hover:text-purple-500 transition-colors relative group flex items-center">
            Skills
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-purple-500 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
          </Link>
          <Link href="#services" className="hover:text-purple-500 transition-colors relative group flex items-center">
            Services
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-purple-500 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
          </Link>
          <Link href="#portfolio" className="hover:text-purple-500 transition-colors relative group flex items-center">
            Portfolio
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-purple-500 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
          </Link>
          <Link href="#contact" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors flex items-center">Contact</Link>
        </div>

        {/* Mobile Menu */}
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} absolute top-full left-0 right-0 bg-gray-900 flex-col space-y-4 p-4 md:hidden`}>
          <Link href="#about" className="text-white hover:text-purple-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link href="#skills" className="text-white hover:text-purple-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
            Skills
          </Link>
          <Link href="#services" className="text-white hover:text-purple-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
            Services
          </Link>
          <Link href="#portfolio" className="text-white hover:text-purple-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
            Portfolio
          </Link>
          <Link href="#contact" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors w-full text-center" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

