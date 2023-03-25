import { Outlet, Link } from "react-router-dom";
import LogoSrc from "../img/logo.png";

function Layout() {
  return (
    <div id="layout">
      <div className="menu-container">
        <div className="logo-container">
          <img className="logo" src={LogoSrc} alt="Truffle logo" />
        </div>
        <ul className={{color:'#fff'}}>
          <Link to="/market"><li>Rental Marketplace</li></Link>
          <Link to="/owned"><li>Mint Rental NFTs</li></Link>
          <Link to="/"><li>Rented NFTs</li></Link>
        </ul>
      </div>
      <div className="page-container">
        <Outlet />
      </div>
    </div>
  );
}

export { Layout };
