import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const images = [
  '/Chang_Ryan_Photo1.jpg',
  '/IMG_5043_Original.jpg',
  '/IMG_6161.jpg',
  '/MeAndTheBird.jpg',
];

export function WelcomeAnimation() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000); // Change image every 3.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: 'relative', width: '550px', height: '550px' }}>
      <AnimatePresence exitBeforeEnter>
        <motion.img
          key={currentImage}
          src={images[currentImage]}
          alt="carousel"
          initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.8, rotate: -10 }}
          transition={{ duration: 1 }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '15px',
          }}
        />
      </AnimatePresence>
    </div>
  );
}
