import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []

        }
    };

    componentDidMount() {
        axios.get("/api/list")
            .then((res) => {
                this.setState({
                    list: res.data
                })
            })
    }


    render() {
        /*let house= this.state.list.map((house)=>{
            return (
                <House
                
                />

            )
*/
        return (
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