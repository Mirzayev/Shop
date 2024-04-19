import Header from "../components/Header.jsx";
import Decoration from "../components/Decoration.jsx";
import ActionProduct from "../components/NewProducts.jsx";
import NewProduct from "../components/ActionProducts.jsx";

const HomePage = () => {
    return (
        <div>
                <Header/>
                <div className='bg-[#FBF8EC]'>
                    <Decoration/>
                    <NewProduct/>
                    <ActionProduct/>
                </div>

        </div>
    )
}

export default HomePage