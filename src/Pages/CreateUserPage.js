import React, { Component } from 'react';
import {addUser} from '../Api/Users';
import UsersForm from '../components/UserForm';
export default class CreateUserPage extends Component{


    state = {

        user:{
            name:'', 
            email:''
        },
       
      }
    
      
    
    addUser =(values)=> {
        addUser(values).then(()=> alert('Done')).catch(
            ()=>{alert('an error ')
          });
      } 
      
    render (){

        return <div>
                    <h3>User</h3>
                    <UsersForm values = {this.state.user} onSubmit = {this.addUser}/>

                    
      </div>
    }
}