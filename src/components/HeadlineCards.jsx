import React from 'react'
const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 md:py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {/* Card */}
         <div className='rounded-xl relative'>
         {/* OverLay */}
            <div className='absolute w-full h-full rounded-xl text-white'>
                {/* <p className='font-bold text-2xl px-2 pt-4'></p>
                <p className='px-2'></p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-0'>Order Now</button> */}
            </div>
            <img src="https://theme.hstatic.net/1000026716/1000440777/14/xxxbanner1.jpg?v=30245" alt="" className='max-h-[160px] md:max-h-[250px] w-full object-cover rounded-xl'/>
         </div>
         <div className='rounded-xl relative'>
         {/* OverLay */}
            <div className='absolute w-full h-full rounded-xl text-white'>
                {/* <p className='font-bold text-2xl px-2 pt-4'></p>
                <p className='px-2'></p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-0'>Order Now</button> */}
            </div>
            <img src="https://theme.hstatic.net/1000026716/1000440777/14/xxxbanner2.jpg?v=30245" alt="" className='max-h-[160px] md:max-h-[250px] w-full object-cover rounded-xl'/>
         </div>
         <div className='rounded-xl relative'>
         {/* OverLay */}
            <div className='absolute w-full h-full rounded-xl text-white'>
                {/* <p className='font-bold text-2xl px-2 pt-4'></p>
                <p className='px-2'></p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-0'>Order Now</button> */}
            </div>
            <img src="https://theme.hstatic.net/1000026716/1000440777/14/xxxbanner3.jpg?v=30245" alt="" className='max-h-[160px] md:max-h-[250px] w-full object-cover rounded-xl'/>
         </div>
         <div className='rounded-xl relative'>
         {/* OverLay */}
            <div className='absolute w-full h-full rounded-xl text-white'>
                {/* <p className='font-bold text-2xl px-2 pt-4'></p>
                <p className='px-2'></p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-0'>Order Now</button> */}
            </div>
            <img src="https://theme.hstatic.net/1000026716/1000440777/14/xxxbanner4.jpg?v=30245" alt="" className='max-h-[160px] md:max-h-[250px] w-full object-cover rounded-xl'/>
         </div>
    </div>
  )
}

export default HeadlineCards