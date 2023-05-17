import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import notifyme from "./NotifyMe";
import axios from "axios";
import { useState } from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

export default function NotificationSet() {
  const [showjob1, setShowjob1] = useState(false);
  const [showjob2, setShowjob2] = useState(false);
  const [showjob3, setShowjob3] = useState(false);
  const [showjob4, setShowjob4] = useState(false);
  const [showjob5, setShowjob5] = useState(false);

  const handleJob1 = () => {
    axios
      .get("/api/schedule/job1")
      .then((response) => {
        console.log(response.data);
        setShowjob1(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleJob2 = () => {
    axios
      .get("/api/schedule/job2")
      .then((response) => {
        console.log(response.data);
        setShowjob2(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleJob3 = () => {
    axios
      .get("/api/schedule/job3")
      .then((response) => {
        console.log(response.data);
        setShowjob3(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleJob4 = () => {
    axios
      .get("/api/schedule/job4")
      .then((response) => {
        console.log(response.data);
        setShowjob4(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleJob5 = () => {
    axios
      .get("/api/schedule/job5")
      .then((response) => {
        console.log(response.data);
        setShowjob5(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Dropdown as={ButtonGroup} size="sm">
        <Button variant="secondary" onClick={notifyme}>
          Notify me
        </Button>

        <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic" />

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" onClick={handleJob1}>
            Every 5 minutes
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2" onClick={handleJob2}>
            Every hour
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={handleJob3}>
            Every 12 hours
          </Dropdown.Item>
          <Dropdown.Item href="#/action-4" onClick={handleJob4}>
            Every 24 hours
          </Dropdown.Item>
          <Dropdown.Item href="#/action-5" onClick={handleJob5}>
            Every 48 hours
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* 5 Minute notification
          Made in reference to: https://react-bootstrap.github.io/components/toasts/#dismissible */}
      <ToastContainer className="p-3" position={"bottom-end"}>
        <Toast onClose={() => setShowjob1(false)} id="toast" show={showjob1} delay={3000} autohide>
          <Toast.Header closeButton={true}>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Notification</strong>
          </Toast.Header>
          <Toast.Body>5 Minute Notification Toggled!</Toast.Body>
        </Toast>
      </ToastContainer>

      {/* 1 Hour notification */}
      <ToastContainer className="p-3" position={"bottom-end"}>
        <Toast onClose={() => setShowjob2(false)} id="toast" show={showjob2} delay={3000} autohide>
          <Toast.Header closeButton={true}>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Notification</strong>
          </Toast.Header>
          <Toast.Body>1 Hour Notification Toggled!</Toast.Body>
        </Toast>
      </ToastContainer>

      {/* 12 Hour notification */}
      <ToastContainer className="p-3" position={"bottom-end"}>
        <Toast onClose={() => setShowjob3(false)} id="toast" show={showjob3} delay={3000} autohide>
          <Toast.Header closeButton={true}>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Notification</strong>
          </Toast.Header>
          <Toast.Body>12 Hour Notification Toggled!</Toast.Body>
        </Toast>
      </ToastContainer>

      {/* 1 Day Notification */}
      <ToastContainer className="p-3" position={"bottom-end"}>
        <Toast onClose={() => setShowjob4(false)} id="toast" show={showjob4} delay={3000} autohide>
          <Toast.Header closeButton={true}>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Notification</strong>
          </Toast.Header>
          <Toast.Body>1 Day Notification Toggled!</Toast.Body>
        </Toast>
      </ToastContainer>

      {/* 2 Day notification */}
      <ToastContainer className="p-3" position={"bottom-end"}>
        <Toast onClose={() => setShowjob5(false)} id="toast" show={showjob5} delay={3000} autohide>
          <Toast.Header closeButton={true}>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Notification</strong>
          </Toast.Header>
          <Toast.Body>2 Day Notification Toggled!</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}
