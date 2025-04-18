'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  WrenchScrewdriverIcon, 
  SparklesIcon, 
  PaintBrushIcon, 
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  SwatchIcon,
  WrenchIcon,
  BeakerIcon
} from '@heroicons/react/24/outline'

export default function Services() {
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

  const services = [
    {
      icon: <ExclamationTriangleIcon className="w-8 h-8" />,
      title: "Collision Repair",
      description: "Expert repair of vehicle damage from accidents, restoring your car to pre-accident condition with precision and care.",
      features: [
        "Frame straightening",
        "Panel repair and replacement",
        "Structural repairs",
        "Post-repair safety inspections"
      ]
    },
    {
      icon: <PaintBrushIcon className="w-8 h-8" />,
      title: "Paint Services",
      description: "Professional auto painting with color matching technology for a flawless finish that looks factory-new.",
      features: [
        "Computerized color matching",
        "Full vehicle painting",
        "Spot repair and blending",
        "Clear coat protection"
      ]
    },
    {
      icon: <WrenchScrewdriverIcon className="w-8 h-8" />,
      title: "Dent Removal",
      description: "Skilled dent removal services using paintless dent repair techniques when possible to maintain your vehicle's original finish.",
      features: [
        "Paintless dent repair",
        "Hail damage repair",
        "Door ding removal",
        "Minor collision dent repair"
      ]
    },
    {
      icon: <SwatchIcon className="w-8 h-8" />,
      title: "Paint Protection",
      description: "Advanced paint protection solutions to keep your vehicle looking new and protected from environmental damage.",
      features: [
        "Ceramic coating",
        "Paint protection film",
        "Rust protection",
        "UV damage prevention"
      ]
    },
    {
      icon: <WrenchIcon className="w-8 h-8" />,
      title: "Frame & Structural",
      description: "Precise frame and structural repairs using advanced measuring and straightening equipment.",
      features: [
        "Laser frame measuring",
        "Unibody repair",
        "Frame straightening",
        "Structural welding"
      ]
    },
    {
      icon: <BeakerIcon className="w-8 h-8" />,
      title: "Auto Detailing",
      description: "Comprehensive detailing services to restore and maintain your vehicle's appearance inside and out.",
      features: [
        "Interior deep cleaning",
        "Paint correction",
        "Ceramic coating",
        "Headlight restoration"
      ]
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 to-primary-950 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
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

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="bg-gradient-to-br from-primary-500 to-primary-700 text-white p-4 rounded-xl w-16 h-16 mb-6 flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <SparklesIcon className="w-5 h-5 text-primary-500 flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

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