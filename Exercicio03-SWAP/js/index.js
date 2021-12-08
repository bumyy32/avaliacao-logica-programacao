var botao = document.querySelector("#btn-calcular");

botao.addEventListener("click", function() {
    var num1 = parseInt(document.querySelector("#numero1").value);
    var num2 = parseInt(document.querySelector("#numero2").value);

    [num1, num2] = [num2, num1];

    document.querySelector('#resultado1').innerHTML = "Número 1: " + num1 + " Número 2: " + num2
})