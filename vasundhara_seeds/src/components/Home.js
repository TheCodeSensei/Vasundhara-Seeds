import React from 'react';
import { useState } from 'react';
import '../styles.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import { Menu, X, Search } from "lucide-react";
import { Link } from 'react-router-dom'
import Navbar from './Navbar';
import TestimonialsSection from './Testimonials';
import ScrollToTop from '../utils/scrollToTop.js';




const Home = () => {


  const hero_section = [{ image: '/farmarMan.jpg', title: "Welcome To Vasundhara Seeds", subtitle: "Your trusted partner in agricultural excellence" },
  { image: '/field1.JPG', title: "Future Ready seeds for growing future", subtitle: "Science-backed seeds for maximum productivity" },
  { image: '/field2.JPG', title: "Stronger Seeds, Stronger Harvest", subtitle: "Boosting yield and resilience for Farmers" }
  ]

  return (
    <div id="home" className="bg-gray-100">
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-screen lg:hidden pt-1">
        {/* ✅ Static Image for Small Screens (Hidden on lg+) */}
        <div
          className="w-full h-screen bg-cover bg-center bg-black bg-opacity-20 flex flex-col justify-center items-center text-center text-gray-50"
          style={{ backgroundImage: `url('/hero_image_home.JPG')` }}
        >
          <button
            onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-2 mt-44 rounded-full border-2 border-yellow-500 bg-emerald-200 text-lg text-slate-900 font-extrabold animate-bounce"
          >
            Explore Products
          </button>
        </div>

      </section>
      <div className='hidden sm:block'>
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          className="w-full h-full"
        >
          {hero_section.map((item, index) => (
            <SwiperSlide key={index}>
              <section className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${item.image})` }}>
                <div className="bg-black bg-opacity-20 h-full flex flex-col justify-center items-center text-center text-white">
                  <h1 className="text-4xl md:text-4xl font-bold mb-4 animate-fadeIn">
                    {item.title}</h1>
                  <p className="text-lg md:text-xl animate-fadeIn">{item.subtitle}</p><br></br>
                  <button
                    onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
                    className="px-6 py-2 border-2 border-yellow-500 animate-bounce font-bold text-black rounded-full bg-emerald-400"
                  >
                    Explore Products
                  </button>
                </div>

              </section>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full h-[2px] bg-yellow-900 "></div>

      {/* About Section */}
      <section class="p-6 md:p-12 mt-0 bg-white" >
        <div class="container mx-auto">
          {/* <!-- Main About Section --> */}
          <div class="flex flex-col md:flex-row items-center md:items-start justify-center text-center md:text-left">
            {/* <!-- Left Side (Title) --> */}
            <div class="md:w-1/2 p-4">
              <h2 class="text-2xl md:text-4xl font-bold text-green-900">Quality Products.</h2>
              <h2 class="text-2xl md:text-4xl font-bold text-green-900">Guranteed.</h2>
            </div>
            {/* <!-- Right Side (Description) --> */}
            <div class="md:w-1/2 p-4">
              <p class="text-lg md:text-xl">Vasundhara Seeds is your trusted Partner in agricultural Excellance.
                Powering the growth of Indian agriculture
                with high-yield Seeds SINCE 1995.
                We cater to all key crop segments and are trusted by farmers across the nation.
              </p>
            </div>
          </div>

          {/* <!-- Stats Section --> */}
          <div class="mt-8 text-center">
            <h3 class="text-xl md:text-2xl font-semibold inline-block border-b-2 border-yellow-900 pb-1 text-green-900 ">Vasundhara at Glance</h3>
            <div class=" mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="border-2 border-green-500 p-4 bg-white shadow rounded-lg">
                <h4 class="text-2xl font-bold text-green-900">40000+</h4>
                <p class="text-gray-600">Satisfied Farmers</p>
              </div>
              <div class="p-4 bg-white shadow rounded-lg border-2 border-green-500">
                <h4 class="text-2xl font-bold text-green-900">20+</h4>
                <p class="text-gray-600">Quality Products</p>
              </div>
              <div class="p-4 bg-white shadow rounded-lg border-2 border-green-500">
                <h4 class="text-2xl font-bold text-green-900">25+</h4>
                <p class="text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-[2px] bg-yellow-900 "></div>

      {/* Products Section */}

      <section id="products" className="py-10 px-4 sm:py-20 bg-gradient-to-r from-stone-100 to-yellow-200">
      <div className='flex justify-center'>
                      {/* Section Heading */}
                      <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6 text-center border-b-2 border-yellow-900 pb-1">
                        Featured Products
                      </h2>
                    </div>
                    {/* Featured Products Section */}
                    <div className="border-4 border-green-500 bg-white p-6 sm:p-8 rounded-lg shadow-lg ">
          
                      {/* Products Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-12 ">
                        {[
                          { name: "HD 33-85", img: "/hd-3385.JPG" },
                          { name: "HI-8830 Pusa Kirti", img: "/hi-8830.JPG" },
                          { name: "HI-1650 Pusa Ojaswi", img: "/hi-1650.JPG" }
                        ].map((item, index) => (
                          <div key={index} className="flex flex-col items-center text-center ">
                            {/* Image Section */}
                            <img
                              src={item.img}
                              alt={item.name}
                              className="w-full max-w-[250px] h-auto object-cover rounded-lg mb-4"
                            />
          
                            {/* Content Section */}
                            <Link to="/products">
                              <h3 className="text-xl sm:text-2xl font-bold text-black mb-2 border-b-2 border-yellow-900 px-2">
                                {item.name}
                              </h3>
                            </Link>
                          </div>
                        ))}
                      </div>
          
                      {/* Buttons Section */}
                      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6 sm:mt-10">
                        <button
                          className="px-4 sm:px-6 py-2 rounded-full border-2 border-green-500 font-bold text-black transition-transform hover:scale-105"
                          onClick={() => window.open("https://drive.google.com/file/d/19HJR2mVkKB_iI4f8HoQcFG5N2q61HVqy/view?usp=drivesdk", "_blank")}
                        >
                          Read Wheat Brochures-2023
                        </button>
          
                        <button
                          className="px-4 sm:px-6 py-2 rounded-full border-2 border-green-500 font-bold text-black transition-transform hover:scale-105"
                          onClick={() => window.open("https://drive.google.com/file/d/1Pi7hUJRYUqQItbGMmptJxG0wJP96arUp/view?usp=drivesdk", "_blank")}
                        >
                          Read Wheat Brochures-2024
                        </button>
                      </div>
                    </div>
          

        <div className="container mx-auto max-w-6xl">
        <div className="container mx-auto p-6">

          {/* Existing Products Grid */}
          <div className='flex justify-center'>
            <h2 className="text-3xl font-bold mb-8 text-black text-center p-6 inline-block border-b-2 border-yellow-900 pb-1">Seed Products</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              ' Wheat Seeds',
              ' Soyabean Seeds',
              ' Black Gram Seeds',
            ].map((product, index) => (
              <Link to="/products#seed_products">

              <div key={index} className="flex flex-wrap justify-between items-center bg-white p-6 rounded-lg shadow-md border-4 border-green-500 ">
                <img src="/product.webp" alt={product} className="w-full h-60 object-cover mb-4 rounded-full" />
                <div className="flex flex-col w-full">

                  <h3 className="text-xl font-bold mb-2 border-b-2 border-yellow-900">{product}</h3>
                  <p className="text-gray-600">High-quality seeds for maximum yield and reliability.</p>
                  <div className="flex justify-end relative py-4">
                    <button className="px-6 py-2 rounded-full border-2 border-green-500 font-bold text-black relative animate-bounce">

                        Explore Seed Varieties

                    </button>

                  </div>

                </div>
              </div>
              </Link>

            ))}
          </div>
            </div>
        </div>
      </section>
        <div className="w-full h-[2px] bg-yellow-900"></div>

      <TestimonialsSection />
      <div className="w-full h-[2px] bg-yellow-900 "></div>
    </div>
  );
};

export default Home;
