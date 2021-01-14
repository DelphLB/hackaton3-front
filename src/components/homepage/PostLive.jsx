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
    axios.post(`https://cookeat-wild.herokuapp.com/api/recettes`, {
      ...input,
    });
  };
  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  return (
    <div
      className='PostLiveBloc'
      style={{
        marginBottom: "60px",
        height: "100px",
      }}>
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
          type='user'
          id='chef'
          name='Chef'
          className='inputname'
          placeholder='Votre nom'
          onChange={(e) => handleChange(e)}
        />
      </div>
      <button
        className='petitboutton'
        type='submit'
        onClick={() => handleClick()}>
        Enregistrer les modifications
      </button>
    </div>
  );
}

export default PostLive;
