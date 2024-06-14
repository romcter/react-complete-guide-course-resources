import React, {useRef} from "react";
import {useDispatch } from 'react-redux';
import {messageActions} from "../store/message-slice";
import { useNavigate} from "react-router-dom";

import classes from "./Messages.module.css";

const Messages: React.FC<{}> = () => {
    const dispatch = useDispatch();
    const textRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();

    function cancelHandler() {
        navigate('..');
    }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log('First Name:', textRef.current?.value);

        dispatch(
            messageActions.sendMessage({
                text: textRef.current?.value
            })
        );
    };

    return <>
        <form onSubmit={handleSubmit}>
            <p>
                {/*<label htmlFor="text">Text you message</label>*/}
                <input
                    id="text"
                    type="text"
                    name="text"
                    required
                    defaultValue='Text you message'
                    ref={textRef}
                />
            </p>

            <div className={classes.actions}>
                <button type="button" onClick={cancelHandler}>
                    Cancel
                </button>
                <button>
                    Save
                </button>
            </div>
        </form>
    </>
}

export default Messages;