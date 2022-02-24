import EditProduct from "../components/EditProduct"

export default function Edit() {
    return (
        <div>
            <h4>
                Edit an existing product here!
                <br />
                Price must be at least $1 and Ratings between 0-5.
            </h4>
            <EditProduct />    
        </div>
        
    )
}