import React from "react";
import MainSection from "../Home/MainSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Email from "../Home/Email";
import Footer from "../Home/Footer";

const Self = () => {
return (
    <div>
    <MainSection />
    <div className="container mx-auto xl:px-24">
        <div className="flex justify-between">
        <div className="w-1/2">
            <h3 className="font-bold text-gray-900 mb-2">Phonex Hotel</h3>
            <p className="font-medium text-gray-600 mb-1">
            {" "}
            <FontAwesomeIcon icon={faLocationDot} className="mr-2" /> (London,
            United Kingdom) 1-8 Kensington Garden Square
            </p>
            <p className="font-semibold text-blue-500 mb-1">
            Exellent Location - 500m from center
            </p>
            <p className="font-semibold text-green-600 mb-1">
            Book a stay over $112 at this property and get free airporttaxi!
            </p>
        </div>
        <div className="font-semibold text-white bg-blue-700 rounded py-2 px-3 text-center cursor-pointer hover:bg-blue-600 h-fit">
            Reserve or Book Now!
        </div>
        </div>

        <div className="img-container flex gap-2 flex-wrap mb-12">
        <img
            className="w-80 h-3/4"
            src="https://cf2.bstatic.com/xdata/images/hotel/max1024x768/41058336.jpg?k=3a1b38489619c690f91d6d080b4aa8bf5d6f1acad20529aff446ac9c882493c4&o=&hp=1"
            alt=""
        />
        <img
            className="w-80 h-3/4"
            src="https://cf.bstatic.com/xdata/images/hotel/max300/185207910.jpg?k=7ce4548871a2106a31a5d5932415956b07f75327c85f755c361db68cc5906c7a&o="
            alt=""
        />
        <img
            className="w-80 h-3/4"
            src="https://cf.bstatic.com/xdata/images/hotel/max300/185206519.jpg?k=742c17b8bf33f1677244db11d5abfc33d3f538f252479cbc5fc38dacf49db9ea&o="
            alt=""
        />
        <img
            className="w-80 h-3/4"
            src="https://cf.bstatic.com/xdata/images/hotel/max300/185206365.jpg?k=35fae4bbfd0b9353f182bda538c5bc2475086c407bae7675744a0b135d91e055&o="
            alt=""
        />
        <img
            className="w-80 h-3/4"
            src="https://cf.bstatic.com/xdata/images/hotel/max300/185206295.jpg?k=deef02383cebc8baec528a0d022d34f684f73fdc3dd1248fdb24c81e0f46960d&o="
            alt=""
        />
        <img
            className="w-80 h-3/4"
            src="https://cf.bstatic.com/xdata/images/hotel/max500/185208637.jpg?k=3a99ff4ae1db376c96809b2081e6babaa1e10462c404b8cb29304a6ac85458fe&o="
            alt=""
        />
        <img
            className="w-80 h-3/4"
            src="https://cf.bstatic.com/xdata/images/hotel/max500/185208637.jpg?k=3a99ff4ae1db376c96809b2081e6babaa1e10462c404b8cb29304a6ac85458fe&o="
            alt=""
        />
        <img
            className="w-80 h-3/4"
            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/126384338.jpg?k=fca4950f46fbe387b1c81a1dc97b82a27197e1e1363ad0a42dc14922fcede614&o="
            alt=""
        />
        </div>

        <div className="flex gap-3 mb-12">
        <div className="w-4/5">
            <h4 className="font-bold mb-4">Stay in the heart of Karkow</h4>
            <p className="text-base font-medium text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            adipisci esse, cum velit fugiat ea dolorum ex, minus maiores
            obcaecati magni! Repellat provident impedit non error ab incidunt
            quo, pariatur itaque ipsam corrupti officia hic et distinctio
            excepturi necessitatibus dolores quis. Quos eveniet porro deleniti
            ad vitae ut saepe nostrum? minus maiores obcaecati magni! Repellat
            provident impedit non error ab incidunt quo, pariatur itaque ipsam
            corrupti officia hic et distinctio excepturi necessitatibus
            dolores quis. Quos eveniet porro deleniti ad vitae ut saepe
            nostrum?
            </p>
        </div>

        <div dir="ltr" className="bg-blue-200 p-4 rounded">
            <h6 className="mb-3 text-lg font-bold text-gray-800">
            Prefect for a 9-night stay!
            </h6>
            <p className="font-semibold text-gray-700 mb-4">
            in the heart of Karkow, this property have an Exellent location
            score of 9.8
            </p>
            <h5 className="font-bold mb-4">
            $945 <span className="text-gray-700">(9 nights)</span>{" "}
            </h5>
            <div className="font-semibold text-white bg-blue-700 rounded py-2 px-3 text-center cursor-pointer hover:bg-blue-600 ">
            Reserve or Book Now!
            </div>
        </div>
        </div>
    </div>
    <Email />
    <Footer />
    </div>
);
};

export default Self;
