import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import './supplier-menu-info.css'
import {Card, Col, FloatingLabel, Form, Image, Row} from "react-bootstrap";

function MenuProduct(props) {
    const {name, description, picture} = props.product
    return (
        <Card className="productCard mt-3 mb-3">
            <Card.Body>
                <Row>
                    <Col className="text-start"><Image height={50} width={50} src={picture} /></Col>
                    <Col className="text-center">{description}</Col>
                    <Col className="text-end">{name}</Col>
                </Row>
            </Card.Body>
            <Card.Footer><Row>
                <Col className="text-start">cost:</Col>
                <Col className="text-end">100$</Col>
            </Row></Card.Footer>
        </Card>
    )
}

const SupplierMenuInfo = (props) => {
    const {name, description, products} = props.menue
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="menuProductsFrom">
            <Card className="mt-3 shadow showProductsCard" onClick={handleShow}>
                <h4 className="p-2 text-center">{name}</h4>
            </Card>
            <Modal className="my-modal" show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
                   centered>
                <Modal.Header closeButton>
                    <Modal.Title>{name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <Card className="productsContainerCard">
                            <Card.Body>
                                {products.map((p) => <MenuProduct product = {p}/>)}
                            </Card.Body>
                        </Card>
                </Modal.Body>
                <Modal.Footer>
                    {description}
                </Modal.Footer>
            </Modal>
        </div>
    )
}


export default SupplierMenuInfo;