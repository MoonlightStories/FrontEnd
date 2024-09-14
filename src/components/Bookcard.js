import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

const BookCard = ({ book }) => (
  <div className="card">
    <div className="card-body">
      <h3 className="card-title">{book.title}</h3>
      <p className="card-text">{book.author}</p>
      <p className="card-text">${book.price}</p>
      <div className="btn-group btn-group-lg">
        {/* Use the React Bootstrap Button component */}
        <Button variant="primary" size="lg">Add to Cart</Button>
      </div>
    </div>
  </div>
);

export default BookCard;
