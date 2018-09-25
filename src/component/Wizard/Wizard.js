import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

class Wizard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            houseName: "",
            address: "",
            city: "",
            state: "",
            zip: 0
        };
        this.handleChange = this.handleChange.bind(this)
        this.post=this.post.bind(this)
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });

    }

    post() {
        axios.post(`/api/list`, {
            houseName: this.state.houseName,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip
        })
            .then(res => {
                console.log(res);
                console.log(res.data);

            });


    }

    render() {
        return (
            <div>
                <h1>Wizard</h1>
                <form>
                    <label>Property Name
                <input value={this.state.houseName} onChange={this.handleChange} type="text" name="houseName" />
                    </label>
                    <br />
                    <label> Address
                <input value={this.state.address} onChange={this.handleChange} type="text" name="address" />
                    </label>
                    <br />
                    <label>City
                <input value={this.state.city} onChange={this.handleChange} type="text" name="city" />
                    </label>
                    <label>State
                <input value={this.state.state} onChange={this.handleChange} type="text" name="state" />
                    </label>
                    <label>Zip
                <input value={this.state.zip} onChange={this.handleChange} type="text" name="zip" />
                    </label>
                </form>
                <Link to={'/'}>
                    <button /*on click={}*/>
                        Cancel
                    </button>  
                    <button onClick={this.post}>
                        Complete
                    </button>          
                </Link>
                
            </div>
        )
    }
}

export default Wizard;