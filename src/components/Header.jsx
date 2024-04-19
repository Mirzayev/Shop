import Aleksiy from '../icons/image/aleksiy.png'
import Logo from '../icons/image/logo.png'

const Header=() => {
    return (
        <div className='flex justify-between my-4 items-center mx-auto px-8 max-w-[1440px] gap-3 '>
            <div>
                <img className='object-cover' src={Logo} alt=""/>
            </div>
            <div className='flex gap-4'>
                <button className='flex gap-2 bg-[#70C05B] p-2 rounded-md text-white items-center'>
                    <i className="fa-solid fa-bars"></i> <p>Каталог</p>
                </button>
                <div
                    className='flex  xl:w-[375px]  border-[#70C05B] border-2 h-10 items-center justify-between px-2 gap-[10px]  rounded-[4px]'>
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
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L7 6.29289L12.6464 0.646447C12.8417 0.451184 13.1583 0.451184 13.3536 0.646447C13.5488 0.841709 13.5488 1.15829 13.3536 1.35355L7.35355 7.35355C7.15829 7.54882 6.84171 7.54882 6.64645 7.35355L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z"
                              fill="#414141"/>
                    </svg>


                </div>
            </div>


        </div>
    )
}

export default Header