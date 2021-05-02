import React from "react";
import { useLocation } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import logo from "../../logo.png";

function Nav() {
  const [store] = useStoreContext();
  const location = useLocation().pathname;

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <a className="navbar-brand" href="/search">
        <img src={logo}  height="50" className="d-inline-block align-top" alt="logo" />
      </a>

      <ul className="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll" style={{maxHeight: "100px"}}>
        <li className={"nav-item "+ ("/search"===location&&"active")}>
          <a className="nav-link" href="/search" >Search</a>
        </li>
        <li className={"nav-item "+ ("/saved"===location&&"active")}>
          <a className="nav-link" href="/saved">Saved</a>
        </li>
      </ul>

       {/* eslint-disable-next-line */}
      {store.loading ? <a className="navbar-brand ml-auto">Loading...</a> : <></>}
    </nav>
  );
}

export default Nav;
