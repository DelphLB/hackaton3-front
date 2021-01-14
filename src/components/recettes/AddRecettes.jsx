import React, {useState} from "react";
import "../../style/AddRecettes.css";

import axios from "axios";
import { Link } from "react-router-dom";


const AddRecettes = () =>{
    const [userRecette, setUserRecette] = useState({});

    const handleClick = () =>{
        axios
        .post(`https://cookeat-wild.herokuapp.com/api/recettes`,
        {...userRecette},
        )
    }


    const handleChange = (e) => {
        setUserRecette({ ...userRecette, [e.target.id]: e.target.value });
      };


    return(
        <div className='page-recettes'>
        <div className="mini-banner2">
          <div> 
            <p className="partage"> Partage ta recette </p>
          </div>
        </div>
        <div className="post-recette">
            <input
                className="chef"
                type="text"
                name="chef"
                id="chef"
                placeholder="Votre prénom"
                onChange={(e) => handleChange(e)}
            />
            <input 
                className="name-recette"
                type="text"
                name="name"
                id="name"
                placeholder="Nom de votre recette"
                onChange={(e) => handleChange(e)}
            />
            <input 
                className="category"
                type="text"
                name="category"
                id="category"
                placeholder="catégorie"
                onChange={(e) => handleChange(e)}
            />
            <input
                className="time"
                type="text"
                name="time"
                id="time"
                placeholder= "temps de la recette"
                onChange={(e) => handleChange(e)}
            />
            <input 
                className="image"
                type="text"
                name="image"
                id="image"
                placeholder= "poster la photo de votre recette"
                onChange={(e) => handleChange(e)}
            />

            <input
                className="ingredients"
                type="text"
                name="ingredients"
                id="ingredients"
                placeholder= "Les ingrédients nécessaires"
                onChange={(e) => handleChange(e)}
            />
            <input 
                className="tools"
                type="text"
                name="tools"
                id="tools"
                placeholder= "ustensiles nécessaires"
                onChange={(e) => handleChange(e)}
            />
        </div>
        <div>
            <Link to="/recettes" onClick={handleClick} >
             Envoyer ! 
            </Link>
        </div>
      </div>
    )
}

export default AddRecettes;