const changeLangButton = document.querySelector('.lang-button');
const changeLangButtonContent = changeLangButton.childNodes[0];
const allRuSpans = document.querySelectorAll('.lang-ru');
const allEnSpans = document.querySelectorAll('.lang-en');

changeLangButton.addEventListener('click', changeLang);

function changeLang() {
  if (changeLangButtonContent.innerText === 'EN') {
    changeLangButtonContent.innerText = 'RU';
  } else {
    console.log(changeLangButtonContent);
    changeLangButtonContent.innerText = 'EN';
  }
  allEnSpans.forEach(a => a.classList.toggle('hidden'));
  allRuSpans.forEach(a => a.classList.toggle('hidden'));
}
