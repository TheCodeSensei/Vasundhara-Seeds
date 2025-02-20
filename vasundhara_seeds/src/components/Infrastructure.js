import Breadcrumb from "./BreadCrumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";

export default function Infrastructure(){

    const hero_section = [{image:'/infra1.JPG'},
        {image:'/infra2.JPG'},
        {image:'/infra3.JPG'},
        {image:'/infra5.JPG'},
        {image:'/infra6.JPG'}
    ]
    return(
        
        <div>
<section className="relative bg-cover bg-center h-[400px] pt-20">
  {/* ✅ Hero Image with Overlay */}
  <div 
    className="w-full h-full bg-cover bg-center flex items-end justify-start text-white p-8 relative"
    style={{ backgroundImage: `url('/infra5.JPG')` }}
  >
    {/* Overlay with Smooth Transition */}
    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-40"></div>

    {/* Text on Top of the Overlay */}
    <h1 className="text-4xl md:text-4xl font-bold z-10">Infrastructure</h1>
  </div>
</section>

{/* ✅ Breadcrumb Just Below the Hero Section */}
<Breadcrumb />

      {/* Infra Details Section */}
      <section class=" p-6 bg-white" style ={{backgroundImage:`url('/Home3.png')`}}>
  <div class="container mx-auto">
    {/* <!-- Main About Section --> */}
    <div class="flex flex-col md:flex-row items-center md:items-start justify-normal text-left md:text-left">
      {/* <!-- Left Side (Title) --> */}
      <div>
        {/* <h2 class="text-2xl md:text-4xl font-bold text-green-900">Quality Products.</h2>
        <h2 class="text-2xl md:text-4xl font-bold text-green-900">Guranteed.</h2> */}
      </div>
      {/* <!-- Right Side (Description) --> */}
      <div>
        <h1 className="text-green-700 font-serif text-lg font-extrabold">Our Infrastructure</h1>
        <p className=" text-sm font-serif">We take pride in our state-of-the-art processing plant**, equipped with the latest John Fowler Westrup** technology from Denmark. Our **5-ton-per-hour grading plant**  advanced **gravity separators, a magnetic system for soil particle removal,** and a **9-spiral separator system** designed specifically for superior **soybean grading**.  

To ensure optimal storage conditions, we have built a **modern warehouse spanning half an acre**, featuring a **best-in-class shed** with **heat-dampening materials** to minimize moisture loss and preserve seed quality. Our infrastructure is designed to maintain the highest standards of seed purity, consistency, and longevity.  
</p>
      </div>
    </div>

    {/* <!-- Stats Section --> */}
    <div class="mt-8 text-center">
      <h3 class="text-xl md:text-2xl font-semibold inline-block border-b-2 border-yellow-900 pb-1 text-green-900 ">A Brief about our Infrastrcture</h3>
      <div class="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-4 bg-white shadow rounded-lg border-2 border-yellow-500">
          <h4 class="text-2xl font-bold text-green-900">22000 sq ft</h4>
          <p class="text-gray-600">Storage Capacity</p>
        </div>
        <div class="p-4 bg-white shadow rounded-lg border-2 border-yellow-500">
          <h4 class="text-2xl font-bold text-green-900">5 Ton/Day</h4>
          <p class="text-gray-600">Grading Plant</p>
        </div>
        <div class="p-4 bg-white shadow rounded-lg border-2 border-yellow-500">
          <h4 class="text-2xl font-bold text-green-900">9 Spiral Separator System </h4>
          <p class="text-gray-600">Designed specially for superior Soyabean grading </p>
        </div>
        <div class="p-4 bg-white shadow rounded-lg border-2 border-yellow-500">
          <h4 class="text-2xl font-bold text-green-900">state-of-the-art processing plant </h4>
          <p class="text-gray-600"> equipped with the latest John Fowler Westrup technology from Denmark.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Hero Section */}

<div className="w-full h-[80vh] md:h-[70vh] lg:h-[60vh] relative overflow-hidden py-10">
  <Swiper
    modules={[Autoplay, EffectFade]}
    effect="fade"
    autoplay={{ delay: 2500, disableOnInteraction: false }}
    loop={true}
    className="w-full h-full"
  >
    {hero_section.map((item, index) => (
      <SwiperSlide key={index}>
        <section 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${item.image})` }}
        ></section>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

        </div>
    )
};