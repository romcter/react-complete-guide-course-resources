import {createPortal} from "react-dom";
import {useContext, useEffect, useRef} from "react";
import UserContext from "../store/UserContext.jsx";

export default function CartItem({items}) {

    const userContext = useContext(UserContext);

    const dialog = useRef();

    useEffect(() => {
        const modal = dialog.current;

        // console.log("in useEfect");
        console.log("in useEfect", userContext.modal)


        if (userContext.modal !== " ") {
            return modal.showModal();
        }
        console.log("equals", userContext.modal !== " ")
        return () => modal.close();
        // return () => modal.showModal();

    }, [userContext.modal]);

    return createPortal(
        <dialog ref={dialog} className={`modal ${userContext.modal}`} onClose={null} >
            <div>
                {items.map((item, index) => (
                    <div key={index}>
                        <h2>{item.name}</h2>
                    </div>
                ))}
            </div>
            <button onClick={userContext.hideModal} type="button">Close</button>
        </dialog>,
        document.getElementById('modal')
    );

    // return createPortal(<dialog open={true}>
    //     <div>
    //         {items.map((item, index) => (
    //             <div key={index}>
    //                 <h2>{item.name}</h2>
    //             </div>
    //         ))}
    //     </div>
    // </dialog>)
}
