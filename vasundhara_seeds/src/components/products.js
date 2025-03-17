import React, { useState } from "react";
import Breadcrumb from "./BreadCrumbs";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Icons for toggle
import { Link } from "react-router-dom";
import ScrollToTop from '../utils/scrollToTop.js';




export default function Products() {

  const products = [
    {
      name: "Wheat Seeds",
      varieties: ["HI-1650 Pusa Ojaswi", "LOK-1", "Pusa Harsha(HI1655)", "Pusa Kirti (HI 8830)", "Pusa Ahilya (HI 1634)", "Pusa Tejas (HI8759",
        "C-306", "Purna (Hi-1544)", "Pusa Mangal(HI 8713)", "GW 513", "GW-322", "Pusa Malwi (HD 4728)", "HD-3385", "HD-3410", "PRADHAN"
      ],
      image: "/wheatseed.jpg"
    },
    {
      name: "Soybean Seeds",
      varieties: ["JS-9569", "RVSM 11-35", "RVS 2002-4", "JS 20-34"],
      image: "/soyabean.JPG"
    },
    {
      name: "Black Gram Seeds",
      varieties: ["Phule Vikram", "Phule Vikrant", "Daftari-21", "Vishal", "Pusa Manav"],
      image: '/chana.webp'
    }
  ];
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedVariety, setSelectedVariety] = useState(null);



  return (
    <div>
      <ScrollToTop />

      <section className="relative bg-cover bg-center h-[400px] pt-1 ">
        {/* ✅ Hero Image with Overlay */}
        <div
          className="w-full h-full bg-cover bg-center flex items-end justify-start text-white relative"
          style={{ backgroundImage: `url('/products_hero.jpg')` }}
        >
          {/* Overlay with Smooth Transition */}
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-40"></div>

          {/* Text on Top of the Overlay */}
          <h1 className="text-4xl md:text-4xl font-bold z-10">Products</h1>
        </div>
      </section>

      <Breadcrumb />
      <div className="w-full h-[2px] bg-yellow-900"></div>

      {/* Products Section */}
      <section id="products" className="py-10 px-4 sm:py-20 bg-gradient-to-r from-stone-100 to-yellow-200">
        <div className="container mx-auto max-w-6xl">
        <div className="container mx-auto p-6">
            <div className="flex justify-center"><h3 className="text-2xl font-bold mb-6 text-black text-left inline-block border-b-2 border-yellow-900 pb-1">Field Crops</h3></div>

            <div id="seed_products" className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md border-4 border-green-500 cursor-pointer"
                  onClick={() => setSelectedProduct(selectedProduct === index ? null : index)}
                >
                  <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4 rounded-full" />
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600">High-quality seeds for maximum yield and reliability.</p>
                  {/* Toggle Button */}
                  <button
                    className="w-full flex items-center justify-between px-4 py-2 bg-green-500 text-white font-bold rounded-md transition hover:bg-green-900"
                    onClick={() => setSelectedProduct(selectedProduct === index ? null : index)}
                  >
                    {selectedProduct === index ? "Hide Varieties" : "View Varieties"}
                    {selectedProduct === index ? <FaChevronUp /> : <FaChevronDown />}
                  </button>

                  {/* Expandable Varieties List with Clickable Selection */}
                  {selectedProduct === index && (
                    <div className="mt-3 bg-gray-100 p-3 rounded-lg shadow-inner transition-all duration-300">
                      <h4 className="text-lg font-semibold text-green-700">Varieties:</h4>
                      <ul className="list-none p-0">
                        {product.varieties.map((variety, i) => (
                          <li
                            key={i}
                            onClick={() => setSelectedVariety(variety)}
                            className={`cursor-pointer px-4 py-2 rounded-md transition ${selectedVariety === variety ? "bg-green-500 text-white" : "hover:bg-gray-200"
                              }`}
                          >
                            {variety}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>


          <div className='flex justify-center'>
            {/* Section Heading */}
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6 text-center border-b-2 border-yellow-900 pb-1">
              Featured Products
            </h2>
          </div>
          {/* Featured Products Section */}
          <div className="border-4 border-green-500 bg-white p-6 sm:p-8 rounded-lg shadow-lg">

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-12">
              {[
                { name: "HD 33-85", img: "/hd-3385.JPG" },
                { name: "HI-8830 Pusa Kirti", img: "/hi-8830.JPG" },
                { name: "HI-1650 Pusa Ojaswi", img: "/hi-1650.JPG" }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center">
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

      </section>
      <div className="w-full h-[2px] bg-yellow-900"></div>


    </div>
  );

};