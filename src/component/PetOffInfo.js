import React from 'react';
import './Navbar.css';

const PetOffInfo = ({img,offer}) => {
    return (
        <div>
            <div class="card py-12 card-side shadow-2xl">
                <figure><img src={img} className='px-12 ' alt="Movie" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{offer}</h2>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetOffInfo;