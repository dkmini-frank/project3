import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Row from 'react-bootstrap/Row';

// router component import part
import AdminLogin from './Components/adminEnd/adminLogIn/index';
import AdminHomePage from './Components/adminEnd/adminHomePage/index';
import AdminMenuBar from './Components/adminEnd/shareComponent/menuBar/index';
import AdminBookingManagement from './Components/adminEnd/adminBooking/index';
import AdminCustomerManagement from './Components/adminEnd/adminCustomer/index';
import AdminAddNewCoffee from './Components/adminEnd/adminAddNewCoffee/index';
import AdminCoffeeManagement from './Components/adminEnd/adminCoffeeManagement/index';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/admin/login' component={AdminLogin}></Route>
          <Route
            path='/admin'
            render={() => (
              <div>
                <Row>
                  <AdminMenuBar />
                </Row>
                <Route></Route>
                <Route path='/admin' exact component={AdminHomePage} />
                <Route path='/admin/booking' component={AdminBookingManagement} />
                <Route path='/admin/customer' component={AdminCustomerManagement} />
                <Route path='/admin/coffee' exact component={AdminCoffeeManagement} />
                <Route path='/admin/coffee/addCoffee' component={AdminAddNewCoffee} />
              </div>
            )}
          />
        </Switch>
      </Router>

    )
  }
}



export default App;
