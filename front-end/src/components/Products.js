import axios from "axios";
import { useState, useEffect } from "react";

// import child component
import Product from "./Product";
import ProductLocal from "./ProductLocal";

const API = process.env.REACT_APP_API_URL;

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`${API}/products`)
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
            }).catch((err) => {
                console.log (err);
            });
    }, [])



    return (
        <div className="products">
            {/* <img src={API+"/superJumbo.jpg"} /> */}
            {products.map((product) => {
                if (product.image.substring(0,8) === "https://") {
                    return (
                        <Product key={product.id} product={product} />
                    )
                } else {
                    return (
                        <ProductLocal key={product.id} product={product} />
                    )
                }
            }
        )}
           
        </div>
    )
};