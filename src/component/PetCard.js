import React from 'react';
import './Navbar.css';

const PetCard = ({ img , pet}) => {
    return (
      
          <div>
            
            <div class="card card-img border-dashed border-2 border-primary">

                <img class="" src={img} alt="" />

            </div>
              <div className="card-body">
              {pet}

          </div>
       
          </div>

    );
};

export default PetCard;