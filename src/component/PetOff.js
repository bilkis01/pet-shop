import React from 'react';
import PetOffInfo from './PetOffInfo';
import pet from './../image/pet.png';
import cats from './../image/cats.png';
import './Navbar.css';

const PetOff = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 px-12  py-14 gap-5 '>
            <PetOffInfo  img={pet} offer="50% offer Dog food" ></PetOffInfo>
            <PetOffInfo img={cats}  offer="50% offer Cat food"></PetOffInfo>
        </div>
    );
};

export default PetOff;