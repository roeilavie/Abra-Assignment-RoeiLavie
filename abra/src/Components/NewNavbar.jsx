import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NewNavbar() {
    return (
        <Navbar>
            <Nav>
                <Link
                    to="/"
                    style={{ textDecoration: "none" }}
                >
                    Generator
                </Link>
                <Link
                    to="/favorites"
                    style={{ textDecoration: "none" }}
                >
                    Favorites
                </Link>
            </Nav>
        </Navbar>
    )
}
