import './components/LandingComp/landing.css'
import bookly_banner from "./assets/bookly_banner.png"
import bookly_pic from "./assets/bookly_pic.png"
import Hero from "./components/LandingComp/Hero"
import Button from 'react-bootstrap/Button';

function Landing() {
    return(
        <div className='landing-container'>
            <div className="banner-container">
                <Hero imageSrc={bookly_banner} />
            </div>
            <div className='info-container'>
                <h1 className='info-header' data-aos="fade-up" data-aos-delay="600">Read A Book</h1>
                <div className='info-section>'>
                    <img src={bookly_pic} alt='bookly_pic' className='bookly-pic' data-aos="fade-right"/>
                    <p className='info' data-aos="fade-left">jklsdaasjdfkasdfkasfdjkjkasdf
                        asdkl;f;laskdfl;kajsdf;ljka;lsdjl;
                        sad;klfjsadl;kfjasl;kdfjsakfl;
                        asdf;klasjdfl;kasjdf;kasl;dfjsdf
                        asl;dkfjasl;kdfj;lksdjsdfsfasjdakls
                        askdjaskldjkl;asdj;laksjd;lakjsdkasd
                        dsjhfsjdfhjsfdjhfsdjhsffjksdfh
                        asdjihfsdfhjjdfkshjkhdfshjkdfsjkfsdhjkfsdjkkhj
                        asdf;klasjdfl;kasjdf;kasl;dfjsdf
                        asl;dkfjasl;kdfj;lksdjsdfsfasjdakls
                        askdjaskldjkl;asdj;laksjd;lakjsdkasd
                        dsjhfsjdfhjsfdjhfsdjhsffjksdfh
                        asdjihfsdfhjjdfkshjkhdfshjkdfsjkfsdhjkfsdjkkhj
                    </p>
                </div>
            </div>
            <div className="button-container">
                <Button href="login" variant="primary" className='join-button' data-aos="fade-up" size="lg">Get Started Now</Button>
            </div>
        </div>
    );
}

export default Landing;