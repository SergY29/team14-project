const buttons = document.querySelectorAll('.product__item button');
buttons.forEach((btn) => btn.addEventListener('click', flipCard));
function flipCard({ currentTarget }) {
  currentTarget.closest('.product__item').classList.toggle('is-flipped');
}