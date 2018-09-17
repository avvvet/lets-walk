import React, { Component } from 'react';
import $ from 'jquery';
import MapItem from './MapItem';

class Map extends Component {
  constructor(){
    super();
    this.state = {
      loca: [{lat: 39.0862785, lng: -77.1522993}],
      lat: 39.0862785,
      lng: -77.1522993,
      users: []
    }
  }

  componentWillMount() {
     this.getUsers();
  }
  
  

  getUsers(){
    this.setState({ users: [
      {
        "id": 1,
        "gender": "female",
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": 39.0862785,
            "lng": -77.1512993
          }
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/women/24.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/24.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/24.jpg"
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      },
      {
        "id": 2,
        "gender": "female",
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
          "street": "Victor Plains",
          "suite": "Suite 879",
          "city": "Wisokyburgh",
          "zipcode": "90566-7771",
          "geo": {
            "lat": 39.0852785,
            "lng": -77.1533993
          }
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/women/64.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/64.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/64.jpg"
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
          "name": "Deckow-Crist",
          "catchPhrase": "Proactive didactic contingency",
          "bs": "synergize scalable supply-chains"
        }
      },
      {
        "id": 3,
        "gender": "male",
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
          "street": "Douglas Extension",
          "suite": "Suite 847",
          "city": "McKenziehaven",
          "zipcode": "59590-4157",
          "geo": {
            "lat": 39.0862785,
            "lng": -77.1544693
          }
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/19.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/19.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/19.jpg"
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
          "name": "Romaguera-Jacobson",
          "catchPhrase": "Face to face bifurcated interface",
          "bs": "e-enable strategic applications"
        }
      },
      {
        "id": 4,
        "gender": "female",
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Patricia@kory.org",
        "address": {
          "street": "Hoeger Mall",
          "suite": "Apt. 692",
          "city": "South Elvis",
          "zipcode": "53919-4257",
          "geo": {
            "lat": 39.0842785,
            "lng": -77.1502993
          }
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/women/62.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/62.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/62.jpg"
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
          "name": "Robel-Corkery",
          "catchPhrase": "Multi-tiered zero tolerance productivity",
          "bs": "transition cutting-edge web services"
        }
      }
    ]
    
    });
  }
  
  render(){
    return(
      <MapItem users = {this.state.users} />
    );
  }
}
export default Map