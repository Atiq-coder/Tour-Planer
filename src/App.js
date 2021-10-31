import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import Destinations from './Component/Destinations/Destinations';
import NotFound from './Component/NotFound/NotFound';
import SignIn from './Component/SignIn/SignIn';
import AuthProvider from './context/AuthProvider';
import MyOrders from './Component/MyOrders/MyOrders';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import AddDestination from './Component/AddDestination/AddDestination';
import ManageOrders from './Component/ManageOrders/ManageOrders';
import Shipment from './Component/Shipment/Shipment';

function App() {
  return (
    <div className="body">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/destinations">
              <Destinations></Destinations>
            </Route>
            <PrivateRoute path="/shipment">
              <Shipment></Shipment>
            </PrivateRoute>
            <PrivateRoute path="/myorders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <Route path="/manageorders">
              <ManageOrders></ManageOrders>
            </Route>
            <Route path="/adddestination">
              <AddDestination></AddDestination>
            </Route>
            <Route path="/signin">
              <SignIn></SignIn>
            </Route>
            <Route path="/*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
