import React,{Component} from 'react';
import Data from '../data';
import {BrowserRouter,NavLink,Route,Switch} from 'react-router-dom';
import './project.css';

class Projects extends Component{
  render(){
  //   let names=Data;
  //   let currName=[];
  //   let currentName=names.map((name) =>
  //   <div>
  //   {name.links.map((subName) =>
  //     currName.push(subName)
  //   )}
  //   </div>
  // );
  // //console.log(currName),
  // let name=[];
  // //let NName=currName.title.find(window.location.pathname.replace('/',''));
  // console.log(name);
  let i=0,str="";

  var proj_name=window.location.pathname.replace('/','');
  while(proj_name.includes('_')){
    proj_name=proj_name.replace('_',' ');
  }

  while(i<proj_name.length){
    if(proj_name.indexOf(' ')>-1){
        str+=proj_name[0].toUpperCase().concat(proj_name.slice(1,proj_name.indexOf(' '))).concat(' ');
        i=proj_name.indexOf(' ');
        proj_name=proj_name.slice(i+1,);
    }else{
      break;
    }
  }

  str+=proj_name[0].toUpperCase().concat(proj_name.slice(1,proj_name.indexOf('-')));
  var lang=proj_name.slice(proj_name.lastIndexOf('-'),proj_name.lastIndexOf('-')+2);
  console.log(lang);
  var LANG=lang[1].toUpperCase().concat(proj_name.slice(proj_name.lastIndexOf('-')+2,));
    return(
      <div >
        <h1 id="projHeading">{str}</h1>
        <h2 id="lang">-{LANG}</h2>
      </div>
    );
  }
}

export default Projects;
