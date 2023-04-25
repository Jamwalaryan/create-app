import logo from './logo.svg';
import './App.css';
import ButtonClick from './components/button';
import { Fragment } from 'react';

function App() {
  function aryan(){
    alert("aryan")
    document.getElementById("image").innerHTML= <img width= '70px' src  = "https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg "></img>
      document.getElementById("designation").innerHTML= "<h5>UI/UX Designer</h5>"
      document.getElementById("userName").innerHTML= "<h1>Aryan Jamwal</h1>"
      document.getElementById("information").innerHTML="<p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>"
  }

  function sanju(){
    alert("sanju")
    document.getElementById("image").innerHTML= <img width= '70px' src  = " https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg"></img>
      document.getElementById("designation").innerHTML= "<h5>frontend developer</h5>"
      document.getElementById("userName").innerHTML= "<h1>Sanju Choudhary</h1>"
      document.getElementById("information").innerHTML="<p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>"
  }

  function shubham(){
    alert("shubham")
    document.getElementById("image").innerHTML= <img width= '70px' src  = " https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg"></img>
      document.getElementById("designation").innerHTML= "<h5>backend developer</h5>"
      document.getElementById("userName").innerHTML= "<h1>shubham jamwal</h1>"
      document.getElementById("information").innerHTML="<p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>"
  }
 
  return (
    <Fragment>
    <div className="container">
      <div className="container2">
        <div id="image"><img  width= '70px' src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg "/></div>
        <div id= "designation"><h5>UI/UX Designer</h5></div>
        <div id="userName"><h1>Aryan Jamwal</h1></div>
        <div id= "information"><p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p><br>
        </br>
        <p>see more Buttons...</p>

        <ButtonClick onClickFunction={aryan} classname="firstbtn" name="Aryan"/>
        <ButtonClick onClickFunction={sanju} classname="secondbtn" name="sanju"/>
        <ButtonClick onClickFunction={shubham} classname="thirdbtn" name="shubham"/>
        </div>
      </div>
     
    </div>
    </Fragment>
  );
}

export default App;
