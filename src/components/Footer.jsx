import logo from '../assets/logo.svg'
import facebook from '../assets/icon-facebook.svg'
import ig from '../assets/icon-instagram.svg'
import twitter from '../assets/icon-twitter.svg'




export default function Footer(){
    return(
        <>
        <footer>
            <img className='img-5' src={logo} alt="" />
            <nav>
                <a href="../app.js">FAQs</a>
                <a href="../app.js">Contact Us</a>
                <a href="../app.js">Privacy Policy</a>
                <a href="../app.js">Press Kit</a>
                <a href="../app.js">Install Guide</a>
            </nav>
            <div className="social">
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={ig} alt="" />
            </div>
        </footer>
        </>

    )
}