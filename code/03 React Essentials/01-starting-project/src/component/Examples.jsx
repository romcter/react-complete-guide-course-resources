import TabButton from "./TabButton";
import {EXAMPLES} from "../data";
import {useState} from "react";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState('');

    function handleClick(selectedButton) {
        setSelectedTopic(selectedButton)
    }

    let tabContent = <p>Please select a topic</p>

    if (selectedTopic) {
        tabContent = <div id="tab-content">
            {selectedTopic && selectedTopic.length > 0 ? selectedTopic : null}
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre><code>{EXAMPLES[selectedTopic].code}</code></pre>
        </div>
    }

    return <Section title='Examples' id="examples">
        <Tabs buttons={
            <>
                <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleClick('components')}>Components</TabButton>
                <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleClick('jsx')}>JSX</TabButton>
                <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleClick('props')}>Props</TabButton>
                <TabButton isSelected={selectedTopic === 'const'} onSelect={() => handleClick('const')}>Const</TabButton>
            </>
        }>
            {tabContent}
        </Tabs>
    </Section>
}