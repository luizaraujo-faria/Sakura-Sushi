//CARREGA AS IMAGENS DINAMICAMENTE ATRAVEZ DO JSON//
async function loadImages(){
    const response = await fetch('menu.json')
    const pratos = await response.json()
    const images = document.querySelectorAll('.cards-menu img')
    const titles = document.querySelectorAll('.card-title')

    pratos.forEach((prato, index) => {
        if(images[index] && titles[index]){
            images[index].src = prato.img  
            titles[index].textContent = `-${prato.nome}-`
        }
    })
}
loadImages()

const infoPratos = document.getElementById('info-prato')
const overlayPratos = document.getElementById('overlay')

document.querySelectorAll('.cards-menu').forEach((element, index) => {

    element.addEventListener('click', async () => {
        infoPratos.classList.remove('hidden')
        overlayPratos.classList.add('z-[50]')
        await setInfo(index)
    })
})

const infoClose = document.getElementById('info-close')

infoClose.addEventListener('click', () => {
    infoPratos.classList.add('hidden')
    overlayPratos.classList.remove('z-[50]')
})

async function setInfo(index){
    try{
        const response = await fetch('menu.json')
        const pratos = await response.json()

        if (index >= 0 && index < pratos.length) {
            document.getElementById('info-img').src = pratos[index].img
            document.getElementById('info-name').textContent = pratos[index].nome
            document.getElementById('info-desc').textContent = pratos[index].desc
            document.getElementById('info-price').textContent = pratos[index].preco        
        }
    } catch (err) {
        console.error('Erro ao carregar informações!')
    }
}