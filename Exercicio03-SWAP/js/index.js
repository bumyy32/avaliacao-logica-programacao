var botao = document.querySelector("#btn-calcular");

botao.addEventListener("click", function() {
    var num1 = parseInt(document.querySelector("#numero1").value);
    var num2 = parseInt(document.querySelector("#numero2").value);

    document.querySelector("#resultado1").innerHTML = 'Número 1: ' + num2
    document.querySelector("#resultado2").innerHTML = 'Número 2: ' + num1
})