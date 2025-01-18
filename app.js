// 1 - Mostre um alerta com a mensagem "Boas vindas ao nosso site!".

alert('Boas vindas ao nosso site!');

// 2 - Declare uma variável chamada nome e atribua a ela o valor "Lua".

let nome = 'Lua';

// 3 - Crie uma variável chamada idade e atribua a ela o valor 25.

let idade = 25;

// 4 - Defina uma variável numeroDeVendas e atribua a ela o valor 50.

numeroDeVendas = 50;

// 5 - Defina uma variável saldoDisponivel e atribua a ela o valor 1000.

saldoDisponivel = 1000;

// 6 - Exiba um alerta com o texto "Erro! Preencha todos os campos"

alert('Erro! Preencha todos os campos');

// 7 - Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.

mensagemDeErro = 'Erro! Preencha todos os campos';

// 8 - Use um prompt para perguntar o nome do usuário e armazená-lo na variável nome.

nome = prompt('Qual o seu nome?');

// 9 - Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.

idadeUser = prompt('Digite sua idade:');

// 10 - Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".

if (idadeUser>= 18){
    alert('Pode tirar a habilitação!');
}

// 11 - Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

dia = prompt('Qual o dia da semana?')

if(dia == 'Sábado' || dia == 'Domingo'){
    alert('Bom fim de semana!')
}else{
    alert('Boa semana!')
}


// 12 - Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
numero = prompt('Insira um número: ')

if(numero > 0){
    alert('Este número é positivo!')
}else{
    alert('Este número é negativo!')
}

// 13 - Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
pontuacao = prompt('Pontuação: ')

if(pontuacao >= 100){
    alert('Parabéns, você venceu!')
}else{
    alert('Tente novamente para ganhar!')
}

// 14 - Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
saldo = 50

alert('O saldo da conta é ' + saldo + ' reais.')

// 15 - Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
nome = prompt('Insira seu nome: ')

alert('Bem-vindo(a) ' + nome + '!')

// 16 - Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador = 1;

while(contador <= 10){
    console.log('O número contado é: ' + contador)
    contador++
}
// 17 - Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

/*let contador = 10;
while (contador >= 0) {
    console.log(contador);
    contador--;
}*/


// 18 - Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

/*let numeroMaximo = prompt("Digite um número para a contagem regressiva:");

while (numeroMaximo >= 0) {
    console.log(numeroMaximo);
    numeroMaximo--;
}

// 19 - Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

let numeroMaximo = prompt("Digite um número para a contagem progregressiva:");;
let contador = 0;

while (contador <= numeroMaximo) {
    console.log(contador);
    contador++
}*/