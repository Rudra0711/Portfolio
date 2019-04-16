import React,{Component} from 'react';
import img from './pic.jpg';
import {NavLink} from 'react-router-dom';
import './homepage.css';

class HomePage extends Component{
  render(){
    return(
      <div id="body3">

        <div id="name"><h1 >RUDRAKSH  JHALANI</h1></div>
<div id="panel"></div>
        <h2 id="first"><NavLink class="active" to="/aboutme">A<br/>B<br/>O<br/>U<br/>T<br/> M<br/>E</NavLink></h2>

        <img class="pic" src={img} alt="My pic"/>
        <div id="second">
        <h2 ><NavLink class="active" to="/mywork">M<br/>Y<br/> W<br/>O<br/>R<br/>K</NavLink></h2>
        </div>
        <div id="details">
          <h2 class="subDetails" id="descHeading">A Sophophilic!</h2>
          <h2 class="subDetails" id="age">Age : 17</h2>
          <h2 class="subDetails" id="currStatus">Currently in : <br/>12th standard (Comm. with C.Sc.)</h2>
          <h2 class="subDetails" id="email">Email : rudrakshjhalani24@gmail.com</h2>
          <h2 class="subDetails" id="nationality">Nationality : Indian</h2>
          <h2 class="subDetails" id="interests">Major Interests : </h2>
          <ul class="subDetails" id="interestItems">
            <h4>Computer Programming</h4>
            <h4>Health & Fitness</h4>
            <h4>Sports - Cricket, Badminton, Athletics</h4>
            <h4>Music - Guitar</h4>
          </ul>
        </div>
        <h3 id="knowmore">[ADD TOOLTIPS IN MY_WORK SECTION]Heyy there, this is my portfolio which will brief you quickly about myself. Visit the links to know more....</h3>

      </div>
    );
  }
}

export default HomePage;
