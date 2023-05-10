import { Container, Row, Col} from 'react-bootstrap';
import NotificationSet from './components/Notifications/Reminders';
//import { PushNotificationSupportedornah, initializePushNotifications, actualNotification } from './components/Notifications/NotificationLook.js';

function Account() {
    return(
        <div>
            <h1>My Account</h1>

            <Container classname="bg-info">
                <Row className="px-4 my-5 mh-100 bg-info text-white">
                    <Col>E-mail</Col>
                    <Col>your.name45@gmail.com</Col>
                </Row>

                <Row className="px-4 my-5 bg-info text-white">
                    <Col>Password</Col>
                    <Col>pass****</Col>
                </Row>
              
            </Container>

            <Container classname="bg-info">
                <Row className="px-4 my-5 bg-info text-white">
                    <Col>Notifications</Col>
                    <Col>
                        <NotificationSet/>
                    </Col>
                </Row>

            </Container>


        </div>
        
    )
}

export default Account;

/*
                <Row className="px-4 my-5 bg-info text-white">
                    <Col>Username</Col>
                    <Col>ilovethisclass1</Col>
                </Row>
*/

/*
            <PushNotificationSupportedornah />
            <initializePushNotifications />
            <actualNotification />
*/