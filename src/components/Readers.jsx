import React from 'react';


const reviews = [
  { name: "Fahiyan Shah Chad", role: "Book Enthusiast", text: "Book-Borrow has transformed how I discover books. The selection is amazing!" },
  { name: "Sabahat", role: "Regular Reader", text: "I love the easy borrowing system. Makes reading affordable and accessible." },
  { name: "Mamun", role: "Avid Reader", text: "Finally found a platform that understands what readers really want." },
];

const Readers = () => {
  return (
    <div className="container mx-auto my-20">
      <h2 className="text-3xl font-bold">What Our Readers Say</h2>
      <p className="text-gray-500 mt-2 mb-8">Join thousands of book lovers who have discovered their next favorite read.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <div key={r.name} className="border rounded-xl p-6">
            <p className="text-yellow-400 text-xl mb-3">★★★★★</p>
            <p className="italic text-gray-700 mb-4">{r.text}</p>
            <p className="font-bold">{r.name}</p>
            <p className="text-gray-500 text-sm">{r.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Readers;