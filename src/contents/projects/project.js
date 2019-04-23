import React,{Component} from 'react';
import './project.css';
import Radium from 'radium';
import $ from 'jquery';

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
  let per;
  let desc,styles,gitLink,createdStyleTag;
  let images=[];
  switch(str){
    case 'Notepad':
        desc=`A  text  editor  which  helps  you  save  your  todos  and  other  text documents ,
        along  with  some  other  functions.`;
        gitLink=`https://github.com/Rudra0711/Textpad`;
        images=[`Text Editor`,`Menu`,`SaveAs Dialog Box`,`Find-Replace Dialog Box`];
        break;
    case 'Tic-tac-toe Game':
        desc=`The old memories! \n I don't feel like there's any description required :)`;
        gitLink=`https://github.com/Rudra0711/Tic_Tac_Toe`;
        images=[`Welcome`,`Players credentials`,`The Grid`,`The Game`,`Result`];
        break;
    case 'Notepad':
        desc=`A  text  editor  which  helps  you  save  your  todos  and  other  text documents ,
        along  with  some  other  functions.`;
        gitLink=`https://github.com/`;
        images=[`Text Editor`,`Menu`,`SaveAs Dialog Box`,`Find/Replace Dialog Box`];
        break;
    case 'Notepad':
        desc=`A  text  editor  which  helps  you  save  your  todos  and  other  text documents ,
        along  with  some  other  functions.`;
        gitLink=`https://github.com/`;
        images=[`Text Editor`,`Menu`,`SaveAs Dialog Box`,`Find/Replace Dialog Box`];
        break;
    case 'Notepad':
        desc=`A  text  editor  which  helps  you  save  your  todos  and  other  text documents ,
        along  with  some  other  functions.`;
        gitLink=`https://github.com/`;
        images=[`Text Editor`,`Menu`,`SaveAs Dialog Box`,`Find/Replace Dialog Box`];
        break;
    case 'Notepad':
        desc=`A  text  editor  which  helps  you  save  your  todos  and  other  text documents ,
        along  with  some  other  functions.`;
        gitLink=`https://github.com/`;
        images=[`Text Editor`,`Menu`,`SaveAs Dialog Box`,`Find/Replace Dialog Box`];
        break;
    case 'Notepad':
        desc=`A  text  editor  which  helps  you  save  your  todos  and  other  text documents ,
        along  with  some  other  functions.`;
        gitLink=`https://github.com/`;
        images=[`Text Editor`,`Menu`,`SaveAs Dialog Box`,`Find/Replace Dialog Box`];
        break;
    case 'Notepad':
        desc=`A  text  editor  which  helps  you  save  your  todos  and  other  text documents ,
        along  with  some  other  functions.`;
        gitLink=`https://github.com/`;
        images=[`Text Editor`,`Menu`,`SaveAs Dialog Box`,`Find/Replace Dialog Box`];
        break;
    default:
    per=
        (
          <div id="body2">
          <h1 id="info">No Info!!</h1>
          </div>
        )
    break;

  }

  return(
    <div id="body2">
    <h1 title={str} id="projHeading">{str}</h1>
    <h2 id="lang">-{LANG}</h2>

    <div>
    <h5 id="desc">{desc}</h5>
      </div>
        <div>
    <h3 id="github">GitHub : </h3>
    <h6 id="gitLink"><a id="gitLink" href={gitLink}>{gitLink}</a></h6>
    </div>
    <div id="listsDiv">
      <ol id="lists">
  {
    images.map((name) => (

          <li key={name} class="items" id={name.replace(/ /g,'')}><h4 id="info">{name}</h4></li>
    ))
  }
  </ol>

  </div>
      </div>
  );
  }
}

export default Radium(Projects);
