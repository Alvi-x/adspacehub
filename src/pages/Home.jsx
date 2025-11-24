import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  ChartBarIcon,
  EyeIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";
import Button from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";
import { featuredCategories } from "../data/mockData";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import SwiperCore from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // optional, but good to include

import { motion, useScroll, useTransform } from "framer-motion";

// New libraries

// Initialize Swiper modules
SwiperCore.use([Autoplay, Pagination]);

const VisualPlaceholder = ({ className = "", label = "Visual" }) => (
  <div
    className={`rounded-2xl border border-gray-100 shadow-sm bg-gradient-to-br from-white to-primary-50 flex items-center justify-center p-6 ${className}`}
    aria-hidden
  >
    {/* decorative SVG placeholder — replace with real images or components */}
    <svg
      width="160"
      height="100"
      viewBox="0 0 160 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" y="0" width="160" height="100" rx="12" fill="url(#g)" />
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#EEF2FF" offset="0" />
          <stop stopColor="#E6FFFA" offset="1" />
        </linearGradient>
      </defs>
      <g opacity="0.85" transform="translate(12,12)">
        <rect
          x="0"
          y="0"
          width="136"
          height="76"
          rx="8"
          fill="#fff"
          stroke="#E6E6F0"
        />
        <circle cx="24" cy="24" r="12" fill="#EEF2FF" />
        <rect x="48" y="12" width="64" height="12" rx="6" fill="#F3F4F6" />
        <rect x="48" y="34" width="90" height="10" rx="5" fill="#F8FAFC" />
      </g>
    </svg>
  </div>
);

const Home = () => {
  // framer-motion scroll-based parallax for hero background accent
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, -80]);
  const y2 = useTransform(scrollY, [0, 600], [0, -160]);

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

        <div className="bg-gradient-to-br from-primary-50 to-purple-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 text-center lg:text-left">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
                  Connect. Advertise.{" "}
                  <span className="text-primary-600">Thrive.</span>
                </h1>
                <p className="text-lg text-gray-700 mb-8 max-w-2xl">
                  AdSpaceHub bridges the gap between advertisers seeking prime
                  locations and space owners looking to monetize their assets.
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
                    <div className="text-sm text-gray-500">
                      Avg. Daily Impressions
                    </div>
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
                    autoplay={{ delay: 5000 }}
                    loop
                    className="w-full h-full"
                  >
                    <SwiperSlide>
                      <div className="p-6 lg:p-8 bg-white">
                        <img
                          src="/billboard.jpg"
                          alt="Ad Panel Mock"
                          className="w-full h-auto rounded-lg object-cover"
                        />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="p-6 lg:p-8 bg-white">
                        <img
                          src="/bustop1.jpg"
                          alt="Ad Panel Mock"
                          className="w-full h-auto rounded-lg object-cover"
                        />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="p-6 lg:p-8 bg-white">
                        <img
                          src="/motobike1.jpg"
                          alt="Ad Panel Mock"
                          className="w-full h-auto rounded-lg object-cover"
                        />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="p-6 lg:p-8 bg-white">
                        <video
                          src="/MotionAds-Drivers.mp4"
                          className="w-full h-auto rounded-lg object-cover"
                          autoPlay
                          muted
                          loop
                          playsInline
                        />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="p-6 lg:p-8 bg-white">
                        <img
                          src="/mural0.jpg"
                          alt="Map and Pins"
                          className="w-full h-auto rounded-lg object-cover"
                        />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="p-6 lg:p-8 bg-white">
                        <img
                          src="/lightpole.jpg"
                          alt="Map and Pins"
                          className="w-full h-auto rounded-lg object-cover"
                        />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="p-6 lg:p-8 bg-white">
                        <img
                          src="/escalators.gif"
                          alt="Analytics"
                          className="w-full h-auto rounded-lg object-cover"
                        />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="p-6 lg:p-8 bg-white">
                        <img
                          src="/Wrap.jpg"
                          alt="Analytics"
                          className="w-full h-auto rounded-lg object-cover"
                        />
                      </div>
                    </SwiperSlide>
                  </Swiper>

                  <div className="p-4 bg-white/70 backdrop-blur-sm border-t border-white/40 flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      Preview of listings and analytics
                    </div>
                    <div className="text-sm text-primary-600 font-medium">
                      Interactive
                    </div>
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
              We make physical advertising simple, transparent, and effective
              for everyone involved.
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
                  title: "Maximum Visibility",
                  text: "Access high-traffic locations with detailed visibility metrics and audience data.",
                },
                {
                  icon: <ChartBarIcon className="w-7 h-7 text-green-600" />,
                  title: "Data-Driven Insights",
                  text: "Make informed decisions with comprehensive traffic and engagement analytics.",
                },
                {
                  icon: (
                    <CurrencyDollarIcon className="w-7 h-7 text-purple-600" />
                  ),
                  title: "Fair Pricing",
                  text: "Transparent pricing models that work for both advertisers and space owners.",
                },
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
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.text}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO - minimal, modern, vibrant video slider */}
      <section className="py-18 relative overflow-hidden">
        {/* soft glowing background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 0.35, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-gradient-to-tr from-primary-100/40 via-white/10 to-purple-100/40"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-gray-900"
            >
              Portfolio
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto mt-3"
            >
              See how real-world displays and campaigns come alive.
            </motion.p>
          </div>

          {/* ---------- Bottom Navigation Buttons ---------- */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 z-20">
            {/* Prev Button */}
            <button
              className="
          portfolio-prev 
          w-12 h-12 rounded-full
          bg-white/70 backdrop-blur-lg border border-white/40
          shadow-md flex items-center justify-center
          hover:bg-white hover:shadow-xl hover:-translate-x-1
          transition
        "
            >
              <svg
                className="w-7 h-7 text-gray-800"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L8.414 10l3.879 3.879a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Next Button */}
            <button
              className="
          portfolio-next 
          w-12 h-12 rounded-full
          bg-white/70 backdrop-blur-lg border border-white/40
          shadow-md flex items-center justify-center
          hover:bg-white hover:shadow-xl hover:translate-x-1
          transition
        "
            >
              <svg
                className="w-7 h-7 text-gray-800"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.707 4.293a1 1 0 000 1.414L11.586 10l-3.879 3.879a1 1 0 101.414 1.414l5-5a1 1 0 000-1.414l-5-5a1 1 0 00-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          {/* ------------------------------------------------ */}

          {/* Slider */}
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".portfolio-next",
              prevEl: ".portfolio-prev",
            }}
            slidesPerView={1.1}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              1024: { slidesPerView: 3 },
            }}
            centeredSlides={false}
            className="portfolioSwiper"
          >
            {[1, 2, 3, 4, 5].map((num, idx) => (
              <SwiperSlide key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="
              rounded-2xl overflow-hidden 
              border border-white/30 bg-white/40 backdrop-blur-lg
              shadow-lg hover:shadow-xl transition 
              relative group
            "
                >
                  <div className="relative">
                    <video
                      src={`/vid-${num}.mp4`}
                      className="
                  w-full h-64 object-cover 
                  transition-all duration-300
                  group-[.swiper-slide-active]:brightness-100 
                  brightness-50
                "
                      muted
                      loop
                      playsInline
                      onLoadedMetadata={(e) => {
                        const observer = new IntersectionObserver(
                          (entries) => {
                            entries.forEach((entry) => {
                              if (entry.isIntersecting) {
                                e.target.play();
                              } else {
                                e.target.pause();
                              }
                            });
                          },
                          { threshold: 0.6 }
                        );
                        observer.observe(e.target);
                      }}
                      controls
                    />
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CATEGORIES - polished glass morphism + enhanced motion */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Soft ambient gradient background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 0.35, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-white/10 to-blue-100/40"
        />

        {/* Floating fog light for depth */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.15 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary-200/40 blur-[120px] rounded-full"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Heading */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-gray-900 tracking-tight"
            >
              Explore Advertising Categories
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mt-4 text-lg text-gray-600 max-w-xl mx-auto"
            >
              Discover diverse advertising opportunities across curated
              categories.
            </motion.p>
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid grid-cols-4 gap-8 mb-12">
            {featuredCategories.map((category, idx) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
              >
                <Link
                  to={`/browse?category=${category.id}`}
                  className="group block"
                >
                  <Card
                    className="
                h-full rounded-3xl overflow-hidden
                border border-white/20 bg-white/40 backdrop-blur-xl
                shadow-lg hover:shadow-2xl
                transition-all duration-300
                group-hover:-translate-y-2
                relative
              "
                  >
                    {/* Inner spotlight */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-primary-100/30 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none" />

                    {/* Highlight ring on hover */}
                    <div className="absolute inset-0 rounded-3xl border border-white/40 opacity-0 group-hover:opacity-100 transition duration-300" />

                    <CardContent className="p-8 text-center relative">
                      {/* Larger desktop image */}
                      <div className="mb-6 flex justify-center">
                        <img
                          src={category.images[0]}
                          alt={category.name}
                          className="w-[90%] max-w-[180px] aspect-square object-cover rounded-2xl shadow-lg"
                        />
                      </div>

                      <h3 className="text-lg font-semibold text-gray-900">
                        {category.name}
                      </h3>

                      <p className="text-gray-600 text-sm mt-2 mb-4">
                        {category.description}
                      </p>

                      <div className="text-primary-600 font-medium">
                        {category.count} spaces available
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="lg:hidden mb-10">
            <Swiper
              slidesPerView={1.15}
              spaceBetween={16}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop
            >
              {featuredCategories.map((category) => (
                <SwiperSlide key={category.id}>
                  <Link to={`/browse?category=${category.id}`}>
                    <Card
                      className="
                  rounded-3xl border border-white/30
                  bg-white/40 backdrop-blur-xl
                  shadow-md overflow-hidden
                "
                    >
                      <CardContent className="p-6 text-center">
                        {/* Larger mobile image */}
                        <div className="mb-5 flex justify-center">
                          <img
                            src={category.images[0]}
                            alt={category.name}
                            className="w-[90%] max-w-[140px] aspect-square object-cover rounded-2xl shadow-md"
                          />
                        </div>

                        <h3 className="text-lg font-semibold text-gray-900">
                          {category.name}
                        </h3>

                        <p className="text-gray-600 text-sm mt-2 mb-3">
                          {category.description}
                        </p>

                        <div className="text-primary-600 font-medium text-sm">
                          {category.count} spaces available
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <Link to="/browse">
              <Button
                variant="outline"
                className="backdrop-blur-sm border-gray-300 hover:border-primary-400"
              >
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
  );
};

export default Home;
