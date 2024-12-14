import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalBox(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                View Details
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title >{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{margin:'1rem'}}>
                        <h2 style={{color:'grey',fontSize:'1.4rem'}}>Description</h2>
                    {props.description}
                    </div>
                    <div style={{padding:'1rem' ,borderTop:'1px solid'}}>
                        <h3 style={{fontSize:'1.2rem'}}>Rating: ⭐{props.rating}</h3>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Order Now</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalBox;