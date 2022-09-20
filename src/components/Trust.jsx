import google from '../assets/logo-google.png'
import ibm from '../assets/logo-ibm.png'
import microsoft from '../assets/logo-microsoft.png'
import hp from '../assets/logo-hp.png'
import vector from '../assets/logo-vector-graphics.png'

export default function Trust(){
    return(
        <div className="same-hold">
            <img src={google} alt="" />
            <img src={ibm} alt="" />
            <img src={microsoft} alt="" />
            <img src={hp} alt="" />
            <img src={vector} alt="" />
        </div>
    )
}