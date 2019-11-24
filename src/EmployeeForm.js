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
        this.validateEmail = this.validateEmail.bind(this);
        this.validatePhoneNumber = this.validatePhoneNumber.bind(this);

        this.state={
            age:0,
            Name: '',
            Email:'',
            ParentPhoneNumber: '',
            ParentName: '',
            isUnderaged: false,
            isEmailValid:true,
            isPhoneNumberValid: true,
            submitEnabled : true,
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
        let emailValid = this.validateEmail(e.target.value);
        if(emailValid)
        {
            this.setState({Email: e.target.value, isEmailValid:emailValid, submitEnabled : true});
        }
        else{
            
            this.setState({Email: e.target.value, isEmailValid:emailValid, submitEnabled : false});
        }
    }
    parentPhoneNumberChanged(e){
        let phoneNumberValid = this.validatePhoneNumber(e.target.value);
        if(phoneNumberValid)
        {
            this.setState({ParentPhoneNumber: e.target.value, isPhoneNumberValid: phoneNumberValid, submitEnabled : true});
        }
        else{
            this.setState({ParentPhoneNumber: e.target.value, isPhoneNumberValid: phoneNumberValid, submitEnabled : false});
        }
    }

    handleSubmit(event) {
        // let emailValid = this.validateEmail(this.state.Email);
        // let phoneNumberValid = this.validatePhoneNumber(this.state.ParentPhoneNumber);
        // this.setState({isEmailValid : emailValid, isPhoneNumberValid : phoneNumberValid});
        event.preventDefault();
    }

    validateEmail(email){
        let emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        return emailValid;

    }
    validatePhoneNumber(phoenNumber){
        let isNumberValid = phoenNumber.length == 9;
        if(isNumberValid)
        {
            isNumberValid = /^\d+$/.test(phoenNumber);
        }
        return isNumberValid;
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
                    <label style={{color : red , display : (this.state.isEmailValid? 'none' : 'block')}}>Email not valid</label>
                </div>
                <div style={{display:(this.state.isUnderaged? 'block' : 'none')}}>
                    <label>Parent Name</label>
                    <input type="text" id="form_parent_name" onChange={this.parentNameChanged} />
                </div>
                <div style={{display:(this.state.isUnderaged? 'block' : 'none')}}>
                    <label>Parent Phone Number</label>
                    <input type="text" id="form_parent_phone_number" onChange={this.parentPhoneNumberChanged} />
                    <label style={{color : red , display : (this.state.isPhoneNumberValid? 'none' : 'block')}}>Phone number not valid</label>
                </div>
                <input type="submit" value="Wyślij" onClick={this.handleSubmit} style={{enabled : (this.state.submitEnabled? 'true' : 'false')}} />
            </form>
        </div>
    )
}

}
export default EmmployeeForm
