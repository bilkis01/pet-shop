import React from 'react';
import './Navbar.css';

const TestimonialDetails = ({ name, client }) => {
    return (
        <div>
            
            <div class="card w-96 bg-base-100 shadow-xl ">
                <div class="card-body">
                    <div class="avatar flex flex-wrap justify-around items-center">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={client} />
                        </div>
                        <h2 class="c-title">{name}</h2>

                    </div>

                    <p className='t-p'>Lorem ipsum dolor sit amet consectetl adipisicing elit, sed do eiusmod tempo incidi ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>

                </div>
            </div>

        </div>
    );
};

export default TestimonialDetails;