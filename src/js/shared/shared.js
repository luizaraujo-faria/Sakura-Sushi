//EFEITO HEADER//
window.addEventListener('scroll', () => {
    let header = document.getElementById('header')

    header.classList.toggle('h-[4rem]', window.scrollY > 10 )
    header.classList.toggle('bg-black', window.scrollY > 10 )
})

//VARIAVEIS GLOBAIS//
const overlay = document.getElementById('overlay')
const body = document.getElementById('body')

//BARRA DE MENU//
const menuIcon = document.getElementById('menu-icon')
const menuBar = document.getElementById('menu-bar')
const menuClose = document.getElementById('menu-close')

menuIcon.addEventListener('click', () => {
    menuBar.classList.add('translate-x-[0]')
    overlay.classList.add('z-[50]')
    body.classList.add('overflow-hidden')
})
menuClose.addEventListener('click', () => {
    menuBar.classList.remove('translate-x-[0]')
    overlay.classList.remove('z-[50]')
    body.classList.remove('overflow-hidden')
})

//BARRA DE PESQUISA//
const searchIcon = document.getElementById('search-icon')
const searchBar = document.getElementById('search-bar')
const searchClose = document.getElementById('search-close')
const clearBtn = document.getElementById('clear-btn')
const searchBtn = document.getElementById('search-btn')
const searchInput = document.getElementById('search-input')

searchIcon.addEventListener('click', () => {
    searchBar.classList.add('translate-y-[0%]')
    overlay.classList.add('z-[50]')
    body.classList.add('overflow-hidden')
})
searchClose.addEventListener('click', () => {
    searchBar.classList.remove('translate-y-[0%]')
    overlay.classList.remove('z-[50]')
    body.classList.remove('overflow-hidden')
})
clearBtn.addEventListener('click', () => {
    searchInput.value = ""
})

//FOOTER RESPONSIVO//
const mediaQuery = window.matchMedia("(width <= 640px)");{

    const headerSumary = document.querySelectorAll('.header-sumary')
    const closeSumary = document.querySelectorAll('.close-sumary')
    const sumary = document.querySelectorAll('.sumary')

    headerSumary.forEach((headerSumary, index) => {
        headerSumary.addEventListener('click', () => {

            
            sumary.forEach((sumary, i) => {
                if(i !== index){
                    sumary.classList.remove('max-sm:h-[276px]')
                    closeSumary[i]?.classList.remove('rotate-[0deg]')
                }
            })
            
            closeSumary[index].classList.toggle('rotate-[0deg]')
            sumary[index].classList.toggle('max-sm:h-[276px]')
        })
    })
}