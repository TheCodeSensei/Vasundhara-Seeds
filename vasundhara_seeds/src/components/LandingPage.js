import React from 'react';
import { useState } from 'react';
import '../styles.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import { Menu, X, Search} from "lucide-react"; 


const LandingPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const hero_section = [{image:'/farmarMan.jpg',title:"Welcome To Vasundhara Seeds", subtitle : "Your trusted partner in agricultural excellence"},
        {image:'/farmerLady.jpeg',title:"Future Ready seeds for growing future", subtitle:"Science-backed seeds for maximum productivity"},
        {image:'/WheatField.jpg',title:"Stronger Seeds, Stronger Harvest", subtitle:"Boosting yield and resilience for Farmers"}
    ]

  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <header className="bg-white text-black p-4 md:h-24 lg:h-20 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <img src ='/logo.jpg' className='cursor-pointer w-48' onClick={() => window.location.href = "/"} />
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

              {/* Search Bar (Hidden on Mobile, Visible on Large Screens) */}
        <div className="hidden md:flex items-center space-x-2 bg-gray-100 px-3 py-1 rounded-full shadow-inner">
          <Search className="text-gray-500 w-4 h-4" />
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent outline-none text-gray-700 w-48"
          />
          <button className="bg-green-500 text-white px-3 py-1 rounded-full hover:bg-green-600 transition-all">
            Search
          </button>
        </div>
        
        <nav
          className={`absolute md:relative top-full left-0 md:top-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-all ease-in-out duration-300 z-50 ${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:items-center`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 p-5 md:p-0">
            {["Home", "About", "Infrastructure", "Products", "Contact"].map((item, index) => (
              <li key={index} className="border-b md:border-0 pb-2 md:pb-0">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-black hover:text-blue-600 transition-all font-semibold tracking-wide font-serif"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        </div>
      </header>
      <hr class="border border-yellow-500 my-0 sticky top-20"/>

      {/* WhatsApp button */}
      <a
      href="https://wa.me/7337358747"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition transform z-50"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-10 h-10" />
    </a>


      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-screen lg:hidden">
      {/* ✅ Static Image for Small Screens (Hidden on lg+) */}
      <div 
        className="w-full h-screen bg-cover bg-centerbg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-gray-50" 
        style={{ backgroundImage: `url('/field.jpg')` }}
      >
        <h1 className="text-4xl md:text-4xl font-bold mb-4">
        Welcome to Vasundhara Seeds</h1>
        <p className="text-lg md:text-xl ">Your trusted partner in agricultural excellence</p><br></br>
        <button className="bg-green px-6 py-2 rounded-lg border border-yellow-500 animate-bounce font-bold">Explore Products</button>
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
        <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl md:text-4xl font-bold mb-4 animate-fadeIn">
        {item.title}</h1>
        <p className="text-lg md:text-xl animate-fadeIn">{item.subtitle}</p><br></br>
        <button className="bg-green px-6 py-2 rounded-lg border border-yellow-500 animate-bounce font-bold">Explore Products</button>
          </div>

      </section>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>

      {/* About Section */}
      <section class="p-6 md:p-12 bg-gray-100">
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
        <div class="p-4 bg-white shadow rounded-lg">
          <h4 class="text-2xl font-bold text-green-900">500+</h4>
          <p class="text-gray-600">Satisfied Farmers</p>
        </div>
        <div class="p-4 bg-white shadow rounded-lg">
          <h4 class="text-2xl font-bold text-green-900">100+</h4>
          <p class="text-gray-600">Quality Products</p>
        </div>
        <div class="p-4 bg-white shadow rounded-lg">
          <h4 class="text-2xl font-bold text-green-900">20+</h4>
          <p class="text-gray-600">Years Experience</p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Products Section */}
      <section id="products" className="py-16 bg-green-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((product) => (
              <div key={product} className="bg-white p-6 rounded-lg shadow-md">
                <img src={`https://via.placeholder.com/300x200`} alt="Product" className="w-full h-40 object-cover mb-4 rounded-lg" />
                <h3 className="text-xl font-bold mb-2">Product {product}</h3>
                <p className="text-gray-600">High-quality seeds for maximum yield and reliability.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-gray-700 mb-6">Have questions? Reach out to us!</p>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg border border-gray-300" />
            </div>
            <div className="mb-4">
              <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg border border-gray-300" />
            </div>
            <div className="mb-4">
              <textarea placeholder="Your Message" className="w-full p-3 rounded-lg border border-gray-300" rows="4"></textarea>
            </div>
            <button type="submit" className="bg-green-500 px-6 py-2 rounded-lg text-white hover:bg-green-400">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-600 text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Vasundhara Seeds. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
