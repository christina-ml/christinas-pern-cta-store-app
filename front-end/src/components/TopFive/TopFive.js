import React from "react";
import { Link } from "react-router-dom";
import setStars from "../../helpers/setStars";

import './TopFive.scss';

const TopFive = ({key, product, src, id}) => {
	return (
		<div className="topFiveProducts">
			<Link to={`/products/${product.id}`}>
				<div className="topFiveProducts__image">
					<img src={src} alt={product.name} />
				</div>
				<div className="topFiveProducts__productName">{product.name}</div>
			</Link>
		</div>
	);
};

export default TopFive;
