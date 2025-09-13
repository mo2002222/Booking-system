import React from "react";

const Email = () => {
return (
    <div className="bg-blue-900 py-10">
    <div className=" flex justify-center items-center flex-col text-white">
        <h3>Save Time, Save Mony</h3>
        <p className="text-sm mb-5">
        sign up and we will send best details to you
        </p>

        <div className="flex gap-2 w-2/4">
        <input
            type="Email"
            placeholder="Your Email"
            className="border-none py-2 px-1 flex-1 rounded"
        />
        <button className="bg-blue-700 rounded py-1 px-2">Subscribe</button>
        </div>
        {/* .....input checkbox send me */}
        <div className="flex gap-1 items-center justify-center mt-2">
        <input type="checkbox" />
        <span className="text-sm mb-1">
            Send me the link to get the FREE Booking.com app!
        </span>
        </div>
    </div>
    </div>
);
};

export default Email;
