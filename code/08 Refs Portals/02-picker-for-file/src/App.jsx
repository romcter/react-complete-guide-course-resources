import React from 'react';

function App() {
    const filePicker = React.useRef();

    function handleClick(){
        filePicker.current.click();
    }


    return (
        <div id="app">
            <p>Please select an image</p>
            <p>
                <input data-testid="file-picker" type="file" accept="image/*" ref={filePicker}/>
                <button onClick={handleClick}>Pick Image</button>
            </p>
        </div>
    );
}

export default App;
