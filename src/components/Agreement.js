import React, {Component} from "react";
class Agreement extends Component{
    constructor(props){
        super(props);
    }
    render()
    {        
        return(
            <div>
            <h3>Sözleşmeyi Şartlarını</h3> 
            <input type="checkbox"/><a>Kabul Ediyorum</a>
            </div>
        )
    }
}
export default Agreement;