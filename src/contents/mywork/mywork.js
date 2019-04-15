import React,{Component} from 'react';
import './mywork.css';
import {BrowserRouter,NavLink,Switch,Route,withRouter} from 'react-router-dom';
import HomePage from '../homepage/homepage';
import AboutMe from '../aboutme/aboutme';
import Project from '../projects/project';
import Data from '../data';

class MyWork extends Component{

  

  render(){

    let data=Data;
    var DATA=data.map((info) => (

     <div key={data.id}>
     <div class="work" id={info.id}><h3 class="topic">{info.id} Developer</h3>
     <ul>
     {info.links.map((linkInfo) => (
         <li key={linkInfo.linkTo} id="links"><NavLink id="links" to={"/$var".replace('$var',linkInfo.linkTo)}>{linkInfo.title}</NavLink></li>
       ))}
       </ul>
     </div>
     </div>

   ));
   var ROUTES=data.map((info) => (
     <div key={data.id}>
     {info.links.map((linkInfo) => (
       <Route key={linkInfo.linkTo} path={"/$var".replace('$var',linkInfo.linkTo)} exact component={AboutMe}/>
     ))}
     </div>
   ));
    return (

      <div>
       <h1 id="workHeader">As a...</h1>
        {DATA}


       </div>
    );
  }
}
export default MyWork;
//  <NavLink id="links" to={"/$var".replace('$var','notesapp')}>NOTESAPP</NavLink>
// <Route path={"/$var".replace('$var','notesapp')} exact component={Project}/>
// <Route path={"/$var".replace('$var','bloggingapp')} exact component={Project}/>
// <BrowserRouter>
// <Switch>
// {info.links.map((linkInfo) => (
//
//   <Route path={"/mywork#var".replace('var',linkInfo.linkTo)} exact component={Project}/>
//   ))}
// </Switch>
// </BrowserRouter>
