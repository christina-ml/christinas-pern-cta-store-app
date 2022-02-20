import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function EditProduct() {
    let { id } = useParams();
    let navigate = useNavigate();
    
    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: 0,
        rating: 0,
        featured: null,
        seller: "",
        image: "",
    });

    const handleTextChange = (e) => {
        setProduct({ ...product, [e.target.id]: e.target.value });
    }

    useEffect(() => {
        axios.get(`${API}/products/${id}`)
            .then((res) => {
                setProduct(res.data);
            }).catch((err) => {
                console.log(err);
            })
    }, [id, navigate, API])

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`${API}/products/${id}`, product)
            .then(() => {
                navigate("/products")
            }).catch((error) => {
                console.log(error)
            })
    }

    const handleCheckboxChange = (e) => {
        setProduct({ ...product, featured: !product.featured });
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
                    // pattern="http[s]*://.+"
                    value={product.image}
                    placeholder="http://"
                    onChange={handleTextChange}
                />
                <input type="submit" />
            </form>
            <Link to={`/products/${id}`}>
                <button>Nevermind!</button>
            </Link>
        </div>
    )
}