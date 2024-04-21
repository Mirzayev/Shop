import img_1 from '../icons/image/Article_img1.png'
import img_2 from '../icons/image/Article_img2.png'
import img_3 from '../icons/image/Article_img3.png'


export default function Articles() {


    return (
        <div className='max-w-[1440px] m-auto'>
            <div className='lg:mt-28 px-3'>
                <div className='flex justify-between lg:my-10 pho:my-3'>
                    <h4 className='lg:text-4xl pho:text-2xl font-bold '>Статьи</h4>
                    <div className='flex gap-2 items-end'>
                        <p>Все статьи</p>
                        <i className="fa-solid fa-chevron-right"></i>
                    </div>
                </div>


                <div className='grid  lg:grid-cols-3 md:grid-cols-2  lg:gap-10 md:gap-8  items-center  '>
                    <div className='bg-white pb-3 my-3 rounded-lg'>
                        <img className='w-full object-cover rounded-t-lg' src={img_1} alt=""/>
                        <div className='px-[12px]'>
                            <p className='text-[15px] py-[10px]'>05.03.2021</p>
                            <p className='font-bold text-[18px]  w-[94%] pb-[10px]'>Режим использования масок и перчаток
                                на
                                территории магазинов</p>
                            <p>Подробная информация о режимах использования масок и перчаток на территории магазинов
                                "ЛЕНТА". Информация обновляется каждый будний день.</p>
                            <button
                                className='py-2 px-4 bg-[#70C05B] text-white rounded mt-[35px] hover:bg-green-700 duration-200'>Подробнее
                            </button>
                        </div>
                    </div>
                    <div className='bg-white pb-3 my-3  rounded-lg'>
                        <img className='w-full rounded-t-lg' src={img_2} alt=""/>
                        <div className='px-[10px]'>
                            <p className='text-[15px] py-[10px]'>05.03.2021</p>
                            <p className='font-bold text-[18px]  w-[94%] pb-[10px]'>Режим использования масок и перчаток
                                на
                                территории магазинов</p>
                            <p>Подробная информация о режимах использования масок и перчаток на территории магазинов
                                "ЛЕНТА". Информация обновляется каждый будний день.</p>
                            <button
                                className='py-2 px-4 bg-[#70C05B] text-white rounded mt-[35px] hover:bg-green-700 duration-200'>Подробнее
                            </button>
                        </div>
                    </div>
                    <div className='bg-white pb-3  rounded-lg'>
                        <img className='w-full rounded-t-lg' src={img_3} alt=""/>
                        <div className='px-[10px]'>
                            <p className='text-[15px] py-[10px] '>05.03.2021</p>
                            <p className='font-bold text-[18px]  w-[94%] pb-[10px]'>Режим использования масок и перчаток
                                на
                                территории магазинов</p>
                            <p>Подробная информация о режимах использования масок и перчаток на территории магазинов
                                "ЛЕНТА". Информация обновляется каждый будний день.</p>
                            <button
                                className='py-2 px-4 bg-[#70C05B] text-white rounded mt-[35px] hover:bg-green-700 duration-200'>Подробнее
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}