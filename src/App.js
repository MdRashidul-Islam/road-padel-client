import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import AuthProvider from "./Context/AuthProvider";
import BookingProduct from "./pages/Home/BookingProduct/BookingProduct";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import AllProducts from "./pages/AllProduct/AllProducts";


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/allProducts">
             <AllProducts></AllProducts>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute exact path="/bookingProduct/:productId">
              <BookingProduct></BookingProduct>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
