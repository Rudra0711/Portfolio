import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';

import HomePage from './contents/homepage/homepage';
import AboutMe from './contents/aboutme/aboutme';
import MyWork from './contents/mywork/mywork';
import Project from './contents/projects/project';
import Data from './contents/data';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

class App extends Component {

  render() {
    let i=0;
    let data=Data;
    var route=[];
    var ROUTES=data.map((info) => (
      <div key={data.id}>
      {info.links.map((linkInfo) => (
          <Route key={linkInfo.linkTo} path={"/$var".replace('$var',linkInfo.linkTo)} exact component={Project}/>
      ))}
      </div>
    ));



    return (
      <BrowserRouter>
      <Switch>
      <Route path="/" exact component={HomePage}/>
      <Route path="/aboutme" exact component={AboutMe}/>
      <Route path={"/mywork#$var".replace('#$var','')} exact component={MyWork} />
        { ROUTES.map((info,index) => (
          <div key={data.id}>
            <Route  path={info[index]} exact component={Project}/>
          </div>
        )) }
       <Route style={{textAlign:'center'}} render={() => <h1 id="notfound">Oops..!No page found</h1> } />
      </Switch>
      </BrowserRouter>
    );
  }
}


export default Radium(App);
// ROUTES.map((info,index) => (
//   <div key={data.id}>
//
//     <Route  path={info[index]} exact component={Project}/>
//
//   </div>
// ))

// <Route path={"/$var".replace('$var','project')} exact component={AboutMe}/>
// <Route path="/notesapp" exact component={Project}/>
//
// <Route style={{textAlign:'center'}} render={() => <h1 id="notfound">Oops..!No page found</h1> } />
