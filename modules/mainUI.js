import { toactivities } from "./acitivities.js";
import { toassets } from "./assets.js";
import { toMenu } from "./menu.js";
import { torelationships } from "./relationships.js";
import { startNewLife } from "../index.js";
import { newLife } from "../modules/person.js";

// make all stats show integers converted to Strings so when ints change their value it dinamically reflects on the text displayed in each bar

let mainFrame = document.createElement("div");
export let mainUI = document.createElement("div");
let ageBox = document.createElement("div");
let ageBtn = document.createElement("div");
let age = 0;

//topUI
let topUI = document.createElement("div");
let charInfo = document.createElement("div");
let charInfoL = document.createElement("div");
let face = document.createElement("div");
let briefInfoBox = document.createElement("div");
let briefInfo = document.createElement("div");
let occupation = document.createElement("div");
let charInfoR = document.createElement("div");
let menuIcon = document.createElement("div");

menuIcon.classList.add("menuIcon");
menuIcon.addEventListener("click", () => {
  // mainUI.style.display = 'none';
  toMenu();
});

briefInfoBox.append(briefInfo, occupation);
charInfoL.append(face, briefInfoBox);
charInfo.append(charInfoL, charInfoR);
topUI.append(menuIcon, charInfo);

//midUI
let midUI = document.createElement("div");
let events = document.createElement("div");
let eventName = document.createElement("h1");
let eventInfo = document.createElement("p");

//bottomUI
let bottomUI = document.createElement("div");
let bottomLeft = document.createElement("div");

let bottomLeftOne = document.createElement("div");
let bottomLeftTwo = document.createElement("div");

let bottomRight = document.createElement("div");
let bottomRightOne = document.createElement("div");
let bottomRightTwo = document.createElement("div");

let statsMain = document.createElement("div");
let stats = document.createElement("div");

//stats

let happinessDiv = document.createElement("div");
let healthDiv = document.createElement("div");
let smartsDiv = document.createElement("div");
let looksDiv = document.createElement("div");
// ----------------------------------------------------
let happiness = document.createElement("h2");
let health = document.createElement("h2");
let smarts = document.createElement("h2");
let looks = document.createElement("h2");
// ----------------------------------------------------

let happinessBar = document.createElement("div");
let healthBar = document.createElement("div");
let smartsBar = document.createElement("div");
let looksBar = document.createElement("div");

let barPercentage = document.createElement("p");
let barPercentage1 = document.createElement("p");
let barPercentage2 = document.createElement("p");
let barPercentage3 = document.createElement("p");

// ----------------------------------------------------

let lifeStage = document.createElement("div");
let assets = document.createElement("div");
let relationships = document.createElement("div");
let activities = document.createElement("div");
let options = document.createElement("div");

export function helloScreen() {
  //functions
  topUIfunc();
  midUIfunc();
  bottomUIfunc();
  userInterface();

  function userInterface() {
    ageBtn.classList.add("ageBtn");

    ageBtn.textContent = `+\n Age`;

    ageBox.classList.add("ageBox");
    ageBox.appendChild(ageBtn);

    mainUI.append(topUI, midUI, bottomUI);

    ageBox.removeEventListener("click", ageBoxClickHandler);
    ageBox.addEventListener("click", ageBoxClickHandler);
  }

  let main = document.querySelector("#main");
  mainUI.classList.add("mainUI");
  main.appendChild(mainUI);
  mainFrame.classList.add("mainFrame");
  mainFrame.appendChild("mainUI");
  main.appendChild(mainFrame);
}

function ageBoxClickHandler() {
  age++;
  eventName.textContent = `Age: ${age}`;
  console.log("You're 1 year older");
  console.log(`You\'re ${age} years old now`);

  switch (age) {
    case 5:
      alert("You are now in elementary school");
      break;
    case 16:
      alert("You are now in high school");
      break;
    case 19:
      alert("Graduation!");
      let prmt = prompt(
        "Are you going to enrol in college or search for a job?"
      );
      if (prmt == "college") {
        alert("You're now in college!");
      } else {
        let profession = prompt("Choose your profession");
        alert(`You are now a ${profession}`);
      }
      break;
  }

  if (age == 19) {
  }
}

function topUIfunc() {
  topUI.classList.add("topUI");
  charInfo.classList.add("charInfo");
  charInfoL.classList.add("charInfoBox");
  charInfoR.classList.add("charInfoBox");
}

function midUIfunc() {
  midUI.classList.add("midUI");
  events.classList.add("events");
  eventName.classList.add("eventName");
  eventInfo.classList.add("eventInfo");

  eventName.textContent = `Age: ${age}`;
  eventInfo.textContent = `${startNewLife.name} was born today. His parents are celebrating!`;

  events.append(eventName, eventInfo);
  midUI.append(events);
}

function bottomUIfunc() {
  bottomLeft.classList.add("bottomLeft");
  bottomRight.classList.add("bottomRight");

  bottomLeftOne.classList.add("bottomLeftOne");
  bottomLeftTwo.classList.add("bottomLeftTwo");
  bottomRightOne.classList.add("bottomRightOne");
  bottomRightTwo.classList.add("bottomRightTwo");

  lifeStage.classList.add("lifeStage");
  assets.classList.add("assets");
  relationships.classList.add("relationships");
  activities.classList.add("activities");

  options.classList.add("options");

  statsMain.classList.add("statsMain");

  stats.classList.add("stats");

  bottomUI.classList.add("bottomUI");

  activities.addEventListener("click", () => {
    toactivities();
  });

  assets.addEventListener("click", () => {
    toassets();
  });

  relationships.addEventListener("click", () => {
    torelationships();
  });

  happinessDiv.setAttribute("class", "statBox happinessDiv");
  healthDiv.setAttribute("class", "statBox healthDiv");
  smartsDiv.setAttribute("class", "statBox smartsDiv");
  looksDiv.setAttribute("class", "statBox looksDiv");
  // ----------------------------------------------------
  happiness.setAttribute("class", "statText happiness");
  health.setAttribute("class", "statText health");
  smarts.setAttribute("class", "statText smarts");
  looks.setAttribute("class", "statText looks");

  happiness.textContent = "Happiness 😊";
  health.textContent = "Health ❤️";
  smarts.textContent = "Smarts 🧠";
  looks.textContent = "Looks 😎";

  // ----------------------------------------------------
  happinessBar.setAttribute("class", "statBar");
  healthBar.setAttribute("class", "statBar");
  smartsBar.setAttribute("class", "statBar");
  looksBar.setAttribute("class", "statBar");

  bottomLeftOne.append(lifeStage);
  bottomLeftTwo.append(assets);
  bottomRightOne.append(relationships);
  bottomRightTwo.append(activities);

  bottomLeft.append(bottomLeftOne, bottomLeftTwo);
  bottomRight.append(bottomRightOne, bottomRightTwo);

  options.append(bottomLeft, ageBox, bottomRight);

  stats.append(happinessDiv, healthDiv, smartsDiv, looksDiv);

  statsMain.append(stats);

  //bars

  happinessDiv.append(happiness, happinessBar);
  healthDiv.append(health, healthBar);
  smartsDiv.append(smarts, smartsBar);
  looksDiv.append(looks, looksBar);

  bottomUI.append(options, statsMain);

  barPercentage.textContent = "100%";
  barPercentage1.textContent = "100%";
  barPercentage2.textContent = "100%";
  barPercentage3.textContent = "100%";

  barPercentage.classList.add("barPercentage");
  barPercentage1.classList.add("barPercentage");
  barPercentage2.classList.add("barPercentage");
  barPercentage3.classList.add("barPercentage");

  happinessBar.appendChild(barPercentage);
  healthBar.appendChild(barPercentage1);
  smartsBar.appendChild(barPercentage2);
  looksBar.appendChild(barPercentage3);
}
