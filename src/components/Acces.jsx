import devices from '../assets/image-devices.png'

export default function Acces(){
    return(
        <div className='acces'>
            <h2>Access clipboard anywhere</h2>
            <p>
                whether you'are on the go, or at your computer, you can access all your clipboard<br>
                </br>
                snippets in a few siimple clicks
            </p>
            <img className='img-3' src={devices} alt="" />
        </div>
    )
}