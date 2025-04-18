'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { StarIcon } from '@heroicons/react/24/solid'
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline'

export default function Reviews() {
  const reviews = [
    {
      text: "Max and the team did an incredible job on my 2020 Mazda CX-30. I'm extremely happy with the results and would recommend them to everyone!",
      author: "Jarrett B.",
      rating: 5,
      date: "March 15, 2024",
      service: "Collision Repair"
    },
    {
      text: "The owner Max was AMAZING!! His work is top notch! I think my vehicle actually looks better than it did before I had the accident!",
      author: "Jordan P.",
      rating: 5,
      date: "March 10, 2024",
      service: "Paint Services"
    },
    {
      text: "Had a door out of alignment and Max fixed it in just a few minutes. No appointment. Just rolled in off the street. Great place.",
      author: "Rob G.",
      rating: 5,
      date: "March 5, 2024",
      service: "Quick Service"
    },
    {
      text: "Professional service from start to finish. They kept me updated throughout the repair process and delivered exactly what they promised.",
      author: "Sarah M.",
      rating: 5,
      date: "February 28, 2024",
      service: "Collision Repair"
    },
    {
      text: "Outstanding customer service and quality work. They repaired my car after a significant collision and it looks brand new.",
      author: "Michael K.",
      rating: 5,
      date: "February 25, 2024",
      service: "Collision Repair"
    },
    {
      text: "The attention to detail is impressive. They did an excellent job matching the paint and blending it perfectly with the existing color.",
      author: "David L.",
      rating: 5,
      date: "February 20, 2024",
      service: "Paint Services"
    }
  ]

  const stats = [
    { label: "Happy Customers", value: "1,000+" },
    { label: "Years of Experience", value: "15+" },
    { label: "5-Star Reviews", value: "500+" },
    { label: "Cars Repaired", value: "5,000+" }
  ]

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
              Customer{' '}
              <span className="text-gradient animate-gradient">Reviews</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              See what our customers are saying about their experience with Taylor&apos;s Collision.
              We take pride in our work and customer satisfaction.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={item}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex text-primary-500">
                    {[...Array(5)].map((_, i) => (
                      i < review.rating ? (
                        <StarIcon key={i} className="h-5 w-5" />
                      ) : (
                        <StarOutlineIcon key={i} className="h-5 w-5" />
                      )
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">&ldquo;{review.text}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {review.author[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{review.author}</p>
                      <p className="text-sm text-gray-500">{review.service}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Write Review CTA */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Share Your Experience
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Had a great experience with us? We&apos;d love to hear about it! Your feedback helps us improve and lets others know about our service.
            </p>
            <a 
              href="https://g.page/r/your-google-review-link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Write a Review
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 