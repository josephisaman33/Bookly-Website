import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import notifyme from './NotifyMe';

export default function NotificationSet() {
  return (
    <Dropdown as={ButtonGroup}>
      <Button variant="secondary" onClick={notifyme}>Notify me</Button>

      <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic" />

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Every 3 hours</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Every 6 hours</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Every 12 hours</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Every 24 hours</Dropdown.Item>
        <Dropdown.Item href="#/action-5">Every 48 hours</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}