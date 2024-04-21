import {useState} from "react";
import product1 from "../icons/image/blinchik.png";
import porduct_2 from "../icons/image/moloko.png";
import porduct_3 from "../icons/image/kolbasa_2.png";
import product_4 from "../icons/image/kolbasa_1.png";


export default function Purchased(){
    const [purchased, setPurchased] = useState([
        {
            id: 1,
            img: product1,
            costCard: '77,99',
            payment_1: 'С картой',
            payment_2: 'Обычная',
            costNalich: '50,50',
            about: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
        },
        {
            id: 2,
            img: porduct_2,
            costCard: '159,99',
            payment_1: 'С картой',
            payment_2: 'Обычная',
            costNalich: '50,50',
            about: 'Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...',

        },
        {
            id: 3,
            img: porduct_3,
            costCard: '679,99',
            payment_1: 'С картой',
            payment_2: 'Обычная',
            costNalich: '50,50',
            about: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
        },
        {
            id: 4,
            img: product_4,
            costCard: '59,39',
            payment_1: 'С картой',
            payment_2: 'Обычная',
            costNalich: '50,50',
            about: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
        },
    ])

    return(
        <div>
            <div className='m-auto   max-w-[1440px] lg:pb-[120px] pho:pb-[30px]'>
                <div className='flex justify-between items-center lg:pt-20 pho:pt-4 lg:pb-10 pho:pb-4 sm:pt-10 sm:pb-5 px-3'>
                    <h4 className='md:text-4xl pho:text-xl font-bold'>Покупали раньше </h4>
                    <div className='flex items-center gap-5 py-3'>
                        <p>Все покупки</p>
                        <i className="fa-solid fa-chevron-right pt-1"></i>
                    </div>
                </div>

                <div className='grid lg:grid-cols-4 pho:grid-cols-2 xl:justify-between pho:justify-center gap-6 text-center  flex-wrap px-3'>

                    {purchased.map((e) => {
                        return (
                            <div key={e.id}
                                 className='flex flex-col justify-between  bg-white  rounded-md px-2'>
                                <div className='relative flex justify-center '>
                                    <img className='w-[272px] object-contain' src={e.img} alt=""/>
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
                        )
                    })}
                </div>

            </div>

        </div>
    )
}