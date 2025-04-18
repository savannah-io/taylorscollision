'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { StarIcon, WrenchIcon, ClockIcon, UserGroupIcon, ArrowRightIcon, ShieldCheckIcon, SparklesIcon, CheckIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import Link from 'next/link'

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
      <section className="hero-section min-h-[90vh] flex items-center relative pt-24 pb-28 bg-[url('/images/back3.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/95 to-transparent pointer-events-none" style={{ height: '30%' }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent pointer-events-none"></div>
        
        {/* Tech pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" 
            style={{ 
              backgroundImage: `
                radial-gradient(circle at 20% 30%, rgba(56, 189, 248, 0.15) 0%, transparent 8%),
                radial-gradient(circle at 80% 20%, rgba(56, 189, 248, 0.15) 0%, transparent 6%),
                radial-gradient(circle at 40% 70%, rgba(56, 189, 248, 0.15) 0%, transparent 12%),
                radial-gradient(circle at 70% 50%, rgba(56, 189, 248, 0.15) 0%, transparent 10%),
                linear-gradient(to bottom right, transparent 0%, transparent 100%)
              `,
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat'
            }}>
          </div>
        </div>

        <style jsx>{`
          @keyframes techBlips {
            0% {
              background-position: 0 0;
            }
            100% {
              background-position: 24px 24px;
            }
          }
        `}</style>

        <div className="container mx-auto px-4 relative z-20">
          <motion.div 
            className="hero-content max-w-3xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-8 inline-block"
            >
              <span className="bg-primary-600/20 text-white px-5 py-2.5 rounded-full text-sm font-semibold tracking-wider uppercase shadow-lg backdrop-blur-sm">
                Premier Auto Body Shop
              </span>
            </motion.div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-8 leading-[1.1] text-white drop-shadow-xl">
              Expert Auto Body Repair in{' '}
              <span className="text-primary-400 drop-shadow-xl">
                Duluth, Georgia
              </span>
            </h1>
            <p className="text-xl mb-12 text-gray-100 max-w-2xl leading-relaxed drop-shadow-lg font-medium">
              Quality collision repair with exceptional customer service. Get your car back to pre-accident condition with our skilled technicians.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <motion.a 
                href="/schedule" 
                className="btn btn-primary group shadow-xl hover:shadow-2xl bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule Service
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a 
                href="/contact" 
                className="btn btn-outline group border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Us
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
            <motion.div 
              className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {[
                { icon: <ShieldCheckIcon className="w-6 h-6" />, text: "Free Estimates" },
                { icon: <SparklesIcon className="w-6 h-6" />, text: "Expert Technicians" },
                { icon: <ClockIcon className="w-6 h-6" />, text: "Quick Turnaround" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 text-white bg-black/20 backdrop-blur-sm p-4 rounded-xl border border-white/10 shadow-lg">
                  <div className="bg-primary-500/30 p-3 rounded-xl shadow-lg">
                    {item.icon}
                  </div>
                  <span className="font-medium tracking-wide drop-shadow-lg">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-28 relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
        {/* Decorative background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary-100/40 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent"></div>
          <div className="absolute w-full h-full">
            <div className="absolute top-1/4 left-4 w-72 h-72 bg-primary-100/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute top-1/3 right-4 w-72 h-72 bg-blue-100/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/2 left-1/2 w-72 h-72 bg-sky-100/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-primary-700 uppercase bg-primary-50 rounded-full shadow-sm">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Expert Auto Body{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
                  Repair Services
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-primary-100/50 -rotate-1"></span>
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
              We specialize in comprehensive auto body repair services, from collision repair and dent removal to expert paint matching and structural repairs. Our certified technicians use state-of-the-art equipment to restore your vehicle to its pre-accident condition.
            </p>
            <motion.a 
              href="/services" 
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/30 group relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              <span className="relative">Explore Our Services</span>
              <ArrowRightIcon className="w-5 h-5 relative group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <WrenchIcon className="h-8 w-8" />,
                title: "Collision Repair",
                description: "Expert repair of vehicle damage from accidents, restoring your car to pre-accident condition. Our certified technicians ensure quality repairs.",
                color: "from-sky-500 to-blue-600",
                bgGlow: "bg-sky-100/30",
                features: ["Frame straightening", "Panel repair", "Structural repairs"],
                id: "collision-repair"
              },
              {
                icon: <SparklesIcon className="h-8 w-8" />,
                title: "Paint Services",
                description: "Professional auto painting with computerized color matching for a flawless finish. We use premium materials for lasting results.",
                color: "from-primary-500 to-primary-600",
                bgGlow: "bg-primary-100/30",
                features: ["Color matching", "Full painting", "Clear coating"],
                id: "paint-services"
              },
              {
                icon: <ShieldCheckIcon className="h-8 w-8" />,
                title: "Dent Removal",
                description: "Skilled dent removal services using advanced techniques to maintain your vehicle's finish. Fast and efficient repairs.",
                color: "from-blue-500 to-primary-600",
                bgGlow: "bg-blue-100/30",
                features: ["Paintless repair", "Door dings", "Hail damage"],
                id: "dent-removal"
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                variants={item}
                className="group relative h-full"
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl ${service.bgGlow} blur-2xl`}></div>
                
                <div className="relative h-full bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100/80 group-hover:translate-y-[-4px] backdrop-blur-sm">
                  <div className={`bg-gradient-to-br ${service.color} text-white p-4 rounded-xl w-16 h-16 mb-6 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg`}>
                    {service.icon}
                  </div>
                  <h3 className="font-display font-bold text-xl mb-4 text-gray-900 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600 group-hover:text-gray-700">
                        <CheckIcon className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors">
                    <Link 
                      href={`/services?section=${service.id}`}
                      className="inline-flex items-center hover:gap-3 gap-2 transition-all"
                    >
                      <span>Learn more</span>
                      <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <style jsx>{`
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}</style>
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
                text: "Max and the team did an incredible job on my 2020 Mazda CX-30. I&apos;m extremely happy with the results and would recommend them to everyone!",
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
                <p className="text-gray-700 mb-6 text-lg italic leading-relaxed">&ldquo;{review.text}&rdquo;</p>
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

      {/* Features Section */}
      <section className="py-28 relative overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-blue-900">
        {/* Decorative elements */}
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

      <Footer />
    </main>
  )
}
