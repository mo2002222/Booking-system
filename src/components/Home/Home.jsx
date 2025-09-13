import Email from "./Email"
import Footer from "./Footer"
import Header from "./Header"
import HotelList from "./HotelList"
import PropertyType from "./PropertyType"


const Home = () => {
return (
    <div>
        <Header/>
        <HotelList/>
        <PropertyType/>
        <Email/>
        <Footer/>
    </div>
)
}

export default Home
