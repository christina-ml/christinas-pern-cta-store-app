import NewProduct from "../components/NewProduct";

export default function New() {
    return (
        <div>
            <h4>
                Have something to sell? Submit a new product here!
                <br/>
                Price must be at least $1 and Ratings between 0-5.
            </h4>
            <NewProduct />
        </div>
    )
}