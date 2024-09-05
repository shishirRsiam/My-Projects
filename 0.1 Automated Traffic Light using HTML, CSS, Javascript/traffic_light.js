const print = console.log;
document.body.style.background = "black";
let time_rem = document.querySelector(".timerem");

let isStop = false;
const firstDIV = "first-div";
let redLight = document.querySelector(".red");
let greenLight = document.querySelector(".green");
let yellowLight = document.querySelector(".yellow");
let TrafficLights = document.querySelector(".traffic-light");

function updateGreenTOYellow(i) {
  greenLight.id = "";
  yellowLight.id = firstDIV;
  time_rem.style.color = "yellow";
  time_rem.textContent = "Slow Down: " + i + "s";
  TrafficLights.removeChild(greenLight);
  TrafficLights.appendChild(greenLight);
}

function updateYellowTORed(i) {
  yellowLight.id = "";
  redLight.id = firstDIV;
  time_rem.style.color = "red";
  time_rem.textContent = "Stop: " + i + "s";
  TrafficLights.removeChild(yellowLight);
  TrafficLights.appendChild(yellowLight);
}

function updateRedTOGreen(i) {
  redLight.id = "";
  greenLight.id = firstDIV;
  time_rem.style.color = "green";
  time_rem.textContent = "Go: " + i + "s";
  TrafficLights.removeChild(redLight);
  TrafficLights.appendChild(redLight);
}

async function changeColor(i) {
  let setTime = 10;

  for (let i = setTime; i >= 0; i--) {
    await new Promise((resolve) => {
      setTimeout(() => {
        if (isStop) {
          time_rem.textContent = "Stop: " + i + "s";
          if (i == setTime) updateYellowTORed(i);
        } else {
          if (i <= 4) updateGreenTOYellow(i);
          else if (i <= setTime) updateRedTOGreen(i);
        }
        resolve();
      }, 1000);
    });
  }
}

async function start() {
  print("Siam");
  for (let i = 0; i < 100; i++) {
    await changeColor();
    isStop = !isStop;
  }
  print("Sishir");
}

start();
