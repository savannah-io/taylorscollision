'use client'

import Link from 'next/link'
import { PhoneIcon, MapPinIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Taylor&apos;s Collision</h3>
            <div className="space-y-2">
              <motion.a 
                href="tel:+17704950050" 
                className="flex items-center space-x-2 hover:text-primary-200 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <PhoneIcon className="h-5 w-5" />
                <span>(770) 495-0050</span>
              </motion.a>
              <motion.a 
                href="mailto:max@taylorscollision.com" 
                className="flex items-center space-x-2 hover:text-primary-200 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <EnvelopeIcon className="h-5 w-5" />
                <span>max@taylorscollision.com</span>
              </motion.a>
              <motion.a 
                href="https://goo.gl/maps/your-maps-link" 
                className="flex items-center space-x-2 hover:text-primary-200 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <MapPinIcon className="h-5 w-5" />
                <span>2785 Buford Hwy Ste 101-C<br />Duluth, GA 30096</span>
              </motion.a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Hours of Operation</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <ClockIcon className="h-5 w-5" />
                <span>Monday - Friday</span>
              </div>
              <p className="pl-7">8:30 AM - 6:00 PM</p>
              <p className="pl-7">Saturday - Sunday: Closed</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { text: 'Our Services', href: '/services' },
                { text: 'Customer Reviews', href: '/reviews' },
                { text: 'Contact Us', href: '/contact' },
                { text: 'Blog', href: '/blog' }
              ].map((link) => (
                <motion.li key={link.href} whileHover={{ x: 5 }}>
                  <Link href={link.href} className="hover:text-primary-200 transition-colors">
                    {link.text}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'Collision Repair',
                'Paint Services',
                'Frame Straightening',
                'Dent Removal',
                'Insurance Claims'
              ].map((service) => (
                <motion.li 
                  key={service}
                  className="text-gray-300"
                  whileHover={{ x: 5 }}
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Taylor&apos;s Collision. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 