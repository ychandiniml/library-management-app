// components/AddToCartForm.js
import { useState } from 'react';

export default function AddToCartForm({ book, onClose }) {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Added to cart:', { book, fromDate, toDate });
    onClose(); // Close the form after adding to cart
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 p-4 border rounded">
      <h3 className="text-lg font-semibold mb-2">title : {book.title}</h3>
      <input
        type="date"
        value={fromDate}
        onChange={(e) => setFromDate(e.target.value)}
        placeholder="FROM (MM/DD/YYYY)"
        className="block mb-2 p-2 border rounded"
      />
      <input
        type="date"
        value={toDate}
        onChange={(e) => setToDate(e.target.value)}
        placeholder="TO (MM/DD/YYYY)"
        className="block mb-4 p-2 border rounded"
      />
      <button type="submit" className="bg-purple-500 text-white p-2 rounded">Add</button>
    </form>
  );
}
