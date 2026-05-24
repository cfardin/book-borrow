import Image from 'next/image';
import React from 'react';

const getBookById = async (id) => {
    const res = await fetch(`https://book-data-1-jecr.onrender.com/data/${id}`);
    const data = await res.json();
    return data;
}

const BookInfoById = async ({ params }) => {
    const { id } = await params;
    console.log(id);
    const { title, author, description, category, available_quantity, image_url } = await getBookById(id);

    return (
        <div className="container mx-auto my-20 flex gap-10">
            <h3 className='text-7xl'>lol</h3>
            {/* pic */}
            <div className="bg-gray-100 rounded-xl p-10 flex items-center justify-center w-80 shrink-0">
                <Image src={image_url} alt={title} width={200} height={300} className="h-72 object-contain" />
            </div>


            <div className="flex-1">
                <h1 className="text-4xl font-bold mb-2">{title}</h1>
                <p className=" mb-4">By : {author}</p>
                <hr className="mb-4" />

                <p className="font-bold mb-4">{category}</p>
                <hr className="mb-4" />

                <p className=" mb-4"><span className="font-semibold">Description : </span>{description}</p>
                <hr className="mb-4" />

                <div className="flex gap-4 mb-6">
                    <p className="">Available Copies:</p>
                    <p className="font-bold">{available_quantity}</p>
                </div>
                <hr className="mb-6" />

                <button className="btn btn-neutral mr-4">Borrow This Book</button>
            </div>
        </div>
    );
};

export default BookInfoById;