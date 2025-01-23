import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8" style={styles.footer}>
      <div className="text-center">
        <p> <span className="font-semibold">©Kaizen ThinkLabs</span></p>
      </div>
    </footer>
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
