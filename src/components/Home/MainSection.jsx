import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faPlane,
  faCar,
  faPlaneArrival,
} from "@fortawesome/free-solid-svg-icons";

const MainSection = () => {
  const [navigationState, setNavigationState] = useState("Stays");
  const handelNavegation = (e) => {
    setNavigationState(e.target.innerText);
  };
  return (
    <div>
      <div className="bg-blue-700 py-5 mb-3">
        <div className="container mx-auto xl:px-24">
          <div className="labels flex justify-between items-center pt-2 mb-12">
            <h3 className="text-white font-bold">Booking.com</h3>
            <div className="sign flex gap-3 items-center">
              <button className="px-2 py-1 bg-slate-200 hover:bg-slate-100 rounded">
                Login
              </button>
              <button className="px-2 py-1 bg-slate-200  hover:bg-slate-100 rounded">
                Register
              </button>
            </div>
          </div>
          <ul className="text-white flex items-center gap-10 mb-6">
            <li
              className={`flex items-center gap-2 text-lg font-semibold p-2 rounded-full cursor-pointer hover:bg-blue-600 ${
                navigationState === "Stays" ? "border-2" : ""
              }`}
              onClick={handelNavegation}
            >
              <FontAwesomeIcon icon={faBed} />
              Stays
            </li>
            <li
              className={`flex items-center gap-2 text-lg font-semibold p-2 rounded-full cursor-pointer hover:bg-blue-600 ${
                navigationState === "Flights" ? "border-2" : "border-3"
              }`}
              onClick={handelNavegation}
            >
              <FontAwesomeIcon icon={faPlane} />
              Flights
            </li>
            <li
              className={`flex items-center gap-2 text-lg font-semibold p-2 rounded-full cursor-pointer hover:bg-blue-600 ${
                navigationState === "Car Rentals" ? "border-2" : ""
              }`}
              onClick={handelNavegation}
            >
              <FontAwesomeIcon icon={faCar} />
              Car Rentals
            </li>
            <li
              className={`flex items-center gap-2 text-lg font-semibold p-2 rounded-full cursor-pointer hover:bg-blue-600 ${
                navigationState === "Attraction" ? "border-2" : ""
              }`}
              onClick={handelNavegation}
            >
              <FontAwesomeIcon icon={faBed} />
              Attraction
            </li>
            <li
              className={`flex items-center gap-2 text-lg font-semibold p-2 rounded-full cursor-pointer hover:bg-blue-600 ${
                navigationState === "Airport Taxis" ? "border-2" : ""
              }`}
              onClick={handelNavegation}
            >
              <FontAwesomeIcon icon={faPlaneArrival} />
              Airport Taxis
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
