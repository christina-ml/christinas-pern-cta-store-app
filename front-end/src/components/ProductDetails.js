import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

// helper function - ratings
import setStars from "../helpers/setStars";

const API = process.env.REACT_APP_API_URL;

export default function ProductDetails() {
  const [product, setProduct] = useState({});
  const [local, setLocal] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

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

  // DELETE
  const handleDelete = () => {
    axios
      .delete(`${API}/products/${id}`)
      .then((res) => {
        navigate("/products");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /*
    - Set state as `local` to check all image urls.
    - If first character is a `/` or an `h`
    - Ternary for image whether it is static/local, or from an url address
  */
  return (
    <div className="product-details-container">
      <div className="product-details">
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
        <div className="details-container">
          <div className="details">
            <div>Price: ${product.price}</div>
            <div>Rating:{setStars(product)}</div>
            <div>Description: {product.description}</div>
            <div>
              Featured: {product.featured ? <span>Yes</span> : <span>No</span>}
            </div>
            <div>Seller: {product.seller}</div>
          </div>

          <div className="product-details-navigation">
            <div>
              <Link to={`/products`}>
                <button>Back</button>
              </Link>
            </div>
            <div>
              <Link to={`/products/${id}/edit`}>
                <button>Edit</button>
              </Link>
            </div>
            <div>
              <button onClick={handleDelete}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
