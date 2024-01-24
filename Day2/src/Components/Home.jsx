// import React from 'react';
import './Home.css';
// import <link rel="stylesheet" href="style.css" />
const Home = () => {
  
  return (
    <body>
    
    <div className="hcontianer">
        <div className="header">
          <div className="sub2">
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Partners</a></li>
                <li><a href="">FAQs</a></li>
                <li><a href="">Log Out</a></li>
            </ul>
          </div>
        </div>
    
      <div className="bgimg-1">
        <div className="caption">
          <span className="border">SCROLL DOWN</span>
        </div>
      </div>

      <div className="content-section">
        <h3>Parallax Demo</h3>
        <p>
          Parallax scrolling is a web site trend where the background content is moved at a different speed than the foreground content while scrolling.
          {/* Rest of your content */}
        </p>
      </div>

      <div className="bgimg-2">
        <div className="caption">
          <span className="border" style={{ backgroundColor: 'transparent', fontSize: '25px', color: '#f7f7f7' }}>LESS HEIGHT</span>
        </div>
      </div>

      <div className="content-section">
        <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p>
      </div>

      <div className="bgimg-3">
        <div className="caption">
          <span className="border" style={{ backgroundColor: 'transparent', fontSize: '25px', color: '#f7f7f7' }}>SCROLL UP</span>
        </div>
      </div>

      <div className="content-section">
        <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p>
      </div>

      <div className="bgimg-1">
        <div className="caption">
          <span className="border">COOL!</span>
        </div>
      </div>
    </div>
    </body>
  );
}

export default Home;
