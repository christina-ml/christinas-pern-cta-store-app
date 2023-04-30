/* 
- To show stars for rating.
- Rating must be between 0 and 5.
- Cannot be 0 stars, because of restrictions in `schema.sql` file in db
*/
export default function setStars(product) {
	const { rating } = product;
	if (rating === 1) {
		return <span>★☆☆☆☆</span>;
	} else if (rating === 2) {
		return <span>★★☆☆☆</span>;
	} else if (rating === 3) {
		return <span>★★★☆☆</span>;
	} else if (rating === 4) {
		return <span>★★★★☆</span>;
	} else if (rating === 5) {
		return <span>★★★★★</span>;
	}
}
