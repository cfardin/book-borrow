"use client";
import { useEffect, useState } from "react";
import BookCard from "@/components/ui/BookCard";
import getBooks from "@/lib/getBooks";
import { IoSearch } from "react-icons/io5";

const AllBooksPage = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function loadBooks() {
      const data = await getBooks();
      setBooks(data);
      setFilteredBooks(data);
    }

    loadBooks();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;

    setQuery(value);

    const filtered = books.filter((book) =>
      book.title.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredBooks(filtered);
  };

  return (
    <div className="container mx-auto my-20">
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
            onChange={handleSearch}
          />
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredBooks.map((b) => (
          <BookCard key={b.id} b={b} />
        ))}
      </div>
    </div>
  );
};

export default AllBooksPage;