import { Routes, Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Profile from './Profile';
import Logout from './Logout';
import Home from './Home';
import Cart from './cart';

export default function Dashboard ({ setIsAuthenticated , items, setItems, setFilteredItems, setState, state}) {
  return (
    <div className="dashboard">
      <Routes>
        <Route
          path="/register"
          element={<Register setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route path="/profile"
        element={<Profile items={items} setItems={setItems} setFilteredItems={setFilteredItems} setState={setState} state={state} />} />
        <Route
          path="/logout"
          element={<Logout setIsAuthenticated={setIsAuthenticated} setState={setState} />}
        />
        <Route
          path="/cart"
          element={<Cart/>}
        />
        <Route path="/" element={<Home items={items} state={state} />} />
      </Routes>
    </div>
  );
};

