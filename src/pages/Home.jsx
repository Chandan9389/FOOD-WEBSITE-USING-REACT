import CategoryMenu from "../components/CategoryMenu";
import Fooditems from "../components/Fooditems";
import Navbar from "../components/Navbar";
import Cart from "../components/Cart";
 
 function Home(){
    return(
       <>
        <Navbar/>
        <CategoryMenu/>
        <Fooditems/>
        <Cart/>
       </>
    )
 }
 export default Home;