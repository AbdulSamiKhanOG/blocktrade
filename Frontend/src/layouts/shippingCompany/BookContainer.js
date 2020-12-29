import React, { PureComponent } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './BookContainer.css'
import SearchResult from '../../components/shippingCompany/SearchResult'

class BookContainer extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
<<<<<<< HEAD
            check: true,
=======
            check: false,
            containerType: '',
            containerSize: '',
            departureCountry: '',
            departureCity: '',
            arrivalCountry: '',
            arrivalCity: '',
>>>>>>> fe3be23895be1fb6986ed3493f852dac303d46c6
            searchResult:[
                {
                    departurePort: 'Karachi',
                    arrivalPort: 'Wuhan',
                    departureDate: '20-11-20',
                    arrivalDate: '25-11-20',
                    noOfStops: 2,
                    shippingCompany: 'XYZ',
                    oceanCarrier: 'Maersk',
                    noOfDays: 5,
                    stops: [{
                        portName: 'Port Qasim',
                        arrivalDate: '21-11-20',
                        departureDate: '21-11-20'
                    },
                    {
                        portName: 'Port Qasim',
                        arrivalDate: '21-11-20',
                        departureDate: '21-11-20'
                    },
                    {
                        portName: 'Port Qasim',
                        arrivalDate: '21-11-20',
                        departureDate: '21-11-20'
                    },
                    {
                        portName: 'Saudi Port',
                        arrivalDate: '22-11-20',
                        departureDate: '23-11-20'
                    }]
                },
                {
                    departurePort: 'Karachi1',
                    arrivalPort: 'Wuhan1',
                    departureDate: '21-11-20',
                    arrivalDate: '25-11-20',
                    noOfStops: 2,
                    shippingCompany: 'XYZ',
                    oceanCarrier: 'Maersk',
                    noOfDays: 5,
                    stops: [{
                        portName: 'Port Qasim1',
                        arrivalDate: '21-11-20',
                        departureDate: '21-11-20'
                    }
                    ]
                }
              ],
<<<<<<< HEAD
        }
    }

    render() {
        return (
            <div className="container" id="book-container">
                <form className="form-group" action="#" onSubmit={(e) => this.search(e)}>
                <div className="row">
                    <div className="col-lg-2">
                        <label>Container type:</label>
                    </div>
                    <div className="col-lg-3">
                        <div class="form-group">
                            <select class="form-control" id="sel1" required>
=======
              departureDate: new Date(),
              arrivalDate: new Date()
        }
    }

    updateContainerType(event){
        this.setState({
            containerType: event.target.value
        })
    }

    updateContainerSize(event){
        this.setState({
            containerSize: event.target.value
        })
    }

    updateDepartureCountry(event){
        this.setState({
            departureCountry: event.target.value
        })
    }

    updateArrivalCountry(event){
        this.setState({
           arrivalCountry: event.target.value
        })
    }

    updateDepartureCity(event){
        this.setState({
            departureCity: event.target.value
        })
    }

    updateArrivalCity(event){
        this.setState({
           arrivalCity: event.target.value
        })
    }

    updateDepartureDate= date =>{
        this.setState({
            departureDate: date
        })
    }

    updateArrivalDate= date =>{
        this.setState({
            arrivalDate: date
        })
    }

    search(event){
        this.setState({
            check: true
        })
    }

    render() {
        return (
            <div className="container" id="book-container">
                <h3>Book container</h3>
                <form className="form-group" action="#" onSubmit={(e) => this.search(e)}>
                <div className="row">
                    <div className="col-lg-2 offset-lg-1">
                        <label>Container type:</label>
                    </div>
                    <div className="col-lg-3 ">
                        <div class="form-group">
                            <select class="form-control" value={this.state.containerType} onChange={(e) => this.updateContainerType(e)} id="sel1" required>
>>>>>>> fe3be23895be1fb6986ed3493f852dac303d46c6
                                <option value="">Select container type</option>
                                <option value="consg_id">Dry storage</option>
                                <option value="consg_id">Flat rack</option>
                                <option value="consg_id">Open top</option>
                                <option value="consg_id">Tunnel</option>
                                <option value="consg_id">Open side storage</option>
                                <option value="consg_id">Double door</option>
                                <option value="consg_id">Refrigrated ISO</option>
                            </select>
                        </div>
                    </div>
<<<<<<< HEAD
                    <div className="col-lg-2 offset-lg-2">
=======
                    <div className="col-lg-2">
>>>>>>> fe3be23895be1fb6986ed3493f852dac303d46c6
                        <label>Container size:</label>
                    </div>
                    <div className="col-lg-3">
                        <div class="form-group">
<<<<<<< HEAD
                            <select class="form-control" id="sel2" required>
=======
                            <select class="form-control" value={this.state.containerSize} onChange={(e) => this.updateContainerSize(e)} id="sel2" required>
>>>>>>> fe3be23895be1fb6986ed3493f852dac303d46c6
                                <option value="">Select container size</option>
                                <option value="consg_id">20 ft Fits up to 28 300 kg & 33 m³</option>
                                <option value="consg_id">40 ft Fits up to 28 800 kg & 67 m³</option>
                                <option value="consg_id">40 ft HC Fits up to 28 690 kg & 76 m³</option>
                                <option value="consg_id">45 ft HC Fits up to 27 650 kg & 85 m³ </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
<<<<<<< HEAD
                    <div className="col-lg-2">
=======
                    <div className="col-lg-2 offset-lg-1">
>>>>>>> fe3be23895be1fb6986ed3493f852dac303d46c6
                        <label>Origin country:</label>
                    </div>
                    <div className="col-lg-3">
                        <div class="form-group">
<<<<<<< HEAD
                            <input className="form-control" placeholder="Enter origin country"></input>
                        </div>
                    </div>
                    <div className="col-lg-2 offset-lg-2">
=======
                            <input className="form-control" value={this.state.departureCountry} onChange={(e) => this.updateDepartureCountry(e)} placeholder="Enter origin country" required/>
                        </div>
                    </div>
                    <div className="col-lg-2 ">
>>>>>>> fe3be23895be1fb6986ed3493f852dac303d46c6
                        <label>Destination country:</label>
                    </div>
                    <div className="col-lg-3">
                        <div class="form-group">
<<<<<<< HEAD
                            <input className="form-control" placeholder="Enter destination country"></input>
=======
                            <input className="form-control" value={this.state.arrivalCountry} onChange={(e) => this.updateArrivalCountry(e)} placeholder="Enter destination country" required/>
>>>>>>> fe3be23895be1fb6986ed3493f852dac303d46c6
                        </div>
                    </div>
                </div>
                <div className="row">
<<<<<<< HEAD
                    <div className="col-lg-2">
=======
                    <div className="col-lg-2 offset-lg-1">
>>>>>>> fe3be23895be1fb6986ed3493f852dac303d46c6
                        <label>Origin city:</label>
                    </div>
                    <div className="col-lg-3">
                        <div class="form-group">
<<<<<<< HEAD
                            <input className="form-control" placeholder="Enter origin city"></input>
                        </div>
                    </div>
                    <div className="col-lg-2 offset-lg-2">
=======
                            <input className="form-control" value={this.state.departureCity} onChange={(e) => this.updateDepartureCity(e)} placeholder="Enter origin city" required/>
                        </div>
                    </div>
                    <div className="col-lg-2 ">
>>>>>>> fe3be23895be1fb6986ed3493f852dac303d46c6
                        <label>Destination city:</label>
                    </div>
                    <div className="col-lg-3">
                        <div class="form-group">
<<<<<<< HEAD
                            <input className="form-control" placeholder="Enter destination city"></input>
=======
                            <input className="form-control" value={this.state.arrivalCity} onChange={(e) => this.updateArrivalCity(e)} placeholder="Enter destination city" required/>
>>>>>>> fe3be23895be1fb6986ed3493f852dac303d46c6
                        </div>
                    </div>
                </div>
                <div className="row">
<<<<<<< HEAD
                    <div className="col-lg-2">
=======
                    <div className="col-lg-2 offset-lg-1">
>>>>>>> fe3be23895be1fb6986ed3493f852dac303d46c6
                        <label>Departure date:</label>
                    </div>
                    <div className="col-lg-3">
                        <div class="form-group">
<<<<<<< HEAD
                        <DatePicker className="form-control"/>
                        </div>
                    </div>
                    <div className="col-lg-2 offset-lg-2">
=======
                        <DatePicker className="form-control" selected={this.state.departureDate} onChange={this.updateDepartureDate} required/>
                        </div>
                    </div>
                    <div className="col-lg-2 ">
>>>>>>> fe3be23895be1fb6986ed3493f852dac303d46c6
                        <label>Arrival date:</label>
                    </div>
                    <div className="col-lg-3">
                        <div class="form-group">
<<<<<<< HEAD
                        <DatePicker className="form-control" />
=======
                        <DatePicker className="form-control" selected={this.state.arrivalDate} onChange={this.updateArrivalDate} required/>
>>>>>>> fe3be23895be1fb6986ed3493f852dac303d46c6
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <br/>
                        <br/>
                        <button type="submit" className="btn btn-custom">Search</button>
                    </div>
                </div>
                </form>
                {
                    this.state.check === true &&
                    <SearchResult  searchResult={this.state.searchResult} />  
                }
            </div>
        )
    }
}

export default BookContainer