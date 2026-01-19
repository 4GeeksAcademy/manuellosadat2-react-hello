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
						text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores rem suscipit quibusdam amet quisquam!"
					/>
					<Card
						image="https://placehold.co/500x300?text=500+x+300"
						title="Card title"
						text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores rem suscipit quibusdam amet quisquam!"
					/>
					<Card
						image="https://placehold.co/500x300?text=500+x+300"
						title="Card title"
						text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores rem suscipit quibusdam amet quisquam!"
					/>
					<Card
						image="https://placehold.co/500x300?text=500+x+300"
						title="Card title"
						text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores rem suscipit quibusdam amet quisquam!"
					/>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default Home;
