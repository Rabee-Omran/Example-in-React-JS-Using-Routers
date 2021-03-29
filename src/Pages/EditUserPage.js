import React, { Component } from 'react';
import {getUser, updateUser} from '../Api/Users';
import UsersForm from '../components/UserForm';
export default class EditUserPage extends Component{


    state = {

        user:{
            name:'', 
            email:''
        },
       
      }
    
      componentDidMount = ()=> {
      const user_id = this.props.match.params.id ;
      getUser(user_id).then(response=>{
          this.setState({
              user : response.data
          })
      }).catch(
        ()=>{alert('an error ')
      });
      }

    
  updateUser = (values) => {

    const id = this.state.user.id
    updateUser(id, values).then(()=> alert('Done'));
    this.props.history.push('/')
}
      
render (){

        return <div>
                    <h3>User</h3>
                    <UsersForm values = {this.state.user} onSubmit = {this.updateUser}/>

                    
      </div>
    }
}