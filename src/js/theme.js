//TEMAS CLARO/ESCURO//
document.addEventListener("DOMContentLoaded", () => {
    const light = document.getElementById('light')
    const dark = document.getElementById('dark')
    const modeIcons = document.querySelectorAll('.mode-icon')
    
    let header = document.querySelector('#header')
    let iconHeader = document.querySelectorAll('.header-icon')
    const borded = document.querySelector('.borded')
    const searchInput = document.getElementById('search-input')
    const iconBar = document.querySelectorAll('.icon-bar')
    const sections = document.querySelectorAll('.sections')
    const texts = document.querySelectorAll('.texts')
    const cards = document.querySelectorAll('.cards')
    const footer = document.querySelectorAll('.footer')
    const headerSumary = document.querySelectorAll('.header-sumary')
    const infoPratos = document.getElementById('info-prato')

    let savedIndex = localStorage.getItem("activeIconIndex")
    let savedMode = localStorage.getItem("theme") || 'dark'

    applyModeTheme(savedMode)

    if (savedIndex !== null) {
        savedIndex = parseInt(savedIndex)
        modeIcons.forEach((icone) =>icone.classList.remove('text-yellow-500'))
        modeIcons[savedIndex].classList.add('text-yellow-500')
    }

    modeIcons.forEach((icon, index) => {
        icon.addEventListener('click', () => {
            modeIcons.forEach((icone) =>icone.classList.remove('text-yellow-500'))
            icon.classList.add('text-yellow-500')
            localStorage.setItem("activeIconIndex", index)
        })
    })

    dark.addEventListener('click', () => {
        localStorage.setItem('theme', 'dark')
        applyModeTheme('dark')
    })

    light.addEventListener('click', () => {
        localStorage.setItem('theme', 'light')
        applyModeTheme('light')
    })

    window.addEventListener('scroll', () => {
        const isScrolled = window.scrollY > 10
        header.classList.toggle('bg-white', isScrolled && savedMode === 'light')
        iconHeader.forEach(iconHeader => iconHeader.classList.toggle('dark:text-[#000]', isScrolled && savedMode === 'light'))
    })


    function applyModeTheme(mode){
        const isLight = mode === 'light'

        iconBar.forEach(icon => toggleClass(icon, 'bg-white', isLight))
        toggleClass(borded, 'dark:border-[#000000]', isLight)
        toggleClass(searchInput, 'dark:placeholder:text-[#000000]', isLight)
        toggleClass(infoPratos, 'dark:bg-white', isLight)
        sections.forEach(section => toggleClass(section, 'bg-white', isLight))
        texts.forEach(text => toggleClass(text, 'dark:text-[#000000]', isLight))
        cards.forEach(card => toggleClass(card, 'dark:bg-[#000000]', isLight))
        footer.forEach(f => toggleClass(f, 'dark:bg-white', isLight))
        headerSumary.forEach(hs => toggleClass(hs, 'dark:bg-white', isLight))

        savedMode = mode 
    }
    function toggleClass(element, className, add){
        if(!element) return
        element.classList.toggle(className, add)
    }
})