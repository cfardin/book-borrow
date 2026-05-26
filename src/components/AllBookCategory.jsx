import Link from 'next/link';
import React from 'react';



const AllBookCategory = () => {
    return (
    <div className='mt-10'>
      <h3 className="text-3xl font-bold m-10 mb-20 ">All Categories</h3>
      <ul className="flex flex-col gap-3 mt-4 p-2">
        {categories.map((c, i) => (
          <li 
            key = {i}
            className={`bg-base-300 p-2 text-xl font-bold rounded-md text-center`}
          >
            <Link href={`/`} className="block">{c}</Link> 
          </li>
        ))}
      </ul>
    </div>
    );
};

export default AllBookCategory;