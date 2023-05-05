import axios from "axios";
import { useState, useEffect } from "react";

import "./Home.scss";
import TopFive from "../TopFive/TopFive";

const API = process.env.REACT_APP_API_URL;

export default function Home() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		axios
			.get(`${API}/products`)
			.then((res) => {
				setProducts(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className="home">
			<div className="home__banner">
				<div className="home__banner__mainContent">
					<div className="home__banner__mainContent__topFive">
						<div className="home__banner__mainContent__topFive__topFiveHeader">
							Top rated handcrafted treasures
						</div>
						<div className="home__banner__mainContent__topFive__topRatedProducts">
							{/* show only top 5 rated products */}
							{products
								.sort((a, b) => (a.rating < b.rating ? 1 : -1))
								.slice(0, 6)
								.map((product, index) => {
									const src =
										product.image.substring(0, 8) ===
										"https://"
											? product.image
											: API + product.image;

									return (
										<TopFive
											product={product}
											src={src}
											id={index}
											key={product.id + index}
										/>
									);
								})}
						</div>
					</div>
				</div>
				<div className="home__banner__welcome">
					<h1>Welcome!</h1>
					<p>
						At Christina's Crafts Store, we have many crafts items
						for sale.
					</p>
					<p>Please take a look!</p>
				</div>
			</div>
		</div>
	);
}
