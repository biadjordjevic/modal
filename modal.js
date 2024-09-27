const abrirModal = document.getElementById('abrir-modal')
 const fecharModal = document.getElementById ('fechar-modal')
 const modalBody = document.getElementById ('modal-body')
 const modal = document.getElementById ('modal')
 
function Abrir(){
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