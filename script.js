document.addEventListener("DOMContentLoaded", function() {
  var element = document.getElementById("vjs-logobrand-image");
  if (element) {
    element.style.display = "none";
  }
});

const buttonContainer = document.querySelector(".button-container");
const buttonTexts = [
  "1. Pilot",
  "2. had sex with Paxton Hall-Yoshida",
  "3. gotten drunk with the popular kids",
  "4. felt super Indian",
  "5. started a nuclear war",
  "6. been the loneliest boy in the world",
  "7. been a big, fat liar",
  "8. pissed off everyone I know",
  "9. had to be on my best behavior",
  "10. said I'm sorry"
];

const buttonUrls = [
  "https://dood.pm/e/twbwwvtu0swpy0m4wh1irkq140eix5pm",
  "https://dood.pm/e/bj78nbpldiw3coeoj8yxtqb84evmooyl",
  "https://dood.pm/e/tycwbdkwb8twmnhwigj1u77y2y1bhs4o",
  "https://dood.pm/e/d89pns2z75x5vph6p3w6jgdtxydlh0y7",
  "https://dood.pm/e/x3cyrtjeskskjmrspc6kswe1kmy3hcpo",
  "https://dood.pm/e/0jnft88h1b24r0yfxji5wi4j3bcwvhtn",
  "https://dood.pm/e/qf6cj244nsyyxz8m5gu2xen00jpmcs87",
  "https://dood.pm/e/17ecav12h4wsf4dr2f6da8m450fab4yr",
  "https://dood.pm/e/h9ax6q9axiqtymqqoqib3y5a2meuq6ua",
  "https://dood.wf/e/k5sb29ss9tur?c1_file=https://sub.membed.net/sub/never-have-i-ever-season-1-episode-10/never-have-i-ever-season-1-episode-10.vtt&c1_label=English%22"
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
  "season 1",
  "season 2",
  "season 3"
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


