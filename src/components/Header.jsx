import headerLogo from '../assets/logo.svg'

function Header (){

    return(

        <>
            <div className="header">
                <img className='img-1' src={headerLogo}  alt="" />
            </div>
            <div>
                <h1>A history of everything you copy</h1>
                <p>clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.</p>
                <div className="btn-hold">
                    <button className='btn'>Download for ios</button>
                    <button className='btn'>Download for MAc</button>
                </div>
            </div>
        </>
    )
}

export default Header