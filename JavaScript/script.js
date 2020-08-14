


const icon = document.getElementById('menu-icon')
const menu = document.getElementById('menu')

let isPressed = false

const switcher = ()=> {
    if (!isPressed) {
        icon.src = './images/icon-hamburger.svg'
        menu.style.display = 'none'
    } else {
        icon.src = './images/icon-close.svg'
        menu.style.display = 'block'
    }
}

switcher()

document.getElementById('menu-icon').addEventListener('click', (e)=>{
    e.preventDefault()
    switcher()
    isPressed = !isPressed
})

