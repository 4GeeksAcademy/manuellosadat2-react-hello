import React from "react";

const Card = ({ image, title, text }) => {
	return (
		<div className="col-md-3">
			<div className="card h-100">
				<img src={image} className="card-img-top" alt="card" />
				<div className="card-body text-center">
					<h5 className="card-title">{title}</h5>
					<p className="card-text">{text}</p>
					<a href="#" className="btn btn-primary">
						Find Out More!
					</a>
				</div>
			</div>
		</div>
	);
};

export default Card;
