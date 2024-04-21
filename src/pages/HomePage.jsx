import Header from "../components/Header.jsx";
import Decoration from "../components/Decoration.jsx";
import ActionProduct from "../components/NewProducts.jsx";
import NewProduct from "../components/ActionProducts.jsx";
import Purchased from "../components/Purchased.jsx";
import Offers from "../components/Offers.jsx";
import ShopLocation from "../components/ShopLocation.jsx";
import Articles from "../components/Articles.jsx";

const HomePage = () => {
    return (
        <div>
                <Header/>
                <div className='bg-[#FBF8EC]'>
                    <Decoration/>
                    <NewProduct/>
                    <ActionProduct/>
                    <Purchased/>
                    <Offers/>
                    <ShopLocation/>
                    <Articles/>

                </div>

        </div>
    )
}

export default HomePage