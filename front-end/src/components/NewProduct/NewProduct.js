import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import './NewProduct.scss';

const API = process.env.REACT_APP_API_URL;

export default function NewProduct() {
    let navigate = useNavigate();

    let [product, setProduct] = useState({
        name: "",
        description: "",
        price: null,
        rating: null,
        featured: false,
        seller: "",
        image: "",
    });

    let handleTextChange = (e) => {
        setProduct({ ...product, [e.target.id]: e.target.value });
    }

    let handleNumberChange = (e) => {
        setProduct({ ...product, [e.target.id]: Number(e.target.value) });
    }

    const handleCheckboxChange = (e) => {
        setProduct({ ...product, featured: !product.featured });
    }

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
        <div className="newProduct">
            <h4>
                Have something to sell? Submit a new product here!
                <br/>
                Price must be at least $1 and Ratings between 0-5.
            </h4>
            
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <table>
                        <tr>
                            <td><label htmlFor="name">Product Name:</label></td>
                            <td>
                                <input 
                                    id="name"
                                    type="text" 
                                    value={product.name}
                                    onChange={handleTextChange}
                                    placeholder="Crafts Product Name..."
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="description">Product Description:</label></td>
                            <td>
                                <textarea 
                                    id="description"
                                    type="text" 
                                    value={product.description}
                                    onChange={handleTextChange}
                                ></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <span>Need help? </span>
                                <select id="description" type="text" onChange={handleTextChange}>
                                    <option value="This product...">--choose suggestion--</option>
                                    <option value="Handmade item, made just for you!">Handmade item</option>
                                    <option value="This product is very calming and relaxing.">Calming and Relaxing</option>
                                    <option value="Very rare and unique product, it's one of a kind! Take good care of this item.">Rare and Unique</option>
                                    <option value="Great for everyday use, you will absolutely love it.">Everyday use</option>
                                    <option value="Just what you need in your life! Great for gifts as well.">Just what you need</option>
                                    <option value="There may be a discount available! Contact seller for more info.">Discount Available</option>
                                    <option value="This handmade item may contain small parts, which can be hazardous for children.">Hazardous Item</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="price">Price:</label></td>
                            <td>
                                $<input 
                                    id="price"
                                    type="number"
                                    min="1"
                                    max="9999"
                                    value={product.price}
                                    onChange={handleNumberChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="rating">Rating 1-5:</label></td>
                            <td>
                                <input 
                                    id="rating"
                                    type="number"
                                    min="1"
                                    max="5"
                                    placeholder="1"
                                    value={product.rating}
                                    onChange={handleNumberChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="featured">Featured:</label></td>
                            <td>
                                <input 
                                    id="featured"
                                    type="checkbox" 
                                    onChange={handleCheckboxChange}
                                    checked={product.featured}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="seller">Seller:</label></td>
                            <td>
                                <input 
                                    id="seller"
                                    type="text" 
                                    value={product.seller}
                                    onChange={handleTextChange}
                                    placeholder="seller..."
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="image">image URL:</label></td>
                            <td>
                                <input 
                                    id="image"
                                    type="text"
                                    value={product.image}
                                    onChange={handleTextChange}
                                    placeholder="https://"
                                />
                            </td>
                        </tr>
                    </table>
                    <div className="formSubmitButton">
                        <input className="form-button" type="submit" />
                    </div>
                </form>
            </div>
            <div className="cancelButton">
                <Link to={`/products`}>
                    <button className="form-button">Cancel</button>
                </Link>
            </div>
        </div>
    )
}