import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BookCard = ({b}) => {
  return (
    <div className="card bg-base-100 shadow-md ">
      <figure>
        <Image src={b.image_url} alt={b.title} width={300} height={350} className="rounded-lg mt-2.5"></Image>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{b.title}</h2>
        <p className="text-sm text-gray-500">{b.author}</p>
        <span className="badge badge-outline">{b.category}</span>
        <p className="text-sm line-clamp-2">{b.description}</p>
        <p className="text-green-600 font-semibold">{b.available_quantity} available</p>
        <div className="card-actions">
          <Link href={`/all-books/${b.id}`} className="btn btn-neutral w-full">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;