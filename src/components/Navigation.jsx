import './Navigation.css'
import { GiHamburgerMenu } from "react-icons/gi";

const Navigation = () => {
  return (
    <header>
        <img src="/src/img/Mesa de trabajo 1 (1).png" alt="logo"/>
        <a href="#"><GiHamburgerMenu  color="#1F316F"
                size="5rem" /></a>
    </header>
  )
}

export default Navigation


