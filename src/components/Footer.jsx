import Logo from '../icons/image/logo_2.png'
import decoration from '../icons/image/decoration_footer.png'

export default function Footer() {


    return (
        <div className=' bg-[#FBF8EC] '>

            <div className=' flex bg-[#FBF8EC] items-center justify-between'>
                <div className='flex   gap-6 flex-wrap'>
                    <img src={Logo} alt=""/>
                    <a href='' className='hover:text-green-400 '>О компании</a>
                    <a href='' className='hover:text-green-400 '>Контакты</a>
                    <a href='' className='hover:text-green-400 '>Вакансии</a>
                    <a href='' className='hover:text-green-400 '>Статьи</a>
                    <a href='' className='hover:text-green-400 '>Политика обработки
                        персональных данных</a>
                </div>
                <div className='flex gap-10'>
                    <div className='flex gap-4 items-center'>
                        <i className="fa-brands fa-instagram text-orange-700 text-xl hover:text-orange-800 duration-300"></i>
                        <i className="fa-brands fa-vk text-blue-500 text-xl hover:text-orange-800 duration-300"></i>
                        <i className="fa-brands fa-facebook text-blue-500 text-xl hover:text-orange-800 duration-300"></i>
                        <i className="fa-brands fa-odnoklassniki text-orange-400 text-xl hover:text-orange-800 duration-300"></i>
                    </div>
                    <div>
                        <div className='flex  gap-2 items-center  '><i className="fa-solid fa-phone text-green-400 hover:text-green-600 duration-300"></i>
                            <p>8 800 777 33 33</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}