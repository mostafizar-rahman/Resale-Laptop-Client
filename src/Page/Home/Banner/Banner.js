import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Banner.css'

function Banner() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='banner overflow-x-clip'>
      <Slider {...settings}>
        <div>
        <div>
            <div className='flex justify-between items-center max-w-[1400px] mx-auto py-32'>
              <div className='w-1/2'>
                <h1 className=' text-5xl font-bold'>Your Product our bussnis</h1>
                <p className='mt-4 text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et voluptas, recusandae est maxime odio non.</p>
              </div>
              <img src="https://i.ibb.co/Ws195BD/pngfind-com-monitor-png-391680.png" alt="" className=' w-1/2 border h-[500px] ' />
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className='flex justify-between items-center max-w-[1400px] mx-auto py-32'>
              <div className='w-1/2'>
                <h1 className=' text-5xl font-bold'>Your Product our bussnis</h1>
                <p className='mt-4 text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et voluptas, recusandae est maxime odio non.</p>
              </div>
              <img src="https://i.ibb.co/Ws195BD/pngfind-com-monitor-png-391680.png" alt="" className=' ' />
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className='flex justify-between items-center max-w-[1400px] mx-auto py-32'>
              <div className='w-1/2'>
                <h1 className=' text-5xl font-bold'>Your Product our bussnis</h1>
                <p className='mt-4 text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et voluptas, recusandae est maxime odio non.</p>
              </div>
              <img src="https://i.ibb.co/z4FqJ4g/pngfind-com-merkmusic-png-6777181.png" alt="" className='  ' />
            </div>
          </div>
        </div>

      </Slider>
    </div>
  )
}

export default Banner