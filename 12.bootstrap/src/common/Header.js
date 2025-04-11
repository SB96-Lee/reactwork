import { Button, Modal, Form } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';


const Header = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <header id='header'>
            <div id='header-left'>
                <img src={'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAyMTJfMjQ1%2FMDAxNzM5Mjg2NDc0MzAx.q6CXZ1TFVPSlGqKmtrF5fk8_vWgQluZEnSWpMnPT4CQg.QVjJdrA6S044MX5O2CSaISAKSVDpGOi1L4Co76eWXUQg.JPEG%2F900%25A3%25DF20250212%25A3%25DF000733.jpg&type=sc960_832'} className='logo'/>
            </div>

            <div id='header-center'>
                <h1 className="bloody-text">MurderHelp</h1>
            </div>
            
            <div id='header-right'>
                <Button variant="warning">회원가입</Button>
                <Button variant="danger" onClick={handleShow}>로그인</Button>
            </div>
            <Login show={show} handleClose={handleClose}/>
        </header>
    )
}

function Login({show, handleShow, handleClose}) {
    return (
        <div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
        </div>
    )
}
export default Header;