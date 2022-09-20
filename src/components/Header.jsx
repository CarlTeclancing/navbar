import headerLogo from '../assets/logo.svg'

function Header (props){

    return(

        <>
            <div className="header">
                <img className='img-1' src={headerLogo}  alt="" />
            </div>
            <div>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <div className="btn-hold">
                    <button className='btn'>Download for ios</button>
                    <button className='btn'>Download for MAc</button>
                </div>
            </div>
        </>
    )
}

export default Header