import React, {Component} from 'react';
import {Grid, Image, Col} from 'react-bootstrap';
import "./css/about.css";

class About extends Component {
    render(){
        return(
          <div>
            <div className="header-box">
              <Image src="assets/about.jpeg"  className="about-header-image" ></Image>
            </div>
            <Grid>
              <Col xs={12} sm={8} smOffset={2}>
              <Image src="assets/chris.jpeg" circle height="180" className="about-user-pic" ></Image>
              <h2> Good Good Father </h2>
              Chris Tomlin
I've heard a thousand stories of what they think you're like
But I've heard the tender whispers of love in the dead of night
And you tell me that you're pleased
And that I'm never alone
You're a good good father
It's who you are, it's who you are, it's who you are
And I'm loved by you
It's who I am, it's who I am, it's who I am
I've seen many searching for answers far and wide
But I know we're all searching
For answers only you provide
'Cause you know just what we need
Before we say a word
You're a good good father
It's who you are, it's who you are, it's who you are
And I'm loved by you
It's who I am, it's who I am, it's who I am
Because you are perfect in all of your ways
You are perfect in all of your ways
You are perfect in all of your ways to us
You are perfect in all of your ways
You are perfect in all of your ways
You are perfect in all of your ways to us
Oh, it's love so undeniable
I, I can hardly speak

Peace so unexplainable
I, I can hardly think
As you call me deeper still
As you call me deeper still
As you call me deeper still
Into love, love, love
You're a good good father
It's who you are, it's who you are, it's who you are
And I'm loved by you
It's who I am, it's who I am, it's who I am
You're a good good father
It's who you are, it's who you are, it's who you are
And I'm loved by you
It's who I am, it's who I am, it's who I am
You're a good good father
It's who you are, it's who you are, it's who you are
And I'm loved by you
It's who I am, it's who I am, it's who I am
You're a good good father
You are perfect in all of your ways
It's who you are, it's who you are, it's who you are
And I'm loved by you
You are perfect in all of your ways
It's who I am, it's who I am, it's who I am
Songwriters: Anthony Brown / Joseph Patrick Martin Barrett
Good Good Father lyrics © Capitol Christian Music Group

              </Col>
            </Grid>
          </div>   
        );
    }
}
export default About;