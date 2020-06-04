function clicou(){
    document.getElementById("agradecimento").innerHTML ="<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
  //  alert("Obrigado por clicar");
}
function redirecionar(){
   window.open("https://globallab.org/");
  //  window.location.href = "https://globallab.org/en/#.Xtj-KjpKhPY";
}
function trocar(){
  //document.getElementById("mousemover").innerHTML ="<b>Obrigado por passar o mouse</b>";
  elemento.innerHTML = "Obrigado por passar o mouse"  
  //alert("trocar texto")
}
function voltar(elemento){
   // document.getElementById("mousemover").innerHTML ="<b>Obrigado por clicar</b>";
    elemento.innerHTML = "Passe o mouse aqui"
}
function load(){
    alert("Pagina carregada");
}
function funcaoChange(elemento){
    console.log(elemento.value);
}





/*function soma(n1,n2){
    return n1 + n2;
}

/*
var validar = 0;

function validaIdade(idade){
    validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar; 
}

var idade = prompt("Qual a sua idade");
validaIdade(idade)
console.log(validar);

//alert(soma(5,10));

/*var d= new Date();//vai gerara um alerta por vez
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/
/*var count;
for(count=0; count < 5; count++){
    alert(count);
}
*/
/*var count  = 0;
while (count<=5){
    console.log(count);
    alert(count);
    count++;
}
*/

/*var idade = prompt("Qual sua idade");
var idade = 18
if(idade >= 18){
    alert("maior idade");

}else{
    alert("menor idade")
}

/*var fruta = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxa"}];
console.log(fruta.nome);
alert(fruta[1].cor);
/*
/*var fruta = {nome: "maça", cor: "vermelha"}
console.log(fruta.nome);
alert(fruta.cor)
*//*var lista = [" maça", "pera", "laranja"];
//lista.push("uva");//por elemento
//lista.le
console.log(lista[0]);
console.log(lista.toString()[0]);

/*var nome= "Leandro Antonio Zardo";
var idade= 27;
var idade2=28;
var frase = "CTG Os Desgrassados";
//alert(nome+" tem " + idade + "Anos!");
//alert(idade+idade2)
console.log(nome);
console.log(idade+idade2);
console.log(frase.toLowerCase());
//console.log(frase.replace("Desgrassados", "Desgarrados"));

//alert(frase.replace("Desgrassados", "Desgarrados"))*/