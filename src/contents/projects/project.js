import React,{Component} from 'react';
import './project.css';

class Projects extends Component{
  render(){

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
