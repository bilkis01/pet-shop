
import './Navbar.css';

const ProductCard = ({ product }) => {

    const { asset, name, price } = product;

    return (

        <>

            <div class="card card-compact lg:max-w-lg bg-base-100 shadow-xl">
                <figure><img className="product-img" src={asset} alt="Shoes" /></figure>
                <div class="card-body">
                <h2 class="text-center text-primary text-xl">{name}</h2>
                    <h4>{price}</h4>
                    <div class="card-actions  justify-center">
                        <button class="btn  btn-primary">Buy Now</button>
                    </div>
                </div>

            </div>



            

        </>

    );
};

export default ProductCard;