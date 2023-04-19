const menuButton = document.querySelector('.menu-button');
const menuIcon = menuButton.querySelector('i');
const menu = document.querySelector('.menu');
menuButton.onclick = () => {
  menu.classList.toggle('hidden');
  console.log('menu hidden');
  if (menuIcon.classList.contains('fa-bars')) {
    menuIcon.className = 'fa-solid fa-xmark x-icon';
  } else {
    menuIcon.className = 'fa fa-sharp fa-light fa-bars menu-icon';
  }
};
const menuItems = ['Product', 'Company', 'Connect'];
for (const item of menuItems) {
  const arrow = document.querySelector(`#${item} .arrow`);
  const menuItem = document.getElementById(`${item}`);
  menuItem.onclick = () => {
    arrow.classList.toggle('rotate-down');
    console.log('Arrow flipped');
    menuItem.classList.toggle('clicked');
    const dropdown = document.querySelector(`#${item} .dropdown`);
    console.log(dropdown);
    if (dropdown) {
      dropdown.classList.toggle('visible');
    }
  };
}
console.log(window.innerWidth);
if (window.innerWidth > 1000) {
  console.log(window.innerWidth + 1);
  menuButton.classList.add('hidden');
}
