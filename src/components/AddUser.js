import React ,{Component} from "react";
class AddUser extends Component{
    state = {
        name: "",
        surname: ""
    };
    onNameChange(e){
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    onSurnameChange(e){
        this.setState({
        [e.target.name] : e.target.value
    });
}
onAddSubmit(e){
   const {addUser} = this.props;
   const {name,surname}=this.state;
   const newUser={
    id: Math.random(),
    name: this.state.name,
    surname:this.state.surname
   };
   addUser(newUser);
    e.preventDefault();
}
    render()
    {
        const{name,surname}=this.state;
      return(
        
        <div className="card">
            <h4 className="card-header">Kullanıcı Ekle</h4>
            <div className="card-body">
            <form id="divform" onSubmit={this.onAddSubmit.bind(this)}>
                <div className="form-group">
                    <label htmlFor="name">İsim</label>
                    <input type="text" required name="name" value={name} 
                    onChange={this.onNameChange.bind(this)}
                     id="name" placeholder="İsim giriniz.." className="form-control" />
                </div>
                <br></br>
                <div className="form-group">
                    <label htmlFor="name">Soyad</label>
                    <input type="text" required name="surname" value={surname} 
                    onChange={this.onSurnameChange.bind(this)}
                     id="name" placeholder="Soyisim giriniz.." className="form-control" />
                </div>
                <br></br>
                <div className="form-group">
                    <label htmlFor="name">Mail</label>
                    <input type="text" name="mail" id="mail" placeholder="Mail adresi giriniz.." className="form-control" />
                </div>
                <br></br>
                <div className="form-group">
                    <label htmlFor="name">Yaş</label>
                    <input type="number" name="age" id="age" placeholder="Yaşınızı giriniz.." className="form-control" />
                </div>
                <br></br>
                <button className="btn btn-primary" type="submit">Kaydet</button>
            </form>
            </div>
        </div>
      )
    }
}
export default AddUser;