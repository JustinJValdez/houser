import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import House from "../House/House";



class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        axios.get(`/api/list`)
            .then((res) => {
                this.setState({
                    list: res.data
                })
            }
            )
    }


    render() {
        const newHouse = this.state.list.map((e) => {
            return (
                <House
                    newHouse={e}
                />
            )
        })


        return (
            <div>
                <h1>DASHBOARD </h1>

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