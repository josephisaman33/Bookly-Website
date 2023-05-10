import { Container, Row, Col} from 'react-bootstrap';
import NotificationSet from './components/Notifications/Reminders';
import { useEffect, useState } from "react";
//import { PushNotificationSupportedornah, initializePushNotifications, actualNotification } from './components/Notifications/NotificationLook.js';

function Account() {
    //state for email & pass
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    useEffect(() => {
        fetch("/api/account").then(async (response) => {
          if (response.status === 200) {
            let account = await response.json();
            console.log(account.user);
            setEmail(account.user.email);
            setPass(account.user.passwordfirstletter);
          }
        });
    });

    return(
        <div>
            <h1>My Account</h1>

            <Container className="bg-info">
                <Row className="px-4 my-5 mh-100 bg-info text-white">
                    <Col>E-mail</Col>
                    <Col>{email}</Col>
                </Row>

                <Row className="px-4 my-5 bg-info text-white">
                    <Col>Password</Col>
                    <Col>{pass}</Col>
                </Row>
              
            </Container>

            <Container className="bg-info">
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