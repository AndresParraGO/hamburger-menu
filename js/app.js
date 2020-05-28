

const $nav = document.getElementById('nav')
const $btnMenu = document.getElementById('btn')

let state = true


function openMenu(menu) {
  const $btnImg = $btnMenu.children[0]
  
  if(state) {
    state = false
    menu.classList.add('is-menu')
    $btnImg.src = 'assets/icon-close.png'
  }else {
    state = true
    menu.classList.remove('is-menu')
    $btnImg.src = 'assets/menu-bar.png'
  }
}


$btnMenu.addEventListener('click', e => {
  openMenu($nav)
})