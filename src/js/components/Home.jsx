import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbotron />

			<div className="container mt-4">
				<div className="row justify-content-center g-4">
					<Card
						image="https://placehold.co/500x300?text=500+x+300"
						title="Card title"
						text="Some quick example text to build on the card title."
					/>
					<Card
						image="https://placehold.co/500x300?text=500+x+300"
						title="Card title"
						text="Some quick example text to build on the card title."
					/>
					<Card
						image="https://placehold.co/500x300?text=500+x+300"
						title="Card title"
						text="Some quick example text to build on the card title."
					/>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default Home;
