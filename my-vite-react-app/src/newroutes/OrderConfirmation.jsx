import React from 'react';
import { Link } from 'react-router-dom';

function OrderConfirmation() {
    return (
        <div className="container mx-auto p-4 text-center">
            <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
                <div className="text-green-500 text-5xl mb-4">✓</div>
                <h1 className="text-2xl font-bold mb-4">Order Confirmed!</h1>
                <p className="text-gray-600 mb-6">
                    Thank you for your purchase. Your order has been received and is being processed.
                </p>
                <Link
                    to="/products"
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                >
                    Continue Shopping
                </Link>
            </div>
        </div>
    );
}

export default OrderConfirmation;