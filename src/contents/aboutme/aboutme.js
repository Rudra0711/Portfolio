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
        Hello..,welcome here.:)<br/>
        I'm a young software developer who possesses knowledge in :
        <ul>
        <li>Data Structures</li>
        <li>Algorithms</li>
        <li>Java (SE and EE)</li>
        <li>Android</li>
        <li>Html and Css</li>
        <li>Javascript (ES6)</li>
        <li>Node.js</li>
        <li>React</li>
        <li>Angular</li>
        <li>Python</li>
        <li>SQL (MySQL)</li>
        <li>NOSQL (MongoDB)</li>
        </ul>
        I've made projects on them which you may find in the "My Work" section.<br/><br/>
        Talking about the work ethic, I'm someone for whom the work has always being on the top in the priority list.
        Dedication, hard and managed work ethic, passion for excellence, self-motivation, working in pressure situations, being career and detail oriented,
        are some of the key qualities which defines my personality, along with possessing leadership and managerial skills,
        loving to work with a team as well.<br/><br/>
        I'm currently looking forward towards a career which would give an exposure to as well as challenge my skills, providing an environment
        which would help me grow up my abilities and knowledge, for the betterment of me as an individual as well as for the organisation.
        <br/><br/>
        Besides programming, I've a strong affection for cricket , music, health and fitness and technology.
        </h3>
      </div>
    );
  }
}

export default AboutMe;
