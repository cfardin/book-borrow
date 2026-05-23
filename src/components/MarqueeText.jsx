import React from "react";
import Marquee from "react-fast-marquee";
import bookData from '@/data/books.json';


const MarqueeText = () => {
  return (
    <div className="flex gap-2 container mx-auto my-5">
      <button className="btn bg-amber-200">New Arrivals</button>
      <Marquee>
        {
          bookData.map(b => <span key={b.id} className="mx-6">{b.title} </span>)
        }
      </Marquee>
    </div>
  );
};

export default MarqueeText;
