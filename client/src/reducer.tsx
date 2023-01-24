import { combineReducers } from "redux"

const initialStateRegistration = {
  open: true,
  password: '',
  phoneNumber: '',
  firstName: '',
  Email: '',
  lastName: ''
}

const initialStateLogin = {
  open: true,
  loggEmail: '',
  loggPassword: ''
}

const Login = (state: any = initialStateLogin, action: any) => {
  switch (action.type) {
    case 'OPEN':
      return { ...state, open: !state.open }
    case 'LOGG_EMAIL':
      return { ...state, loggEmail: action.payload }
    case 'LOGG_PASSWORD':
      return { ...state, loggPassword: action.payload }
    default:
      return state
  }
}

const Registration = (state:any=initialStateRegistration, action: any) => {
  switch (action.type) {
    case 'OPEN':
      return {...state, open: !state.open}
    case 'REG_PASSWORD':
      return { ...state, reqPassword: action.payload }
    case 'PHONE_NUMBER':
      return {...state, phoneNumber: action.payload}
    case 'REG_EMAIL':
      return {...state, Email: action.payload}
    case 'FIRST_NAME':
      return { ...state, FirstName: action.payload }
    case 'LAST_NAME':
      return {...state, lastName: action.payload}
    default:
      return state
  }
}

const Reducer = combineReducers({
  Registration,
  Login
})

export default Reducer