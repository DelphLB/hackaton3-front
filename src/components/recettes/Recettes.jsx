import React, { useState, useEffect } from "react";
import "../../style/Recettes.css";
import axios from "axios";
import { Link } from "react-router-dom"

const Recettes = () => {
  const [listeRecette, setListeRecette] = useState([]);
  const [filterRecette, setFilterRecette] = useState([]);
  const [search, setSearch] = useState('');
  const [info, setInfo] = useState(true);



  const handleAxios = () => {
    axios
      .get(`https://cookeat-wild.herokuapp.com/api/recettes`)
      .then((response) => response.data)
      .then((data) => setListeRecette(data));
  };


  useEffect(() =>{
    handleAxios();
  }, []);

  useEffect(() => {
    setFilterRecette(
      listeRecette.filter((recette) =>
        recette.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, listeRecette]);


  const handleClick = (recette) =>{
    setInfo(recette.id)
  }
  return (
    <div className='page-recettes'>
      <div className="mini-banner">
        <div> 
          <input
            className="filterbar"
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher par nom (Ginto, Wok...)"
          />
        </div>
      </div>
      <div className="div-recettes">
        <h1 className="title-h1-recette"> Toutes les recettes </h1>
        <Link  to={"/nouvellerecette"}
          className="add-recette"> Partager ma recette 
        </Link>
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
            <div /*onClick={()=>handleClick(recette)}*/ > 
                <div className="more-info"> Plus d'informations &#9660; </div>
             
               <div> 
                  <div className="time-level">
                    <p> 25 min</p>
                    <p> Facile </p>
                  </div>
                  <div className="ingredients">
                    <p className="personnes"> <strong>Ingrédients </strong>: 4 personnes </p>
                    <p className="ingredients"> {recette.ingredients}</p>
                  </div>
                </div>
               
            </div>
          </div>
        </div>))}
      </div>
    </div>
  );
};

export default Recettes;
