import React ,{Component} from "react";
import User from "./User";
class Users extends Component{
    render()
    {
        const {users} = this.props;
        return (
            <table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">Ad</th>
      <th scope="col">Soyad</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map(user=>{
            const {id,name,mail,age,surname}= user;
            return <User key={id} User id={id}
            name={name}
            surname={surname}
            mail={mail}
            age={age}/>;            
        })
    }
    </tbody>
</table>
        )
    }
}
export default Users;