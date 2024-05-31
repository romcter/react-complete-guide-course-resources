import {createContext, useReducer, useState} from 'react';

const UserContext = createContext({
    modal: ' ',
    showModal: () => {},
    hideModal: () => {}
});



export function UserContextProvider({ children }) {
    const [userModal, setModal] = useState(' ');

    function showModal() {
        setModal('cart')
    }

    function hideModal() {
        setModal(' ')
    }


    const cartContext = {
        modal: userModal,
        showModal,
        hideModal
    };

    return (
        <UserContext.Provider value={cartContext}>{children}</UserContext.Provider>
    );
}

export default UserContext;