import Link from 'next/link';
import React from 'react';

const categories = [
    "All",
    "Novel",
    "Story",
    "Horror",
    "Non-Fiction"
]

const page = () => {
    return (
        <div>
      <h3 className="text-lg font-bold">All Categories</h3>
      <ul className="flex flex-col gap-3 mt-4 p-2">
        {categories.map((c) => (
          <li
            className={`${activeId === c.category_id && "bg-gray-500 text-white"} p-2 text-xl font-bold rounded-md text-center`}
            key={c.category_id}
          >
            <Link href={`/`} className="block">{c.category_name}</Link> 
          </li>
        ))}
      </ul>
    </div>
    );
};

export default page;