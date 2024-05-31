import logoImg from '../assets/logo.jpg';
import {useContext} from "react";
import UserContext from "../store/UserContext.jsx";



export default function Header() {
    const userContext = useContext(UserContext);

    return (
        <><header id="main-header">
            <div id="title">
                <img src={logoImg} alt="A restaurant"/>
                <h1> React Food</h1>
            </div>
            <nav>
                <button type="button" onClick={userContext.showModal}> All Item </button>
            </nav>
        </header>
        </>
    )
}