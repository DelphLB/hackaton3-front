import React, { useState, useEffect } from "react";
import "../../style/Prog.css";
import axios from "axios";

const Prog = () => {
  const [listRecette, setListRecette] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/recettes`)
      .then((response) => response.data)
      .then((data) => setListRecette(data));
  }, []);

  return (
    <div className='Prog'>
      <h1> Prochains live</h1>
      <div className='ProgBlocks'>
        {listRecette.map((recette) => (
          <div className='ProgBloc'>
            <div className='DescriptionProg'>
              <div className='BlockImage'>
                <img
                  src={recette.image}
                  alt={recette.name}
                  className='ImageLive'
                />
              </div>
              <div className='BlockText'>
                <h2>{recette.name}</h2>

                <h3>{recette.category}</h3>
                <h4>
                  {recette.date} à {recette.time}
                </h4>
                <div className='ShowBlock'>
                  <p>{recette.ingredients}</p>
                  <p>{recette.tools}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prog;
