'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  WrenchScrewdriverIcon, 
  SparklesIcon, 
  PaintBrushIcon, 
  SwatchIcon,
  ExclamationTriangleIcon,
  WrenchIcon,
  BeakerIcon,
  CheckIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export default function Services() {
  const searchParams = useSearchParams()

  useEffect(() => {
    // Handle scroll to section if hash is present
    const section = searchParams.get('section')
    if (section) {
      const element = document.getElementById(section)
      if (element) {
        const yOffset = -100 // Account for fixed header
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    }
  }, [searchParams])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  const mainServices = [
    {
      id: "collision-repair",
      icon: <ExclamationTriangleIcon className="w-8 h-8" />,
      title: "Collision Repair",
      description: "Expert repair of vehicle damage from accidents, restoring your car to pre-accident condition with precision and care.",
      features: [
        "Frame straightening with computerized measuring system",
        "Expert panel repair and replacement",
        "Structural repairs with factory specifications",
        "Post-repair safety inspections and quality checks",
        "Insurance claim assistance and documentation",
        "Lifetime warranty on repairs"
      ],
      process: [
        "Initial damage assessment and documentation",
        "Detailed repair plan development",
        "Structural repairs and frame straightening",
        "Panel repair or replacement",
        "Paint matching and refinishing",
        "Quality control inspection"
      ],
      image: "/images/back1.png"
    },
    {
      id: "paint-services",
      icon: <PaintBrushIcon className="w-8 h-8" />,
      title: "Paint Services",
      description: "Professional auto painting with state-of-the-art color matching technology for a flawless factory-quality finish.",
      features: [
        "Computerized color matching system",
        "Premium quality paint materials",
        "Expert surface preparation",
        "Clear coat protection",
        "Spot repair and blending",
        "Environmental-friendly practices"
      ],
      process: [
        "Color analysis and matching",
        "Surface preparation and cleaning",
        "Primer application",
        "Base coat application",
        "Clear coat finishing",
        "Quality inspection and buffing"
      ],
      image: "/images/services/paint-services.jpg"
    },
    {
      id: "dent-removal",
      icon: <WrenchScrewdriverIcon className="w-8 w-8" />,
      title: "Dent Removal",
      description: "Skilled dent removal services using paintless dent repair techniques when possible to maintain your vehicle's original finish.",
      features: [
        "Paintless dent repair (PDR)",
        "Door ding and minor dent fixes",
        "Hail damage repair",
        "Preserve original factory finish",
        "Cost-effective solutions",
        "Quick turnaround time"
      ],
      process: [
        "Dent assessment and technique selection",
        "Access point identification",
        "Gentle metal manipulation",
        "Surface refinement",
        "Quality inspection",
        "Final detailing"
      ],
      image: "/images/services/dent-removal.jpg"
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 to-primary-950 pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Auto Body{' '}
              <span className="text-gradient animate-gradient">Services</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Comprehensive auto body repair services delivered with expertise and precision. 
              We restore your vehicle to its pre-accident condition using state-of-the-art equipment and techniques.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {mainServices.map((service, index) => (
        <section 
          key={service.id}
          id={service.id}
          className={`min-h-screen flex items-center ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="container mx-auto px-4">
            <motion.div 
              className="grid md:grid-cols-12 gap-8 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Image Section - Takes up 7 columns on desktop */}
              <div className={`md:col-span-7 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>
                </div>
              </div>

              {/* Content Section - Takes up 5 columns on desktop */}
              <div className={`md:col-span-5 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white p-3 rounded-xl w-14 h-14 mb-6 flex items-center justify-center shadow-lg">
                  {service.icon}
                </div>
                
                <h2 className="text-4xl font-display font-bold mb-4">
                  {service.title}
                </h2>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-8">
                  {/* Key Features */}
                  <div>
                    <h3 className="text-xl font-display font-semibold mb-4 text-gray-900 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-sm">
                        <CheckIcon className="w-5 h-5" />
                      </span>
                      Key Features
                    </h3>
                    <ul className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-600">• {feature}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Process Steps */}
                  <div>
                    <h3 className="text-xl font-display font-semibold mb-4 text-gray-900 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-sm">
                        <ArrowRightIcon className="w-5 h-5" />
                      </span>
                      Our Process
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {service.process.map((step, idx) => (
                        <div key={idx} className="text-gray-600">
                          {idx + 1}. {step}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-display font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p 
              className="text-xl text-primary-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Schedule a service appointment today and experience our exceptional auto body repair service.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <a 
                href="/schedule" 
                className="btn btn-primary bg-white text-primary-900 hover:bg-primary-50"
              >
                Schedule Service
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 