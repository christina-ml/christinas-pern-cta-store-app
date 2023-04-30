import axios from "axios";
import { useState, useEffect } from "react";

// import child component
import Product from "./Product";
import ProductLocal from "./ProductLocal";
import Cart from "./Cart/Cart";

const API = process.env.REACT_APP_API_URL;

export default function Products() {
    const [products, setProducts] = useState([]);
    const [cartArr, setcartArr] = useState([]);
    const [subtotal, setSubtotal] = useState([]);

    useEffect(() => {
        axios.get(`${API}/products`)
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
            }).catch((err) => {
                console.log (err);
            });
    }, [])

    const handleAddToCart=(product)=>{
        setcartArr([...cartArr, product]);
        setSubtotal(Number(subtotal) + product.price);
      }

      /* Individual Cart Items to go into Cart component as list items */
      let cartItems = cartArr.map((product)=>{
        return (
            <li key={product.id}>
                { product.name }: ${ product.price }
            </li>
        )
      })

    return (
        <div className="products">
            <div className="cart-container">
                <Cart cartItems={cartItems} subtotal={subtotal} />
            </div>

            {products.map((product) => {
                if (product.image.substring(0,8) === "https://") {
                    return (
                        <div className="product-overview">
                            <Product key={product.id} product={product} />
                            <div className="addToCartButton">
                                <button type="submit" onClick={()=>handleAddToCart(product)}>Add To Cart</button>
                            </div>
                        </div>
                    )
                } else {
                    return (
                        <div className="product-overview">
                            <ProductLocal key={product.id} product={product} />
                            <div className="addToCartButton">
                                <button type="submit" onClick={()=>handleAddToCart(product)}>Add To Cart</button>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    )
};