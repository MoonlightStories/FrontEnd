import { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from '../components/Bookcard';

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true); // To track loading state
  const [error, setError] = useState(null);     // To handle errors

  useEffect(() => {
    axios.get('/api/books')
      .then(response => {
        setBooks(response.data);
        setLoading(false); // Set loading to false once data is loaded
      })
      .catch(err => {
        console.error('Error fetching books:', err);
        setError('Failed to fetch books. Please try again later.');
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>WELCOME! to MoonLight Stories</h1>

      {/* Display loading message */}
      {loading && <p>Loading books...</p>}

      {/* Display error message if there is an error */}
      {error && <p>{error}</p>}

      {/* Display books if available */}
      {!loading && !error && books.length > 0 && (
        <div className="book-list">
          {books.map(book => <BookCard key={book.id} book={book} />)}
        </div>
      )}

      {/* Display message if no books are available */}
      {!loading && !error && books.length === 0 && <p>No books available.</p>}
    </div>
  );
};

export default HomePage;
