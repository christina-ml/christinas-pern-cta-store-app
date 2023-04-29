import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Home from "./components/Home/Home";
import Index from "./pages/Index";
import Show from "./pages/Show";
import Edit from "./pages/Edit";
import FourOFour from "./components/FourOFour/FourOFour";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import NewProduct from "./components/NewProduct/NewProduct";

export default function App() {
  return (
    <div className="App">
      <Router>
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/products" element={<Index />} />
            <Route path="/products/New" element={<NewProduct />} />
            <Route path="/products/:id" element={<Show />} />
            <Route path="/products/:id/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}


// import axios from "axios";
// import { useState, useEffect } from "react";
// const API = process.env.REACT_APP_API_URL;

// console.log(API);
// function App() {
//   const [days, setDays] = useState([]);
//   useEffect(() => {
//     axios
//       .get(`${API}/test`)
//       .then(
//         (response) => {
//           setDays(response.data);
//         },
//         (error) => console.log("get", error)
//       )
//       .catch((c) => console.warn("catch", c));
//   }, []);
//   return (
//     <div>
//       <ul>
//         {days.map((day) => (
//           <li key={day.name}>{day.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
