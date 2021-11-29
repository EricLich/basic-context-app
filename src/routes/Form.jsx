import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Form = () => {

    const { state, actions } = useContext(UserContext)
    const [user, setUser] = useState({
        name: '',
        lastname: '',
        age: ''
    })
    const [allUsers, setAllUsers] = useState([])

    const handleInputs = e => {
        e.preventDefault();
        setUser({...user, [e.target.name]: e.target.value}) 
    }
    
    const addUserForm = e => {
        e.preventDefault();
        actions.addUser(user)     
    }

    const deleteUser = (id) => {
        actions.deleteUser(id)
    }

    useEffect(() => {
        setAllUsers([...state.users])           
    }, [state.users]) 

    return (
        <>
            <form onChange={e => handleInputs(e)}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name"/>
                <label htmlFor="lastname">Lastname</label>
                <input type="text" name="lastname"/>
                <label htmlFor="age">Age</label>
                <input type="text" name="age"/>

              <button onClick={e => addUserForm(e)}>Save User</button>
              <button onClick={e => deleteUser(e)}>Delete User</button>
            </form>

            { 
                allUsers.map(contextUser => (
                    <div className="" key={contextUser.id}>
                        <h2 >{contextUser.name}</h2>
                        <button onClick={() => deleteUser(contextUser.id)}>Delete</button>
                    </div>
                ))   
            }
        </>
    )
}

export default Form
