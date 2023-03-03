function start() {
  let buttonCalculate = document.querySelector("#calcular");
  buttonCalculate.addEventListener("click", handleButtonClick);
}

function calculateSoma(primeiroNumero, segundoNumero) {
  return primeiroNumero + segundoNumero;
}

function calculateSubAB(primeiroNumero, segundoNumero) {
  return primeiroNumero - segundoNumero;
}

function calculateSubBA(primeiroNumero, segundoNumero) {
  return segundoNumero - primeiroNumero;
}

function calculateMult(primeiroNumero, segundoNumero) {
  return primeiroNumero * segundoNumero;
}

function calculatePotAB(primeiroNumero, segundoNumero) {
  return segundoNumero ** primeiroNumero;
}

function calculatePotBA(primeiroNumero, segundoNumero) {
  return primeiroNumero ** segundoNumero;
}

function calculateRaiz(value) {
  return Math.sqrt(value);
}

function calculateFat(fatorial) {
  let resultado = fatorial;

  for (let i = 1; i < fatorial; i++) {
    resultado *= i;
  }
  return resultado;
}

function calculatePorcAEmB(primeiroNumero, segundoNumero) {
  return (primeiroNumero / segundoNumero) * 100;
}

function calculatePorcBEmA(primeiroNumero, segundoNumero) {
  return (segundoNumero / primeiroNumero) * 100;
}
function calculateMedia(primeiroNumero, segundoNumero) {
  return (primeiroNumero + segundoNumero) / 2;
}

function handleButtonClick() {
  var inputUm = document.querySelector("#primeiro-numero");
  var inputDois = document.querySelector("#segundo-numero");

  let primeiroNumero = Number(inputUm.value);
  let segundoNumero = Number(inputDois.value);

  let somaResult = calculateSoma(primeiroNumero, segundoNumero);
  let subABResult = calculateSubAB(primeiroNumero, segundoNumero);
  let subBAResult = calculateSubBA(primeiroNumero, segundoNumero);
  let multResult = calculateMult(primeiroNumero, segundoNumero);
  let divABResult = calculateDiv(primeiroNumero, segundoNumero);
  let divBAResult = calculateDiv(segundoNumero, primeiroNumero);
  let potABResult = calculatePotAB(primeiroNumero, segundoNumero);
  let potBAResult = calculatePotBA(primeiroNumero, segundoNumero);
  let raizAResult = calculateRaiz(primeiroNumero);
  let raizBResult = calculateRaiz(segundoNumero);
  let fatAResult = calculateFat(primeiroNumero);
  let fatBResult = calculateFat(segundoNumero);
  let porcAEmBResult = calculatePorcAEmB(primeiroNumero, segundoNumero);
  let porcBEmAResult = calculatePorcBEmA(primeiroNumero, segundoNumero);
  let mediaResult = calculateMedia(primeiroNumero, segundoNumero);

  soma.textContent = somaResult;
  subAB.textContent = subABResult;
  subBA.textContent = subBAResult;
  mult.textContent = multResult;
  divAB.textContent = divABResult;
  divBA.textContent = divBAResult;
  potAB.textContent = potABResult;
  potBA.textContent = potBAResult;
  raizA.textContent = raizAResult;
  raizB.textContent = raizBResult;
  fatA.textContent = fatAResult;
  fatB.textContent = fatBResult;
  porcAEmB.textContent = porcAEmBResult;
  porcBEmA.textContent = porcBEmAResult;
  media.textContent = mediaResult;
}
start();
