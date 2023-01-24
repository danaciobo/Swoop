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

const initialAddItemState = {
  title: '',
  description: '',
  price:'',
  quantity:'',
  location:'',
  category:'',
  image:'', //string|File
  openAddItem:''
}

const initialAppState = {
  items: [],
  filteredItems: [],
  user: null
}

const App = (state:any=initialAppState, action:any) => {
  switch (action.type) {
    case 'APP_ITEMS':
      return {...state, items: action.payload};
    default:
      break;
  }
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

const AddItem = (state:any = initialAddItemState, action:any) => {
  switch (action.type) {
    case 'ADDITEM_TITLE':
      return {...state, title: action.payload}
    case 'ADDITEM_DESCRIPTION':
      return {...state, description: action.payload}
    case 'ADDITEM_PRICE':
      return {...state, price: action.payload}
    case 'ADDITEM_QUANTITY':
      return {...state, quantity: action.payload}
    case 'ADDITEM_LOCATION':
      return {...state, location: action.payload}
    case 'ADDITEM_CATEGORY':
      return {...state, category: action.payload}
    case 'ADDITEM_IMAGE':
      return {...state, image: action.payload}
    case 'ADDITEM_OPEN':
      return {...state, open: !state.open}
    default:
      break;
  }
}

const Reducer = combineReducers({
  Registration,
  Login,
  AddItem
})

export default Reducer