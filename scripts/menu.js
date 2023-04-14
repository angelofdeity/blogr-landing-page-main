const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
menuButton.onclick = () => {
  menu.classList.toggle('hidden');
  console.log('menu hidden');
};
