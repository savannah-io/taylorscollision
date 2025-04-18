'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { StarIcon, WrenchIcon, ClockIcon, UserGroupIcon, ArrowRightIcon, ShieldCheckIcon, SparklesIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section min-h-[90vh] flex items-center relative pt-24 pb-28">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-950/50 via-primary-900/40 to-sky-900/30 z-10"></div>
        <div className="container mx-auto px-4 relative z-20">
          <motion.div 
            className="hero-content max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-8 inline-block"
            >
              <span className="bg-primary-500/20 text-primary-200 px-5 py-2.5 rounded-full text-sm font-semibold tracking-wider uppercase">
                Premier Auto Body Shop
              </span>
            </motion.div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-8 leading-[1.1] text-white">
              Expert Auto Body Repair in{' '}
              <span className="text-gradient animate-gradient">
                Duluth, Georgia
              </span>
            </h1>
            <p className="text-xl mb-12 text-gray-200 max-w-2xl leading-relaxed">
              Quality collision repair with exceptional customer service. Get your car back to pre-accident condition with our skilled technicians.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <motion.a 
                href="/schedule" 
                className="btn btn-primary group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule Service
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a 
                href="/contact" 
                className="btn btn-outline group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Us
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
            <motion.div 
              className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {[
                { icon: <ShieldCheckIcon className="w-6 h-6" />, text: "Lifetime Warranty" },
                { icon: <SparklesIcon className="w-6 h-6" />, text: "Expert Technicians" },
                { icon: <ClockIcon className="w-6 h-6" />, text: "Quick Turnaround" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 text-white/90">
                  <div className="bg-primary-500/20 p-3 rounded-xl">
                    {item.icon}
                  </div>
                  <span className="font-medium tracking-wide">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-28 relative overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-blue-900">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 to-transparent"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-primary-600/5 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary-500/10 via-blue-600/5 to-transparent"></div>
        </div>
        
        <motion.div 
          className="container mx-auto px-4 relative"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="text-center mb-20">
            <motion.h2 
              className="text-4xl md:text-5xl font-display font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Why Choose Us?
            </motion.h2>
            <motion.p 
              className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Experience excellence in auto body repair with our comprehensive services and dedicated team
            </motion.p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <StarIcon className="h-8 w-8" />,
                title: "Expert Service",
                description: "Professional auto body repair by certified technicians"
              },
              {
                icon: <WrenchIcon className="h-8 w-8" />,
                title: "Quality Work",
                description: "State-of-the-art equipment and premium materials"
              },
              {
                icon: <ClockIcon className="h-8 w-8" />,
                title: "Fast Service",
                description: "Quick turnaround without compromising quality"
              },
              {
                icon: <UserGroupIcon className="h-8 w-8" />,
                title: "Customer First",
                description: "Exceptional service and communication"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="group backdrop-blur-sm bg-white/10 p-8 rounded-2xl hover:bg-white/15 transition-all duration-300 border border-white/10"
                variants={item}
              >
                <div className="bg-gradient-to-br from-blue-500 to-primary-600 text-white p-4 rounded-xl w-16 h-16 mb-6 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-primary-900/30">
                  {feature.icon}
                </div>
                <h3 className="font-display font-bold mb-3 text-xl text-white group-hover:text-blue-200 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-blue-100/80 group-hover:text-blue-100 transition-colors duration-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Reviews Preview Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white/50"></div>
        <div className="container mx-auto px-4 relative">
          <motion.h2 
            className="text-4xl md:text-5xl font-display font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
              Customers Say
            </span>
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              {
                text: "Max and the team did an incredible job on my 2020 Mazda CX-30. I'm extremely happy with the results and would recommend them to everyone!",
                author: "Jarrett B.",
                rating: 5
              },
              {
                text: "The owner Max was AMAZING!! His work is top notch! I think my vehicle actually looks better than it did before I had the accident!",
                author: "Jordan P.",
                rating: 5
              },
              {
                text: "Had a door out of alignment and Max fixed it in just a few minutes. No appointment. Just rolled in off the street. Great place.",
                author: "Rob G.",
                rating: 5
              }
            ].map((review, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow border border-gray-100"
                variants={item}
              >
                <div className="flex text-primary-500 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-6 w-6" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg italic leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {review.author[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{review.author}</p>
                    <p className="text-sm text-gray-500">Verified Customer</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <a 
              href="/reviews" 
              className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors text-lg group"
            >
              View All Reviews
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
