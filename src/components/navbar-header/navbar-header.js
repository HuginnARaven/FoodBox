import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar-header.css';
import {Link} from "react-router-dom";
import FoodBox_logo from './../../assets/FoodBox_logo.png'
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../store/auth/authAction";
import React from "react";
import {Row} from "react-bootstrap";
import RegisterModal from "../register-from/register-from";
import LoginModal from "../login-from/login-from";
import { useTranslation} from 'react-i18next';

function NavbarProfileDropdown() {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    return (
        <NavDropdown drop="start" title={t('NavHeader.account')} id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/profile">
                {t('NavHeader.profile')}
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/subscription">
                {t('NavHeader.subscription')}
            </NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item onClick={() => dispatch(logout())}>
                {t('NavHeader.logout')}
            </NavDropdown.Item>
        </NavDropdown>
    )
}

function NavbarLoginDropdown() {
    const { t } = useTranslation();
    return (
        <NavDropdown drop="start" title={t('NavHeader.account')} id="basic-nav-dropdown">
            <Container fluid>
                <Row className="justify-content-center">
                    <LoginModal/>
                    <RegisterModal/>
                </Row>
            </Container>
        </NavDropdown>
    )
}

const lngs = {
    en: { nativeName: 'English' },
    ua: { nativeName: 'Ukrainian' }
};

function NavbarHeader() {
    const { t, i18n } = useTranslation();

    const isLogin = useSelector(state => state.user.is_authorized);
    return (
        <Navbar className="navbarHeader" expand="xxl">
            <Container fluid>
                <Navbar.Brand className="logo" as={Link} to="/"><img
                    alt=""
                    src={FoodBox_logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}FoodBox</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">{t('NavHeader.main')}</Nav.Link>
                        <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
                    </Nav>
                    <Nav className="justify-content-end me-3">
                        <NavDropdown drop="start" title={t('NavHeader.language')} id="basic-nav-dropdown">
                            {Object.keys(lngs).map((lng) => (
                                <NavDropdown.Item as={"button"} key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>{lngs[lng].nativeName}</NavDropdown.Item>
                            ))}
                        </NavDropdown>
                        {isLogin ? <NavbarProfileDropdown/> : <NavbarLoginDropdown/>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarHeader;