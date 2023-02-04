import { Routes, Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Profile from './Profile';
import Logout from './Logout';
import Home from './Home';
import Cart from './cart';
import SuccessCheckout from './SuccessCheckout';
import NotFoundPage from './NotFoundPage';


export default function Dashboard ({ items, setItems, setFilteredItems }) {

  return (
    <div className='dashboard'>
      <Routes>
        <Route
          path='/register'
          element={<Register />}
        />
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
        path='/profile'
        element={<Profile items={items} setItems={setItems} setFilteredItems={setFilteredItems} />}
        />
        <Route
          path='/logout'
          element={<Logout />}
        />
        <Route
          path='/cart'
          element={<Cart/>}
        />
        <Route
          path='/success'
          element={<SuccessCheckout />}
          />
        <Route
        path='/'
        element={<Home items={items}/>}
        />
        <Route
        path='*'
        element={<NotFoundPage />}
        />
      </Routes>
    </div>
  );
};

