import React,{Component} from 'react';
import './project.css';
import Radium from 'radium';

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
  let desc,gitLink;
  let images=[];
  switch(str){
    case 'Notepad':
        desc=`A  text  editor  which  helps  you  save  your  todos  and  other  text documents ,
        along  with  some  other  functions.`;
        gitLink=`https://github.com/Rudra0711/Textpad`;
        images=[`Text Editor`,`Menu`,`SaveAs Dialog Box`,`Find-Replace Dialog Box`];
        break;
    case 'Tic-tac-toe Game':
        desc=`The  old  memories!  I  don't  feel  like  there's  any  description  required  :)`;
        gitLink=`https://github.com/Rudra0711/Tic_Tac_Toe`;
        images=[`Welcome`,`Players credentials`,`The Grid`,`The Game`,`Result`];
        break;
    case 'Blogging App':
        desc=`A  blog  posting  app  on  which  after  signing  up , you  can  post  your  own  content ,
         as  well  as  view  the  posts  of  others  as  well ,  with  the  like  and  comment  features  too.`;
        gitLink=`https://github.com/Rudra0711/Blog-App`;
        images=[`Login Screen`,`SignUp Screen`,`Posts`,`Profile Screen`,`Create Post Screen`,`Comment Section`];
        break;
    case 'Explore The World':
        desc=`An  app  in  which  you  can  see  the  address  and  real  image  of  your  current  location  as  well  as
         of  any  location  in  the  world  you  want  to .`;
        gitLink=`https://github.com/Rudra0711/Explore-The-World_App`;
        images=[`Welcome Screen`,`Guide`,`Current location`,`Location you fetched for`];
        break;
    case 'Weather App':
        desc=`An  app  which  shows  the  current  weather  of  the  place  which  you  search  for.`;
        gitLink=`https://github.com/Rudra0711/Weather-Android`;
        images=[`Home Screen`,`Search Screen`,`Weather Screen`];
        break;
    case 'News Page':
        desc=`A  static  News  web  page.`;
        gitLink=`https://github.com/Rudra0711/News-Web-Page`;
        images=[`The Page`];
        break;
    case 'Clock':
        desc=`An  analog  clock  showing  the  current  time.`;
        gitLink=`https://github.com/Rudra0711/Clock_web_page`;
        images=[`The Clock`];
        break;
    case 'Chat App':
        desc=`A web chatting app in which you can chat in rooms(groups) with others as well as send them your current location as well.`;
        gitLink=`https://github.com/Rudra0711/ChatApp`;
        images=[`Home Page`,`Chat Page`,`Location Page`];
        break;
    case 'Location Finder App':
        desc=`An app which tells you the full address, latitude and longitude of the place which you searched for`;
        gitLink=`https://github.com/Rudra0711/Weather-APIs_nodejs`;
        images=[`There are no images since it is a Command-Line App`];
        break;
    case 'Notes App':
        desc=`An app to help you save up your tasks and todos`;
        gitLink=`https://github.com/Rudra0711/Notes-App_nodejs`;
        images=[`There are no images since it is a Command-Line App`];
        break;
    case 'My Portfolio':
        desc=`The portfolio which you are currently viewing.`;
        gitLink=`https://github.com/Rudra0711/Portfolio`;
        break;
    case 'Hangman Game':
        desc=`The popular Hangman Game!`;
        gitLink=`https://github.com/Rudra0711/The-Hangman-Game_python`;
        images=[`There are no images since it is a Command-Line App`];
        break;
    case 'Book Scraping App':
        desc=`An app which scrapes the website 'http://books.toscrape.com/' to get the info about a particular book .`;
        gitLink=`https://github.com/Rudra0711/Web-Scraping_python`;
        images=[`There are no images since it is a Command-Line App`];
        break;
    default :
        desc=`No data found!`;
        break;
  }

  return(
    <div id="body2">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
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
