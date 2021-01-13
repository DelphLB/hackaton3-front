import React, { useState } from "react";
import "../style/Navbar.css";
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
                <p>
                  {" "}
                  <AiIcons.AiOutlineHome /> &#32; ACCUEIL
                </p>
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
              className={activeId === "client" ? "items active" : "items"}>
              RECETTES
              {/* <Link className='linkPages' to='/admin/clients'>
                
              </Link> */}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
