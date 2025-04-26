import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./newroutes/About";
import CartPage from "./newroutes/CartPage";
import Checkout from "./newroutes/checkout";
import Contactus from "./newroutes/Contactus";
import Home from "./newroutes/Home";
import Layout from "./newroutes/layout";
import Login from "./newroutes/login";
import OrderConfirmation from "./newroutes/OrderConfirmation";
import ProductDetails from "./newroutes/productDetails";
import Products from "./newroutes/products";

function App() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    return (
        <BrowserRouter>
            <Routes>
                {/* Public Routes */}
                <Route path="/login" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login />} />
                
                {/* Protected Routes */}
                <Route path="/dashboard" element={isLoggedIn ? <Layout /> : <Navigate to="/login" />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contactus" element={<Contactus />} />
                    <Route path="products" element={<Products />} />
                    <Route path="products/:id" element={<ProductDetails />} />
                    <Route path="cart" element={<CartPage />} />
                    <Route path="checkout" element={<Checkout />} />
                    <Route path="order-confirmation" element={<OrderConfirmation />} />
                </Route>

                {/* Redirect root to login or dashboard based on auth status */}
                <Route path="/" element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;


