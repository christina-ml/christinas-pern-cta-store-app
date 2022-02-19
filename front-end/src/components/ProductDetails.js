import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function ProductDetails() {
  const [product, setProduct] = useState({});
  const [local, setLocal] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/products/${id}`)
      .then((res) => {
        setLocal(res.data.image[0]);
        setProduct(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  /*
    - Set state as `local` to check all image urls.
    - If first character is a `/` or an `h`
    - Ternary for image whether it is static/local, or from an url address
  */
  return (
    <div>
      <h2>{product.name}</h2>
      <div>
        {local === "/" ? (
          <span>
            <img src={API + product.image} height="200px" alt="text url" />
          </span>
        ) : (
          <span>
            <img src={product.image} height="200px" alt="text url" />
          </span>
        )}
      </div>
      <div>Price: ${product.price}</div>
      <div>Description: {product.description}</div>
      <div>
        Featured: {product.featured ? <span>Yes</span> : <span>No</span>}
      </div>
      <div>Seller: {product.seller}</div>
    </div>
  );
}
