function Header (props){

    function OpenNav (){
        console.log('menu bar')
    }
    return(

        <>
            <div className="header">
                <span className="logo">CODEwithCREST</span>
                <nav>
                    <div className="nav-el">
                        <ul>
                            <a href="http://localhost:3000/#"><li>Home</li></a>
                            <a href="http://localhost:3000/#"><li>About</li></a>
                            <a href="http://localhost:3000/#"><li>Services</li></a>
                            <a href="http://localhost:3000/#"><li>More</li></a>  
                        </ul>
                    </div>
                    

                </nav>
                <div className="btn-hold">
                    <button id="btn">{props.title}</button>
                    <button id="btn">{props.name}</button>
                </div>

                <div onClick={OpenNav} className="menu">
                    <div className="menu-bar"></div>
                    <div className="menu-bar"></div>
                    <div className="menu-bar"></div>
                </div>

                
            </div>
        </>
    )
}

export default Header