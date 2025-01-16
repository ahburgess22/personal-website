import React from 'react';

const Header = () => {
    return (
      <header className="bg-gray-100 text-gray-900 py-5 px-8">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Austin Burgess</h1>
            <p className="text-sm">Welcome to my page! This site was an effort to 1) expand my knowledge of frameworks and 2) give a well-rounded picture of my background, both technical and beyond!</p>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li className="text-gray-900 hover:text-blue-500">Home</li>
              <li className="text-gray-900 hover:text-blue-500">About</li>
              <li className="text-gray-900 hover:text-blue-500">Contact</li>
            </ul>
          </nav>
        </div>
      </header>
    );
  };

export default Header;
