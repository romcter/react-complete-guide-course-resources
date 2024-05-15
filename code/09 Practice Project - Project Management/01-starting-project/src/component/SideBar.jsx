// import SideBarComponent from "./SideBarComponent.jsx";
import {useState} from "react";


// class Project {
//     constructor(name, task) {
//         this.name = name;
//         this.task = task;
//     }
// }

const emptyObj = {
    // id: ++idCounter,
    name: "",
    description: "",
    date: null,
    tasks: []
}

const fullObj = {
    // id: ++idCounter,
    name: "name",
    description: "description",
    date: new Date().toDateString(),
    tasks: [{task: 'one'}]
}

// let idCounter = 0;

export default function SideBar() {

    const [userInput, setUserInput] = useState({
        id: 0,
        name: "",
        description: "",
        date: new Date().toDateString(),
        tasks: []
    });
    const [project, setProject] = useState([]);

    function handleChange(identifier, newValue) {
        setUserInput((prevState) => {
                return {...prevState, [identifier]: newValue}
            }
        )
    }

    function addProject() {
        setProject((prev) => {
            let oldAr = [...prev]
            oldAr.push(userInput)
            setUserInput(emptyObj)
            return oldAr
        });
    }

    function deleteProject(nameForDelete) {
    //     let con ;
    // project.map((item, index) => {
    //         if (item.name === nameForDelete) {
                console.log(project.filter(proj => proj.name !== nameForDelete))
    //             con = project.splice(index, 1)
    //         }
    //     })
    //
    //     setProject((prev) => {
    //         prev.map((item, index) => {
    //             if (item.name === nameForDelete) {
    //                 console.log('test')
    //                 console.log(prev.splice(index, 1))
    //             }
    //         })
    //
    //     })



        setProject((oldValues) => {
            return oldValues.filter(proj => proj.name !== nameForDelete)
        })
    }

    return (
        <section>
            <label>Name: </label>
            <input
                type="text"
                required
                value={userInput.name}
                onChange={(event) => handleChange("name", event.target.value)}/>

            <label>Description: </label>
            <input
                type="text"
                required
                value={userInput.description}
                onChange={(event) => handleChange("description", event.target.value)}/>

            <div className="actions">
                <button onClick={addProject}>Add Project</button>
            </div>

            <div>
                {project.map((item, index) => (
                    <div key={index}>
                        <li key={index}>
                            <span>Name: {item.name};</span>
                            <span>Date: {item.date};</span>
                            <span>Description: {item.description};</span>
                            <button onClick={() => deleteProject(item.name)}>Delete</button>
                        </li>
                    </div>
                ))}
            </div>
        </section>
    )
}