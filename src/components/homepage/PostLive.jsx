import React, { useState, useEffect } from "react";
import "../../style/PostLive.css";
import axios from "axios";
import moment from "moment";

// import moment from 'moment';

import "moment/locale/fr";

moment.locale("fr");

function PostLive() {
  const [input, setInput] = useState({});

  const handleClick = async () => {
    await axios.post(`https://cookeat-wild.herokuapp.com/api/recettes`, {
      ...input,
    });
    await window.location.reload();
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  return (
    <div className='Prog'>
      <div className='BlocInput'>
        <h1>Programmer mon live </h1>

        <div className='PostLive'>
          <input
            type='Name'
            id='name'
            name='Name'
            className='inputname'
            placeholder='Nom de la recette'
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='PostLive'>
          <input
            type='Category'
            id='category'
            name='Name'
            className='inputname'
            placeholder='Catégorie'
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='PostLive'>
          <input
            type='text'
            id='image'
            name='Image'
            className='inputname'
            placeholder='Lien de la photo'
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='PostLive'>
          <input
            type='ingrédients'
            id='ingredients'
            name='Image'
            className='inputname'
            placeholder='Ingrédients nécessaires'
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='PostLive'>
          <input
            type='ustensiles'
            id='tools'
            name='Ustensiles'
            className='inputname'
            placeholder='Ustensiles nécessaires'
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className='PostLive'>
          <input
            type='text'
            id='chef'
            name='Chef'
            className='inputname'
            placeholder='Votre nom'
            onChange={(e) => handleChange(e)}
          />
        </div>
        <input
          type='date'
          id='date'
          name='Ustensiles'
          className='inputname'
          placeholder='Ustensiles nécessaires'
          onChange={(e) => handleChange(e)}
        />
        <input
          type='text'
          id='time'
          name='Ustensiles'
          className='inputname'
          placeholder='heure'
          onChange={(e) => handleChange(e)}
        />

        <input
          type='text'
          id='level'
          name='level'
          className='inputname'
          placeholder='niveau (facile, moyen, difficile)'
          onChange={(e) => handleChange(e)}
        />

        <input
          type='text'
          id='people'
          name='people'
          className='inputname'
          placeholder='Nombre de personnes'
          onChange={(e) => handleChange(e)}
        />

        <input
          type='text'
          id='preparationtime'
          name='preparationtime'
          className='inputname'
          placeholder='Temps de préparation'
          onChange={(e) => handleChange(e)}
        />

      </div>
      <button
        className='boutonPost'
        type='submit'
        onClick={() => handleClick()}>
        Programmer !
      </button>
    </div>
  );
}

export default PostLive;
