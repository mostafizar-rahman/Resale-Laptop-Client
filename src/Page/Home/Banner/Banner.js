import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Banner.css'

function Banner() {
  const settings = {
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };

  return (
    <div className='banner overflow-x-clip'>
      <Slider {...settings}>
        <div>
        <div>
            <div className='block md:flex justify-between items-center max-w-[1400px] mx-auto py-32'>
              <div className='md:w-1/2  w-full absolute top-0 left-0 z-10  md:block flex justify-center text-center md:text-left items-center flex-col h-full md:static md:bg-inherit bg-slate-200 bg-opacity-50'>
                <h1 className=' text-5xl font-bold'>Your Product our bussnis</h1>
                <p className='mt-4 text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et voluptas, recusandae est maxime odio non.</p>
              </div>
              <img src="https://i.ibb.co/Ws195BD/pngfind-com-monitor-png-391680.png" alt="" className='md:w-1/2  w-full h-[500px] relative md:static' />
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className='block md:flex justify-between items-center max-w-[1400px] mx-auto py-32'>
              <div className='md:w-1/2  w-full absolute top-0 left-0 z-10  md:block flex justify-center text-center md:text-left items-center flex-col h-full md:static md:bg-inherit bg-slate-200 bg-opacity-50'>
                <h1 className=' text-5xl font-bold'>Your Product our bussnis</h1>
                <p className='mt-4 text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et voluptas, recusandae est maxime odio non.</p>
              </div>
              <img src="https://i.ibb.co/Ws195BD/pngfind-com-monitor-png-391680.png" alt="" className='md:w-1/2  w-full h-[500px] relative md:static ' />
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className='block md:flex justify-between items-center max-w-[1400px] mx-auto py-32'>
              <div className='md:w-1/2  w-full absolute top-0 left-0 z-10  md:block flex justify-center text-center md:text-left items-center flex-col h-full md:static md:bg-inherit bg-slate-200 bg-opacity-50'>
                <h1 className=' text-5xl font-bold'>Your Product our bussnis</h1>
                <p className='mt-4 text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et voluptas, recusandae est maxime odio non.</p>
              </div>
              <img src="https://i.ibb.co/z4FqJ4g/pngfind-com-merkmusic-png-6777181.png" alt="" className='md:w-1/2  w-full h-[500px] relative md:static  ' />
            </div>
          </div>
        </div>

      </Slider>
    </div>
  )
}

export default Banner