export const LOGIN = "LOGIN"
export const SIGNOUT = "SIGNOUT"
export const CHECKSTORAGE = "CHECKSTORAGE"
export const ADD_EMPLOYEE = "ADD_EMPLOYEE"
export const DELETE_EMPLOYEE = "DELETE_EMPLOYEE"

export const login = items => ({
    type: LOGIN,
    payload: items
});
export const checkStorage = items => ({
    type: CHECKSTORAGE,
    payload: items
});
  
export const signout = items => ({
    type: SIGNOUT,
    payload: items
});

export const addEmp = (items) =>({
    type:ADD_EMPLOYEE,
    payload:items
})

export const deleteEmp = (items) =>({
    type:DELETE_EMPLOYEE,
    payload:items
})
