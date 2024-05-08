import TabButton from "./TabButton";
import {EXAMPLES} from "../data";
import {useState} from "react";
import Section from "./Section";

export default function TabButtons() {
    const [selectedTopic, setSelectedTopic] = useState('');

    function handleClick(selectedButton) {
        setSelectedTopic(selectedButton)
    }

    return (
        <Section title='Examples' id="examples">
        <menu>
            <TabButton isSelected={selectedTopic === 'components'}
                       onSelect={() => handleClick('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleClick('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'const'} onSelect={() => handleClick('const')}>Const</TabButton>
        </menu>
        {!selectedTopic ? <p>Please select a topic</p> : null}
        {selectedTopic && (
            <div id="tab-content">
                {selectedTopic && selectedTopic.length > 0 ? selectedTopic : null}
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre><code>{EXAMPLES[selectedTopic].code}</code></pre>
            </div>)}
    </Section>)
}