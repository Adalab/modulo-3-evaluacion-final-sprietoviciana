import "../scss/layout/Header.scss";
import logo from "../scss/images/logoR&M.jpg"
function Header() {
  return (
    <header className="header">
    <img className="logo" src={logo} alt="logo Rick and Morty" />
  </header>
  )
}

export default Header;
