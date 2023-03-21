import './Hero.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = ({ imageSrc }) => {
    return(
            <div className="hero">
                <img src={imageSrc} alt="banner_img" className='hero-image' />
                <h1 className='hero-title' data-aos="fade-up" data-aos-delay="300">Welcome to Bookly</h1>
            </div>
    )
}

export default Hero;
AOS.init();