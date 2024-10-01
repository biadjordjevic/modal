
const abrirModal = document.getElementById('abrir-modal')
const fecharModal = document.getElementById ('fechar-modal')
const excluir = document.getElementById('excluir_produto')


function Abrir(){
 const modal = document.getElementById ('modal')

 modal.style.display = 'block';
 }
 
 function FecharModal(){
 modal.style.display = 'none';
 }
 
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// function Excluir(){
//   modal.style.display = "none";
//     var nomeLivro = document.getElementById('nome_produto')
//     var idLivro = document.getElementById('numero_produto')
//     var senha = document.getElementById('senha_user')
//     nomeLivro.value, idLivro.value, senha.value =""
//     }
