const menuIcon = document.querySelector('.menu-icon')
const navlist = document.querySelector('.navlist')
const lines = document.querySelectorAll('.line')

menuIcon.addEventListener('click', () => {
    navlist.classList.toggle('menu-open')

    lines.forEach(line => {
        line.classList.toggle('menu-open')
    })
})
