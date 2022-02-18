import { BrowserRouter as Router } from "react-router-dom";

// PAGES
import NavBar from "./pages/NavBar";

export default function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        Welcome! We have many crafts items for sale.
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
