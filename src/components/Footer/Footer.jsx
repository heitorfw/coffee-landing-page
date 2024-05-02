import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import FooterBg from "../../assets/website/coffee-footer.jpg"

const FooterLinks =[
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
]
const bgImage = {
    backgroundImage: `url(${FooterBg})`,
    backgroundPosition: "center",
    backgroundRepeat: 'no-repeat',
    backgroundSize: "cover",
    height: "100%",
    width: "100%",

}
const Footer = () => {
  return (
    <div style={bgImage} className='text-white'>
      <div className='bg-black/40 min-h-[400px]'>
        <div className="container grid md:grid-cols-3 pb-20 pt-5">
            <div className='py-8 px-4'>
                <a href="#" className='font-semibold tracking-widest
                text-2xl sm:text-3xl font-cursive'>
                    Coffee Code
                </a>
                <p className='pt-4'>
                {" "}
                Crafted Coffee, Cozy Vibes, Unforgettable Moments - Your Perfect Espresso Escape

                </p>
                <a href="https://heitorfsw.onrender.com" target='_blank' className='inline-block
                bg-[#3d2517] py-2 px-4 mt-5 text-sm rounded-full'>
                    Visit my Portfolio
                </a>
            </div>
            <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                <div className='py-8 px-4'>
                    <h1 className='text-xl font-semibold sm:text-left mb-3'>
                        Footer Links
                    </h1>
                    <ul className='space-y-3'>
                        {
                            FooterLinks.map((data, index) => (
                                <li key={index}>
                                    <a href={data.link}
                                    className='inline-block hover:scale-105 duration-200'
                                    >{data.title}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='py-8 px-4 col-span-2 sm:col-auto'>
                    <h1 className='text-xl font-semibold sm:text-left mb-3'>Address</h1>
                    <div>
                        <p>2677 Padre agostinho, Curitiba, Brazil</p>
                        <p>Email:heitorfranciscowirmond@hotmail.com</p>
                        <div className='space-x-3 mt-6'>
                            <a href="https://www.linkedin.com/in/heitor-wirmond-920a31181/">
                                <FaLinkedin className='text-3xl inline-block hover:scale-105
                                duration-200'/>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>  
      </div>
    </div>
  )
}

export default Footer