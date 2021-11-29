import { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

export const UserContext = createContext()

const UserProvider = ({children}) => {

    const actionTypes = {
        addUser: 'ADD_USER',
        deleteUser: 'DELETE_USER',
        editUser: 'EDIT_USER'
    }

    const [state, dispatch] = useReducer(AppReducer, {users: []});

    const actions = {
        addUser: (user) => {   
            dispatch({type: actionTypes.addUser, payload: user})  
        },
        deleteUser: (userId) => {
            dispatch({type: actionTypes.deleteUser, payload: userId})
        }
    }

    return (
        <UserContext.Provider value={{state, actions}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider