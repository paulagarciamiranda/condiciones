const combinacion = () => {
    
  let s1 = document.getElementById("s1").value;
  let s2 = document.getElementById("s2").value;
  let s3 = document.getElementById("s3").value;

  let password1 = "911";
  let password2 = "714";

  let respuesta = document.querySelector("p");

  if (s1 + s2 + s3 == password1) {
    respuesta.innerHTML = "Password 1 correcto";
  } else if (s1 + s2 + s3 == password2) {
    respuesta.innerHTML = "Password 2 correcto";
  } else {
    respuesta.innerHTML = "Password incorrecto";
  }
};
