import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import img1 from "./assets/img1.webp";
import img2 from "./assets/img2.jpeg";
import img3 from "./assets/img3.jpeg";
import img4 from "./assets/img4.webp";

const proprietes = {
	duration: 5000,
	transitionDuration: 500,
	Infinite: true,
	indicators: true,
	arrows: true,
};

const Slider = () => {
	return (
		<div className="containerSlide">
			<Slide {...proprietes}>
				<div className="each-slide">
					<img src={img1} alt="images 1" />
				</div>
				<div className="each-slide">
					<img src={img2} alt="images 2" />
				</div>
				<div className="each-slide">
					<img src={img3} alt="images 3" />
				</div>
				<div className="each-slide">
					<img src={img4} alt="images 4" />
				</div>
			</Slide>
		</div>
	);
};

export default Slider;
