var botao = document.querySelector("#btn-calcular");

botao.addEventListener("click", function() {
    var num1 = parseInt(document.querySelector("#numero1").value);
    var num2 = parseInt(document.querySelector("#numero2").value);
    var num3 = parseInt(document.querySelector("#numero3").value);

    if (num1 % 2 == 0) {
        document.querySelector("#resultado1").innerHTML = "O resultado é: " + num1 * 3
    }
    else{
        document.querySelector("#resultado1").innerHTML = "O resultado é: " + (num1 + 7);
    }

    if (num2 % 2 == 0) {
        document.querySelector("#resultado2").innerHTML = "O resultado é: " + num2 * 3
    }
    else{
        document.querySelector("#resultado2").innerHTML = "O resultado é: " + (num2 + 7);
    }

    if (num3 % 3 == 0) {
        document.querySelector("#resultado3").innerHTML = "O resultado é: " + num3 * 3
    }
    else{
        document.querySelector("#resultado3").innerHTML = "O resultado é: " + (num3 + 7);
    }

})