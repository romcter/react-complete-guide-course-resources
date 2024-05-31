import {useFetch} from "../hooks/useFetch.js";
import {useContext} from "react";
import UserContext from "../store/UserContext.jsx";


export default function Dishes({addItem}) {

    const userContext = useContext(UserContext);

    function addMeal(meal) {
        addItem(meal);
    }

    const {
        isFetching,
        error,
        fetchedData: availableDishes,
    } = useFetch("http://localhost:3000/meals", {})

    return (<ul className="meals">
            {availableDishes.map((dish) => (
                <li key={dish.id} className="meal-item">
                    <article>
                        {/*<h2>{title}</h2>*/}
                        {/*{isLoading && <p className="fallback-text">{loadingText}</p>}*/}
                        {/*{!isLoading && places.length === 0 && <p className="fallback-text">{fallbackText}</p>}*/}
                        {/*{!isLoading && places.length > 0 && (*/}
                        <ul className="meal-item">

                            <li key={dish.id} className="place-item">
                                <img
                                    src={`http://localhost:3000/${dish.image}`}
                                    alt={dish.image}
                                />
                                <h3>{dish.name}</h3>
                                <p className="meal-item-description">{dish.description}</p>
                            </li>

                            <button onClick={() => addItem(dish)}> add item</button>
                        </ul>
                    </article>
                </li>
            ))}
        </ul>
    );
}