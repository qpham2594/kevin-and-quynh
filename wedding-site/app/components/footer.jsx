import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white py-4">
      <div className="container mx-auto text-center mt-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Quynh & Kevin. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
