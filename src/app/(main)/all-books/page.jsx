// "use client";
// import { useEffect, useState } from "react";
// import BookCard from "@/components/ui/BookCard";
// import getBooks from "@/lib/getBooks";
// import { IoSearch } from "react-icons/io5";
// import AllBookCategory from "@/components/AllBookCategory";
// import Link from "next/link";

// const categories = [
//     "All",
//     "Novel",
//     "Story",
//     "Horror",
//     "Non-Fiction"
// ]

// const AllBooksPage = () => {
//   const [books, setBooks] = useState([]);
//   const [filteredBooks, setFilteredBooks] = useState([]);
//   const [query, setQuery] = useState("");

//   const [selectCat, setSelectCat] = useState("All");

//   useEffect(() => {
//     async function loadBooks() {
//       const data = await getBooks();
//       setBooks(data);
//       setFilteredBooks(data);
//     }

//     loadBooks();
//   }, []);

//   const handleSearch = (e) => {
//     const value = e.target.value;

//     setQuery(value);

//     const filtered = books.filter((book) =>
//       book.title.toLowerCase().includes(value.toLowerCase()),
//     );

//     setFilteredBooks(filtered);
//   };

//    const filteredBooks = books.filter((book) => {
//       const matchesSearch = book.title.toLowerCase().includes(query.toLowerCase());
//       const matchesCategory = selectedCategory === "All" || book.category === selectedCategory; 
//       return matchesSearch && matchesCategory;
//    });


  

//   return (
//     <div className="grid grid-cols-12 gap-2 container mx-auto my-20">
//       <div className="col-span-3">
//         {/* <AllBookCategory ></AllBookCategory> */}
//          <div className='mt-10'>
//       <h3 className="text-3xl font-bold m-10 mb-20 ">All Categories</h3>
//       <ul className="flex flex-col gap-3 mt-4 p-2">
//         {categories.map((c, i) => (
//           <li 
//             key = {i}
//             className={`${selectCategory === c ? "bg-neutral text-white" : "bg-base-300"} p-2 text-xl font-bold rounded-md text-center`}
//           >
//             <Link href={`/`} className="block">{c}</Link> 
//           </li>
//         ))}
//       </ul>
//     </div>
//       </div>
      
//       <div className="col-span-9">
//         <div className="flex justify-between items-center mb-8">
//           <h3 className="text-3xl font-bold my-10">All Books</h3>

//           <form className="flex items-center gap-3">
//             <IoSearch className="text-3xl" />

//             <input
//               type="text"
//               placeholder="Search books..."
//               className="border p-4 rounded-lg w-100 h-full"
//               value={query}
//               onChange={handleSearch}
//             />
//           </form>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {filteredBooks.map((b) => (
//             <BookCard key={b.id} b={b} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllBooksPage;






"use client";

import { useEffect, useState } from "react";
import BookCard from "@/components/ui/BookCard";
import getBooks from "@/lib/getBooks";
import { IoSearch } from "react-icons/io5";

const categories = [
  "All",
  "Novel",
  "Story",
  "Horror",
  "Non-Fiction",
];

const AllBooksPage = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    async function loadBooks() {
      const data = await getBooks();

      console.log(data);

      setBooks(data);
    }

    loadBooks();
  }, []);

  const filteredBooks = books.filter((book) => {
    const matchesSearch = book.title
      .toLowerCase()
      .includes(query.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      book.category?.toLowerCase() ===
        selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="grid grid-cols-12 gap-2 container mx-auto my-20">
      
      <div className="col-span-3">
        <div className="mt-10">
          <h3 className="text-3xl font-bold m-10 mb-20">
            All Categories
          </h3>

          <ul className="flex flex-col gap-3 mt-4 p-2">
            {categories.map((c, i) => (
              <li
                key={i}
                onClick={() => setSelectedCategory(c)}
                className={`cursor-pointer p-2 text-xl font-bold rounded-md text-center transition-all ${
                  selectedCategory === c
                    ? "bg-neutral text-white"
                    : "bg-base-300"
                }`}
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="col-span-9">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-3xl font-bold my-10">
            All Books
          </h3>

          <form className="flex items-center gap-3">
            <IoSearch className="text-3xl" />

            <input
              type="text"
              placeholder="Search books..."
              className="border p-4 rounded-lg w-100 h-full"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.map((b) => (
            <BookCard key={b.id} b={b} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBooksPage;
