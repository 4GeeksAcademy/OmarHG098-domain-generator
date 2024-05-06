/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
let domainName = () => {
  const domains = document.getElementById("domains");
  let consoleDomains = [];
  let pronouns = ["the", "our"];
  let adjs = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let extensions = [".com", ".net", ".io", ".es"];

  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        for (let extension of extensions) {
          domains.innerHTML += `<p> ${pronoun}${adj}${noun}${extension}<p>`;
          console.log(`${pronoun}${adj}${noun}${extension}`);
        }
      }
    }
  }
};
window.onload = function() {
  //write your code here
  domainName();
};
