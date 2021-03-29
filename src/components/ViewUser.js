import {withRouter} from 'react-router-dom';


const ViewUser =  function(props){
    return  <div>

        <h6>ID : {props.match.params.id }</h6>
       
     <h3> User Detail </h3>
     <div> Name : {props.user.name}</div>
     <div> E-Mail : {props.user.email}</div>
     </div> ;
     }


export default withRouter(ViewUser);