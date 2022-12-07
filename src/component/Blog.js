import React from 'react';
import BlogCard from './BlogCard';
import './Navbar.css';
import womentwo from './../image/womentwo.jpg'
import women from './../image/women.jpg'
import womenthree from './../image/womenthree.jpg'

const Blog = () => {
    return (
        <div className='py-14'>
             <p className='text-primary text-center  tracking-wider'>NEW & LATEST</p>
            <p className=' text-center tracking-wider text-5xl'>Latest Blog</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-24 py-14 '>
                <BlogCard img={womentwo} admin="By: Admin Sep 24,2022"></BlogCard>
                <BlogCard img={women} admin="By: Admin Sep 24,2022"></BlogCard>
                <BlogCard img={womenthree} admin="By: Admin Sep 24,2022"></BlogCard>
            </div>

        </div>
    );
};

export default Blog;