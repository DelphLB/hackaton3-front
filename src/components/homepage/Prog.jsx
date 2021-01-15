import React, { useState, useEffect } from "react";
import "../../style/Prog.css";
import axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";

// import moment from 'moment';

import "moment/locale/fr";

moment.locale("fr");

const Prog = () => {
  const [listRecette, setListRecette] = useState([]);
  const [nameRoom, setNameRoom] = useState("");
  let lesRecettes = [];

  useEffect(() => {
    axios
      .get(`https://cookeat-wild.herokuapp.com/api/recettes`)
      .then((response) => setListRecette(response.data));
  }, []);

  {
    listRecette &&
      listRecette.map((recette) =>
        recette.date != null && recette.date < moment().calendar()
          ? lesRecettes.push(recette)
          : ""
      );
    lesRecettes.sort((a, b) => {
      const A = a.date;
      const B = b.date;
      if (A < B) return -1;
      else if (A > B) return 1;
    });
  }

  return (
    <div className='Prog'>
      <div className='ProgHead'>
        <h1> Prochains Lives </h1>
        <Link to='/nouveauLive'>
          <button className='add-recette'>Proposer un live</button>
        </Link>
      </div>
      <div className='ProgBlocks'>
        {lesRecettes.map((recette) =>
          recette.date != null ? (
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
                    Le {moment(recette.date).format("DD  MMMM YYYY")} à{" "}
                    {recette.time}
                  </h4>
                  <div className='ShowBlock'>
                    <p>{recette.ingredients}</p>
                    <p>{recette.tools}</p>
                  </div>
                  <h2>Live {moment(recette.date).startOf("day").fromNow()}</h2>
                  <h5>Proposé par {recette.chef}</h5>
                  <Link
                    className='prog-live-button'
                    to={`/videoChat/${recette.name}`}>
                    Accéder au live
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};

export default Prog;
