const d = document;

let divH = [];
let cantidad;
let main;
let base = 12;
let isOpacityOn = false;
let isRandomcolorOn = false;

const divButtons = d.createElement("div");

const buttonRandomColor = d.createElement("button");
const buttonBW = d.createElement("button");
const buttonOpacity = d.createElement("button");
buttonOpacity.textContent = "opacity BW";
buttonRandomColor.textContent = "Random color";
buttonBW.textContent = "new sketch";
divButtons.appendChild(buttonRandomColor);
divButtons.appendChild(buttonBW);
divButtons.appendChild(buttonOpacity);

d.body.appendChild(divButtons);
createSketch(base, isOpacityOn);

buttonBW.addEventListener("click", () => {
  createSketch(
    (cantidad = prompt(
      "cuantos cuadrados quieres? (el limite es de (100) perrito >:v)"
    )),
    isOpacityOn
  );
});

function createSketch(cantidad, isOpacityOn) {
  if (d.body.contains(main)) main.remove();
  main = 0;
  main = d.createElement("main");

  buttonOpacity.addEventListener("click", () => {
    isOpacityOn = true;
    console.log(isOpacityOn);
    isRandomcolorOn = false;
  });

  buttonRandomColor.addEventListener("click", () => {
    isRandomcolorOn = true;
    console.log(isRandomcolorOn);
    isOpacityOn = false;
  });
  for (let i = 0; i < cantidad * cantidad; i++) {
    divH[i] = d.createElement("div");
    divH[i].className = "div-a";
    divH[i].style.width = (800 / cantidad).toString() + "px";
    divH[i].style.height = (800 / cantidad).toString() + "px";

    let opacity = 0;
    divH[i].addEventListener("mouseenter", () => {
      if (isOpacityOn) {
        if (
          divH[i].style.backgroundColor != "white" &&
          divH[i].style.opacity != "0%"
        ) {
          divH[i].style.backgroundColor = "black";
          divH[i].style.opacity = "0%";
        }

        divH[i].classList.add("mouse-over");
        opacity += 10;
        console.log("funciona??????");
        divH[i].style.opacity = `${opacity}%`;
      } else if (isRandomcolorOn) {
        if (divH[i].style.opacity != 100) {
          divH[i].style.opacity = "100%";
        }

        divH[i].style.backgroundColor = "white";
        console.log(isOpacityOn);
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        divH[i].classList.add("mouse-over");

        divH[i].style.backgroundColor = `rgb(${r},${g}, ${b})`;
      } else {
        divH[i].classList.add("mouse-over");
      }
    });

    main.appendChild(divH[i]);
    for (let j = 0; j < 4; j++) {
      divV = d.createElement("div");
    }
  }

  d.body.appendChild(main);
}
