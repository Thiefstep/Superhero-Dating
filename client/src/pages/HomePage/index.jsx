import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {
    const [hero, setHero] = useState(null);

    useEffect(() => {
    fetchHeroData();
}, []);

    const fetchHeroData = async () => {
    try {
    const response = await axios.get('http://localhost:3000/api/heroes/1');
    const heroData = response.data;
    console.log(response.data);
    setHero(heroData);
    } catch (error) {
    console.error('Error fetching hero data:', error);
    }
};

return (
    <div>
      <h1>Homepage</h1>
      {hero && (
        <div className="hero-card">
          <h3>{hero.name}</h3>
          <img src={hero.image.url} alt={hero.name} />
          <h4>Powerstats</h4>
          <ul>
            <li>Intelligence: {hero.powerstats.intelligence}</li>
            <li>Strength: {hero.powerstats.strength}</li>
            <li>Speed: {hero.powerstats.speed}</li>
            <li>Durability: {hero.powerstats.durability}</li>
            <li>Power: {hero.powerstats.power}</li>
            <li>Combat: {hero.powerstats.combat}</li>
          </ul>
          <h4>Biography</h4>
          <p>Full Name: {hero.biography['full-name']}</p>
          <p>Alter Egos: {hero.biography['alter-egos']}</p>
          <p>Aliases: {hero.biography.aliases.join(', ')}</p>
          <p>Place of Birth: {hero.biography['place-of-birth']}</p>
          <p>First Appearance: {hero.biography['first-appearance']}</p>
          <p>Publisher: {hero.biography.publisher}</p>
          <p>Alignment: {hero.biography.alignment}</p>
          <h4>Appearance</h4>
          <p>Gender: {hero.appearance.gender}</p>
          <p>Race: {hero.appearance.race}</p>
          <p>Height: {hero.appearance.height[0]}</p>
          <p>Weight: {hero.appearance.weight[0]}</p>
          <p>Eye Color: {hero.appearance['eye-color']}</p>
          <p>Hair Color: {hero.appearance['hair-color']}</p>
          <h4>Work</h4>
          <p>Occupation: {hero.work.occupation}</p>
          <p>Base: {hero.work.base}</p>
          <h4>Connections</h4>
          <p>Group Affiliation: {hero.connections['group-affiliation']}</p>
          <p>Relatives: {hero.connections.relatives}</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
