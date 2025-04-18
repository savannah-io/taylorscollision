'use client'

import Link from 'next/link'
import { PhoneIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      {/* Top bar */}
      <div className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white py-2.5">
        <div className="container">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm">
              <motion.a 
                href="tel:+17704950050" 
                className="flex items-center gap-2 hover:text-primary-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <PhoneIcon className="h-4 w-4" />
                <span className="font-medium tracking-wide">(770) 495-0050</span>
              </motion.a>
              <motion.a 
                href="https://goo.gl/maps/your-maps-link" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:text-primary-100 transition-colors text-center sm:text-left"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MapPinIcon className="h-4 w-4 flex-shrink-0" />
                <span className="font-medium tracking-wide">2785 Buford Hwy Ste 101-C, Duluth, GA 30096</span>
              </motion.a>
            </div>
            <div className="hidden sm:block">
              <span className="text-sm font-medium bg-primary-900/30 px-4 py-1.5 rounded-full tracking-wide">
                Mon-Fri: 8:30 AM - 6:00 PM
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className={`py-4 transition-all duration-300 ${isScrolled ? 'border-b border-gray-100' : ''}`}>
        <div className="container">
          <div className="flex items-center justify-between">
            <Link href="/" className="relative group">
              <span className="text-2xl font-display font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent transition-all duration-300 group-hover:from-primary-700 group-hover:to-primary-900">
                Taylor&apos;s Collision
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            <div className="hidden md:flex items-center gap-10">
              {['Home', 'Services', 'Reviews', 'Contact', 'Blog'].map((item) => (
                <Link 
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="relative group text-gray-700 hover:text-primary-600 transition-colors duration-300"
                >
                  <span className="relative font-medium tracking-wide">
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/schedule" 
                className="bg-primary-600 text-white px-6 py-2.5 rounded-md font-medium shadow-lg hover:bg-primary-700 transition-all duration-300 hover:shadow-xl"
              >
                Schedule Now
              </Link>
            </motion.div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header 