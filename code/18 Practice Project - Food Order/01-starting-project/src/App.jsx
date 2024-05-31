import Dishes from "./component/Dishes.jsx";
import Header from "./component/Header.jsx";
import Cart from "./component/Cart.jsx";
import {useState} from "react";
import {useFetch} from "./hooks/useFetch.js";
import {CartContextProvider} from "./store/CardContext.jsx";
import UserContext, {UserContextProvider} from "./store/UserContext.jsx";


function App() {

    const [items, setItems] = useState([]);
    const [showItem, setShowItem] = useState(false);

    function addItem(item) {
        setItems([...items, item]);
    }

    function showItems() {
        setShowItem(!showItem)
    }

    function postItems() {
        useFetch()
    }

    return (
        <>
            <CartContextProvider>
                <UserContextProvider>
                    <Header showItems={showItems}/>
                    <Dishes addItem={addItem}/>
                    <Cart items={items}/>
                </UserContextProvider>
            </CartContextProvider>
        </>
    );
}

export default App;
