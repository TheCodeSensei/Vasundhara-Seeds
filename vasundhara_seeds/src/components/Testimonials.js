import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Mukesh Chaudhary",
    role: "farmer",
    image: "/planting.png",
    feedback: "वसुंधरा सीट पर बहुत अच्छी क्वालिटी के गेहूं उपलब्ध होते हैं"
  },
  {
    name: "आजाद चौरसिया",
    role: "Farmer",
    image: "/planting.png",
    feedback: "बीच के मामले में गुणवत्ता के साथ विश्वास ही वसुंधरा की पहचान है हमारे उज्जैन के लिए बहुत ही सम्मान का विषय है उज्जैन की शान वसुंधरा सीड्स, किसान का विश्वास वसुंधरा सीड्स की पहचान..🚩जय श्री महाकाल🚩 …"
  },
  {
    name: "Deepaj Borkar",
    role: "Farmer",
    image: "/planting.png",
    feedback: "Good people always their to help farmers with latest innovations."
  },
  {
    name: "Vaibhav Patidar",
    role: "Farmer",
    image: "/planting.png",
    feedback: "Best seeds of mp are available here"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000); // Auto-scroll every 5 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-gray-100 py-12 px-6" style = {{backgroundImage:`url('/Home3.png')`}}>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Testimonials</h2>
        <p className="text-gray-600 mb-8">Hear from our satisfied customers</p>

        <div className="relative flex justify-center items-center">
          {/* Left Button */}
          <button
            className="absolute left-0 bg-white p-3 rounded-full shadow-lg hover:bg-gray-200 transition-all"
            onClick={prevTestimonial}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Testimonial Card */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className=" p-6 rounded-xl shadow-lg max-w-lg mx-6 text-center bg-green-800"
          >
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-16 h-16 rounded-full mx-auto mb-3"
            />
            <p className="text-white font-semibold italic text-lg">"{testimonials[currentIndex].feedback}"</p>
            <h3 className="mt-4 text-lg font-semibold">{testimonials[currentIndex].name}</h3>
            <p className=" text-sm">{testimonials[currentIndex].role}</p>
          </motion.div>

          {/* Right Button */}
          <button
            className="absolute right-0 bg-white p-3 rounded-full shadow-lg hover:bg-gray-200 transition-all"
            onClick={nextTestimonial}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-green-500" : "bg-gray-300"
              } transition-all`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
