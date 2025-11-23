import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRightIcon,
  ChartBarIcon,
  EyeIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';
import Button from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { featuredCategories } from '../data/mockData';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import SwiperCore from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';  // optional, but good to include

import { motion, useScroll, useTransform } from 'framer-motion';

// New libraries

// Initialize Swiper modules
SwiperCore.use([Autoplay, Pagination])

const VisualPlaceholder = ({ className = '', label = 'Visual' }) => (
  <div
    className={`rounded-2xl border border-gray-100 shadow-sm bg-gradient-to-br from-white to-primary-50 flex items-center justify-center p-6 ${className}`}
    aria-hidden
  >
    {/* decorative SVG placeholder — replace with real images or components */}
    <svg width="160" height="100" viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="160" height="100" rx="12" fill="url(#g)" />
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#EEF2FF" offset="0" />
          <stop stopColor="#E6FFFA" offset="1" />
        </linearGradient>
      </defs>
      <g opacity="0.85" transform="translate(12,12)">
        <rect x="0" y="0" width="136" height="76" rx="8" fill="#fff" stroke="#E6E6F0" />
        <circle cx="24" cy="24" r="12" fill="#EEF2FF" />
        <rect x="48" y="12" width="64" height="12" rx="6" fill="#F3F4F6" />
        <rect x="48" y="34" width="90" height="10" rx="5" fill="#F8FAFC" />
      </g>
    </svg>
  </div>
)

const Home = () => {
  // framer-motion scroll-based parallax for hero background accent
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 600], [0, -80])
  const y2 = useTransform(scrollY, [0, 600], [0, -160])

  return (
    <div className="text-gray-900">
      {/* HERO - split layout with parallax accents + carousel visual */}
      <section className="relative overflow-hidden">
        {/* subtle decorative shapes that parallax */}
        <motion.div
          style={{ y: y2 }}
          className="pointer-events-none absolute -top-32 -left-28 w-96 h-96 rounded-full bg-gradient-to-tr from-primary-200 to-blue-200 opacity-40 blur-3xl"
          aria-hidden
        />
        <motion.div
          style={{ y: y1 }}
          className="pointer-events-none absolute -bottom-24 -right-20 w-72 h-72 rounded-tl-full bg-gradient-to-br from-purple-200 to-pink-200 opacity-30 blur-2xl"
          aria-hidden
        />

        <div className="bg-gradient-to-br from-primary-50 to-blue-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 text-center lg:text-left">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
                  Connect. Advertise.{' '}
                  <span className="text-primary-600">Thrive.</span>
                </h1>
                <p className="text-lg text-gray-700 mb-8 max-w-2xl">
                  AdSpaceHub bridges the gap between advertisers seeking prime locations and space owners looking to monetize their assets.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link to="/browse">
                    <Button size="lg" variant="secondary">
                      Find Ad Spaces
                      <ArrowRightIcon className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <Link to="/create-listing">
                    <Button size="lg" variant="outline">
                      List Your Space
                    </Button>
                  </Link>
                </div>

                {/* small stats / micro-cards */}
                <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
                  <div className="bg-white/70 backdrop-blur rounded-xl p-3 text-center shadow-sm">
                    <div className="text-sm text-gray-500">Live Spaces</div>
                    <div className="text-lg font-semibold">1,248</div>
                  </div>
                  <div className="bg-white/70 backdrop-blur rounded-xl p-3 text-center shadow-sm">
                    <div className="text-sm text-gray-500">Avg. Daily Impressions</div>
                    <div className="text-lg font-semibold">24k+</div>
                  </div>
                  <div className="bg-white/70 backdrop-blur rounded-xl p-3 text-center shadow-sm">
                    <div className="text-sm text-gray-500">Cities</div>
                    <div className="text-lg font-semibold">32</div>
                  </div>
                </div>
              </div>

              {/* Visual column with carousel + overlay stats */}
              <div className="lg:col-span-5">
                <div className="rounded-3xl shadow-2xl overflow-hidden border border-white/30">
                  <Swiper
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3500 }}
                    loop
                    className="w-full h-full"
                  >
                    <SwiperSlide>
                      <div className="p-6 lg:p-8 bg-white">
                        <VisualPlaceholder label="Ad Panel Mock" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="p-6 lg:p-8 bg-white">
                        <VisualPlaceholder label="Map & Pins" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="p-6 lg:p-8 bg-white">
                        <VisualPlaceholder label="Analytics" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  <div className="p-4 bg-white/70 backdrop-blur-sm border-t border-white/40 flex items-center justify-between">
                    <div className="text-sm text-gray-600">Preview of listings and analytics</div>
                    <div className="text-sm text-primary-600 font-medium">Interactive</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES - upgraded with staggered animations, glass panels, and decorative connectors */}
      <section className="py-24 relative overflow-hidden">
        {/* floating decorative shapes */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 0.3, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pointer-events-none absolute -left-20 top-10 w-72 h-72 bg-gradient-to-br from-primary-100 to-blue-100 blur-2xl rounded-full"
        />

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 0.3, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="pointer-events-none absolute -right-24 bottom-10 w-80 h-80 bg-gradient-to-tl from-pink-100 to-purple-200 blur-3xl rounded-full"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Why Choose AdSpaceHub?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              We make physical advertising simple, transparent, and effective for everyone involved.
            </motion.p>
          </div>

          {/* improved layout: cards connected by subtle animated lines */}
          <div className="relative">
            {/* connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-200 to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
              {[
                {
                  icon: <EyeIcon className="w-7 h-7 text-primary-600" />,
                  title: 'Maximum Visibility',
                  text: 'Access high-traffic locations with detailed visibility metrics and audience data.'
                },
                {
                  icon: <ChartBarIcon className="w-7 h-7 text-green-600" />,
                  title: 'Data-Driven Insights',
                  text: 'Make informed decisions with comprehensive traffic and engagement analytics.'
                },
                {
                  icon: <CurrencyDollarIcon className="w-7 h-7 text-purple-600" />,
                  title: 'Fair Pricing',
                  text: 'Transparent pricing models that work for both advertisers and space owners.'
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                >
                  <Card className="text-center bg-white/70 backdrop-blur-xl border border-white shadow-xl hover:shadow-2xl transition rounded-2xl p-8">
                    <CardContent>
                      <div className="w-14 h-14 rounded-xl bg-white shadow flex items-center justify-center mx-auto mb-5 border border-gray-100">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.text}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES - upgraded with parallax cards, hover spotlight, and mobile carousel */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* background aesthetic accents */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 0.25, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-tr from-primary-50 via-transparent to-blue-50 opacity-40"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Explore Advertising Categories
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-lg text-gray-600"
            >
              Discover diverse advertising opportunities across multiple categories
            </motion.p>
          </div>

          {/* Desktop enhanced grid */}
          <div className="hidden lg:grid grid-cols-4 gap-8 mb-10">
            {featuredCategories.map((category, idx) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
              >
                <Link to={`/browse?category=${category.id}`} className="group block">
                  <Card className="h-full overflow-hidden transition-all group-hover:shadow-2xl group-hover:-translate-y-2 bg-white rounded-2xl border border-gray-100 relative">
                    {/* spotlight hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-primary-50/60 to-transparent pointer-events-none" />

                    <CardContent className="p-8 text-center relative z-10">
                      <div className="text-4xl mb-5 transform group-hover:scale-110 transition">{category.icon}</div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{category.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                      <div className="text-primary-500 font-medium">{category.count} spaces available</div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile carousel (enhanced) */}
          <div className="lg:hidden mb-8">
            <Swiper
              slidesPerView={1.2}
              spaceBetween={16}
              pagination={{ clickable: true }}
              autoplay={{ delay: 2800 }}
              loop
            >
              {featuredCategories.map((category) => (
  <SwiperSlide key={category.id}>
    <Link to={`/browse?category=${category.id}`}>
      <Card className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
        <CardContent className="p-6 text-center">
          
          {/* Render image properly */}
          <div className="mb-4 flex justify-center">
            <img
              src={category.images[0]}
              alt={category.name}
              className="w-16 h-16 object-cover rounded"
            />
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {category.name}
          </h3>

          <p className="text-gray-600 text-sm mb-3">
            {category.description}
          </p>

          <div className="text-primary-500 font-medium text-sm">
            {category.count} spaces available
          </div>

        </CardContent>
      </Card>
    </Link>
  </SwiperSlide>
))}

            </Swiper>
          </div>

          <div className="text-center mt-8">
            <Link to="/browse">
              <Button variant="outline">
                View All Categories
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer spacer — keep page crisp */}
      <div className="h-24" />
    </div>
  )
}

export default Home
