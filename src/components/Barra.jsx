import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";



function Brand() {
    return (
        <>
            <Navbar bg="danger" variant="danger">
                <Container>
                    <Nav className="me-auto">
                        <Link to="/" href="#home" className='text-light text-decoration-none px-4'> <i class="fa-solid fa-house-user"></i> Home</Link>
                        <Link to="/Contacto" href="#contacto" className='text-light text-decoration-none'> <i class="fa-solid fa-address-book"></i> Contact</Link>
                    </Nav>

                    <Navbar.Brand href="#home">
                        <Link to="/" href="#Home" className='text-light text-decoration-none'> <i class="fa-solid fa-cake-candles"></i> Happy Cake</Link>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

export default Brand;