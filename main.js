const changeLangButton = document.querySelector('.lang-button');
const changeLangButtonContent = changeLangButton.childNodes[0];
const allRuSpans = document.querySelectorAll('.lang-ru');
const allEnSpans = document.querySelectorAll('.lang-en');

changeLangButton.addEventListener('click', changeLang);

function changeLang() {
  if (changeLangButtonContent.innerHTML = 'EN') {
    changeLangButtonContent.innerHTML = 'RU';
    allEnSpans.forEach(a => a.classList.toggle('hidden'));
    allRuSpans.forEach(a => a.classList.toggle('hidden'));
  } else {
    changeLangButtonContent.innerHTML = 'EN';
    allRuSpans.forEach(a => a.classList.toggle('hidden'));
    allEnSpans.forEach(a => a.classList.toggle('hidden'));
  }
}