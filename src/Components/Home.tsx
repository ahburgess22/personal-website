import React from 'react';
import './Home.css';

const Home = () => {
    return (
      <div className="homepage-container">
        <header className="bg-gray-100 text-gray-900 py-5 px-8">
          <div className="container mx-auto flex justify-between items-center flex-col">
            
            <div className="header">
              <h1 className="title">Austin Burgess</h1>
              <p className="subtitle">Welcome! This site serves as both my portfolio and a space where I expand my front-end development skills using TypeScript. Dive into my <strong>About page</strong> to explore my journey, portfolio, and what drives my work. Don't hesitate to reach out via the <strong>Contact page</strong> — I'm always eager to connect with interesting people from tech and beyond!</p>
            </div>
            
            <div className="images-container">
              <div className="side-images">
                <img src="/images/UMass Sticker.png" alt="UMass Sticker" className="umass" />
              </div>
              <div className="center-image">
                <img src="/images/Headshot Edit.png" alt="Headshot" className="headshot" />
              </div>
              <div className="side-images">
                <img src="/images/Swat Sticker.png" alt="Swat Sticker" className="swat" />
              </div>
            </div>

          </div>
        </header>
      </div>
    );
  };

export default Home;