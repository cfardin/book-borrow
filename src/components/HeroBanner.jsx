import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <div className="md:container mx-auto my-10">
      <div className="bg-base-200 h-138.5 rounded-4xl p-30 flex items-center justify-center">
        <div className="hero-content flex-col lg:flex-row-reverse justify-center items-center">
          <Image src="https://contentful.harrypotter.com/usf1vwtuqyxm/2DCs73x6P8seNobQ9zBSbO/1a5dfd6ed5fc0ed9545370470fc3d74c/English_Harry_Potter_1_Epub_9781781100219.jpg?q=75&fm=webp&w=914"
          alt="book image" width={300} height={150} className="rounded-lg max-w-sm"></Image>
          <div>
            <h1 className="text-5xl font-bold">Find Your Next Read</h1>
    
            <Link href={"/all-books"} className="btn bg-amber-200 mt-6 text-2xl font-bold p-6"> Browse Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;