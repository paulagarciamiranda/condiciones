let input1 = Number(document.querySelector('.i1')).value
let input2 = Number(document.querySelector('.i2')).value
let input3 = Number(document.querySelector('.i3')).value

const suma = () => {
    let resultado = input.value
    if (input1 + input2 + input3 > 10) {
    resultado = document.querySelector('p');
    resultado.innerHTML = "Llevas demasiados stickers";
}
}