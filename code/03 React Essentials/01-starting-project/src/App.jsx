import Header from "./component/Header.jsx";
import CoreConcepts from "./component/CoreConcepts";
import Examples from "./component/Examples";

function App() {
    return (
        <div>
            <Header/>
            <main>
                <CoreConcepts/>
                <Examples/>
                <h2>Time to get started!</h2>
            </main>
        </div>
    );
}

export default App;
