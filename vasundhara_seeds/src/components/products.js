import React from 'react'
import Breadcrumb from "./BreadCrumbs";


export default function Products(){

    return(
<div>
<section className="relative bg-cover bg-center h-[300px] pt-20 px-5">
  {/* ✅ Hero Image with Overlay */}
  <div 
    className="w-full h-full bg-cover bg-center flex items-end justify-start text-white p-8 relative"
    style={{ backgroundImage: `url('/fb.jpg')` }}
  >
    {/* Overlay with Smooth Transition */}
    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-40"></div>

    {/* Text on Top of the Overlay */}
    <h1 className="text-4xl md:text-4xl font-bold z-10">Products</h1>
  </div>
</section>

<Breadcrumb/>

        {/* Products Section */}
        <section id="products" className="py-20">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold text-left mb-8 text-white">Our Products</h2>



    {/* Latest Researched Product */}
    <div className="border-4 border-yellow-500 mb-12 bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
      <img
        src="/product2.JPG"
        alt="Latest Researched Product"
        className="w-full md:w-1/2 h-60 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
      />
      <div>
        <h3 className="text-2xl font-bold mb-2">Featured Product: Latest High-Yield Hybrid Wheat Seeds- HI-8830 पूसा कीर्ति </h3>
        <p className="text-gray-600">
          Our latest research brings high-yield hybrid wheat seed, ensuring greater resistance and productivity.
        </p>
      </div>
    </div>

    {/* Existing Products Grid */}
    <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
    <h3 className=" text-2xl font-bold mb-6 text-white text-left">Our Products</h3>
    
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

</div>
    );

};