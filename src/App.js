import React,{Component} from "react";
import AddUser from "./components/AddUser";
import Users from "./components/Users";
import Agreement from "./components/Agreement";
class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      users:[
        {
         
        }
      ]
    };
    this.addUser = this.addUser.bind(this);
  }
  addUser(newUser){
    let updateUsers = this.state.users;
    updateUsers.push(newUser);
    
    this.setState({
      users:updateUsers
    });
  }
  render(){

return (
   <div className="container">
    <Agreement/>
    <br></br>
   <AddUser addUser={this.addUser}/>
   <br></br>
   <Users users={this.state.users}/>
   </div>
   
  );
}
}
export default App;
