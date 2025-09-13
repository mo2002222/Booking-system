import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faPlane,
  faCar,
  faPlaneArrival,
  faCalendar,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { DateRange, Range } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { addDays } from "date-fns";
import { Link } from "react-router-dom";

const Header = () => {
  const [destenation, setDestenation] = useState();
  const [navigationState, setNavigationState] = useState("Stays");
  const [personCount, setPersonCount] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const [extandDate, setExtandDate] = useState(false);
  const [extandPersonCount, setExtandPersonCount] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const startDate = new Date(`${date[0].startDate}`);
  const endDate = new Date(`${date[0].endDate}`);
  const formatteStartdDate = startDate.toLocaleDateString("en-US", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  });
  const formatteEnddDate = endDate.toLocaleDateString("en-US", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  });

  const handlincreas = (name) => {
    setPersonCount((prevCount) => ({
      ...prevCount,
      [name]: prevCount[name] + 1,
    }));
  };
  const handldecreas = (name) => {
    setPersonCount((prevCount) => ({
      ...prevCount,
      [name]: prevCount[name] > 0 ? prevCount[name] - 1 : 0,
    }));
  };

  const handelNavegation = (e) => {
    setNavigationState(e.target.innerText);
  };

  const handleinputSearch = (e) => {
    setDestenation(e.target.value);
  };

  console.log(personCount);

  return (
    <div className="bg-blue-700" style={{ height: "60vh" }}>
      <div className="container mx-auto xl:px-24">
        {/* ************************ */}
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
        {/* ************************ */}
        <ul className="text-white flex items-center gap-10 mb-14">
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
        {/* ************************ */}
        <div className="abbrev text-white">
          <h2 className="font-bold mb-5">
            A lifetime of discounts? it's Genius
          </h2>
          <h6 className="mb-5 text-gray-300">
            Get rewarded for your travels - unlock instant savings of 10% or
            more with a free Booking.com account
          </h6>
          <div className="bg-blue-500 p-3 w-fit">
            <button className="border-none bg-transparent">
              Sign in&nbsp;/&nbsp;
            </button>
            <button className="border-none bg-transparent"> Register</button>
          </div>
        </div>
        {/* ******************************* */}
        <div className="w-100 border-4 bg-white border-orange-400 mt-24 flex items-center justify-between p-3 rounded -translate-y-6">
          <div className="text-gray-400 flex gap-2 items-center">
            <FontAwesomeIcon icon={faBed} />
            <input
              type="text"
              placeholder="Where are you going?"
              className="outline-none placeholder:font-semibold text-black"
              value={destenation}
              onChange={handleinputSearch}
            />
          </div>

          <div
            className="text-gray-400 flex gap-2 items-center cursor-pointer"
            onClick={() => {
              setExtandDate(!extandDate);
            }}
          >
            <FontAwesomeIcon icon={faCalendar} />
            <h6 className="font-semibold tracking-wider">
              {formatteStartdDate} to {formatteEnddDate}{" "}
            </h6>
          </div>

          <div
            className="text-gray-400 flex gap-2 items-center cursor-pointer"
            onClick={() => {
              setExtandPersonCount(!extandPersonCount);
            }}
          >
            <FontAwesomeIcon icon={faPerson} />
            <h6>
              {personCount.adult}: adult {personCount.children}: children{" "}
              {personCount.room}: rooms:
            </h6>
          </div>

          <Link
            to={"/hotels"}
            state={{
              startDate,
              endDate,
              destenation,
              personCount,
              formatteStartdDate,
              formatteEnddDate,
            }}
          >
            <div className="btn p-2 bg-blue-600 hover:bg-blue-700 cursor-pointer text-white">
              Search
            </div>
          </Link>
        </div>
        {extandDate && (
          <DateRange
            className="translate-x-96 -translate-y-6 z-10 absolute"
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
          />
        )}

        {extandPersonCount && (
          <div
            className="w-60  border-2 text-gray-900 p-3 z-10 absolute bg-white"
            style={{ transform: "translate(830px , -24px)" }}
          >
            <div className="flex justify-between items-center mb-3">
              <h5>adult</h5>
              <div className="flex gap-3 items-center">
                <button
                  className="border-2 border-blue-500 px-3 py-1"
                  onClick={() => handlincreas("adult")}
                >
                  +
                </button>
                <span>{personCount.adult}</span>
                <button
                  className="border-2 border-blue-500 px-3 py-1"
                  onClick={() => handldecreas("adult")}
                >
                  -
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center mb-3">
              <h5>children</h5>
              <div className="flex gap-3 items-center">
                <button
                  className="border-2 border-blue-500 px-3 py-1"
                  onClick={() => handlincreas("children")}
                >
                  +
                </button>
                <span>{personCount.children}</span>
                <button
                  className="border-2 border-blue-500 px-3 py-1"
                  onClick={() => handldecreas("children")}
                >
                  -
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center mb-3">
              <h5>rooms</h5>
              <div className="flex gap-3 items-center">
                <button
                  className="border-2 border-blue-500 px-3 py-1"
                  onClick={() => handlincreas("room")}
                >
                  +
                </button>
                <span>{personCount.room}</span>
                <button
                  className="border-2 border-blue-500 px-3 py-1"
                  onClick={() => handldecreas("room")}
                >
                  -
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
