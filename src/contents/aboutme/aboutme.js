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
        <h3 id="about">
        Hello..,welcome to my portfolio. So without wasting any time, let me brief you about me.<br/><br/>
        I'm a young software developer who possesses knowledge about programming in Java (SE and EE), Android, Html, Css,
        Javascript, Nodejs, React, Angular and Python, SQL and NOSQL. I've made projects on all of them which you will find in the "My Work"
        section.<br/><br/>
        Talking about the work ethic, I'm someone for whom the work is always being second in the list of priority
        (after my family), dedication, hard and managed work ethic, passion for excellence, working in pressure situations, being career and detail oriented,
        are some of the keys/qualities which defines my personality, along with possessing leadership and managerial skills,
        loving to work with a team as well.<br/><br/>
        I'm currently looking forward towards a career which would give an exposure to as well as challenge my skills, providing an environment
        which would help me expand my abilities and knowledge, for the betterment of me as an individual as well as for the firm.
        <br/><br/>
        Besides programming, I've a strong affection for cricket and music, along with health and fitness.
        </h3>
      </div>
    );
  }
}

export default AboutMe;
