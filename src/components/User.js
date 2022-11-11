import React, {Component} from "react";
class User extends Component{
    render()
    {
        const {name,surname} = this.props;
        return(
            <tr>
                <td>{name}</td>
                <td>{surname}</td>
            </tr>
        )
    }
}
export default User;