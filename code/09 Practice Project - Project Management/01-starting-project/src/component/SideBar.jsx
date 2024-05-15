// import SideBarComponent from "./SideBarComponent.jsx";
import {useState} from "react";


// class Project {
//     constructor(name, task) {
//         this.name = name;
//         this.task = task;
//     }
// }

export default function SideBar() {
    const [userInput, setUserInput] = useState({
        name: "",
        tasks: []
    });
    const [project, setProject] = useState([{name: 'test', tasks: [{task: 'one'}]}]);

    function handleChange(identifier, newValue) {
        setUserInput( (prevState) => {
                return {...prevState, [identifier]: newValue}
            }
        )
    }

    function addProject() {
        setProject((prev) => {
            let oldAr = [...prev]
            oldAr.push(userInput)
            return oldAr
        });

        // setUserInput((prevUserInput) => {
        //     return prevUserInput.push();
        // });
    }

    return (
        <div>

            <input
                type="text"
                required
                value={userInput.name}
                onChange={(event) => handleChange("name", event.target.value)}/>

            <div className="actions">
                <button onClick={addProject}>Add Project</button>
            </div>

            <div>
            {project.map((item, index) => (
                    <div key={index}>{item.name}</div>
                ))}
            </div>
        </div>
    )
}