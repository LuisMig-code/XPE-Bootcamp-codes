function start() {
  console.log('start');

  var buttonCaclulateIMC = document.querySelector('#button-calculate-imc');
  buttonCaclulateIMC.addEventListener('click', handleButtonClick);

  var peso = document.querySelector('#input-weight');
  var altura = document.querySelector('#input-height');

  peso.addEventListener('input', handleButtonClick);
  altura.addEventListener('input', handleButtonClick);

  handleButtonClick();
}

function calculteImc(peso, altura) {
  return peso / (altura * altura);
}

function handleButtonClick() {
  var peso = document.querySelector('#input-weight');
  var altura = document.querySelector('#input-height');
  var imcResult = document.querySelector('#imc-result');

  peso = Number(peso.value);
  altura = Number(altura.value);

  var imc = calculteImc(peso, altura);
  var formattedImc = imc.toFixed(2).replace('.', ',');
  imcResult.textContent = formattedImc;
}

start();
