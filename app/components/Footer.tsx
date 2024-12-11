import Link from 'next/link'
import { Facebook, Twitter, LinkedinIcon as LinkedIn, GitlabIcon as GitHub } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4 text-purple-500">John Doe</h3>
            <p className="text-gray-400">Web Developer</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4 text-purple-500">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-gray-400 hover:text-purple-500 transition-colors">About</Link></li>
              <li><Link href="#skills" className="text-gray-400 hover:text-purple-500 transition-colors">Skills</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-purple-500 transition-colors">Services</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-purple-500 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-4 text-purple-500">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <LinkedIn size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <GitHub size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

