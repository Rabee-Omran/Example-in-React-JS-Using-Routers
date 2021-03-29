import React, { Component } from 'react';
import {getUser} from '../Api/Users';
import ViewUser from '../components/ViewUser';
export default class UserPage extends Component{


    state = {
        user:{},
       
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
      
render (){

        return <div>
                    <h3>User</h3>
                    <ViewUser user = {this.state.user} />

                    
      </div>
    }
}