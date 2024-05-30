import React from "react";
import "./Header.module.css"

const Header = () => {
    return (
        <>
            {/*  Start Header Area */}
            <header className="header navbar-area">
            {/* // <header className={styles.header styles navbar-area"> */}
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="nav-inner">
                                {/*  Start Navbar */}
                                <nav className="navbar navbar-expand-lg">
                                    <a className="navbar-brand" href="index.html">
                                        <img src="assets/images/logo/logomarca.png" alt="Logo" className="logoMenu" />
                                    </a>
                                    <button className="navbar-toggler mobile-menu-btn" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="toggler-icon"></span>
                                        <span className="toggler-icon"></span>
                                        <span className="toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                        <ul id="nav" className="navbar-nav ms-auto">
                                            <li className="nav-item">
                                                <a href="#home" className="page-scroll active"
                                                    aria-label="Toggle navigation">Início</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#features" className="page-scroll"
                                                    aria-label="Toggle navigation">Sobre nós</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#pricing" className="page-scroll"
                                                    aria-label="Toggle navigation">Valores</a>
                                            </li>
                                        </ul>
                                    </div>  {/*  navbar collapse */}
                                    <div className="button add-list-button">
                                        <a href="mailto:sustentare.solutions@gmail.com" className="btn" id="btnC">Contate-nos</a>
                                    </div>
                                </nav>
                                {/*  End Navbar */}
                            </div>
                        </div>
                    </div>  {/*  row */}
                </div>  {/*  container */}
            </header>
        </>
    )
}

export default Header;