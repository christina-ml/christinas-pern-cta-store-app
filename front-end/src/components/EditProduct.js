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

    let handleNumberChange = (e) => {
        setProduct({ ...product, [e.target.id]: Number(e.target.value) });
    }

    const handleCheckboxChange = (e) => {
        setProduct({ ...product, featured: !product.featured });
    }

    return (
        <div className="form-container">
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
                <span> Is this product not selling?! Try a suggested starting description: </span>
                <select id="description" type="text" onChange={handleTextChange}>
                    <option>--choose suggestion--</option>
                    <option value="Handmade item, made just for you!">Handmade item</option>
                    <option value="This product is very calming and relaxing.">Calming and Relaxing</option>
                    <option value="Very rare and unique product, it's one of a kind! Take good care of this item.">Rare and Unique</option>
                    <option value="Great for everyday use, you will absolutely love it.">Everyday use</option>
                    <option value="Just what you need in your life! Great for gifts as well.">Just what you need</option>
                    <option value="There may be a discount available! Contact seller for more info.">Discount Available</option>
                    <option value="This handmade item may contain small parts, which can be hazardous for children.">Hazardous Item</option>
                 </select>
                <textarea 
                    id="description"
                    type="text" 
                    value={product.description}
                    onChange={handleTextChange}
                ></textarea>
                <label htmlFor="price">Price:</label>
                <input 
                    id="price"
                    name="price"
                    type="number"
                    value={product.price}
                    onChange={handleNumberChange}
                />
                <label htmlFor="rating">Rating 1-5:</label>
                <input 
                    id="rating"
                    type="number" 
                    min="1"
                    max="5"
                    value={product.rating}
                    onChange={handleNumberChange}
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
                    placeholder="https://"
                />
                <input type="submit" />
            </form>
            <Link to={`/products/${id}`}>
                <button>Nevermind!</button>
            </Link>
        </div>
    )
}