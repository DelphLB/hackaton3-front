import React from 'react';
import '../../style/Banner.css';

function Banner() {
    return (
        <div className="container-banner">
            <div className="box-name-projet">
                <h1 className="cook-eat">Cook eat</h1>
                <p className="slogan">
                    {' '}
                    Participez ou proposez des cours de cuisine en direct{' '}
                </p>
                <p className="slogan"> Partagez, mangez, savourez </p>
            </div>
        </div>
    );
}

export default Banner;
