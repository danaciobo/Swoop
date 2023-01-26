import { combineReducers } from "redux"

const initialStateRegistration = {
  open: true,
  password: '',
  phoneNumber: '',
  firstName: '',
  Email: '',
  lastName: ''
}
const initialAddItemState = {
  title: '',
  description: '',
  price:'',
  quantity:'',
  location:'',
  category:'',
  openAddItem:''
}

const initialAppState = {
  items: [],
  filteredItems: [],
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
      return {...state};
  }
}

const Profile = (state:any = InitialProfileState, action:any) => {
  switch (action.type) {
    case 'PROFILE_USER':
      return {...state, User: action.payload}
    default:
      return {...state};
  }
}

const App = (state:any=initialAppState, action:any) => {
  switch (action.type) {
    case 'APP_ITEMS':
      return { ...state, items: action.payload };
    case 'APP_FILTERED_ITEMS':
      return { ...state, filteredItems: action.payload} ;
    default:
      return {...state};
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
    case 'ADDITEM_OPEN':
      return {...state, open: !state.open}
    default:
      return {...state};
  }
}

const Reducer = combineReducers({
  addItem,
  App,
  Profile,
  ItemCard
})

export default Reducer