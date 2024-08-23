import {  useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({element}) {
    const cartItems=useSelector((state)=>state.cart.cart);
    return cartItems.length > 0 ? element : <Navigate to="/"/> ;
        
    
};
export default ProtectedRoute;