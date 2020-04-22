import { LOGIN, SIGNOUT, CHECKSTORAGE, ADD_EMPLOYEE, DELETE_EMPLOYEE } from "./Action"

const initialState = {
    isloggedIn: false,
    username: "admin",
    password: "admin",
    employee: [],
    duplicate: []
  }

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            let user = action.payload.username
            let pass = action.payload.password

            if(user === state.username && pass === state.password){
                alert("Login Successful")
                localStorage.setItem("isLoggedIn",true)
                return { ...state,
                    isloggedIn : true,
                }
            }
            else{
                alert("Invalid Credential")
                localStorage.setItem("isLoggedIn",false)
                return state
            }
        
        case CHECKSTORAGE:
            if(action.payload === true){
                return { ...state,
                    isloggedIn : true,
                }
            }
            else{
                return state
            }
            
        
        case SIGNOUT:
            return { ...state,
                isloggedIn : action.payload,
            }
        
        case ADD_EMPLOYEE:
            if(action.payload !== ""){
                let obj = action.payload
                alert("Employee Detail Added")
                return {
                    ...state,employee:[...state.employee,obj],duplicate:[...state.duplicate,obj]
                }
            }
            else{
                return state
            }

        case DELETE_EMPLOYEE:
            let arr = [...state.duplicate]
            let updatedList = arr.filter(item => item.eid !== action.payload) 
            alert("Item Deleted")
            return {...state,duplicate: updatedList}

        default:
            return state;
    }
}

export default Reducer
  