import Header from "./component/Header.jsx";
import CoreConcepts from "./component/CoreConcepts";
import TabButtons from "./component/TabButtons";

function App() {
    return (
        <div>
            <Header/>
            <main>
                <CoreConcepts/>
                <TabButtons/>
                <h2>Time to get started!</h2>
            </main>
        </div>
    );
}

export default App;
