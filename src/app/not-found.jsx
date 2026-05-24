import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black">404</h1>
        
        {/* <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-4">
          Uh-oh!
        </p> */}

        <p className="mt-4 text-gray-500">
          We can not find that page. Check the URL or head back home.
        </p>

        <Link
          href="/"
          className="btn bg-black text-white my-4"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;