import React, { useState } from "react";
import "../../style/Navbar.css";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";

const NavBar = () => {
  const [activeId, setActiveId] = useState("home");

  return (
    <div className='navBar'>
      <nav>
        <div className='list'>
          <div>
            <button
              type='button'
              onClick={() => setActiveId("home")}
              className={activeId === "home" ? "items active" : "items"}>
              <Link className='linkPages' to='/'>
                <AiIcons.AiOutlineHome /> &#32; ACCUEIL
              </Link>
            </button>
          </div>
          <div>
            <button
              type='button'
              onClick={() => setActiveId("video")}
              className={activeId === "video" ? "items active" : "items"}>
              <Link className='linkPages' to='/videoChat'>
                LIVE
              </Link>
            </button>
          </div>
          <div>
            <button
              type='button'
              onClick={() => setActiveId("recette")}
              className={activeId === "recette" ? "items active" : "items"}>
              <Link className='linkPages' to='/recettes'>
                RECETTES
              </Link>
            </button>
          </div>
          <div>
            <button
              type='button'
              onClick={() => setActiveId("connexion")}
              className={activeId === "connexion" ? "items active" : "items"}>
              <Link className='linkPages' to='/connectPage'>
                ME CONNECTER
              </Link>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
