document.addEventListener("DOMContentLoaded", function() {
  var element = document.getElementById("vjs-logobrand-image");
  if (element) {
    element.style.display = "none";
  }
});

const buttonContainer = document.querySelector(".button-container");
const buttonTexts = [
  "01. been a playa",
  "02. thrown a rager",
  "03. opened a textbook",
  "04. had an Indian frenemy",
  "05. ruined someone's life",
  "06. betrayed a friend",
  "07. begged for forgiveness",
  "08. been Daisy Buchanan",
  "09. stalked my own mother",
  "10. been a perfect girl"
];


const buttonUrls = [
  "https://dood.wf/e/z3qvh4g4hobq?c1_file=https://sub.membed.net/sub/never-have-i-ever-season-2-episode-1-been-a-playa/never-have-i-ever-season-2-episode-1-been-a-playa.vtt&c1_label=English",
  "https://dood.pm/e/fvi3m4fgq5m1kvzqlrnwck547mua148n",
  "https://dood.pm/e/nxz3ldg7r5q697q5k22lbcgzzry1loce",
  "https://dood.pm/e/40t7st8iav6bxdi6ilb6rw0p56cpatk0",
  "https://dood.pm/e/7vf9s0admivc653kbah0a0br3yb1m3h0",
  "https://dood.wf/e/tw22ox9ipcjx?c1_file=https://sub.membed.net/sub/never-have-i-ever-season-2-episode-6/never-have-i-ever-season-2-episode-6.vtt&c1_label=English",
  "https://dood.pm/e/6heqj549wq95szebdkxh93xkx2clvkwl",
  "https://dood.pm/e/0dgwr4bi0efrmivlw338n4zeh9s6exmr",
  "https://dood.pm/e/hy472x8s1ix21g90pobwtbhb09243j31",
  "https://dood.pm/e/s2fvwktpvon9hvr92j05q11mzg1s3hum"

  // Add more URLs as needed for each title
];

buttonTexts.forEach((buttonText, index) => {
  const buttonItem = document.createElement("div");
  buttonItem.className = "button-item";

  const button = document.createElement("button");
  button.textContent = buttonText;
  button.style.backgroundColor = "black"; // Set the background color to black

  button.addEventListener("click", () => {
    console.log(`Button "${buttonText}" clicked`);
    if (buttonUrls[index]) {
      setIframeSource(buttonUrls[index]);
    }
  });

  buttonItem.appendChild(button);
  buttonContainer.appendChild(buttonItem);
});


const buttonContainer2 = document.querySelector(".button-container2");
const sessions = [
  "Session 1",
  "Session 2",
  "Session 3",
  "Session 4"

  // Add more sessions as needed
];

sessions.forEach(sessionName => {
  const button = document.createElement("button");
  button.className = "btn btn-primary mt-3 button-item";
  button.textContent = sessionName;
  button.style.backgroundColor = "black"; // Set the background color to black

  button.addEventListener("click", () => {
    console.log(`Button "${sessionName}" clicked`);
    if (sessionName === "Session 1") {
      window.location.href = "index.html"; // Replace with the desired URL for Session 1
    } 
    if (sessionName === "Session 2") {
      window.location.href = "never-2.html"; // Replace with the desired URL for Session 1
    } 
  });

  buttonContainer2.appendChild(button);

  const space = document.createElement("span");
  space.innerHTML = "&nbsp;&nbsp;";
  buttonContainer2.appendChild(space);
});

const iframe = document.getElementById("dynamic-iframe");
const defaultUrl = "https://dood.pm/e/fvi3m4fgq5m1kvzqlrnwck547mua148n";
setIframeSource(defaultUrl);

function setIframeSource(url) {
  iframe.src = url;
}


