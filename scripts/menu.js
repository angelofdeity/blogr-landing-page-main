const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
menuButton.onclick = () => {
  menu.classList.toggle('hidden');
  console.log('menu hidden');
};
const menuItems = ['Product', 'Company', 'Connect'];
for (const item of menuItems) {
  const arrow = document.querySelector(`#${item} .arrow`);
  const product = document.getElementById(`${item}`);
  product.onclick = () => {
    arrow.classList.toggle('rotate-down');
    console.log('Arrow flipped');
  };
}
