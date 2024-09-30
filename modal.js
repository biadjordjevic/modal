
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

function Excluir(){
  
}