import React from 'react';
import './Navbar.css';

const BlogCard = ({img, admin}) => {
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-3 pt-3">
                    <img src={img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <p class="card-title">{admin}</p>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions">
                        <button class="btn btn-secondary">Read More</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BlogCard;