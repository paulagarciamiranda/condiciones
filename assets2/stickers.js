const suma = () => {

let input1 = Number(document.querySelector(".i1").value);
let input2 = Number(document.querySelector(".i2").value);
let input3 = Number(document.querySelector(".i3").value);

let resultado = input1 + input2 + input3;
/* console.log(resultado); */
let respuesta = document.querySelector("p");

  if (resultado > 10) {
    respuesta.innerHTML = "Llevas demasiados stickers";
  } else if (resultado <= 10) {
    respuesta.innerHTML = `Llevas ${resultado} stickers`;
  } else {
    respuesta.innerHTML = "Debes números que sumen 10 stickers en total";
  }
};
