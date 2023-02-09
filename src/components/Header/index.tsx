import { useState, useEffect } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

export default function Header(){
    const [isOpen, setIsOpen] = useState(false);
    const [sticky, setSticky] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });

    const handleScroll = () => {
        if (window.scrollY > 180) {
            setSticky(true);
        } else if (window.scrollY < 180) {
            setSticky(false);
        }
    }

    return (
        <Navbar color="light" light container="md" expand="md" sticky={sticky ? "top" : ""}>
            <NavbarBrand href="/"> What's up with the weather today?</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ms-auto" navbar>
                    <Nav className="m-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="dashboard" className='header-location'>Dashboard</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#videos">Videos</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#contact">Contato</NavLink>
                        </NavItem>
                    </Nav>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

