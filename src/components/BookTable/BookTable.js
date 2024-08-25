import { useState } from 'react';
import AddToCartForm from '../../components/Cart/AddToCartForm';

export default function BookTable() {
  const [selectedBook, setSelectedBook] = useState(null);

  const books = [
    { id: 1, title: 'Rich Dad, Poor Dad', author: 'Robert Kiyosaki', description: 'Finance book', genre: 'Non-Fiction', date: '2024-01-01' },
    // Add more books as needed
  ];

  return (
    <div className="flex flex-col">
      <table className="min-w-full border-collapse block md:table">
        <thead>
          <tr className="border border-gray-200 bg-gray-100 text-left font-bold">
            <th className="p-2">Title</th>
            <th className="p-2">Author</th>
            <th className="p-2">Description</th>
            <th className="p-2">Genre</th>
            <th className="p-2">Date</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.id} className="border-t border-gray-200">
              <td className="p-2">{book.title}</td>
              <td className="p-2">{book.author}</td>
              <td className="p-2">{book.description}</td>
              <td className="p-2">{book.genre}</td>
              <td className="p-2">{book.date}</td>
              <td className="p-2">
                <button
                  className="bg-gray-200 rounded px-4 py-1"
                  onClick={() => setSelectedBook(book)}
                >
                  Add to cart
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedBook && <AddToCartForm book={selectedBook} onClose={() => setSelectedBook(null)} />}
    </div>
  );
}
