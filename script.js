const modal = document.getElementById('modal1');
const img = document.getElementById('img01');
const btns = document.querySelectorAll('.conteudo-img');
const span = document.getElementsByClassName("close")[0];

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.style.display = "block";
    img.src = btn.querySelector('img').src;
  });
});

span.onclick = function() {
  modal.style.display = "none";
}