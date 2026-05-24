import getBooks from '@/lib/getBooks';
import Link from 'next/link';
import React from 'react';
import Marquee from 'react-fast-marquee';


// const colors = ["bg-blue-500", "bg-purple-500", "bg-green-500", "bg-rose-500", "bg-amber-500", "bg-teal-500"];

const Category = async() => {
    const books= await getBooks();

    const cat = new Set(books.map(b => b.category));

    return (
        <div className='container mx-auto space-y-5 my-20'>
            <h3 className='text-3xl font-bold'>Explore Your Favorite Categories</h3>
            <div>
                <Marquee direction='right' pauseOnHover = "true">
                    {
                        [...cat].map(c => (
                            <Link key={c} href={"/all-books"}>
                                <div  className="bg-amber-100 mx-4 px-50 py-10 rounded-lg cursor-pointer">
                                    <p className="text-xl font-bold">{c}</p>
                                </div>
                            </Link>
                            
                        ))
                    }
                </Marquee>
            </div>
            
        </div>
    );
};

export default Category;