import { useState } from "react";

import "./FourOFour.scss";

export default function FourOFour() {
	const [randomWord, setRandomWord] = useState("Crafts");
	const wordsWithC = [
		"Cats",
		"Crafts",
		"Crayons",
		"Crochet",
		"Craftswoman",
		"Craftsmanship",
		"Collage",
		"Crafting",
		"Crazy-glue",
		"Creative",
		"Candle",
		"Chair",
		"Circles",
		"Coffee",
		"Cup",
		"Clock",
		"Clips",
		"Cut",
		"Create",
		"Cookie cutters",
		"Clock",
		"Candy",
		"Card",
	];

	// choose a random word based on random index
	const handleRandomClick = () => {
		let randomWordIndex = Math.floor(Math.random() * wordsWithC.length);
		setRandomWord(wordsWithC[randomWordIndex]);
	};

	return (
		<div className="fourOFour">
			<div className="fourOFour__errorMsg">
				<h1>404 - Uh-oh! That page doesn't exist!</h1>
			</div>
			<div className="fourOFour__words">
				<div className="fourOFour__words__cIsFor">C is for...</div>
				<div>
					<div
						className="fourOFour__words__wordsWithC"
						onClick={handleRandomClick}
					>
						<div>
							<img
								src="https://cdn-icons-png.flaticon.com/512/1353/1353492.png"
								alt="c is for cat"
								width="150px"
							/>
						</div>
						<div className="fourOFour__words__wordsWithC__randomWordEnding">
							{randomWord.slice(1)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
