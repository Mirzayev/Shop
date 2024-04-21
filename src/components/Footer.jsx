import Logo from '../icons/image/logo_2.png'


export default function Footer() {


    return (
        <div className='max-w-[1440px] m-auto'>

            <div className='flex justify-between'>
                <div className='flex gap-10'>
                    <img src={Logo} alt=""/>
                    <a href='' className='hover:text-white duration-200 hover:bg-green-400 '>О компании</a>
                    <a href='' className='hover:text-white duration-200 hover:bg-green-400 '>Контакты</a>
                    <a href='' className='hover:text-white duration-200 hover:bg-green-400 '>Вакансии</a>
                    <a href='' className='hover:text-white duration-200 hover:bg-green-400 '>Статьи</a>
                    <a href='' className='hover:text-white duration-200 hover:bg-green-400 '>Политика обработки персональных данных</a>
                </div>
                <div className='flex gap-10'>
                    <div className='flex'>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-vk"></i>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-odnoklassniki"></i>
                    </div>
                    <div>
                        <div className='flex  gap-2'><i className="fa-solid fa-phone"></i>
                            <p>8 800 777 33 33</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}