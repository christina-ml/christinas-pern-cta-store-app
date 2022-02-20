import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function EditProduct() {
    let navigate = useNavigate();

    // const addProduct = (newProduct) => {
    //     axios
    //       .post(`${API}/products`, newProduct)
    //       .then(
    //         () => {
    //           navigate(`/products`);
    //         },
    //         (error) => console.error(error)
    //       )
    //       .catch((c) => console.warn("catch", c));
    //   };

    let [product, setProduct] = useState({
        name: "",
        description: "",
        price: 3,
        rating: 2,
        featured: false,
        seller: "",
        image: "https://",
    });

    const handleTextChange = (e) => {
        setProduct({ ...product, [e.target.id]: e.target.value });
    }

    const handleCheckboxChange = (e) => {
        setProduct({ ...product, featured: !product.featured });
    }

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     addProduct(product);
    //     navigate(`/products`);
    //   };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${API}/products`, product)
            .then(() => {
                navigate("/products")
            }).catch((error) => {
                console.log(error)
                throw error;
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Product Name:</label>
                <input 
                    id="name"
                    type="text" 
                    value={product.name}
                    onChange={handleTextChange}
                    placeholder="Name..."
                    required
                />
                <label htmlFor="description">Product Description:</label>
                <input 
                    id="description"
                    type="text" 
                    value={product.description}
                    onChange={handleTextChange}
                />
                <label htmlFor="price">Price:</label>
                <input 
                    id="price"
                    name="price"
                    type="number"
                    value={product.price}
                    onChange={handleTextChange}
                />
                <label htmlFor="rating">Rating 0-5:</label>
                <input 
                    id="rating"
                    type="number" 
                    value={product.rating}
                    onChange={handleTextChange}
                />
                <label htmlFor="featured">Featured:</label>
                <input 
                    id="featured"
                    type="checkbox" 
                    onChange={handleCheckboxChange}
                    checked={product.featured}
                />
                <label htmlFor="seller">Seller:</label>
                <input 
                    id="seller"
                    type="text" 
                    value={product.seller}
                    onChange={handleTextChange}
                    placeholder="seller..."
                />
                <label htmlFor="image">image URL:</label>
                <input 
                    id="image"
                    type="text"
                    value={product.image}
                    onChange={handleTextChange}
                />
                <input type="submit" />
            </form>
            <Link to={`/`}>
                <button>Nevermind!</button>
            </Link>
        </div>
    )
}