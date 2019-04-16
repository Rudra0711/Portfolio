import React,{Component} from 'react';
import './aboutme.css';
import img from './pic.jpg';

class AboutMe extends Component{
  render(){
    return (
      <div id="body4">
        <div class="whole">
        <img class="picabt" src={img} alt="My pic"/>
            {
              // <h1 className="aboutHeader" id="firstH">  </h1>
            // <h1 className="aboutHeader" id="secondH"></h1>
          }

        </div>
        <h3 id="desc"><br/>
        This is just a trial part and the real info is yet to be fulfilled.</h3>
      </div>
    );
  }
}

export default AboutMe;
