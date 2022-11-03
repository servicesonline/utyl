import React from 'react';

const Card = ({country}) => {
    return (
        <div className="card">
            <div className="imgBx">
            <img src={country.flags.svg} alt={"drapeau "+country.translations.fra.cammon} />
            </div>
            <div className="details">
                <h2>{country.translations.fra.common}<br /><span>{"Pop: "+ country.population.toLocaleString()}</span></h2>
            </div>
        </div>
    );
};

export default Card;