import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import House from "../House/House";
import Wizard from "../Wizard/Wizard";


class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }
    componentDidMount() {
      debugger
        axios.get("/api/list")
        .then((res) => {
            debugger    
                this.setState({
                    list: res.data
                })
            }
            )
    }


    render() {
        const newHouse = this.state.list.map((e) => {

            <House
                newHouse={e}
            />

        })


        return (
            /*add list=this.state.list??*/
            <div> 
                <h1>DASHBOARD</h1>
            
                <Link to={'/wizard'}>
                    <button>
                        Add New Property
            </button>
                </Link>
            </div>
        )
    }
}



export default Dashboard;