import React from 'react';
import './Navbar.css';
import dogMama from './../image/dogMama.png'
import AboutTeam from './AboutTeam';
import peoplethree from './../image/peoplethree.png'
import peopletwo from './../image/peopletwo.png'
import people from './../image/people.png'
import peoplefour from './../image/peoplefour.png'

const AboutBack = () => {
    return (
        <div >
            <div className='heading bg-purple-300'>

                <h1 className='text-neutral f-bold'>About Us</h1>

            </div>
            
            <div class="hero min-h-screen bg-accent">
                <div class="hero-content flex-col px-24 lg:flex-row">
                    <img src={dogMama} class=" dogmama" />
                    <div>
                        <h4 className='text-primary tracking-wider '>BEST PRODUCT </h4>
                        <h1 class="text-5xl font-bold ">Best Pet Food</h1>
                        <p class="py-12 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate

                            Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidata non proident, sunt in culpa qui officia deserun</p>
                            <br />
                        <button class="btn btn-secondary">SHOP NOW</button>
                    </div>
                </div>
            </div>

            <div className='heading '>
                <h4 className='text-primary tracking-wider'>OUR TEAM </h4>
                <h1 className='text-neutral'>Team Member</h1>
                </div>
            

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-24 '>
            <AboutTeam img={peoplethree} name={"Dorian Cordova" } pera={"Team Member"}></AboutTeam>
            <AboutTeam img={peopletwo} name={"Ferdinand Karl" } pera={"Team Member"}></AboutTeam>
            <AboutTeam img={people} name={"Dianna Smiley" } pera={"Team Member"}></AboutTeam>
            <AboutTeam img={peoplefour} name={"Rachel Leonard" } pera={"Team Member"}></AboutTeam>
           
        </div>
          
        </div>
    );
};

export default AboutBack;