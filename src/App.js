
import './css/sb-admin-2.css';
import Dashbord from './css/Dashbord';
import Users from './Users';
import "./App.css"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Products from './Products';
import CreateUsers from './CreateUsers';
import Createbook from './Createbook';
import Login from './Login';
import Portal from './Portal';
import Userview from './Userview';
import Edituser from './Edituser';
import Editbook from './Editbook';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/portal" element={<Portal />} >
          <Route path="dashbord" element={<Dashbord />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<Userview />} />
          <Route path="user/edit/:id" element={<Edituser />} />
          <Route path="products" element={<Products />} />
          <Route path="user/edit/:id" element={<Editbook />} />
          <Route path="create-users" element={<CreateUsers />} />
          <Route path="createbook" element={<Createbook />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
