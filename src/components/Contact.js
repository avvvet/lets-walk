import React, {Component} from 'react';
import { render } from 'react-dom';
import {Grid, FormGroup, FormControl, ControlLabel, HelpBlock, PageHeader, Button, Alert} from 'react-bootstrap';

class Contact extends Component {
  constructor() {
    super();
    
    this.state = {
      name: '',
      email: '',
      msg: '',
      errors: []
    }
  }
  
  validate = () => {
    let isError =false;
    let errors = [];

    if(this.state.name.length < 4) {
      isError = true;
      errors.push("Name field need to be at least 4 characters.");
    }

    if(this.state.email.indexOf('@') === -1) {
      isError = true;
      errors.push("Email address is not valid.");
    }

    if(this.state.msg.length === 0) {
      isError = true;
      errors.push("Your message field is empty.");
    }

    if(isError){
     let error_list = this.getErrorList(errors);
     render(<Alert bsStyle="danger" onDismiss={this.handleDismiss}>{error_list}</Alert>,document.getElementById('infoError'));
     return isError;
    }
  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();

    const err = this.validate();
    if(!err){
      this.setState({
        name: '',
        email: '',
        msg: '',
        errors: []
      });
    render(<Alert bsStyle="success" onDismiss={this.handleDismiss}>Thank you for your message !</Alert>,document.getElementById('infoError'));
   }
  }

  getErrorList(errors){
    let error_list = errors.map(error => {
        return <li>{error}</li>
    });
    return error_list;
  }

  render(){
    return(
      <div>
        <Grid>
          <PageHeader>
            Contact Us
          </PageHeader>
          
          <form>
            <div id='infoError'></div>
            <FormGroup 
            >

             <ControlLabel>Name</ControlLabel>
             <FormControl
              name="name"
              type="text"
              value={this.state.name}
              nameError={this.state.nameError}
              placeholder="Enter your name"
              onChange={e => this.change(e)}
             >
             </FormControl>
             <FormControl.Feedback/>
             <HelpBlock>You may enter you full name or nick name.</HelpBlock>

             <FormControl
              type="email"
              name="email"
              emailError={this.state.emailError}
              value={this.state.email}
              placeholder="Enter your email address"
              onChange={e => this.change(e)}
             >
             </FormControl>
             <FormControl.Feedback/>
             <HelpBlock>youremail@example.com</HelpBlock>

            <ControlLabel>Message</ControlLabel>
            <FormControl 
             componentClass="textarea"
             name="msg"
             msgError={this.state.msgError}
             value={this.state.msg}
             placeholder="Write your message"
             onChange={e => this.change(e)}
            >
            </FormControl>
                        
            </FormGroup>
            <Button type="submit" bsStyle="primary" onClick={e => this.onSubmit(e)}  >Submit</Button>
          </form>
          
        </Grid>
      </div>
    );
  }
}
export default Contact;