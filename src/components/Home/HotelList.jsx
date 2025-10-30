import React from 'react'

const HotelList = () => {
return (
    <div className='container mx-auto xl:px-24 mt-14'>
        <h3 className='mb-5 font-bold'>Popular Destinations</h3>
        <div className="grid grid-cols-3 gap-3">
            <div className="relative">
                <img className='rounded h-full object-none'  src="https://media.cntraveller.com/photos/611bf0fb7048754865719e3a/16:9/w_1920,h_1080,c_limit/view-of-the-liffey-from-liberty-hall-dublin-ireland-conde-nast-traveller-4feb16-Tara-Morgan.jpg" alt="dublin" />
                <div className="absolute bottom-3 left-2 text-white">
                    <h3 className='font-bold'>Dublin</h3>
                    <h5>124 properties</h5>
                </div>
            </div>
            <div className="relative">
                <img className='rounded h-full' src="https://content.r9cdn.net/rimg/dimg/15/27/c7e81fad-city-22863-177642838c4.jpg?width=1366&height=768&xhint=3008&yhint=1481&crop=true" alt="austin" />
                <div className="absolute bottom-3 left-2 text-white">
                    <h3 className='font-bold'>Austin</h3>
                    <h5>573 properties</h5>
                </div>
            </div>
            <div  className="relative">
                <img className='rounded h-full' src="https://content.r9cdn.net/rimg/dimg/97/b0/961eb3a8-city-7128-16764004bcf.jpg?width=1366&height=768&xhint=1740&yhint=2462&crop=true" alt="reno" />
                <div className="absolute bottom-3 left-2 text-white">
                    <h3 className='font-bold'>Reno</h3>
                    <h5>433 properties</h5>
                </div>
            </div>
        </div>
    </div>
)
}

export default HotelList
