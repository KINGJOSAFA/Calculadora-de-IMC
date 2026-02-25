console.log("JS conectado");

const inputPeso = document.querySelector('input[name="peso"]');
const inputAltura = document.querySelector('input[name="altura"]');
const button = document.querySelector('button');
const resultadoDiv = document.querySelector('.resultado')

function calcularIMC() {
	const peso = Number(inputPeso.value);
	const altura = Number(inputAltura.value);

	if (peso > 0 && altura > 0) {
		const IMC = peso / (altura * altura);
		resultadoDiv.textContent = "Seu IMC é: " + IMC.toFixed(2);
	} else {
		resultadoDiv.textContent = "Por favor, insira valores válidos";
	}
}

button.addEventListener('click', calcularIMC);

