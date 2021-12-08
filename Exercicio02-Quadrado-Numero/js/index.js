var botao = document.querySelector("#btn-calcular");

botao.addEventListener("click", function() {
    var num1 = parseInt(document.querySelector("#numero").value);

    var calculo = num1 * num1;

    document.querySelector("#resultado").innerHTML = "O quadrado do número " + num1 + " é: " + calculo
})