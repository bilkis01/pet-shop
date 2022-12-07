import React from 'react';
import './Navbar.css';

const Footer = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-24 py-6 footer'>
            <div className='about py-20'>
                <h2 className='text-white text-3xl '>About Us</h2>
                <br />
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur facilis cupiditate voluptas necessitatibus doloribus qui.</p>
            </div>
            <div className='information py-20 '>
                <h2 className='text-white text-3xl '>Information</h2>
                <br />
                <ul>
                    <li className='text-white'>About Us</li>

                    <li className='text-white'>Delivery Information</li>
                    <li className='text-white'>Privacy Policy</li>
                    <li className='text-white'>Terms & Condition</li>
                    <li className='text-white'>Contact Us</li>
                    <li className='text-white'>Login Info</li>

                </ul>
            </div>
            <div className='policy py-20'>
                <h2 className='text-white text-3xl '>Our Policy</h2>
                <br />
                <ul>
                    <li className='text-white'>Gallery</li>
                    <li className='text-white'>Brands</li>
                    <li className='text-white'>Gift</li>
                    <li className='text-white'>Specials</li>
                    <li className='text-white'>My Account Us</li>
                    <li className='text-white'>About Us</li>

                </ul>
            </div>
            <div className='contact py-20'>
                <h2 className='text-white text-3xl '>Contact Info :</h2>
                <p className='text-white'>If you have any question.please contact us at <span className='text-yellow-300'>bilkiscse@gmail.com</span></p>
                <p className='text-white'>Your address goes here.
                    123, Address.</p>
                <p className='text-yellow-300'>Have any Question
                    <span className='text-white'>+0 123 456 789</span></p>
            </div>
       

        </div>
        <p className='bg-neutral text-white text-center'>© 2022 Tuime. Made with  &#128151; by Maheabilkis.</p>
        </div>
    );
};

export default Footer;