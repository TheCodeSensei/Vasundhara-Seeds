import {Link} from 'react-router-dom'
import { useState } from 'react';
import { Menu, X, Search} from "lucide-react"; 



export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
          {/* Navbar */}
            <header className=" bg-white text-black p-4 md:h-20 lg:h-20 fixed top-0 left-0 w-full z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <img src ='/logo_hindi.jpeg' className='cursor-pointer w-48' onClick={() => window.location.href = "/"} />
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
        
        {/* Nav Bar */}
        <nav
          className={`absolute md:relative top-full left-0 md:top-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-all ease-in-out duration-300 z-50 ${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:items-center`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 p-5 md:p-0">
            {["Home", "About-Us", "Infrastructure", "Products", "Contact"].map((item, index) => (
                              <Link key = {index} to={`/${item.toLowerCase()}`} className="text-black hover:text-blue-600 transition-all font-semibold tracking-wide font-serif text-sm" onClick={()=>setIsMenuOpen(false)}>
              <li key={index} className="border-b md:border-0 pb-2 md:pb-0">
{item}

             </li>
             </Link>
            ))}
          </ul>
        </nav>
        </div>
      </header>
      <hr class="border border-yellow-500 my-0 sticky top-20"/>

            {/* WhatsApp button */}
            <a
      href="https://wa.me/7337358747"
      className="fixed bottom-20 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition transform z-50 animate-bounce"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-10 h-10" />
    </a>

    </div>

  )
}
