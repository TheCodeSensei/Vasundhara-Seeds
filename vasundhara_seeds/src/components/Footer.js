import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone } from "lucide-react";


const Footer = () => {
  return (
    <div >
        <footer class="bg-green-800 text-white py-10">
    <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* <!-- Logo & About --> */}
        <div>
          <img src = '/logo_hindi.jpeg' className='h-[50px] cursor-pointer'onClick={()=>window.location.href='/'}/><br></br>
            <p class="text-gray-300 text-sm">
                Bringing you the best services with a commitment to excellence and sustainability.
            </p>
        </div>

        {/* <!-- Quick Links --> */}
        <div>
            <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2 text-gray-300">
                <li><Link to="/" class="hover:text-white transition">Home</Link></li>
                <li><Link to="/about-us" class="hover:text-white transition">About Us</Link></li>
                <li><a href="/infrastructure" class="hover:text-white transition">Infrastructure</a></li>
                <li><Link to="/products" class="hover:text-white transition">Products</Link></li>
                <li><Link to="/contact" class="hover:text-white transition">Contact</Link></li>
            </ul>
        </div>

        {/* <!-- Contact Info --> */}
        <div>
            <img src='/gps.png'></img><p class="text-gray-300 text-">53 D Badi Udyogpuri, Maxi Rd, near Mahaveer Toll Kata, Agrasen Nagar, Ujjain, Madhya Pradesh 456010</p>
            <img src='/email.png'></img><p class="text-gray-300 text-sm">vasundhara_seeds@gmail.com</p>
            <img src='/phone.png'></img><p class="text-gray-300 text-sm">+91 9425332127</p>
        </div>

        {/* <!-- Social Media --> */}
        <div>
                    <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                    <div className="flex space-x-4">
                        <a href="https://m.facebook.com/Vasundharaseedsujjain/" className="bg-white text-green-900 hover:bg-green-700 hover:text-white transition w-12 h-12 flex items-center justify-center rounded-full text-2xl">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a  className="bg-white text-green-900 hover:bg-green-700 hover:text-white transition w-12 h-12 flex items-center justify-center rounded-full text-2xl">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a className="bg-white text-green-900 hover:bg-green-700 hover:text-white transition w-12 h-12 flex items-center justify-center rounded-full text-2xl">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://youtube.com/@sarangmanage10?si=qEai_gMTGyKLr3xi" className="bg-white text-green-900 hover:bg-green-700 hover:text-white transition w-12 h-12 flex items-center justify-center rounded-full text-2xl">
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                    </div>
        </div>
    </div>
    </footer>

    {/* <!-- Bottom Bar --> */}
    <div class="text-center text-white text-sm border-t border-yellow-600 pt-4 bg-green-900 ">
        Copyright©2025 Vasundhara Seeds | Design and Developed by: Kaizen ThinkWorks
    </div>
      </div>
  );
};

const styles = {
  footer: {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    textAlign: 'center', // Make sure the text is centered within the footer
  },
}

export default Footer;
