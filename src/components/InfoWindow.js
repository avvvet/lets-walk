import React, {Component} from 'react';
import {Button, Image, Label} from 'react-bootstrap';

class InfoWindow extends Component {
  render(){
    return (
      <div className="div-card">
        <Image src={this.props.user.picture.medium} circle height="120" ></Image>
        <div className="card-title">{this.props.user.name}</div>
        <h5>Company <Label>{this.props.user.company.name}</Label></h5>
        <h5>Address <Label>{this.props.user.address.street}, {this.props.user.address.suite}</Label></h5>
        <h5>City <Label>{this.props.user.address.city}</Label></h5>
        <h5>Phone <Label>{this.props.user.phone}</Label></h5>
        <h5>Email <Label>{this.props.user.email}</Label></h5>
        <h5>Business <Label bsStyle="success">{this.props.user.company.bs}</Label></h5>
        <div className="div-button-box"><Button bsStyle="info">Request Walk</Button></div>
    </div>
    );
  }
}
export default InfoWindow;
