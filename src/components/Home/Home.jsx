import React from 'react'
import HeroImg from '../../assets/coffee2.png'

const Home = () => {
  return (
    <div className='min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center
     text-white'>
      <div className='container pb-8 sm:pb-0'>
        <div className='grid grid-cols-1 sm:grid-cols-2'>
          <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center 
          sm:text-left order-2 sm:order-1" >
            <h1 data-aos="fade-up"
                data-aos-once="true"
                className='text-5xl sm:text-6xl lg:text-7xl font-bold'>
                We serve the richest {" "}
                <span data-aos="zoom-out" data-aos-delay="300" className='text-primary font-cursive'>
                    Coffee</span> in the city
            </h1>
            <div data-aos="fade-up" data-aos-delay="400">
                <button
                className='bg-gradient-to-r from-primary to-secondary border-2 border-primary
                rounded-full px-4 py-2 text-white hover:scale-105 duration-200'
                >Coffe and Code</button>
            </div>
          </div>
          {/*image section */}

          <div data-aos= "zoom-in" className='min-h-[450px] flex justify-center items-center relative order-1 sm:order-2'>
            <img src={HeroImg} alt="" className='w-[300px] sm:w-[450px] sm:scale-125 max-auto spin'/>
            <div className='bg-gradient-to-r from-primary to-secondary absolute top-10 left-10 p-3
            rounded-xl'>
                <h1>Hey Coder</h1>
            </div>
            <div className='bg-gradient-to-r from-primary to-secondary absolute bottom-10 right-10 p-3
            rounded-xl'>
                <h1>Best Coffee</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home