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

  //elements for navbar
  // const element = document.createElement("div");
  const nav = document.createElement("ul");
  const navItem1 = document.createElement("li");
  const navItem2 = document.createElement("li");
  const navItem3 = document.createElement("li");
  const navItem4 = document.createElement("li");
  const navItem5 = document.createElement("li");
  const home = document.createElement("a");
  const start = document.createElement("a");
  const musicplayer = document.createElement("a");
  const userProfil = document.createElement("a");
  const logout = document.createElement("a");

  //navbar
  //Home
  var text = document.createTextNode("SeniorenCafé");
  home.appendChild(text);
  home.href = "http://example.com";
  navItem1.appendChild(home);
  nav.appendChild(navItem1);

  //Start
  var text = document.createTextNode("Admin Board");
  start.appendChild(text);
  start.href = "http://example.com";
  navItem2.appendChild(start);
  nav.appendChild(navItem2);

  //Musicplayer
  var text = document.createTextNode("Muziekspeler");
  musicplayer.appendChild(text);
  musicplayer.href = "http://example.com";
  navItem3.appendChild(musicplayer);
  nav.appendChild(navItem3);

  //UserProfil
  var text = document.createTextNode("Gebruikernaam");
  userProfil.appendChild(text);
  userProfil.href = "http://example.com";
  navItem4.appendChild(userProfil);
  nav.appendChild(navItem4);

  //Logout
  var text = document.createTextNode("Uitloggen");
  logout.appendChild(text);
  logout.href = "http://example.com";
  navItem5.appendChild(logout);
  nav.appendChild(navItem5);
  // element.appendChild(nav);

  return nav;
}

function componentBody() {
  const element = document.createElement("div");
  const title = document.createElement("h1");

  var text = document.createTextNode("Welkom op de homepagina!");
  title.appendChild(text);
  element.appendChild(title);

  return element;
}

function componentFooter() {
  const element = document.createElement("div");
  const footer = document.createElement('footer');
  const paragraph = document.createElement('p');
  const paragraph2 = document.createElement('p');
  const paragraph3 = document.createElement('p');

  var footerText1 = document.createTextNode("Developers: TP & JO");
  var footerText2 = document.createTextNode("thibault.parmentier@example.com");
  var footerText3 = document.createTextNode("justin.ooghe@example.com");
  paragraph.appendChild(footerText1);
  paragraph2.appendChild(footerText2);
  paragraph3.appendChild(footerText3);
  footer.appendChild(paragraph);
  footer.appendChild(paragraph2);
  footer.appendChild(paragraph3);

  // element.appendChild(footer);

  return footer;
}

document.body.appendChild(componentNav());
document.body.appendChild(componentBody());
document.body.appendChild(componentFooter());

