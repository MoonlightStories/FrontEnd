import { useState, useEffect } from 'react';
import axios from 'axios';

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(null); // To store error if fetching fails

  // Fetch cart items when the component mounts
  useEffect(() => {
    axios.get('/api/cart')
      .then(response => setCart(response.data))
      .catch(error => {
        console.error('Error fetching cart:', error);
        setError('Failed to fetch cart. Please try again later.');
      });
  }, []);

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h1> Shopping Cart </h1>

      {/* Display error if fetching the cart fails */}
      {error && <p>{error}</p>}

      {/* Show cart items or message if empty */}
      {cart.length > 0 ? (
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              {item.title} - ${item.price.toFixed(2)} {/* Fix to show two decimals for price */}
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}

      {/* Show total price if there are items in the cart */}
      {cart.length > 0 && (
        <div>
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default CartPage;


