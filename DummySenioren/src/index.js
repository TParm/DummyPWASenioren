import _ from "lodash";
import "./style.css";
import Icon from "./icon.png";
import printMe from "./print.js";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}

function componentNav() {
  const element = document.createElement("div");
  const home = document.createElement("a");
  const start = document.createElement("a");
  const musicplayer = document.createElement("a");
  const userProfil = document.createElement("a");
  const logout = document.createElement("a");

  //navbar
  //Home
  var text = document.createTextNode("Home");
  home.appendChild(text);
  home.href = "http://example.com";
  document.body.appendChild(home);

  //Start
  var text = document.createTextNode("Start");
  start.appendChild(text);
  start.href = "http://example.com";
  document.body.appendChild(start);

  //Musicplayer
  var text = document.createTextNode("Muziekspeler");
  musicplayer.appendChild(text);
  musicplayer.href = "http://example.com";
  document.body.appendChild(musicplayer);

  //UserProfil
  var text = document.createTextNode("Gebruiker");
  userProfil.appendChild(text);
  userProfil.href = "http://example.com";
  document.body.appendChild(userProfil);

  //Logout
  var text = document.createTextNode("Uitloggen");
  logout.appendChild(text);
  logout.href = "http://example.com";
  document.body.appendChild(logout);

  // const btn = document.createElement("button");

  // btn.innerHTML = "Click me and check the console!";
  // btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

function componentBody() {
  const element = document.createElement("div");
  const title = document.createElement("h1");

  title.innerHTML = 'Welkom op de homepagina!';

  return element;
}

function componentFooter() {
  const element = document.createElement("div");
  const footer = document.createElement('footer');
  const paragraph = document.createElement('p');
  const paragraph2 = document.createElement('p');
  const paragraph3 = document.createElement('p');
  const tekst = document.createElement('a');

  paragraph.innerText = 'Developers: TP & JO'
  paragraph2.innerText = 'thibault.parmentier@example.com'
  paragraph3.innerText = 'justin.ooghe@example.com'

  return element;
}

document.body.appendChild(componentNav());
document.body.appendChild(componentBody());
document.body.appendChild(componentFooter());
