import React, { useState } from "react";
import "../../style/AddRecettes.css";

import axios from "axios";
import { Link } from "react-router-dom";
import { BiSmile } from "react-icons/bi";

const AddRecettes = () => {
  const [userRecette, setUserRecette] = useState({});

  const handleClick = async () => {
    await axios.post(`https://cookeat-wild.herokuapp.com/api/recettes`, {
      ...userRecette,
    });
    await window.location.reload();
  };

  const handleChange = (e) => {
    setUserRecette({ ...userRecette, [e.target.id]: e.target.value });
  };

  return (
    <div className='page-recettes'>
      <div className='mini-banner2'>
        <div>
          <p className='partage'> Partage ta recette </p>
        </div>
      </div>
      <div className='post-recette'>
        <input
          className='chef'
          type='text'
          name='chef'
          id='chef'
          placeholder='Votre prénom'
          onChange={(e) => handleChange(e)}
        />
        <input
          className='name-recette'
          type='text'
          name='name'
          id='name'
          placeholder='Nom de votre recette'
          onChange={(e) => handleChange(e)}
        />
        <input
          className='category'
          type='text'
          name='category'
          id='category'
          placeholder='Catégorie'
          onChange={(e) => handleChange(e)}
        />
        <input
          className='time'
          type='text'
          name='time'
          id='time'
          placeholder='Temps de la recette'
          onChange={(e) => handleChange(e)}
        />
        <input
          className='image'
          type='text'
          name='image'
          id='image'
          placeholder='Poster la photo de votre recette'
          onChange={(e) => handleChange(e)}
        />

        <input
          className='ingredients'
          type='text'
          name='ingredients'
          id='ingredients'
          placeholder='Les ingrédients nécessaires'
          onChange={(e) => handleChange(e)}
        />
        <input
          className='tools'
          type='text'
          name='tools'
          id='tools'
          placeholder='Ustensiles nécessaires'
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className='boutton-link'>
        <button onClick={() => handleClick()} className='envoyer'>
          Envoyer ma recette ! <BiSmile />
        </button>
      </div>
    </div>
  );
};

export default AddRecettes;
