import React,{Component} from 'react';
import img from './pic.jpg';
import {BrowserRouter,NavLink,Route,Switch} from 'react-router-dom';
import './homepage.css';

class HomePage extends Component{
  render(){
    return(
      <div >
        <h1 id="name">RUDRAKSH JHALANI</h1>

        <h2 id="first"><NavLink class="active" to="/aboutme">About me</NavLink></h2>

        <img class="pic" src={img} alt="My pic"/>

        <h2 id="second"><NavLink class="active" to="/mywork">My work</NavLink></h2>
        
        <h3 id="knowmore">Heyy there, this is my portfolio which will brief you quickly about myself. Visit the links to know more....</h3>
      </div>
    );
  }
}

export default HomePage;
