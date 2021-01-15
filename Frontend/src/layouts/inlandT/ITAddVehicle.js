import React, { PureComponent } from "react";
import NavbarIT from "../../components/NavbarIT";
import Footer from "../../components/Footer";
import "./ITAddRoute.css";
import ITAddVehicleCard from "../../components/inlandT/ITAddVehicleCard";

class ITAddVehicle extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  searchId = (id) => {};

  render() {
    return (
      <div id="wrapper">
        <NavbarIT />
        <div className="container-fluid" id="track-consignment">
          <ITAddVehicleCard />
        </div>
      </div>
    );
  }
}

export default ITAddVehicle;
