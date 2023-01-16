import React from 'react';
import './Navbar.css';

const FeaturedCard = ({img,text,pera}) => {
    return (
        <div>
            <div class="card card-side bg-base-100 flex flex-wrap justify-around items-center">
                <figure><img src={img} alt="Movie" className='f-img' /></figure>
                <div class="">
                    <h2 class="text-2xl font-medium">{text}</h2>
                  <p> {pera} </p>
                    
                </div>
            </div>

        </div>
    );
};

export default FeaturedCard;