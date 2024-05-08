import {useState} from "react";

import {CORE_CONCEPTS, EXAMPLES} from './data.js';
import Header from "./component/Header.jsx";
import CoreConcept from "./component/CoreConcept";
import TabButton from "./component/TabButton";

function App() {
    const [selectedTopic, setSelectedTopic] = useState('');

    function handleClick(selectedButton) {
        setSelectedTopic(selectedButton)
    }

    return (
        <div>
            <Header/>
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        {CORE_CONCEPTS.map((conceptItem) =>
                            <CoreConcept key={conceptItem.title} {...conceptItem}/>
                        )}
                        {/*<CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description}*/}
                        {/*             image={CORE_CONCEPTS[0].image}/>*/}
                        {/*<CoreConcept {...CORE_CONCEPTS[1]}/>*/}
                        {/*<CoreConcept {...CORE_CONCEPTS[2]}/>*/}
                        {/*<CoreConcept {...CORE_CONCEPTS[3]}/>*/}
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleClick('components')}>Components</TabButton>
                        <TabButton isSelected={selectedTopic === 'jsx'}onSelect={() => handleClick('jsx')}>JSX</TabButton>
                        <TabButton isSelected={selectedTopic === 'props'}onSelect={() => handleClick('props')}>Props</TabButton>
                        <TabButton isSelected={selectedTopic === 'const'}onSelect={() => handleClick('const')}>Const</TabButton>
                    </menu>
                    {!selectedTopic ? <p>Please select a topic</p> : null}
                    {selectedTopic && (
                        <div id="tab-content">
                            {selectedTopic && selectedTopic.length > 0 ? selectedTopic : null}
                            <h3>{EXAMPLES[selectedTopic].title}</h3>
                            <p>{EXAMPLES[selectedTopic].description}</p>
                            <pre><code>{EXAMPLES[selectedTopic].code}</code></pre>
                        </div>)}
                </section>
                <h2>Time to get started!</h2>
            </main>
        </div>
    );
}

export default App;
