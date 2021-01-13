import React from "react";
import "../../style/Prog.css";

const Prog = () => {
  return (
    <div className='Prog'>
      <h1> Prochains live</h1>
      <div className='ProgBloc'>
        <div className='DescriptionProg'>
          <img
            src='https://tse2.mm.bing.net/th?id=OIP.3sNUdDXVIteUNY6I6GYCugHaHa&pid=Api'
            alt='gateau'
            className='ImageLive'
          />
          <h2>Baba Le Chef</h2>
          <h3>patisserie</h3>
          <p>on va faire un gateau</p>
        </div>
      </div>
    </div>
  );
};

export default Prog;
