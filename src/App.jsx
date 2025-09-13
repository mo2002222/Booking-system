import "./App.css";
import Home from "./components/Home/Home";
import Hotels from "./components/hotels/Hotels";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Self from "./components/hotels/Self";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Booking-system/" element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/singleHotel" element={<Self />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
