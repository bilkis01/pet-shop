import React from 'react';
import PetCard from './PetCard';
import cat from './../image/cat.png'
import fish from './../image/fish.png'
import bird from './../image/bird.png'
import dog from './../image/dog.png'
import khorgosh from './../image/khorgosh.png'
import './Navbar.css';

const Pet = () => {
    return (
        
       <div>
            <div className='heading bg-accent'>
                <h4 className='text-primary font-bold'>TRENDING CATEGORIES </h4>
                <h1 className='text-neutral'>Shop By Category</h1>

            </div>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 px-24 bg-accent'>
            <PetCard img={cat} pet="Cats"></PetCard>
            <PetCard img={fish} pet="Gold-Fish"></PetCard>
            <PetCard img={bird} pet="Birds"></PetCard>
            <PetCard img={dog} pet="Dogs"></PetCard>
            <PetCard img={khorgosh} pet="Rabbits"></PetCard>
        </div>
       </div>
    );
};

export default Pet;