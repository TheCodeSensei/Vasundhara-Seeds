import React, { useState } from "react";
import Breadcrumb from "./BreadCrumbs";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Icons for toggle



export default function Products(){
  const products = [
    {
      name: "Wheat Seeds",
      varieties: ["HI-1650 Pusa Ojaswi", "LOK-1", "Pusa Harsha(HI1655)","Pusa Kirti (HI 8830)","Pusa Ahilya (HI 1634)","Pusa Tejas (HI8759",
        "C-306","Purna (Hi-1544)","Pusa Mangal(HI 8713)","GW 513","GW-322","Pusa Malwi (HD 4728)","HD-3385","HD-3410","PRADHAN"
      ],
      image:"/wheatseed.jpg"
    },
    {
      name: "Soybean Seeds",
      varieties: ["JS-9569", "RVSM 11-35","RVS 2002-4","JS 20-34"],
      image:"/soyabean.jpg"
    },
    {
      name: "Black Gram Seeds",
      varieties: ["Phule Vikram", "Phule Vikrant","Daftari-21","Vishal","Pusa Manav"],
      image:'/chana.webp'
    }
  ];
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedVariety, setSelectedVariety] = useState(null);



    return(
<div>
<section className="relative bg-cover bg-center h-[400px] pt-20 px-5">
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

    <div className="container mx-auto p-6">
      <h3 className="text-2xl font-bold mb-6 text-white text-left">Our Products</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md border-4 border-yellow-500 cursor-pointer"
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
                      className={`cursor-pointer px-4 py-2 rounded-md transition ${
                        selectedVariety === variety ? "bg-green-500 text-white" : "hover:bg-gray-200"
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
</section>


</div>
    );

};