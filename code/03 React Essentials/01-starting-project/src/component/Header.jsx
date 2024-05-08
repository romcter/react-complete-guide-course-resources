import reactImg from "../assets/react-core-concepts.png";
import "./Header.css"

const reactDescription = ['Fundamental', 'Cruci', 'Core']

function getRandomInd(max) {
    return Math.floor(Math.random() * (max + 1));
}

function Header() {
    return <header>
        <img src={reactImg} alt="Stylized atom"/>
        <h1>React Essentials</h1>
        <p>
            {reactDescription[getRandomInd(2)]} React concepts you will need for almost any app you are
            going to build!
        </p>
    </header>
}

export default Header