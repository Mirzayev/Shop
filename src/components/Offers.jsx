import img_severnoshka  from '../icons/image/severnoshka.png'
import img_basket from '../icons/image/basket.png'
  export default function Offers(){

    return(
        <div className='max-w-[1440px] m-auto px-3'>
            <div>
                <h3 className='md:mb-10 pho:mb-6 md:text-4xl pho:text-xl font-bold'>Специальные предложения</h3>
                <div className='grid  lg:grid-cols-2 lg:gap-20 pho:gap-10'>
                    <div className='flex items-center px-8 bg-[#FCD5BA] drop-shadow rounded-lg '>
                        <div  className=''>
                            <h5 className='md:text-2xl pho:text-xl font-bold py-2'>Оформите карту «Северяночка»</h5>
                            <p className='pho:text-[12px] sm:text-lg py-2'>И получайте бонусы при покупке в магазинах и на сайте</p></div>
                        <div>
                            <img className='object-contain ' src={img_severnoshka} alt=""/>
                        </div>
                    </div>


                    <div className='flex  bg-[#E5FFDE] px-10 items-center rounded-lg justify-between'>
                        <div>
                            <h4 className='md:text-2xl pho:text-xl font-bold'>Покупайте акционные товары</h4>
                            <p className='pho:text-[14px] py-4 sm:text-lg'>И получайте вдвое больше бонусов</p>
                        </div>
                        <img className='object-contain pho:w-24 sm:w-32 md:w-auto' src={img_basket} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
  }