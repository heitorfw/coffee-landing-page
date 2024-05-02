import React, {useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner'
import BannerApp from './components/BannerApp/BannerApp'
import Testimonial from './components/Testimonial/Testimonial'
import Footer from './components/Footer/Footer';
const App = () => {
  useEffect(() => {
    Aos.init({
      offset:100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    })
  })
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <Home/>
      <Services/>
      <Banner/>
      <BannerApp/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default App