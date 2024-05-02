import React from 'react'
import Slider from 'react-slick'

const testimonialData = [
    {
      id: 1,
      name: "Ana Silva",
      city: "São Paulo",
      text: "I love the cozy atmosphere and delicious coffee at Coffee Code! I always come here to work and relax at the same time. Highly recommended!",
      img: "https://picsum.photos/101/101"
    },
    {
      id: 2,
      name: "Pedro Sampaio",
      city: "Rio de Janeiro",
      text: "Great coffee and impeccable service! The cappuccino is my favorite, and I always order one when I come to Coffee Code. Congratulations on the quality!",
      img: "https://picsum.photos/102/102"
    },
    {
      id: 3,
      name: "Lúcia Oliveira",
      city: "Belo Horizonte",
      text: "Coffee Code is my favorite getaway! In addition to the wonderful coffee, I love the homemade cakes and the tranquility of the environment. It's the perfect place for a break in the busy day.",
      img: "https://picsum.photos/104/104"
    },
    {
      id: 4,
      name: "Ricardo Mendes",
      city: "Curitiba",
      text: "I'm a fan of the espresso at Coffee Code! Always fresh and well-made. Thank you for providing this amazing experience!",
      img: "https://picsum.photos/103/103"
    },
  ];
  
  
const Testimonial = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
          {
            breakpoint: 10000,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <div className='py-14 mb-10'>
        <div className="container">
            <div data-aos="fade-up" className="text-center mb-10">
                <h1 className='text-4xl font-bold font-cursive text-gray-800'>
                    Testimonials
                </h1>
            </div>
            <div data-aos="zoom-in">
                <Slider { ...settings}>
                    {
                        testimonialData.map((data, index) => {
                            return( 
                            <div className='my-6' key={data.id}>
                                <div className='flex flex-col gap-4 shadow-lg py-8 mx-4 rounded-xl
                                bg-primary/10 relative'>
                                    <div className='mb-4'>
                                        <img src={data.img} alt=""  className='rounded-full w-20 h-20'/>
                                    </div>  
                                <div className='flex flex-col items-center gap-4'>
                                    <div className='space-y-3'>
                                        <p className='text-xs text-gray-500'>{data.text}</p>
                                        <h1 className='text-xl font-bold text-black/60 font-cursive'>
                                            {data.name}
                                        </h1>
                                    </div>
                                </div>
                                <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>
                                    ,,
                                </p>
                                </div>
                            </div>
                        );
                        })
                    }
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Testimonial