import React from 'react';
import '../assets/css/application.css';
import NavBar from './sections/navbar.js';
import HomeHero from'./sections/homeHero.js';
import Collections from'./sections/collections.js';
import Products from'./sections/products.js';
import InstaReel from'./sections/instaReel.js';
import Subscribe from'./sections/subscribe.js';
import Footer from'./sections/footer.js';



const Home = () => {

	return (
		<div>
			<NavBar />
			<HomeHero />
			<Collections />
			<Products />
			<InstaReel />
			<Subscribe />
			<Footer />
		</div>
	)
}

export default Home;
