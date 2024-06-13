import React from "react";
import { useDispatch } from 'react-redux';
import {messageActions} from "../store/message-slice";
import { Form, useNavigate} from "react-router-dom";

import classes from "./Messages.module.css";

const Messages: React.FC<{}> = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const sendMessage = ( id: string, text: string, sender: string, ) => {
        dispatch(
            messageActions.sendMessage({
                id,
                text
            })
        );
    };

    function cancelHandler() {
        navigate('..');
    }

    return <>
        <Form method='post' className={classes.form}>
            <p>
                <label htmlFor="text">Text you message</label>
                <input
                    id="text"
                    type="text"
                    name="text"
                    required
                    defaultValue='Text you message'
                />
            </p>
            {/*<p>*/}
            {/*    <label htmlFor="image">Image</label>*/}
            {/*    <input*/}
            {/*        id="image"*/}
            {/*        type="url"*/}
            {/*        name="image"*/}
            {/*        required*/}
            {/*        defaultValue={event ? event.image : ''}*/}
            {/*    />*/}
            {/*</p>*/}

            <div className={classes.actions}>
                <button type="button" onClick={cancelHandler}>
                    Cancel
                </button>
                <button>
                    Save
                </button>
            </div>
        </Form>
    </>
}

export default Messages;

// @ts-ignore
// export async function action({ request }) {
//     const data = await request.formData();
//
//     const eventData = {
//         text: data.get('text')
//     };
//
//     let url = 'http://localhost:8080/events';
//
//     if (method === 'PATCH') {
//         const eventId = params.eventId;
//         url = 'http://localhost:8080/events/' + eventId;
//     }
//
//     const response = await fetch(url, {
//         method: method,
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(eventData),
//     });
//
//     if (response.status === 422) {
//         return response;
//     }
//
//     if (!response.ok) {
//         throw json({ message: 'Could not save event.' }, { status: 500 });
//     }
//
//     return redirect('/events');
// }