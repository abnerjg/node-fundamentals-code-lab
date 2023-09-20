// Definir la función getRandomNumber que retorna una promesa
function getRandomNumber() {
  return new Promise((resolve, reject) => {
    // Usar setTimeout para simular un proceso largo de 3 segundos
    setTimeout(() => {
      // Generar un número aleatorio entre 0 y 10 usando Math.random()
      const randomNumber = Math.floor(Math.random() * 10); // Números entre 0 y 10
      // Resolver la promesa con el número aleatorio generado
      resolve(randomNumber);
    }, 3000); // Retraso de 3 segundos (3000 milisegundos)
  });
}

module.exports = getRandomNumber;
