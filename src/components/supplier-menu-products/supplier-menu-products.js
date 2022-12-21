import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './supplier-menu-products.css'
import {Card, Col, FloatingLabel, Form, Image, Row} from "react-bootstrap";
import coffee from "../../assets/coffe.jpg";
import {useDispatch} from "react-redux";
import {
    createMenu,
    createMenuProduct,
    deleteMenuProduct,
    editMenu,
    editMenuProduct
} from "../../store/supplier/menus/menusAction";
import {useTranslation} from "react-i18next";

function MenuProduct(props) {
    const { t } = useTranslation();

    const {id, name, description, picture, menu_id} = props.product

    const [showEdit, setShowEdit] = useState(false);
    const [errors, setErrors] = useState('');

    const dispatch = useDispatch();

    function handelDelete() {
        const deleteProductData = {product_id: id, menu_id: menu_id}
        const res = dispatch(deleteMenuProduct(deleteProductData));
        res.then((value) => {
            if (value.error){
                let errorMsg = JSON.parse(value.payload)
                setErrors(errorMsg)
            }else {
                setShowEdit(false)
            }
        });
    };

    return (
        <Card className="menuProduct mt-3 mb-3" id={id}>
            <Card.Body>
                <Row>
                    <Col className="text-start"><Image className="shadow" rounded={true} height={50} width={50}
                                                       src={picture}/></Col>
                    <Col className="text-start">{name}</Col>
                    <Col className="text-center">100$</Col>
                </Row>
                <Row>
                    <Col className="text-center">{description}</Col>
                </Row>
                <Row className="mt-3">
                    <Col className="text-start"><Button className="customMenuBtn" onClick={() => setShowEdit(true)}>{t('Form.edit')}</Button></Col>
                    <Col className="text-end"><Button variant={"danger"} onClick={handelDelete}>{t('Form.delete')}</Button></Col>
                </Row>
            </Card.Body>
            {showEdit ? <Card.Footer><EditProductForm closeForm = {() =>  setShowEdit(false)} {...props.product}/></Card.Footer> : null}
        </Card>
    )
}

function AddProductForm(props) {
    const { t } = useTranslation();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [picture, setPicture] = useState('');
    const [errors, setErrors] = useState('');
    const dispatch = useDispatch();

    let productData = {menu_id: props.menue_id, name: name, description, picture}

    const handleAddProductFromSubmit = (e) => {
        e.preventDefault();
        const res = dispatch(createMenuProduct(productData));
        res.then((value) => {
            if (value.error){
                let errorMsg = JSON.parse(value.payload)
                setErrors(errorMsg)
            }else {
                props.handleCloseAdd();
            }
        });
    };

    return (<Form id="AddProductForm" onSubmit={handleAddProductFromSubmit}>
        <Form.Group className="mb-3" controlId="addFormProductName">
            <Row>
                <Col>
                    <Form.Label>{t('Menu.product_name')}:</Form.Label>
                </Col>
                <Col>
                    <Form.Control type="text" placeholder="Sandwich" value={name} onChange={(e) => setName(e.target.value)}/>
                </Col>
            </Row>
        </Form.Group>
        <Form.Group className="mb-3" controlId="addFormProductCost">
            <Row>
                <Col>
                    <Form.Label>{t('Menu.product_price')}:</Form.Label>
                </Col>
                <Col>
                    <Form.Control type="number"  min="1"/>
                </Col>
            </Row>
        </Form.Group>
        <Form.Group className="mb-3" controlId="addFormProductPicture">
            <Row>
                <Col>
                    <Form.Label>{t('Menu.picture')}:</Form.Label>
                </Col>
                <Col>
                    <Form.Control type="text" placeholder="picture.png" size="sm" value={picture} onChange={(e) => setPicture(e.target.value)}/>
                </Col>
            </Row>
        </Form.Group>
        <Form.Group className="mb-3" controlId="addFormProductDescription">
            <Row>
                <Col>
                    <Form.Label>{t('Form.description')}:</Form.Label>
                </Col>
                <Col>
                    <Form.Control as="textarea" type="text" placeholder="Very tasty" value={description} onChange={(e) => setDescription(e.target.value)}/>
                </Col>
            </Row>
        </Form.Group>
        <Form.Group className="mb-3" controlId="addFormProductOptions">
            <Row>
                <Col className="text-center">
                    <Button className="customMenuBtn" type="submit" form="AddProductForm">{t('Form.create')}</Button>
                </Col>
                <Col className="text-center">
                    <Button variant={"danger"} onClick={props.handleCloseAdd}>{t('Form.close')}</Button>
                </Col>
            </Row>
        </Form.Group>
    </Form>)
}

function EditProductForm(props) {
    const { t } = useTranslation();

    const {id, name, description, picture} = props

    const [new_name, setName] = useState(name);
    const [new_description, setDescription] = useState(description);
    const [new_picture, setPicture] = useState(picture);
    const [errors, setErrors] = useState('');
    const dispatch = useDispatch();

    let productData = {id: id, name: new_name, description: new_description, picture: new_picture}

    const handleEditProductFromSubmit = (e) => {
        e.preventDefault();
        const res = dispatch(editMenuProduct(productData || props));
        res.then((value) => {
            if (value.error){
                let errorMsg = JSON.parse(value.payload)
                setErrors(errorMsg)
            }else {
                props.closeForm();
            }
        });
    };

    return (<Form id="EditProductForm" onSubmit={handleEditProductFromSubmit}>
        <Form.Group className="mb-3" controlId="editFormProductName">
            <Row>
                <Col>
                    <Form.Label>{t('Menu.product_name')}:</Form.Label>
                </Col>
                <Col>
                    <Form.Control type="text" value={new_name} onChange={(e) => setName(e.target.value)}/>
                </Col>
            </Row>
        </Form.Group>
        <Form.Group className="mb-3" controlId="editFormProductCost">
            <Row>
                <Col>
                    <Form.Label>{t('Menu.product_price')}:</Form.Label>
                </Col>
                <Col>
                    <Form.Control type="number"  min="1"/>
                </Col>
            </Row>
        </Form.Group>
        <Form.Group className="mb-3" controlId="editFormProductPicture">
            <Row>
                <Col>
                    <Form.Label>{t('Menu.picture')}:</Form.Label>
                </Col>
                <Col>
                    <Form.Control type="text" placeholder="coffee.png" size="sm"  value={new_picture} onChange={(e) => setPicture(e.target.value)}/>
                </Col>
            </Row>
        </Form.Group>
        <Form.Group className="mb-3" controlId="editFormProductDescription">
            <Row>
                <Col>
                    <Form.Label>{t('Form.description')}:</Form.Label>
                </Col>
                <Col>
                    <Form.Control as="textarea" type="text" value={new_description} onChange={(e) => setDescription(e.target.value)}/>
                </Col>
            </Row>
        </Form.Group>
        <Form.Group className="mb-3" controlId="editFormProductOptions">
            <Row>
                <Col className="text-center">
                    <Button className="customMenuBtn" type="submit" form="EditProductForm">{t('Form.save')}</Button>
                </Col>
                <Col className="text-center">
                    <Button variant={"danger"} onClick={props.closeForm}>{t('Form.close')}</Button>
                </Col>
            </Row>
        </Form.Group>
    </Form>)
}

const SupplierMenuProducts = (props) => {
    const { t } = useTranslation();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showAddForm, setShowAddForm] = useState(false);

    const handleShowAdd = () => setShowAddForm(true);
    const handleCloseAdd = () => setShowAddForm(false);

    const start = () => {
        handleCloseAdd()
        handleShow()
    }

    return (
        <div className="supplierMenuProducts">
            <Button onClick={start} className="customMenuBtn">
                {t('Menu.products_menu_btn')}
            </Button>
            <Modal className="my-modal supplierMenuProducts" show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
                   centered>
                <Modal.Header closeButton>
                    <Modal.Title>{t('Menu.products_menu_btn')}({props.name})</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Card className="menuProductsCard">
                        <Card.Body>
                            {props.products.map((p) => <MenuProduct product = {p}/>)}
                        </Card.Body>
                    </Card>
                </Modal.Body>
                <Modal.Footer>
                    {showAddForm ? <AddProductForm handleCloseAdd={handleCloseAdd} menue_id = {props.id}/> :
                            <Button className="customMenuBtn" onClick={handleShowAdd}>{t('Menu.add_product')}</Button>  }
                </Modal.Footer>
            </Modal>
        </div>
    )
}


export default SupplierMenuProducts;