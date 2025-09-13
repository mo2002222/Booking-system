import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MainSection from "../Home/MainSection";
import { DateRange, Range } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { addDays } from "date-fns";

const Hotels = () => {
  const [navigationState, setNavigationState] = useState("Stays");
  const [extandDate, setExtandDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  const location = useLocation();
  const data = location.state;

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

  const hadleExtandDate = () => {
    setExtandDate(!extandDate);
  };

  return (
    <div>
      {/* *************************** */}
      <div className="bg-blue-700 h-52 mb-3">
        <div className="container mx-auto xl:px-24">
          <MainSection />
        </div>
      </div>
      {/* *************************** */}
      <div className="container mx-auto xl:px-24">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-3 bg-yellow-500 p-3 rounded h-max">
            <h3 className="mb-3 font-bold text-gray-600">Search</h3>
            <h6 className="font-semibold text-gray-700 mb-1">Destenation</h6>
            <p className="bg-white px-2 py-3 mb-2 font-bold text-gray-500">
              {data.destenation}
            </p>
            <h6 className="font-semibold text-gray-700 mb-1">Check-in Date</h6>
            <h5
              className="bg-white px-2 py-3 mb-2 font-bold text-gray-500 cursor-pointer"
              onClick={hadleExtandDate}
            >
              {formatteStartdDate} <span className="text-gray-700">to</span>{" "}
              {formatteEnddDate}
            </h5>

            {extandDate && (
              <DateRange
                className="-translate-x-3 border-2 border-gray-200 mb-2"
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
              />
            )}

            <h6 className="font-semibold text-gray-700 mb-1">Options</h6>
            <div className="options ps-2 text-gray-600 mb-12">
              <div className="flex justify-between items-center mb-3">
                <p className="text-sm font-semibold">Min Price (per night) </p>
                <input
                  type="text"
                  className="outline-none border-2 border-gray-300 rounded w-16 h-8"
                />
              </div>
              <div className="flex justify-between items-center mb-3">
                <p className="text-sm font-semibold">Max Price (per night) </p>
                <input
                  type="text"
                  className="outline-none border-2 border-gray-300 rounded w-16 h-8"
                />
              </div>
              <div className="flex justify-between items-center mb-3">
                <p className="text-sm font-semibold">Adult </p>
                <input
                  type="number"
                  className="outline-none border-2 border-gray-300 rounded w-16 h-8 text-center"
                  placeholder={`${data.personCount.adult}`}
                />
              </div>
              <div className="flex justify-between items-center mb-3">
                <p className="text-sm font-semibold">Children</p>
                <input
                  type="number"
                  className="outline-none border-2 border-gray-300 rounded w-16 h-8 text-center"
                  placeholder={`${data.personCount.children}`}
                />
              </div>
              <div className="flex justify-between items-center mb-3">
                <p className="text-sm font-semibold">Room</p>
                <input
                  type="number"
                  className="outline-none border-2 border-gray-300 rounded w-16 h-8 text-center"
                  placeholder={`${data.personCount.room}`}
                />
              </div>
            </div>

            <div className="btn bg-blue-700 rounded py-2 text-center text-white cursor-pointer hover:bg-blue-600">
              Search
            </div>
          </div>
          <div className="col-span-9">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotels;

const Cards = () => {
  return (
    <div className="grid grid-cols-12 gap-3 border-gray-200 rounded border-2 p-3 mb-3">
      <div className="col-span-3">
        <img
          src="https://cf2.bstatic.com/xdata/images/hotel/square600/126384338.webp?k=48655b2e032208f0fb7996f3a63d227d52a446699ce06e2accd8d37f817f4037&o="
          alt="phonex hotel"
          className="rounded"
        />
      </div>
      <div className="col-span-6">
        <h3 className="font-bold text-blue-500 mb-1">Phoenix Hotel</h3>
        <p className="text-sm text-gray-700 mb-2">500m from center</p>
        <p className="bg-green-700 text-white w-fit px-1 rounded mb-2">
          Free airport taxi
        </p>
        <h6 className="font-bold text-gray-900 mb-2">
          studio Apartment with air condetioning
        </h6>
        <p className="font-medium text-gray-600 mb-2">
          Entire studio . 1 bathroom . 21m<sup>2</sup> 1 full bed
        </p>
        <p className="font-medium text-green-600 mb-1">Free Cancellation</p>
        <p className="font-semibold text-green-700 mb-2">
          you can cancel later, so lock in this great price today!
        </p>
      </div>
      <div className="col-span-3 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <p className="font-bold text-blue-800">Excellent</p>
          <p className="p-1 bg-blue-950 text-white">8.9</p>
        </div>
        <div dir="rtl">
          <p className="text-blue-900 text-lg font-medium">$112</p>
          <p className="font-semibold text-gray-400 mb-2">
            includes taxes and fees
          </p>
          <Link to={"/singleHotel"}>
            <div className="font-semibold text-white bg-blue-700 rounded py-2 text-center cursor-pointer hover:bg-blue-600">
              See Avilabillity
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
