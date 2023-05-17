import "./components/LandingComp/landing.css";
import bookly_banner from "./assets/bookly_banner.png";
import bookly_pic from "./assets/bookly_pic.png";
import Hero from "./components/LandingComp/Hero";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Landing() {
  return (
    <div className="landing-container">
      <div className="banner-container">
        <Hero imageSrc={bookly_banner} />
      </div>
      <h1 className="info-header" data-aos="fade-up">
        Read A Book
      </h1>
      <Container fluid>
        <Row>
          <Col>
            <img
              src={bookly_pic}
              alt="bookly_pic"
              className="bookly-pic"
              data-aos="fade-right"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="info" data-aos="fade-left">
            Bookly is your way of keeping yourself accountable with your reading.
            Bookly tracks how far you are in your current book and how many books
            you’ve read with the service. Additionally, it recommends you new books
            to read after you finish, and it reminds you to not slack off!
            Scroll down below to get started.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              href="login"
              variant="primary"
              className="join-button"
              data-aos="fade-up"
              size="lg"
            >
              Get Started Now
            </Button>
          </Col>
        </Row>
      </Container>
      <div className="space"></div>

      {/* <div className='info-container'>
                <h1 className='info-header' data-aos="fade-up" data-aos-delay="600">Read A Book</h1>
                <div className='info-section>'>
                    <img src={bookly_pic} alt='bookly_pic' className='bookly-pic' data-aos="fade-right"/>
                    <p className='info' data-aos="fade-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis blandit turpis cursus in hac habitasse. Eget dolor morbi non arcu. Dolor sit amet consectetur adipiscing elit. Quis blandit turpis cursus in hac. Lectus nulla at volutpat diam ut venenatis tellus in metus. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Aliquam ultrices sagittis orci a scelerisque purus semper. Quisque non tellus orci ac auctor. Amet dictum sit amet justo donec enim diam.
                    </p>
                </div>
            </div>
      <div className="button-container">
        <Button
          href="login"
          variant="primary"
          className="join-button"
          data-aos="fade-up"
          size="lg"
        >
          Get Started Now
        </Button>
      </div> */}
    </div>
  );
}

export default Landing;
