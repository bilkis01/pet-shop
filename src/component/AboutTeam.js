import React from 'react';

const AboutTeam = ({img,name,pera}) => {
    return (
        <div>
            
            <div class=" w-96 bg-base-100 ">
                <figure><img src={img} alt="Shoes" /></figure>
                <div>
                    <h2 class="text-xl pt-5 font-semibold ">{name}</h2>
                    <p class="">{pera}</p>
                   
                </div>
            </div>

        </div>
    );
};

export default AboutTeam;