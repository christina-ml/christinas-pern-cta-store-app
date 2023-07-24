import React from "react";
import { Link } from "react-router-dom";
import setStars from "../../helpers/setStars";

import './TopRatedProduct.scss';

const TopRatedProduct = ({key, product, src, id}) => {
	return (
		<div className="topRatedProduct">
			<Link to={`/products/${product.id}`}>
				<div className="topRatedProduct__image">
					<img src={src} alt={product.name} />
				</div>
				<div className="topRatedProduct__productName">{product.name}</div>
			</Link>
		</div>
	);
};

export default TopRatedProduct;
