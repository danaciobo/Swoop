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
  open: false,
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

const initialItemCardState = {
  expanded: false
}

const InitialProfileState = {
  User: {
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: ''
  }
}

const ItemCard  = (state:any=initialItemCardState, action:any)=> {
  switch (action.type) {
    case 'EXPAND':
      return {...state, expanded: !state.expanded}
    default:
      return state;
  }
}

const Profile = (state:any = InitialProfileState, action:any) => {
  switch (action.type) {
    case 'PROFILE_USER':
      return {...state, User: action.payload}
    default:
      return state;
  }
}

const App = (state:any=initialAppState, action:any) => {
  switch (action.type) {
    case 'APP_ITEMS':
      return { ...state, items: [...state.items, action.payload] };
    case 'APP_FILTERED_ITEMS':
      return { ...state, filteredItems: [...state.filteredItems, action.payload]} ;
    case 'APP_USER':
      return {...state, User: action.payload}
    default:
      return state;
  }
}

const Login = (state: any = initialStateLogin, action: any) => {
  switch (action.type) {
    case 'LOGG_OPEN':
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

const addItem = (state:any = initialAddItemState, action:any) => {
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
      const imgURL = URL.createObjectURL(action.payload)
      return {...state, image: imgURL}
    case 'ADDITEM_OPEN':
      return {...state, open: !state.open}
    default:
      return state;
  }
}

const Reducer = combineReducers({
  Registration,
  Login,
  addItem,
  App,
  Profile,
  ItemCard
})

export default Reducer