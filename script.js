
const botao = document.getElementById("mensagem");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", () => {
    resultado.textContent =
        "Obrigado pela visita! Este site foi desenvolvido por mim, Nicole Gabriel, estudante de TSI.";
});
