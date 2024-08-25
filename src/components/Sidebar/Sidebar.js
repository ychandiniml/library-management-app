// components/Sidebar.js
import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="flex flex-col bg-yellow-100 w-64 p-4">
      <h2 className="text-xl font-bold mb-4">Welcome Siva</h2>
      <Link href="/"
        className="mb-2 p-2 bg-gray-200 rounded hover:bg-gray-300">Home
      </Link>
      <Link href="/search"
         className="mb-2 p-2 bg-purple-200 rounded hover:bg-purple-300">Search
      </Link>
      <Link href="/cart"
        className="mb-2 p-2 bg-gray-200 rounded hover:bg-gray-300">Cart
      </Link>
      <button className="mt-auto p-2 bg-red-500 text-white rounded hover:bg-red-600">Logout</button>
    </div>
  );
}
