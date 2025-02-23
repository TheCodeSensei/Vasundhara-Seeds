import {React, useState} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Breadcrumb from "./BreadCrumbs";


export default function About(){
    const [selectedMember, setSelectedMember] = useState(null);


    const teamMembers = [
        { 
          name: "Mr. Pradeep Khadikar", 
          role: "Founder and Owner", 
          image: "/Pradeep1.JPG", 
          bio: "With 27 years of extensive experience in the seed industry, Mr. Pradeep Khadikar possesses deep expertise in seed technology and market dynamics. Known for his humility and relationship-building skills, he fosters long-lasting partnerships that drive the company’s growth and success.", 
          social: { linkedin: "#", twitter: "#" }
        },
        { 
          name: "Mr. Sarang Khadikar", 
          role: "Head of Finance & Business Development", 
          image: "/Sarang1.JPG", 
          bio: "Bringing 12 years of industry experience and an MBA from the prestigious National Institute of Agricultural Extension Management (MANAGE), Hyderabad, Mr. Sarang Khadikar leads the company’s financial strategy and business development initiatives. His strategic vision ensures sustainable growth and market expansion.", 
          social: { linkedin: "#", twitter: "#" }
        },
        { 
          name: "Mr. Prabhanjan Gokhale", 
          role: "Chief Operating Officer(COO)", 
          image: "/Prabhanjan.JPG", 
          bio: "With 12 years of experience in retail management, including leadership roles at reputed companies like TATA, Mr. Prabhanjan Gokhale oversees the company’s operations and systems. His expertise in streamlining processes and optimizing efficiency makes him the backbone of the organization.", 
          social: { linkedin: "#", twitter: "#" }
        },
      ];
    
      const certifications = [
        { name: "Pride of Ujjain", image: "/award.JPG" },

      ];
    
    return(
        <div>
<section className="relative bg-cover bg-center h-[400px] pt-20">
  {/* ✅ Hero Image with Overlay */}
  <div 
    className="w-full h-full bg-cover bg-center flex items-end justify-start text-white p-8 relative"
    style={{ backgroundImage: `url('/WheatField.jpg')` }}
  >
    {/* Overlay with Smooth Transition */}
    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-40"></div>

    {/* Text on Top of the Overlay */}
    <h1 className="text-4xl md:text-4xl font-bold z-10">About Us</h1>
  </div>
</section>

{/* ✅ Breadcrumb Just Below the Hero Section */}
<Breadcrumb />

      {/* About Section */}
      <section class="p-6 md:p-10 bg-white" style ={{backgroundImage:`url('/Home3.png')`}}>
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
        <p className=" text-sm font-serif">Our journey began with the vision of our founder, Mr. Pradeep Khadikar, whose deep-rooted passion for agriculture and farmers’ welfare shaped the foundation of our company. Starting his career with a modest salary of ₹800 at Asia’s largest oil processing company, he gained invaluable experience working directly with farmers, understanding their needs, and learning about agricultural practices firsthand. </p>

<p className=" text-sm font-serif">After 12 years in the industry, he embarked on his entrepreneurial journey, initially venturing into organic inputs before expanding into agrochemicals, partnering with renowned companies like Syngenta, SWAL and others. Recognizing the increasing demand for high-quality seeds, he began supplying soybean and wheat seeds from reputed brands. However, inconsistencies in seed quality revealed a crucial gap in the market—farmers were willing to invest in premium-quality seeds but lacked reliable sources.  

To bridge this gap, we established our own seed production unit, starting with a 2-ton-per-hour grading machine and a storage facility at Udyogpuri Maxi Road.</p> <p className=" text-sm font-serif"> Our unwavering commitment to delivering consistent, high-quality seeds quickly earned farmers' trust, leading to significant growth in demand. In response, we expanded our operations with a 5-ton-per-hour processing unit and, more recently, constructed a state-of-the-art warehouse equipped with cutting-edge processing technology and large-capacity storage, ensuring optimal seed quality and preservation.  </p>

<p className=" text-sm font-serif">Today, we continue to empower farmers with superior-quality seeds, staying committed to innovation, excellence, and sustainable agricultural growth
</p>
      </div>
    </div>

    {/* <!-- Stats Section --> */}
    <div class="mt-8 text-center">
      <h3 class="text-xl md:text-2xl font-semibold inline-block border-b-2 border-yellow-900 pb-1 text-green-900 ">Vasundhara at Glance</h3>
      <div class="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-4 bg-white shadow rounded-lg border-2 border-yellow-500">
          <h4 class="text-2xl font-bold text-green-900">40000+</h4>
          <p class="text-gray-600">Satisfied Farmers</p>
        </div>
        <div class="p-4 bg-white shadow rounded-lg border-2 border-yellow-500">
          <h4 class="text-2xl font-bold text-green-900">20+</h4>
          <p class="text-gray-600">Quality Products</p>
        </div>
        <div class="p-4 bg-white shadow rounded-lg border-2 border-yellow-500">
          <h4 class="text-2xl font-bold text-green-900">25+</h4>
          <p class="text-gray-600">Years Experience</p>
        </div>
      </div>
    </div>
  </div>
</section>

          {/* Mission and Vision */}
          <section className='hidden lg:block h-screen bg-cover bg-center bg-green-800' style={{backgroundImage:`url('/mission_vision.png')`}}>
      <div></div>
      </section>


      <section className="bg-gray-100 py-12 px-6">
  {/* Team Section */}
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold text-gray-800">Meet Our Team</h2>
    <p className="text-gray-600 mb-6">Dedicated professionals behind our success</p>

    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
      {teamMembers.map((member, index) => (
        <div 
          key={index} 
          className="bg-white rounded-xl shadow-md cursor-pointer border-2 border-yellow-500 p-4"
          onClick={() => setSelectedMember(selectedMember === index ? null : index)}
        >
          <img src={member.image} alt={member.name} className="rounded-3xl w-full h-80 object-cover" />
          <h3 className="text-lg font-semibold bg-green-700 text-white border-2 border-yellow-500 p-2 rounded-md">
            {member.name}
            <p className="text-sm">{member.role}</p>
          </h3>

          {/* Read More Animation */}
          <p 
            className={`text-green-900 font-semibold mt-2 text-sm cursor-pointer 
            ${selectedMember === index ? 'hidden' : 'animate-bounce'}`}
          >
            Read More ↓
          </p>

          {/* Expandable Section */}
          {selectedMember === index && (
            <div className="mt-4 text-gray-700 text-sm bg-gray-50 p-3 rounded-lg shadow-inner">
              <p><strong>Bio:</strong> {member.bio}</p>
              <div className="flex justify-center mt-2 space-x-3">
                <a href={member.social.linkedin} className="text-blue-600 hover:underline">LinkedIn</a>
                <a href={member.social.twitter} className="text-blue-400 hover:underline">Twitter</a>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>

      {/* Awards and Certification Section */}
      <div className="container mx-auto text-center mt-12">
        <h2 className="text-3xl font-bold text-gray-800">Awards</h2>
        <p className="text-gray-600 mb-6">Prestigious Pride of Ujjain award by Madhya Pradesh Chief Minister Mohan Yadav </p>
        
        <div className="flex flex-wrap justify-center gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white p-4 rounded-xl shadow-md">
              <img src={cert.image} alt={cert.name} className="w-full h-full mx-auto object-contain" />
              {/* <p className="text-gray-700 font-bold mt-2">{cert.name}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
        </div>

    );

};