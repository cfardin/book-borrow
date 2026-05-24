
import getBooks from '@/lib/getBooks';
import BookCard from './ui/BookCard';


const FeatureBooks = async() => {
    // const res = await fetch("https://book-data-1-jecr.onrender.com/data");
    // const data = await res.json();
    // const books = data.slice(0, 4);

    const books = await getBooks();

    return (
        <div className='md:container mx-auto my-50 space-y-5'>
            <div>
                <h3 className='text-3xl font-bold'>Feature Books</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                {
                    books.slice(0, 4).map(b => <BookCard key={b.id} b={b}></BookCard>)
                }
            </div>
        </div>
       
    );
};

export default FeatureBooks;