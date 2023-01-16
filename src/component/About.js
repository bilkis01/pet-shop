import React from 'react';
import AboutBack from './AboutBack';
import Featured from './Featured';
import Testimonial from './Testimonial';


const About = () => {
    return (
        <div >
          
            <AboutBack></AboutBack>
            <br /><br /><br />
            <Testimonial>
            </Testimonial>
            <br /><br /><br />
            <hr /><hr /><hr />
            <Featured></Featured>
          
        </div>
    );
};

export default About;