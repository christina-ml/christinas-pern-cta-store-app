import EditProduct from "../components/EditProduct"

export default function Edit() {
    return (
        <div>
            <h1>
                Edit an existing product here!
            </h1>
            <h4>
                Price must be at least $1 and Ratings between 0-5.
            </h4>
            <EditProduct />    
        </div>
        
    )
}