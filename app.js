console.log('aplicacion calculadora')

function realizarOperacion(){
    const forma = document.getElementById('forma');
    let operandoA = parseFloat(forma['operandoA'].value);
    let operandoB = parseFloat(forma['operandoB'].value);
    let operacion = forma['operacion'].value;
    let resultado; 
   // let resultado = parseInt(operandoA.value) + parseInt(operandoB.value) && suma; 
    if (isNaN(operandoA) || isNaN(operandoB)) {
        resultado = 'La operación no incluye números válidos';
      } else {
        switch (operacion) {
          case 'sumar':
            resultado = operandoA + operandoB;
            break;
          case 'restar':
            resultado = operandoA - operandoB;
            break;
          case 'multiplicar':
            resultado = operandoA * operandoB;
            break;
          case 'dividir':
            resultado = operandoB !== 0 ? operandoA / operandoB : 'No se puede dividir entre cero';
            break;
          default:
            resultado = 'Operación no válida';
        }
      }
    
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`; 
}