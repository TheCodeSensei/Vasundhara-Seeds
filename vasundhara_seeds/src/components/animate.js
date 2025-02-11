import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function AnimatedCalculation() {
  const [showSecond, setShowSecond] = useState(false);
  const [showEquation, setShowEquation] = useState(false);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowSecond(true), 1000);
    setTimeout(() => setShowEquation(true), 2000);
    setTimeout(() => setShowResult(true), 3000);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-4xl font-bold space-y-4">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        400000
      </motion.div>
      {showSecond && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <span className="mx-4">-</span> 800000
        </motion.div>
      )}
      {showEquation && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          × 5% =
        </motion.div>
      )}
      {showResult && (
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} className="text-green-500">
          20000
        </motion.div>
      )}
    </div>
  );
}
