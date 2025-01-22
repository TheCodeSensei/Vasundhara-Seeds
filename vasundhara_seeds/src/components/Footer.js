import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8" styles = {styles.container}>
      <div className="text-center">
        <p className="text-sm"> <span className="font-semibold">©Kaizen ThinkLabs</span>
        </p>
      </div>
    </footer>
  );
};

const styles = {
  container: {
    position:'absolute',
    bottom:0,
  },
}

export default Footer;
