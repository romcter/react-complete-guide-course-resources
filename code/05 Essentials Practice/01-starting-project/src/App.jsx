import Header from "./component/Header.jsx";
import FunctionalTable from "./component/FunctionalTable.jsx";
import Result from "./component/Result.jsx";
import {useState} from "react";

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    function handleChange(identifier, newValue) {
        // const previousState = userInput;

        // console.log("prev")
        // console.log(previousState)

        // previousState[identifier] = newValue

        // console.log("now")
        // console.log(previousState)

        setUserInput( (prevState) => {
                return {...prevState, [identifier]: +newValue}
            }
        )
    }


    return (
        <div>
            <Header/>
            <FunctionalTable handleChange={handleChange} userInput={userInput} />
            <Result input={userInput}/>
        </div>
    )
}

export default App
