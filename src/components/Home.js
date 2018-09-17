import React, {Component} from 'react';
import {
  Button, 
  Grid,
  Carousel,
  Row,
  Col,
  Image
} from 'react-bootstrap';
import './css/home.css';

class Home extends Component {
  render() {
    

    return (
      <div>
        <Grid>

        <Carousel>
          <Carousel.Item>
            <img width={1500}  alt="900x500" src="assets/carousel_3.jpeg" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={1500}  alt="900x500" src="assets/carousel_2.jpeg" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={1500}  alt="900x500" src="assets/carousel_1.jpeg" />  
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>        
        
        <Row className="show-grid text-center marketing">
          <Col xs={12} md={4} className={"user-wrapper"}>
            <Image src="assets/user_1.jpg" circle height="180" ></Image>
            <h2>Daniel Abreham</h2>
            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
            <Button bsStyle="info">View detail</Button>
          </Col>
          <Col xsHidden md={4}>
          <Image src="assets/user_2.jpg" circle height="180" ></Image>
            <h2>Kelly Scott</h2>
            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
            <Button bsStyle="info">View detail</Button>
          </Col>
          <Col xsHidden md={4}>
          <Image src="assets/user_3.jpg" circle height="180"></Image>
            <h2>Robert Thomas</h2>
            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
            <Button bsStyle="info">View detail</Button>
          </Col>
        </Row>
        </Grid>
     </div>  
    );
  } 
}

export default Home;