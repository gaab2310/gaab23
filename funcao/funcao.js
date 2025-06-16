function dobrar (num){
valor = num * 2;
  return valor;
}
var valor = 10
console.log(dobrar(valor));
console.log(valor) // 10

function saudacao (nome = "Visitante") {
  return `Olá, ${nome}!`;
  console.log(saudacao("João")); // Olá, João!
}
