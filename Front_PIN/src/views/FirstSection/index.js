function FirstSection(props){
    return(
        <section id="home">
            <nav className="navbar navbar-expand-lg" id="navSection">
                <div className="container-fluid" id="divNavSection">
                    <a className="navbar-brand" img='./imagenes/top-logo.png' id="nav-logo"></a>
                </div>        
                <div className="collapse-navbar-collapse">
                    <ul className="navbar-nav me-4 mb-10 mb-lg-0" id="ulMain">
                        <li className="nav-item">
                            <a className= "items-li" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className= "items-li" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className= "items-li" href="#products">Products</a>
                        </li>
                        <li className="nav-item">
                            <a className= "items-li" href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className= "items-li" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div id="divMessage">
                <h2 id="pFirstMessage">Sed ut perspiciatis unde omnis iste natus</h2>
                <h5 id="pSecondMessage">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</h5>  
                <a id="firstButton" href="https://www.25watts.com.ar/">Read more</a>
            </div>
        </section>
    )
}

export default FirstSection;