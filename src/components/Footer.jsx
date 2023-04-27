import React from 'react';

export const Footer = () => {
  return (
    <footer className=" text-gray-300 py-4">
      <div className="container mx-auto px-2">
        <p className="text-center text-sm md:text-lg">
          &copy; {new Date().getFullYear()} Putlocker Clone
        </p>
      </div>
    </footer>
  );
};
