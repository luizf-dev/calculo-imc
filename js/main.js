alert("Olá! Bem vindo! Calcule aqui seu índice de massa corporal.Siga as intruções e preencha todos os campos!");

//Recebe os parâmetros
var nome = prompt('Digite seu nome: ');
var altura = prompt('Digite sua altura em centímetros sem usar ponto nem vírgula: Ex: 181 ');
var peso = prompt('Digite seu peso: ');

//Converte as cadeias de caracteres para Float
var altura = parseFloat(altura);
var peso = parseFloat(peso);

//Converte a altura para centímetros
var altura = altura / 100;

//Realiza o cálculo de IMC
var resultado = peso/(altura*altura);

//converte para 2 casas decimais depois da vírgula
var resultado = resultado.toFixed(2);      

//Variáveis recebendo o valor vazio se o usúario não digitar os dados
var classificacao = "";

//Testes condicionais para os possíveis resultados
if(resultado < 16){
    classificacao = 'Baixo peso muito grave!';
}else if(resultado >= 16 && resultado <= 16.99){
    classificacao = 'Baixo peso grave!';
}else if(resultado >= 17 && resultado <= 18.49){
    classificacao = 'Baixo peso!';
}else if(resultado >= 18,50 && resultado <= 25.99){
    classificacao = 'Peso normal!';
}else if(resultado >= 30 && resultado <= 34.99){
    classificacao = 'Obesidade grau I';
}else if(resultado >= 35 && resultado <= 39.99){
    classificacao = 'Obesidade grau II';
}else if(resultado > 40){
    classificacao = 'Obesidade grau III';
}else{
    document.write('<div class="container alert"><h3>Nenhum dado foi informado!!</h3></div>');
}

var resultado = resultado.replace("." , ",");        


document.write('<div class="container">' + '<h2>' + '<span>' + nome + '</span>' + ' você possui índice de massa corporal igual a ' + '<span>' + resultado + '</span>' + 
' sendo classificado como: ' + '<span>' + classificacao + '</span>' + '</h2>' + "</div>");

document.write('<div class="container"><a class="btn btn-success mb-5 mt-5" href="index.html">Calcular novamente</a></div>');
