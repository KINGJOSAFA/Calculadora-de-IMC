console.log("JS conectado");

const form = document.querySelector('#form-imc')
const inputPeso = document.querySelector('#peso');
const inputAltura = document.querySelector('#altura');
const resultadoDiv = document.querySelector('.resultado');

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

form.addEventListener('submit', function(event){
	event.preventDefault();
	calcularIMC();
});

