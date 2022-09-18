function Header (){
    return(
        <>
            <div className="header">
                <span className="logo">CODEwithCREST</span>
                <nav>
                    <ul>
                        <a href="http://localhost:3000/#"><li>Home</li></a>
                        <a href="http://localhost:3000/#"><li>About</li></a>
                        <a href="http://localhost:3000/#"><li>Services</li></a>
                        <a href="http://localhost:3000/#"><li>More</li></a>  
                    </ul>

                </nav>
                <div className="btn-hold">
                    <button id="btn">Sign up</button>
                    <button id="btn">login</button>
                </div>

                <div className="menu">
                    <div className="menu-bar"></div>
                    <div className="menu-bar"></div>
                    <div className="menu-bar"></div>
                </div>
                
            </div>
        </>
    )
}

export default Header