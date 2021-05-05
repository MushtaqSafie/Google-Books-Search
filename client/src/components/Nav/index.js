import React from "react";
import { useLocation } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import logo from "../../logo.png";
import { BsSearch } from "react-icons/bs";
import { RiSaveFill } from "react-icons/ri";
import { BiLoader } from "react-icons/bi";

function Nav() {
  const [store] = useStoreContext();
  const location = useLocation().pathname;

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <a className="navbar-brand" href="/search">
        <img src={logo}  height="80" className="d-inline-block align-top" alt="logo" />
      </a>

      <ul className="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll" style={{maxHeight: "100px"}}>
        <li className={"nav-item "+ ("/search"===location&&"active")}>
          <a className="nav-link" href="/search" ><BsSearch/> Search</a>
        </li>
        <li className={"nav-item "+ ("/saved"===location&&"active")}>
          <a className="nav-link" href="/saved"><RiSaveFill/> Saved</a>
        </li>
      </ul>

       {/* eslint-disable-next-line */}
      {store.loading ? <a className="navbar-brand ml-auto"><BiLoader/> Loading...</a> : <></>}
    </nav>
  );
}

export default Nav;
