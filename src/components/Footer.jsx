import './Footer.css'
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";

const Footer = () => {
  return (
    <>
        <div className="footer">
            <h6>Gracias por interesarte en nuestras creaciones</h6>
            <img src="/src/img/Mesa de trabajo 1 (1).png" alt="logo"/> 
            <p>Síguenos en redes sociales</p>
            <div className="redes">
               
                <a href="https://www.facebook.com/OjodeLagunaArte"></a><TiSocialFacebookCircular
                color="#1F316F"
                size="6rem" />
                <a href="https://www.instagram.com/ojodelaguna.arte/"><TiSocialInstagram 
                color="#1F316F"
                size="6rem" /></a>
            </div>
        </div>
    </>
  )
}

export default Footer