import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import "../assets/css/NavBar.css"

import { Link } from "react-router-dom";

import am from "../assets/images/am.webp"
import logo from "../assets/images/logo.png"

const NavBar = () => {

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="#">
                        <img src={am} alt="Aazadi Ka Amrit Mahotsava" className='am' /></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto">
                            <Link class="nav-link" aria-current="page" to="/">Home</Link>
                            <Link class="nav-link" to="/howtouse">How to Use</Link>
                            <Link class="nav-link" to="#">Community Forum</Link>
                            <Link class="nav-link" to="#">Documents</Link>
                            <Link class="nav-link" to="#">NGO</Link>
                            <Link class="nav-link" to="#">Services</Link>
                            <Link class="nav-link" to="/users/signinas"><i className="fas fa-user"></i></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;


