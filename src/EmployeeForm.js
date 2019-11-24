import React from 'react'

class EmmployeeForm extends React.Component{

    constructor()
    {
        super();
        this.ageChanged = this.ageChanged.bind(this);
        this.nameChanged = this.nameChanged.bind(this);
        this.parentNameChanged = this.parentNameChanged.bind(this);
        this.emailChanged = this.emailChanged.bind(this);
        this.parentPhoneNumberChanged = this.parentPhoneNumberChanged.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state={
            age:0,
            Name: '',
            Email:'',
            ParentPhoneNumber: '',
            ParentName: '',
            isUnderaged: false,
        }
    }

    ageChanged(e)
    {
        if(e.target.value>=18)
        {
            this.setState({age : e.target.value, isUnderaged : false})
        }
        else
        {
           this.setState({age : e.target.value, isUnderaged : true})
        }
    }
    nameChanged(e){
        this.setState({Name : e.target.value})
    }
    parentNameChanged(e){
        this.setState({ParentName : e.target.value})
    }
    emailChanged(e){
        this.setState({Email: e.target.value})
    }
    parentPhoneNumberChanged(e){
        this.setState({ParentPhoneNumber: e.target.value})
    }

    handleSubmit(event) {
        alert('Wysłano następujące wypracowanie: ' + this.state.age);
        event.preventDefault();
      }

render(){
    return(
        <div>
            <form>
                <div>
                <label>Age</label>
                <input type="number" id="form_age" onChange={this.ageChanged} />
                </div>
                <div style={{display:(this.state.isUnderaged? 'none' : 'block')}}>
                    <label>Name</label>
                    <input type="text" id="form_name" onChange={this.nameChanged} />
                </div>
                <div style={{display:(this.state.isUnderaged? 'none' : 'block')}}>
                    <label>Email</label>
                    <input type="text" id="form_email" onChange={this.emailChanged} />
                </div>
                <div style={{display:(this.state.isUnderaged? 'block' : 'none')}}>
                    <label>Parent Name</label>
                    <input type="text" id="form_parent_name" onChange={this.parentNameChanged} />
                </div>
                <div style={{display:(this.state.isUnderaged? 'block' : 'none')}}>
                    <label>Parent Phone Number</label>
                    <input type="text" id="form_parent_phone_number" onChange={this.parentPhoneNumberChanged} />
                </div>
                <input type="submit" value="Wyślij" onClick={this.handleSubmit} />
            </form>
        </div>
    )
}

}
export default EmmployeeForm
