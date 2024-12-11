import Link from 'next/link'
import { Facebook, Twitter, LinkedinIcon as LinkedIn, GitlabIcon as GitHub, Mail } from 'lucide-react'

export default function Footer() {
  return (
    
    <footer className="bg-gray-900 py-8">
      <hr className="border-gray-800 border-1 border-solid p-3"/>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4 text-purple-500">Kaviyarasan G</h3>
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
              
              <a href="mailto:kaviyarasan2865@gmail.com" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Mail size={24} />
              </a>
              <a href="https://www.linkedin.com/in/kaviyarasan--g/" className="text-gray-400 hover:text-purple-500 transition-colors">
                <LinkedIn size={24} />
              </a>
              <a href="https://github.com/kaviyarasan2865" className="text-gray-400 hover:text-purple-500 transition-colors">
                <GitHub size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Kaviyarasan G. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

