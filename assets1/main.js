let activado = false;

const borde = () => {
  if (activado == false) {
    img = document.querySelector("img");
    img.style.border = " 2px solid red";
    activado = true;
  } else {
    img.style.border = "none";
    activado = false;
  }
}
