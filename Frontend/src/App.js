import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import { createBrowserHistory } from "history";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Register from './layouts/Register';
import Login from './layouts/Login';
import DashboardCO from './layouts/cargoOwner/DashboardCO';
import StartConsignmentCO from './layouts/cargoOwner/StartConsignmentCO';
import ViewConsignmentsCO from './layouts/cargoOwner/ViewConsignmentsCO';
import TrackConsignment from './layouts/cargoOwner/TrackConsignment';
import ProtectedRoute from './ProtectedRoute';
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ViewQuotations from './layouts/cargoOwner/ViewQuotations';

import Dashboard from './layouts/shippingCompany/Dashboard';
import CreateShipment from './layouts/shippingCompany/CreateShipment';
import Track from './layouts/shippingCompany/Track';
import ViewShipments from './layouts/shippingCompany/ViewShipments';
import BookContainer from './layouts/shippingCompany/BookContainer';
import ViewContainers from './layouts/shippingCompany/ViewContainers';
import MakeQuotations from './layouts/shippingCompany/MakeQuotations';
import AddPartner from './layouts/cargoOwner/AddPartner';
import AddPartnerSc from './layouts/shippingCompany/AddPartnerSc';
import PartnerRequests from './layouts/cargoOwner/PartnerRequests';
import ViewPartner from './layouts/cargoOwner/ViewPartner';
import DashboardOC from './layouts/oceanCarrier/DashboardOC';
import CreateSchedule from './layouts/oceanCarrier/CreateSchedule';
import AddShip from './layouts/oceanCarrier/AddShip';
import ViewShips from './layouts/oceanCarrier/ViewShips';
import AddContainer from './layouts/oceanCarrier/AddContainer';
import ViewContainersOC from './layouts/oceanCarrier/ViewContainersOC';

import DashboardFI from './layouts/FI/DashboardFI';
import LCPrevious from './layouts/FI/LCPrevious';
import LCRequests from './layouts/FI/LCRequests';
import LCSearch from './layouts/FI/LCSearch';

import DashboardCu from './layouts/customs/DashboardCu';
import CuSearch from './layouts/customs/CuSearch';
import ViewConsignmentsCu from './layouts/customs/ViewConsignmentsCu';
import CuAddTax from './layouts/customs/CuAddTax';
import CuViewTax from './layouts/customs/CuViewTax';
import CuAssignTax from './layouts/customs/CuAssignTax';
import CuAllow from './layouts/customs/CuAllow';

import DashboardTO from './layouts/TO/DashboardTO';
import TOAddBerth from './layouts/TO/TOAddBerth';
import TOAddYard from './layouts/TO/TOAddYard';
import TOAssignYard from './layouts/TO/TOAssignYard';
import TOSearch from './layouts/TO/TOSearch';
import TOViewAllSch from './layouts/TO/TOViewAllSch';
import TOViewBerth from './layouts/TO/TOViewBerth';
import TOViewLoading from './layouts/TO/TOViewLoading';
import TOViewSchReq from './layouts/TO/TOViewSchReq';
import TOViewUnloading from './layouts/TO/TOViewUnloading';
import TOViewYard from './layouts/TO/TOViewYard';


import DashboardIT from './layouts/inlandT/DashboardIT';
import ITSearch from './layouts/inlandT/ITSearch';
import ITShipment from './layouts/inlandT/ITViewShipment';
import ITAddRoute from './layouts/inlandT/ITAddRoute';
import Error from './layouts/Error';


class App extends PureComponent {
  static propTypes = {}

  constructor(props) {
    super(props)

    this.state = {
    }
  }

  

  render() {

    const checkSignIn = () =>{
      const isAuthenticated = localStorage.getItem('token');
      const org_type = localStorage.getItem('org_type');
      if (isAuthenticated === null || isAuthenticated === undefined || isAuthenticated === '') {
          return false;
      }
      else{
        return true;
      }
    }
    
    const PrivateRoute = ({ component: Component, ...rest }) => (
    
      <Route {...rest} render={(props) => (
        checkSignIn() ?
          <Component {...props} />
          : <Redirect to='/login' />
      )} />
    )

    const checkCargoOwner = () =>{
      const isAuthenticated = localStorage.getItem('token');
      const org_type = localStorage.getItem('org_type');
      if (org_type !== 'cargo-owner') {
          return false;
      }
      else{
        return true;
      }
    }
    
    const CargoOwner = ({ component: Component, ...rest }) => (
    
      <Route {...rest} render={(props) => (
        checkCargoOwner() ?
          <Component {...props} />
          : <Redirect to='/error' />
      )} />
    )
    
    const checkShippingCompany = () =>{
      const isAuthenticated = localStorage.getItem('token');
      const org_type = localStorage.getItem('org_type');
      if (org_type !== 'shipping-company') {
          return false;
      }
      else{
        return true;
      }
    }
    
    const ShippingCompany = ({ component: Component, ...rest }) => (
    
      <Route {...rest} render={(props) => (
        checkShippingCompany() ?
          <Component {...props} />
          : <Redirect to='/error' />
      )} />
    )

    const hist = createBrowserHistory();
    const org_type = localStorage.getItem('org_type');
    return (
      <div className="page-container">
        <div className="container-wrap">
          <Router history={hist}>
            <Switch>
              <Route path="/login" component={Login}/>
              <Route path="/register" component={Register}/>
              <Route path="/error" component={Error} />
              <CargoOwner path="/dashboard" component={DashboardCO}/>
              <CargoOwner path="/startConsignment" component={StartConsignmentCO}/>
              <CargoOwner path="/viewConsignments" component={ViewConsignmentsCO}/>
              <CargoOwner path="/trackConsignment" component={TrackConsignment}/>
              <CargoOwner path="/viewQuotations" component={ViewQuotations}/>
              <CargoOwner path="/addPartnerCO" component={AddPartner}/>
              <CargoOwner path="/requestsCO" component={PartnerRequests}/>
              <CargoOwner path="/viewPartnerCO" component={ViewPartner}/>
              <CargoOwner path="/addPartnerSc" component={AddPartnerSc}/>
              //shippingCompany
              <ShippingCompany path="/dashboardSc" component={Dashboard}/>
              <ShippingCompany path="/createShipment" component={CreateShipment}/>
              <ShippingCompany path="/track" component={Track}/>
              <ShippingCompany path="/viewShipments" component={ViewShipments}/>
              <ShippingCompany path="/bookContainer" component={BookContainer}/>
              <ShippingCompany path="/viewContainer" component={ViewContainers}/>
              <ShippingCompany path="/makeQuotation" component={MakeQuotations}/>
              //oceanCarrier
              {/* <PrivateRoute path="/dashboardOc" component={DashboardOC}/> */}
              {/* <PrivateRoute path="/createSchedule" component={CreateSchedule}/>
              <PrivateRoute path="/addShip" component={AddShip}/>
              <PrivateRoute path="/viewShip" component={ViewShips}/>
              <PrivateRoute path="/addContainer" component={AddContainer}/>
              <PrivateRoute path="/viewContainerOC" component={ViewContainersOC}/>
            
              <PrivateRoute path="/dashboardFI" component={DashboardFI}/>
              <PrivateRoute path="/lcPrevious" component={LCPrevious}/>
              <PrivateRoute path="/lcRequests" component={LCRequests}/>
              <PrivateRoute path="/lcSearch" component={LCSearch}/>

              
              <PrivateRoute path="/dashboardCu" component={DashboardCu}/>
              <PrivateRoute path="/cuSearch" component={CuSearch}/>
              <PrivateRoute path="/viewConsignmentsCu" component={ViewConsignmentsCu}/>
              <PrivateRoute path="/cuaddtax" component={CuAddTax}/>
              <PrivateRoute path="/cuviewtax" component={CuViewTax}/>
              <PrivateRoute path="/cuassigntax" component={CuAssignTax}/>
              <PrivateRoute path="/cuallow" component={CuAllow}/>

              
              <PrivateRoute path="/dashboardTO" component={DashboardTO}/>
              <PrivateRoute path="/TOAddBerth" component={TOAddBerth}/>
              <PrivateRoute path="/TOAddYard" component={TOAddYard}/>
              <PrivateRoute path="/TOAssignYard" component={TOAssignYard}/>
              <PrivateRoute path="/TOSearch" component={TOSearch}/>
              <PrivateRoute path="/TOViewAllSch" component={TOViewAllSch}/>
              <PrivateRoute path="/TOViewBerth" component={TOViewBerth}/>
              <PrivateRoute path="/TOViewLoading" component={TOViewLoading}/>
              <PrivateRoute path="/TOViewSchReq" component={TOViewSchReq}/>
              <PrivateRoute path="/TOViewUnloading" component={TOViewUnloading}/>
              <PrivateRoute path="/TOViewYard" component={TOViewYard}/>
              

              
              <PrivateRoute path="/dashboardIT" component={DashboardIT}/>
              <PrivateRoute path="/itSearch" component={ITSearch}/>
              <PrivateRoute path="/itViewShipment" component={ITShipment}/>
              <PrivateRoute path="/itaddroute" component={ITAddRoute}/> */}
            </Switch>
          </Router>
        </div>
        <Footer/>
      </div>
     
    )
  }
}

export default App
