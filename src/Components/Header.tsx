import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <header className="bg-gray-100 text-gray-900 py-5 px-8">
        <div className="container mx-auto flex justify-between items-center">
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/" className="text-gray-900 hover:text-blue-500">Home</Link></li>
              <li><Link to="/about" className="text-gray-900 hover:text-blue-500">About</Link></li>
              <li><Link to="/contact" className="text-gray-900 hover:text-blue-500">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  };

export default Header;
