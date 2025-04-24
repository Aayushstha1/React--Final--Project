import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function CartPage() {
    const navigate = useNavigate(); // Add this at the top with other imports
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('cart') || '[]');
        setCartItems(items);
        calculateTotal(items);
    }, []);

    const calculateTotal = (items) => {
        const sum = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        setTotal(sum.toFixed(2));
    };

    const removeFromCart = (productId) => {
        const updatedCart = cartItems.filter(item => item.id !== productId);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        calculateTotal(updatedCart);
    };

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity < 1) return;
        const updatedCart = cartItems.map(item =>
            item.id === productId ? { ...item, quantity: newQuantity } : item
        );
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        calculateTotal(updatedCart);
    };

    const handleCheckout = () => {
        if (cartItems.length > 0) {
            navigate('/checkout');
        } else {
            alert('Your cart is empty!');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <div className="text-center py-8">
                    <p className="text-xl text-gray-600 mb-4">Your cart is empty</p>
                    <Link 
                        to="/products" 
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                    >
                        Continue Shopping
                    </Link>
                </div>
            ) : (
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                        {cartItems.map(item => (
                            <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow mb-4">
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="w-24 h-24 object-contain"
                                />
                                <div className="flex-grow">
                                    <h3 className="font-semibold">{item.title}</h3>
                                    <p className="text-blue-600">${item.price}</p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <button 
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            className="px-2 py-1 bg-gray-200 rounded"
                                        >
                                            -
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button 
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            className="px-2 py-1 bg-gray-200 rounded"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <button 
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-red-600 hover:text-red-800"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow h-fit">
                        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                        <div className="flex justify-between mb-2">
                            <span>Subtotal</span>
                            <span>${total}</span>
                        </div>
                        <button 
                            className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4 hover:bg-blue-700"
                            onClick={handleCheckout}
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CartPage;