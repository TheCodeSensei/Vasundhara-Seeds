import React from 'react';
import { useState } from 'react';
import '../styles.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import { Menu, X, Search} from "lucide-react"; 
import {Link} from 'react-router-dom'
import Navbar from './Navbar';
import TestimonialsSection from './Testimonials';



const Home = () => {

    const hero_section = [{image:'/farmarMan.jpg',title:"Welcome To Vasundhara Seeds", subtitle : "Your trusted partner in agricultural excellence"},
        {image:'/farmerLady.jpeg',title:"Future Ready seeds for growing future", subtitle:"Science-backed seeds for maximum productivity"},
        {image:'/WheatField.jpg',title:"Stronger Seeds, Stronger Harvest", subtitle:"Boosting yield and resilience for Farmers"}
    ]

  return (
    <div id = "home" className="bg-gray-100">

      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-screen lg:hidden">
      {/* ✅ Static Image for Small Screens (Hidden on lg+) */}
      <div 
        className="w-full h-screen bg-cover bg-center bg-black bg-opacity-20 flex flex-col justify-center items-center text-center text-gray-50" 
        style={{ backgroundImage: `url('/field.jpg')` }}
      >
        <h1 className="text-4xl md:text-4xl font-bold mb-4">
        Welcome to Vasundhara Seeds</h1>
        <p className="text-lg md:text-xl ">Your trusted partner in agricultural excellence</p><br></br>
        <button
  onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
  className=" px-6 py-2 rounded-lg border-2 border-yellow-500 animate-bounce font-bold text-white"
>Explore Products</button>
        </div>
        
      </section>
      <div className='hidden sm:block'>
        <Swiper
        modules={[Autoplay,EffectFade]}
        effect="fade"
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        {hero_section.map((item, index) => (
          <SwiperSlide key={index}>
            <section className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${item.image})`}}>
        <div className="bg-black bg-opacity-20 h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl md:text-4xl font-bold mb-4 animate-fadeIn">
        {item.title}</h1>
        <p className="text-lg md:text-xl animate-fadeIn">{item.subtitle}</p><br></br>
        <button
  onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
  className="px-6 py-2 rounded-lg border-2 border-yellow-500 animate-bounce font-bold text-white"
>Explore Products</button>
          </div>

      </section>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>

      {/* About Section */}
      <section class="p-6 md:p-12 bg-white">
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
        <p class="text-lg md:text-xl">Vasundhara Seeds is your trusted Partener in agricultural Excellance.
Powering the growth of Indian agriculture
with high-yield Hybrid and Research Seeds SINCE 1995.
We cater to all key crop segments and are trusted by farmers across the nation.
</p>
      </div>
    </div>

    {/* <!-- Stats Section --> */}
    <div class="mt-8 text-center">
      <h3 class="text-xl md:text-2xl font-semibold inline-block border-b-2 border-yellow-900 pb-1 text-green-900 ">Vasudhara at Glance</h3>
      <div class="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-4 bg-white shadow rounded-lg border border-green-800">
          <h4 class="text-2xl font-bold text-green-900">500+</h4>
          <p class="text-gray-600">Satisfied Farmers</p>
        </div>
        <div class="p-4 bg-white shadow rounded-lg border border-green-800">
          <h4 class="text-2xl font-bold text-green-900">100+</h4>
          <p class="text-gray-600">Quality Products</p>
        </div>
        <div class="p-4 bg-white shadow rounded-lg border border-green-800">
          <h4 class="text-2xl font-bold text-green-900">20+</h4>
          <p class="text-gray-600">Years Experience</p>
        </div>
      </div>
    </div>
  </div>
</section>


{/* Products Section */}
<section id="products" className="py-20 bg-green-800">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold text-left mb-8 text-white">Our Products</h2>



    {/* Latest Researched Product */}
    <div className="border-4 border-yellow-500 mb-12 bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
      <img
        src="/Latest.JPG"
        alt="Latest Researched Product"
        className="w-full md:w-1/2 h-60 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
      />
      <div>
        <h3 className="text-2xl font-bold text-green-700 mb-2">Featured Product: Latest High-Yield Hybrid Wheat Seeds- HI-8830 पूसा कीर्ति </h3>
        <p className="text-gray-600">
          Our latest research brings high-yield hybrid wheat seed, ensuring greater resistance and productivity.
        </p>
      </div>
    </div>

    {/* Existing Products Grid */}
    <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
    <h3 className=" text-2xl font-bold mb-6 text-white text-left">Our Products</h3>
    <Link to="/products">
    <button
  className=" px-6 py-2 rounded-lg border-2 border-yellow-500 animate-bounce font-bold text-white"
>Explore Products</button>
    </Link>
    
    </div>


    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        'Research Wheat Seeds',
        'Notified Soyabean Seeds',
        'Research Black Gram Seeds',
      ].map((product, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md border-4 border-yellow-500">
          <img src="/product.webp" alt={product} className="w-full h-40 object-cover mb-4 rounded-full" />
          <h3 className="text-xl font-bold mb-2">{product}</h3>
          <p className="text-gray-600">High-quality seeds for maximum yield and reliability.</p>
        </div>
      ))}
    </div>
  </div>
</section>
<TestimonialsSection/>
<button></button>
    </div>
  );
};

export default Home;
