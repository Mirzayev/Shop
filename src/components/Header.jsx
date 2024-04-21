import Aleksiy from '../icons/image/aleksiy.png'
import Logo from '../icons/image/logo.png'
import Logo_2 from '../icons/image/logo_2.png'

const Header = () => {
    return (
        <div>

            <div className='flex justify-between my-4 items-center mx-auto px-8 max-w-[1440px] gap-3 '>
                <div>
                    <img className='pho:hidden sm:block object-cover' src={Logo} alt=""/>
                    <img className='pho:block sm:hidden' src={Logo_2} alt=""/>
                </div>
                <div className='flex gap-4'>
                    <button className='flex gap-2 bg-[#70C05B] p-2 rounded-md text-white items-center'>
                        <i className="fa-solid fa-bars"></i> <p>Каталог</p>
                    </button>
                    <div
                        className='  xl:w-[375px] sm:flex pho:hidden  border-[#70C05B] border-2 h-10 items-center justify-between px-2 gap-[10px]  rounded-[4px]'>
                        <input className='w-full outline-none h-full' type="text" placeholder='Найти товар'/>
                        <i className="fa-solid fa-magnifying-glass cursor-pointer"></i>

                    </div>
                </div>

                <div className='xl:flex pho:hidden gap-6 items-center text-background:[414141]'>
                    <div className=' flex flex-col items-center cursor-pointer hover:text-green-400 duration-200'>
                        <i className="fa-regular fa-heart text-xl"></i>  <p>Избранное</p>
                    </div>
                    <div className=' flex flex-col items-center cursor-pointer hover:text-green-400 duration-200'>
                        <i className="fa-solid fa-box text-xl"></i><p>Заказы</p>
                    </div>
                    <div className=' flex flex-col items-center cursor-pointer hover:text-green-400 duration-200'>
                        <i className="fa-solid fa-basket-shopping"></i>
                        <div></div>
                        <p>Корзина</p>
                    </div>
                    <div className='flex gap-[10px] items-center cursor-pointer'>
                        <img className='object-cover' src={Aleksiy} alt=""/>
                        <p>Алексей</p>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                </div>
            </div>

            <div
                className='  max-w-[300px]  m-auto  sm:hidden pho:flex  border-[#70C05B] border-2 h-10 items-center justify-between pl-2 gap-[10px]  rounded-[4px] my-4'>
                <input className='w-[200px] outline-none h-full ' type="text" placeholder='Найти товар'/>
                <i className="fa-solid fa-magnifying-glass cursor-pointer"></i>
                <button className='bg-green-500 h-full w-full text-white px-3 active:bg-green-600'>Search</button>
            </div>

        </div>
    )
}

export default Header