import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.css";
import Card from 'react-bootstrap/Card';

function Landing() {
    return (
        <Card className="bg-dark text-white">
          <Card.Img src="https://www.sarawhitley.com/wp-content/uploads/2019/03/cropped-blur-book-stack-books-2.jpg" alt="Blurred Book Background" fluid="true" />
          <Card.ImgOverlay>
            <Card bg="Melon" text="dark" center="true">
                <Card.Body>Reading. Simplified</Card.Body>
            </Card>
          </Card.ImgOverlay>
        </Card>
      );
    }

export default Landing;