
import { Link } from 'react-router-dom';
import './Navbar.css';

const ProductCard = ({ product }) => {

    const {_id, asset, name, price } = product;

    return (

        <>

            <div class="card card-compact lg:max-w-lg bg-base-100 shadow-xl">
                <figure><img className="product-img" src={asset} alt="img" /></figure>
                <div class="card-body">
                <h2 class="text-center text-primary text-xl">{name}</h2>
                    <h4>{price}</h4>
                    <div class="card-actions  justify-center">
                    <Link className='btn bg-primary text-white' to={`/productdetails/${_id}`}>PURCHASE</Link>
                    </div>
                </div>

            </div>



            

        </>

    );
};

export default ProductCard;