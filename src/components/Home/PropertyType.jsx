import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./swiper.css";

const BrowsingList = [
{
    img: "https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg",
    title: "Hotel",
},
{
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6sIseEqm7O-rHaV95BFN7MsRlMIswJ-7n4Q&s",
    title: "Apartments",
},
{
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3NN_bdO-LSUwboVhnYrIxRpYthZrIqlAZCg&s",
    title: "Resorts",
},
{
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrSkgYaowM_fDVrcKh7xUni4l7FWUlIo_0BA&s",
    title: "Villas",
},
{
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgLpCR4TBY3-jbkiv3vdwsCRGHaAbB1cHcrg&s",
    title: "Cabins",
},
{
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/9e/53/db/sami-beach-huts.jpg?w=700&h=-1&s=1",
    title: "huts",
},
{
    img: "https://cf.bstatic.com/static/img/theme-index/bg_aparthotel/48bd5066204f1047092f3a1e5f4de71edcd5bf47.jpg",
    title: "Hotel Apartment",
},
{
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM8-FOnWONTtJgQ8bYq3IW-QfjNyHuZNwrWg&s",
    title: "Holiday Homes",
},
{
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFpujrKgbt1fwKnk0ouv2YgHgDyuAkuvag0Q&s",
    title: "Youth Hostels",
},
{
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ou4ubZqerA98DA13FfZFs4Jh0AaHmfKBRQ&s",
    title: "Motels",
},
{
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Yqq3pvgIAmqEzy6oF0WrBdaWT_SUXws9tg&s",
    title: "Bed And Breakfast",
},
{
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfSjGqdt9V7kDfHyhurphYgD_fsrlMJN2GKQ&s",
    title: "Holiday Parks",
},
{
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLQoRCXTcs_fetMiZUO-CdC7KP1u3uoXyRlA&s",
    title: "Small House",
},
];

const popylarToGeust = [
{
    img: "https://cf2.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=",
    title: "Stare Miasto Hotel Apartment",
    subtitle: "Old Town, Poland",
},
{
    img: "https://cf2.bstatic.com/xdata/images/hotel/square600/579099936.webp?k=e04cc7f7fe864ce09b7d7d978dbb7db3e558038a2151eb7c4c11e895bafbd8c0&o=",
    title: "Seasons Apartment 7 Budapust",
    subtitle: "Hungary, Pudapust",
},
{
    img: "https://cf2.bstatic.com/xdata/images/hotel/square600/87375132.webp?k=a3eff4ea2475f3a4de01f017463acd719bddada5e63f87f6c0952f8590498865&o=",
    title: "Downtown Dynagugo",
    subtitle: "Hungary, Pudapust",
},
{
    img: "https://cf2.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=c4092495705eab3fad626e8e1a43b1daf7c623e4ea41daf26a201b4417a71709&o=",
    title: "Orient Palace Apartments",
    subtitle: "Madrid, Spain",
},
{
    img: "https://cf2.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=4ff5e29f3ad72c2c9f7170f60a043f01a158f26b38c55e9676439c18f3804179&o=",
    title: "Numa I Veta  Apartments",
    subtitle: "Santa Maria Nwvla, Italy",
},
{
    img: "https://cf2.bstatic.com/xdata/images/hotel/square600/531732579.webp?k=df9d17c4371175b0e4a60e390083280c837d5e94dacc7d9ae6db48728b5fb5ff&o=",
    title: "Leman Locke",
    subtitle: "Tower Hamlets, Londen",
},
{
    img: "https://cf2.bstatic.com/xdata/images/hotel/square600/29466558.webp?k=7f9cf4736f69b30c20fa7a751bb8711fa195bc9ff6092d5412d52daf6cada17f&o=",
    title: "Cheval Thre Quayes At The Tower Of Londen",
    subtitle: "City Of Londen, United Kingdom",
},
{
    img: "https://cf2.bstatic.com/xdata/images/hotel/square600/559654140.webp?k=89e79aa75ec8a78c63c6f97559ec8f893de372401cdde1b4a2ef8fa1b2389631&o=",
    title: "Epoques Apartments By 3 Adrez",
    subtitle: "Prague 01, Czech",
},
{
    img: "https://cf2.bstatic.com/xdata/images/hotel/square600/420377357.webp?k=29a0e9879ac8361539c3dae41f047d383e6fa6917f8f47cb50dad001ada0eae6&o=",
    title: "The Apartments By The Sloan Club",
    subtitle: "Chelsea, London, United Kingdom",
},
];

const PropertyType = () => {
return (
    <div className="container mx-auto xl:px-24 mt-6">
    <h3 className="mb-5 font-bold">Browse By Property Type</h3>

    <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={15}
        slidesPerView={6}
        grabCursor={true}
        freeMode={true}
        className="mb-6"
    >
        {BrowsingList.map((item, index) => {
        return (
            <SwiperSlide key={index}>
            <div className="bg-white">
                <img
                className="w-52 h-36 rounded cursor-pointer"
                src={item.img}
                alt=""
                />
                <h5>{item.title}</h5>
                <p className="text-gray-400 font-medium">2345 hotels</p>
            </div>
            </SwiperSlide>
        );
        })}
    </Swiper>
    <h3 className="mb-5 font-bold">Homes that guests love</h3>
    <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={15}
        slidesPerView={6}
        grabCursor={true}
        freeMode={true}
        className="mb-6"
    >
        {popylarToGeust.map((item, index) => {
        return (
            <SwiperSlide key={index}>
            <div className="w-xl rounded shadow-xl border-b-2 border-gray-100 h-96">
                <img className="w-full" src={item.img} alt={item.subtitle} />
                <div className="p-2">
                <div className="font-bold text-lg">{item.title}</div>
                <p className="text-gray-700 text-sm">{item.subtitle}</p>
                </div>
                <div className="flex gap-2 items-center p-2">
                <div className="bg-blue-900 w-fit text-white rounded p-1 text-sm">
                    9.5
                </div>
                <p className="font-sm text-gray-700 whitespace-nowrap">
                    950 ratings
                </p>
                <p className="font-semibold whitespace-nowrap">Great</p>
                </div>
            </div>
            </SwiperSlide>
        );
        })}
    </Swiper>
    </div>
);
};

export default PropertyType;
