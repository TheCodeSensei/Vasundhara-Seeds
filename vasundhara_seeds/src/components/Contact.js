import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Breadcrumb from "./BreadCrumbs";
import ScrollToTop from '../utils/scrollToTop.js';



export default function ContactUs() {
  return (
    <div >
      <ScrollToTop />

      <section className="relative bg-cover bg-center h-[400px] pt-1">
        {/* ✅ Hero Image with Overlay */}
        <div
    className="w-full h-full flex justify-center text-white relative"
    style={{
      backgroundImage: `linear-gradient(to right, #ffffb3, transparent 30%, transparent 70%, #99e699), url('/shoenow.JPG')`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundBlendMode: 'overlay',
    }}
  >

          {/* Overlay with Smooth Transition */}
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-40"></div>

          {/* Text on Top of the Overlay */}
          <h1 className="text-4xl md:text-4xl font-bold z-10">Reach Us</h1>
        </div>
      </section>

      {/* ✅ Breadcrumb Just Below the Hero Section */}
      <Breadcrumb />
      <div className="w-full h-[2px] bg-yellow-900"></div>

      <div className="mt-6">
        {/* Contact Info Section */}
        <div className="flex justify-center"> <h2 className="text-3xl font-bold text-center mb-8 text-green-700 border-b-2 border-yellow-900">Contact Us</h2></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 ">
          {/* Call Us Card */}
          <div className=" shadow-lg rounded-xl p-6 text-center border border-gray-200 bg-gradient-to-tl from-stone-500 via-green-400 to-green-900">
            <FaPhoneAlt className="text-green-800 text-4xl mx-auto mb-4" />
            <div className="flex justify-center"><h3 className="text-xl font-semibold text-white border-b-2 border-yellow-900">Call Us</h3></div>
            <p className=" mt-2 text-black">+91 9425332127</p>
          </div>

          {/* Mail Us Card */}
          <div className="shadow-lg rounded-xl p-6 text-center border border-gray-200 bg-gradient-to-tl from-stone-500 via-green-400 to-green-900">
            <FaEnvelope className="text-blue-500 text-4xl mx-auto mb-4" />
            <div className="flex justify-center"><h3 className="text-xl font-semibold text-white border-b-2 border-yellow-900">Mail Us</h3></div>
            <p className="mt-2 text-black">vasundharabio@yahoo.co.in</p>
          </div>

          {/* Location Card with Google Map */}
          <div className="bg-green-900 shadow-lg rounded-xl p-6 text-center border bg-gradient-to-tl from-stone-500 via-green-400 to-green-900">
            <FaMapMarkerAlt className="text-red-500 text-4xl mx-auto mb-4" />
            <div className="flex justify-center"><h3 className="text-xl font-semibold text-white border-b-2 border-yellow-900">Reach Us</h3></div>
            <p className="mt-2 mb-4 text-black">53 D Badi Udyogpuri, Ujjain, MP</p>

          </div>
        </div>
        <div className="w-full h-40 rounded-lg overflow-hidden">
          <iframe
            title="Google Map"
            className="w-full h-[200px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.8127678815176!2d75.81210517554797!3d23.177032679065885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963747197b72967%3A0xa1e833c73156e647!2sVasundhara%20Seeds%2C%20Ujjain!5e0!3m2!1sen!2sin!4v1739965422649!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="text-center mt-8">
          <a
            href="https://wa.me/919425332127"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-800 transition-all animate-pulse"
          >
            <span className="mr-2">Chat on WhatsApp</span>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-10 h-10" />

          </a>
        </div>


        {/* <!-- Social Media --> */}
        <div className="text-center mt-8 py-10 text-green-700">
          <div className="flex justify-center "><h3 className="text-lg font-semibold mb-4 border-b-2 border-yellow-900">Connect With Us</h3></div>
          <div className="inline-flex items-center gap-8">
            <a href="https://m.facebook.com/Vasundharaseedsujjain/" className="bg-green-900 text-yellow-400 hover:bg-green-700 hover:text-white transition w-12 h-12 flex items-center justify-center rounded-full text-2xl">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a className="bg-green-900 text-yellow-400 hover:bg-green-700 hover:text-white transition w-12 h-12 flex items-center justify-center rounded-full text-2xl">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a className="bg-green-900 text-yellow-400 hover:bg-green-700 hover:text-white transition w-12 h-12 flex items-center justify-center rounded-full text-2xl">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://youtube.com/@sarangmanage10?si=qEai_gMTGyKLr3xi" className="bg-green-900 text-yellow-400 hover:bg-green-700 hover:text-white transition w-12 h-12 flex items-center justify-center rounded-full text-2xl">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-[2px] bg-yellow-900"></div>

    </div>
  );
}
