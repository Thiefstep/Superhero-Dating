import React from 'react';
import { Link } from 'react-router-dom';

const linkStyle = {
    color: '#875053'
};

const HeroCard = ({ id, name, powerstats, biography, appearance, work, connections, image }) => {
    return (
    <div className="hero-card">
        <h3><Link to={`/heroes/${id}`} style={linkStyle}>{name}</Link></h3>
        <img src={image.url} alt={name} />
        <p>Intelligence: {powerstats.intelligence}</p>
        <p>Strength: {powerstats.strength}</p>
        <p>Speed: {powerstats.speed}</p>
        <p>Durability: {powerstats.durability}</p>
        <p>Power: {powerstats.power}</p>
        <p>Combat: {powerstats.combat}</p>
        <p>Full Name: {biography['full-name']}</p>
        <p>Alter Egos: {biography['alter-egos']}</p>
        <p>Aliases: {biography.aliases.join(', ')}</p>
        <p>Place of Birth: {biography['place-of-birth']}</p>
        <p>First Appearance: {biography['first-appearance']}</p>
        <p>Publisher: {biography.publisher}</p>
        <p>Alignment: {biography.alignment}</p>
        <p>Gender: {appearance.gender}</p>
        <p>Race: {appearance.race}</p>
        <p>Height: {appearance.height.join(', ')}</p>
        <p>Weight: {appearance.weight.join(', ')}</p>
        <p>Eye Color: {appearance['eye-color']}</p>
        <p>Hair Color: {appearance['hair-color']}</p>
        <p>Occupation: {work.occupation}</p>
        <p>Base: {work.base}</p>
        <p>Group Affiliation: {connections['group-affiliation']}</p>
        <p>Relatives: {connections.relatives}</p>
    </div>
);
};

export default HeroCard;
