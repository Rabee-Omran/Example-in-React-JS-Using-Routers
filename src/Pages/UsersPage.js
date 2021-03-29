import React, { Component } from 'react';
import {getUsers} from '../Api/Users';
import { Link } from "react-router-dom";

export default class UsersPage extends Component{


    state = {
        users:[],
       
      }
    
      componentDidMount = ()=> {
        getUsers().then(response => {
          this.setState({users : response.data})

        }).catch(
          ()=>{alert('an error ')
        });
      }
      
render (){

        return <div>
                    <h3>Users</h3>
                    <ul>
                        {this.state.users.map(user => 
                            <li key = {user.id}>
                            {user.name} 
                            <Link to ={ '/users/'+user.id} >view</Link>
                           
                            </li>
                        )}
                    
                    </ul>
      </div>
    }
}