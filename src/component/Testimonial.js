import React from 'react';
import TestimonialDetails from './TestimonialDetails';
import clienttwo from './../image/clienttwo.jpg'
import client from './../image/client.jpg'
import clientthree from './../image/clientthree.jpg'

const Testimonial = () => {
    return (
        <div>
            <div className='heading '>
                <h4 className='text-primary tracking-wider'>TESTIMONIAL</h4>
                <h1 className='text-neutral'>What Client Says</h1>
            </div>
            <div className='bg-accent py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  px-24'>
                <TestimonialDetails name={'DIANNA SMILEY'} client={clientthree}></TestimonialDetails>
                <TestimonialDetails name={'DORIAN CORDOVA'} client={client}></TestimonialDetails>
                <TestimonialDetails name={'JAREN HAMMER'} client={clienttwo}></TestimonialDetails>
            </div>
        </div>

    );
};

export default Testimonial;