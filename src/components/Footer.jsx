import Link from "next/link";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-amber-100 mt-40 px-10 py-30">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8 w-9/12 mx-auto">
        
        <div>
          <h4 className="font-bold text-lg mb-3"><GiBookshelf/>Book-Borrow</h4>
          <p className="text-gray-500 text-sm">A modern digital library and book borrowing service for curious minds.</p>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-3">Navigate</h4>
          <ul className="text-gray-500 text-sm space-y-2">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/all-books">All Books</Link></li>
            <li><Link href="/profile">My Profile</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-3">Contact Us</h4>
          <ul className="text-gray-500 text-sm space-y-2">
            <li className="flex items-center gap-1"><MdEmail /> bookborrow@gmail.com</li>
            <li className="flex items-center gap-1"><FaInstagram /> @bookBorrow</li>
            <li className="flex items-center gap-1"><FaFacebookSquare /> @bookBorrow</li>
          </ul>
        </div>


      </div>


      <div className="border-t pt-6 text-center text-gray-400 text-sm">
        © 2025 LibraFlow. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;