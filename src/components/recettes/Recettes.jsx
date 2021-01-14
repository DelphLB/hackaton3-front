import React, { useState, useEffect } from "react";
import "../../style/Recettes.css";
import axios from "axios";

const Recettes = () => {
  const [listeRecette, setListeRecette] = useState([]);
  const [filterRecette, setFilterRecette] = useState([]);
  const [search, setSearch] = useState('');
  const [info, setInfo] = useState(true);



  const handleAxios = () => {
    axios
      .get(`http://localhost:3000/api/recettes`)
      .then((response) => response.data)
      .then((data) => setListeRecette(data));
  };


  useEffect(() =>{
    handleAxios();
  }, []);

  useEffect(() => {
    setFilterRecette(
      listeRecette.filter((recette) =>
        recette.category.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, listeRecette]);


  const handleClick = () =>{
    setInfo(!info)
  }
  return (
    <div className='page-recettes'>
      <div className="mini-banner">
        <div> 
          <input
            className="filterbar"
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher par catégorie (cocktails, dessert ...)"
          />
        </div>
      </div>
      <div className="div-recettes">
        <h1> Toutes les recettes </h1>
      </div>
      <div className="box-recettes">
        {filterRecette.map((recette) => (
        <div className="box-recettes-indiv">
          <div className="box-img-recette">
            <img className="image-recette" src={recette.image} alt="recette"/>
          </div> 
          <div className="name-cat">
            <p className="name-recette">{recette.name}</p>
            <p className="categorie-recette"> {recette.category} </p>
          </div> 
          <div className="info-recette">
            <p className="more-info" onClick={handleClick}> Plus d'informations &#9660;
              {info 
              ? "" 
              : <div> 
                  <div className="time-level">
                    <p> 25 min</p>
                    <p> Facile </p>
                  </div>
                  <div className="ingredients">
                    <p> Ingrédients : 4 personnes </p>
                  </div>
                </div>
                } 
            </p>
          </div>
        </div>))}
      </div>
    </div>
  );
};

export default Recettes;
