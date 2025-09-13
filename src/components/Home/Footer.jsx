import React from "react";

const Footer = () => {
return (
    <div className="container mx-auto xl:px-24 mt-6">
    <div className="flex justify-between">
        <FooterElements />
        <FooterElements />
        <FooterElements />
        <FooterElements />
    </div>
    <div className="mt-10">
        <p className="text-gray-600">
        &copy; 2024 Your Company Name. All rights reserved.
        </p>
    </div>
    </div>
);
};

export default Footer;

const FooterElements = () => {
return (
    <ul className="font-semibold text-gray-500">
    <li className="mb-2">Countries</li>
    <li className="mb-2">Regiones</li>
    <li className="mb-2">Cities</li>
    <li className="mb-2">Districts</li>
    <li className="mb-2">Airports</li>
    <li className="mb-2">Hotels</li>
    </ul>
);
};
