import React from 'react';
import PetDeal from './PetDeal';
import foodfoure from './../image/foodfoure.png'
import foodthree from './../image/foodthree.png'

const Deal = () => {
    return (

        <div className='py-36 text-center  bg-accent'>
 <p className='text-primary font-bold text-xl tracking-wider'>Trending Product</p>
            <p className='text-neutral font-bold text-5xl'>Deal Of The Day</p>

            <div className='grid grid-cols-1 lg:grid-cols-2 px-12  py-14 gap-5 '>
                <PetDeal img={foodfoure} head="Joutes Douffle Bag" price="$20.19" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. "></PetDeal>
                <PetDeal img={foodthree} head="Wayfarer Messenger Bag" price="$40.19" text="Lorem ipsum dolor sit amet consectetur adipisicing elit."></PetDeal>
           </div>

        </div>
       
    );
};

export default Deal;