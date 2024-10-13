

let trilho=document.getElementById("trilho")
let fundo =document.querySelector('body')
trilho.addEventListener("click",function(

){
  trilho.classList.toggle("dark")
    fundo.classList.toggle("dark")
})

function mostra(){
var senha= document.getElementById('senha')
var btn=document.getElementById('btn-senha')
if(senha.type==='password'){
senha.setAttribute('type','text')

      bnt.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
  
  } else {
      senha.setAttribute('type', 'password');
      bntShowpass.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');

}
}

function cadastra(){

const userRa=document.getElementById("ra").value
const userSenha=document.getElementById("senha").value

if(userRa ===''||userSenha ===''){
alert("preencha os campos");
}
else if(isNaN(userRa)){
alert("ra incorreto digete 8 numeros")
}
else if(userRa.length <8 ||userSenha.length <5){
alert("digite no minimo 8 caracteres no ra e 5 caracteris na senha")
}
else{
  alert("cadastro concluido")
}

}
