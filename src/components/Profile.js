import React, { Component } from 'react'
import {getProfile} from './UserFunctions'

class Profile extends Component {
    constructor(){
        super()
        this.state={
            first_name:'',
            last_name:'',
            email:'',
        }
    }
    componentDidMount() {
        getProfile().then(res => {
            this.setState({
                first_name: res.user.first_name,
                last_name: res.user.last_name,
                email: res.user.email
            })
        });
    }
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
            <div className="col-sm-4 mx-auto">
                <h1 className="text-center">PROFILE</h1>
            </div>
        </div>
        <table className="table cold-md-4 mx-auto">
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>{`${this.state.first_name} ${this.state.las_name}`}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{this.state.email}</td>
                </tr>
            </tbody>
        </table>
      </div>
    )
  }
}

export default Profile
