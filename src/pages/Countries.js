import React from 'react';
import { useEffect, useState } from 'react';
import Card from '../components/Card';
import '../styles/countries.css';

const Countries = () => {
    const [data, setData] = useState([]);
    const [rangeValue, setRangeValue] = useState(12);
    const [continentValue, setContinentValue] = useState("");
    const continents = ["Africa", "America", "Asia", "Europe", "Oceania"];
    
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((res) => res.json())
            .then((data) => setData(data)
        )
    }, []);

    return (
        <div className='countries'>
            <ul className="radio-container">
                <input type="range" min="1" max="250" defaultValue={rangeValue} 
                    onChange={(e) => setRangeValue(e.target.value)}
                />
                {
                    continents.map((continent, index) => (
                        <li key={index}>
                            <input type="radio" name="continent" id={continent} onChange={(e) => setContinentValue(e.target.id)} checked={continent === continentValue}/>
                            <label htmlFor={continent}>{continent}</label>
                        </li>
                    ))
                }
            </ul>
            
            {
                continentValue && (<button onClick={() => setContinentValue("")} className="cancel-selection">Annuler la selection</button>)
            }
            
            <div className="box cards">
                {
                    data.filter((country) => country.continents[0].includes(continentValue))
                        .sort((a, b) => b.population - a.population)
                        .slice(0, rangeValue)
                        .map((country, index) => 
                        <Card  key={index} country={country} />)
                }
            </div>
        </div>
    );
};

export default Countries;