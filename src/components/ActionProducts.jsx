import product1 from '../icons/image/blinchik.png'
import porduct_2 from '../icons/image/moloko.png'
import porduct_3 from '../icons/image/kolbasa_2.png'
import product_4 from '../icons/image/kolbasa_1.png'
import {useState} from "react";


const ActionProduct = () => {

    const [products, setProducts] = useState([
        {
            id: 1,
            img: product1,
            costCard: '44,50',
            payment_1: 'С картой',
            payment_2: 'Обычная',
            costNalich: '50,50',
            about: 'Г/Ц Блинчики с мясом вес, Россия',
        },
        {
            id: 2,
            img: porduct_2,
            costCard: '44,50',
            payment_1: 'С картой',
            payment_2: 'Обычная',
            costNalich: '50,50',
            about: 'Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...',

        },
        {
            id: 3,
            img: porduct_3,
            costCard: '44,50',
            payment_1: 'С картой',
            payment_2: 'Обычная',
            costNalich: '50,50',
            about: 'Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...',
        },
        {
            id: 4,
            img: product_4,
            costCard: '44,50',
            payment_1: 'С картой',
            payment_2: 'Обычная',
            costNalich: '50,50',
            about: 'Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...',
        },
    ])


    const data = products






    // console.log(limitData())


    return (
        <div className='   m-auto   max-w-[1440px] lg:pb-[120px]'>
            <div
                className='flex justify-between items-center lg:pt-20 pho:pt-4 lg:pb-10 pho:pb-4 sm:pt-10 sm:pb-5 px-3'>
                <h4 className='md:text-4xl pho:text-xl font-bold'>Акции</h4>
                <div className='flex items-center gap-5 py-3'>
                    <p> Все акции</p>
                    <i className="fa-solid fa-chevron-right pt-1"></i>
                </div>
            </div>

            <div
                className='grid pho:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 pho:justify-between gap-6 text-center  flex-wrap px-3'>

                {data.map((e) => {
                    return (
                        <div key={e.id} className='flex flex-col justify-between  bg-white p  rounded-md '>
                            <div className='relative flex justify'>
                                <img className='object-contain' src={e.img} alt=""/>
                                <p className='bg-[#FF6633] sm:py-1 sm:px-2 absolute bottom-2 left-1 pho:px-[3px] pho:py-[1px] pho:text-[12px] text-white rounded object-contain'>-50%</p>
                            </div>

                            <div className='flex justify-between text-start p-2'>
                                <div>
                                    <p className='font-semibold text-[16px]'>{e.costCard}₽</p>
                                    <p className='text-[#BFBFBF] text-[12px]'>{e.payment_1}</p>
                                </div>

                                <div>
                                    <p className='text-'>{e.costNalich}₽</p>
                                    <p className='text-[#BFBFBF] text-[12px]'>{e.payment_2}</p>
                                </div>
                            </div>

                            <div className='   '>
                                <div className='w-full  '>

                                    <p className='text-start px-2 text-[16px] w-[96%]'>{e.about}</p>

                                    <div className='flex gap-[3px] text-slate-400 p-2'>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                    </div>
                                    <div className='p-2  '>

                                        <button
                                            className='duration-200 border-2 border-green-400 rounded-md  w-full text-green-400 h-10 hover:bg-[#FF6633] hover:border-none hover:text-white'>В
                                            корзину
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default ActionProduct