import React from 'react';

const PetDeal = ({img , head, price,text}) => {
    return (
        <div>
            <div class="card card-side  shadow-xl">
                <figure><img src={img} className="" alt="Movie" /></figure>
                <div class="card-body bg-base-200">
                    <h2 class="text-primary">{head}</h2>
                    <p>{price}</p>
                    <p className='text-black font-normal text-xl'>{text}</p>
                   
                </div>
            </div>
        </div>
    );
};

export default PetDeal;