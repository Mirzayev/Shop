export default function ShopLocation() {

    return (

        <div className=' max-w-[1440px] m-auto'>
            <div className='md:py-20 pho:py-4  px-3'>
                <h4 className=' md:text-4xl pho:text-2xl  font-bold  '>Наши магазины</h4>
                <div className='flex justify-start lg:gap-6 pho:gap-1 my-4'>
                    <a className='bg-[#F3F2F1] py-1 px-2 rounded' href="">п.Щельяюр</a>
                    <a className='bg-[#F3F2F1] py-1 px-2 rounded' href="">д.Вертеп</a>
                    <a className='bg-[#F3F2F1] py-1 px-2 rounded' href="">с.Краснобор</a>
                    <a className='bg-[#F3F2F1] py-1 px-2 rounded' href="">д.Диюр</a>
                </div>
                <div>
                    <iframe className='pho:h-[200px] md:h-[450px]'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4193.682184388461!2d69.31285923374037!3d41.30353493102189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef59378ce2be1%3A0xf4bbb0bac9db6d8!2z0JXQtNC40L3QvtC1INC-0LrQvdC-INCv0YjQvdCw0LHQsNC00YHQutC-0LPQviDRgNCw0LnQvtC90LAg0L3QvtCy0YvQuSBZYXNobmFib2QgdHVtYW5pIFlhZ29uYSBkYXJjaGEgeWFuZ2lzaQ!5e0!3m2!1sru!2s!4v1713676834662!5m2!1sru!2s"
                        width="100%"
                        style={{border: "0"}}
                        allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">

                    </iframe>
                </div>
            </div>
        </div>)
}