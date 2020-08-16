import React from 'react';
import './App.css';

const Homepage = (props) => {
    const images = ['/images/img1.jpg','/images/img2.jpg', 'images/img3.jpg', '/images/stars2.jpg', 'images/backyardHippie.jpg', 'images/barge.jpg', 'images/craneview.png', 'images/twinpeaks.jpg'];
    return (
        <div className="container">
                {images.map((src, index) => <img key={index} src={process.env.PUBLIC_URL + src}/>)}
        </div>
    );
}

export default Homepage;