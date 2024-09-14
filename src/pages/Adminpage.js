import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import Footer from '../components/Footer';

const AdminPage = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: '', author: '', price: '' });

  // Fetch books when the component mounts
  useEffect(() => {
    axios.get('/api/admin/books')
      .then(response => setBooks(response.data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  // Handle adding a new book
  const handleAddBook = () => {
    axios.post('/api/admin/add-book', newBook)
      .then(response => setBooks([...books, response.data]))
      .catch(error => console.error('Error adding book:', error));
  };

  // Handle removing a book
  const handleRemoveBook = (id) => {
    axios.delete(`/api/admin/remove-book/${id}`)  // Corrected backticks
      .then(() => setBooks(books.filter(book => book.id !== id)))
      .catch(error => console.error('Error removing book:', error));
  };

  // Handle updating a book
  const handleUpdateBook = (id) => {
    axios.put(`/api/admin/update-book/${id}`, newBook)  // Corrected backticks
      .then(response => setBooks(books.map(book => book.id === id ? response.data : book)))
      .catch(error => console.error('Error updating book:', error));
  };

  return (
    <div>
      <h1 className='mb-5'> -Welcome Admin- </h1>
      
      <div className='container mt-5'>
        <h2 className='mb-4'>Add New Book</h2>

        {/* Form for adding new book */}
        <Form>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Title"
              value={newBook.title}
              onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
            />
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="text"
              placeholder="Author"
              value={newBook.author}
              onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
            />
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Price"
              value={newBook.price}
              onChange={(e) => setNewBook({ ...newBook, price: e.target.value })}
            />
          </Form.Group>
          <br />
          <Button onClick={handleAddBook} className='btn btn-primary'>Add Book</Button>
        </Form>
      </div>

      <div className='container mt-5'>
        <h2 className='mb-5'>Manage Books</h2>
        
        {/* List of books */}
        <ul>
          {books.map(book => (
            <li key={book.id}>
              {book.title} - ${book.price}
              
              {/* Remove Book Button */}
              <Button onClick={() => handleRemoveBook(book.id)} className='btn btn-primary'>Remove</Button>

              {/* Update Book Button */}
              <Button onClick={() => handleUpdateBook(book.id)} className='btn btn-primary ml-2'>Update</Button>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default AdminPage;
