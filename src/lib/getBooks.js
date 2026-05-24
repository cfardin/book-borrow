

// api for getting books 
const getBooks = async () => {
  const res = await fetch("https://book-data-1-jecr.onrender.com/data");
  const data = await res.json();
  return data;
};

export default getBooks;


// const getBookById = async (id) => {
//     const res = await fetch(`https://book-data-1-jecr.onrender.com/data/${id}`);
//     const data = await res.json();
//     return data;
// }

// export default getBookById;