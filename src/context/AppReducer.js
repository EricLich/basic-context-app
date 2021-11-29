const AppReducer = (state, action) => {   
    switch(action.type){
        case 'ADD_USER':                 
            return{
                users: [...state.users, {id: state.users.length + 1, ...action.payload}]
            }            
        case 'DELETE_USER':
            return{
                users: state.users.filter(user => user.id != action.payload)             
            }    
    }
}

export default AppReducer