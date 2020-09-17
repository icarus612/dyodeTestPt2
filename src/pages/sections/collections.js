import React from "react";
import Flickity from 'react-flickity-component';
 
const flickityOptions = {
    initialIndex: 2
}
 
const Carousel = () => {
  return (
    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
      <img src="/images/placeholder.png"/>
      <img src="/images/placeholder.png"/>
      <img src="/images/placeholder.png"/>
    </Flickity>
  )
}

const Collections = () => {
    return (
        <section className="hero">
            <header className="hero-container">
                <h1 className="hero-title">This is a large hero section</h1>
                <p>This is the text that describes the hero section.</p>
                <button className="hero-button">SHOP NOW</button>
            </header>
        </section>
    );
}

export default Collections;